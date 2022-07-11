import { NextApiRequest, NextApiResponse } from "next";
import { PollyConfig, PollyServer } from "@pollyjs/core";
import omitDeep from "omit-deep-lodash";
import path from "path";
import { setupPolly } from "setup-polly-jest";
import { createMocks, RequestMethod } from "node-mocks-http";
import { handlers } from "./mocks/handlers";
import { Headers } from "headers-polyfill";
import { MockedRequest } from "msw";

export const mockRequest = (method: RequestMethod = "GET") => {
  const { req, res } = createMocks({ method });
  req.headers = {
    "Content-Type": "application/json",
  };

  return {
    req: req as unknown as NextApiRequest,
    res: res as unknown as NextApiResponse,
  };
};

const HEADERS_BLACKLIST = new Set([
  "authorization-bearer",
  "authorization",
  "set-cookie",
  "saleor-signature",
]);

const VARIABLES_BLACKLIST = [
  "email",
  "password",
  "redirectUrl",
  "newPassword",
  "oldPassword",
  "newEmail",
  "token",
  "refreshToken",
  "csrfToken",
];

export const removeBlacklistedVariables = (obj: {}): {} => {
  return omitDeep(obj, ...VARIABLES_BLACKLIST);
};

export const setupPollyMiddleware = (server: PollyServer) => {
  // Hide sensitive data in headers or in body
  server.any().on("beforePersist", (_, recording, event) => {
    const requestJson = JSON.parse(recording.request.postData.text);
    const requestHeaders = recording.request.headers.filter(
      (el: Record<string, string>) => !HEADERS_BLACKLIST.has(el.name)
    );

    const responseJson = JSON.parse(recording.response.content.text);
    const responseHeaders = recording.response.headers.filter(
      (el: Record<string, string>) => !HEADERS_BLACKLIST.has(el.name)
    );

    const filteredRequestJson = removeBlacklistedVariables(requestJson);
    const filteredResponseJson = removeBlacklistedVariables(responseJson);

    recording.request.postData.text = JSON.stringify(filteredRequestJson);
    recording.request.headers = requestHeaders;
    recording.response.cookies = [];
    recording.response.content.text = JSON.stringify(filteredResponseJson);
    recording.response.headers = responseHeaders;
  });

  // Check if request is handled by msw
  server
    .any()
    .filter((req) => {
      const { url, method, headers, body, id } = req;

      let reqBody: any;
      if (typeof body === "string") {
        try {
          reqBody = JSON.parse(body);
        } catch (e) {
          reqBody = body ?? "";
        }
      } else {
        reqBody = body ?? "";
      }

      const fakeReq: MockedRequest = {
        id: id ?? "",
        url: new URL(url),
        body: reqBody,
        mode: "cors",
        cache: "default",
        method,
        cookies: {},
        headers: new Headers(headers),
        redirect: "manual",
        bodyUsed: false,
        referrerPolicy: "no-referrer",
        destination: "document",
        credentials: "same-origin",
        referrer: "",
        integrity: "",
        keepalive: false,
        passthrough: () => ({
          passthrough: false,
          headers: new Headers(),
          body: reqBody,
          once: false,
          status: 200,
          statusText: "",
          delay: 0,
        }),
      };

      return handlers.some((handler) => handler.test(fakeReq));
    })
    .passthrough();
};

export const setupRecording = () => {
  // use replay mode by default, override if POLLY_MODE env variable is passed
  let mode: PollyConfig["mode"] = "replay";
  let recordIfMissing = true;

  switch (process.env.POLLY_MODE) {
    case "record":
      mode = "record";
      break;
    case "replay":
      mode = "replay";
      break;
    case "offline":
      mode = "replay";
      recordIfMissing = false;
      break;
  }

  return setupPolly({
    // Fix for Jest runtime issues (inline require)
    // https://github.com/gribnoysup/setup-polly-jest/issues/23#issuecomment-890494186
    adapters: [require("@pollyjs/adapter-fetch")],
    persister: require("@pollyjs/persister-fs"),
    mode,
    recordIfMissing,
    flushRequestsOnStop: true,
    recordFailedRequests: true,
    adapterOptions: {
      fetch: {
        context: globalThis,
      },
    },
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve("./recordings"),
      },
    },
  });
};
