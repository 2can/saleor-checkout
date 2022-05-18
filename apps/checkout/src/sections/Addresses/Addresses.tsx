import { CountryCode, useUserQuery } from "@/graphql";
import { useCheckout } from "@/hooks/useCheckout";
import { CountrySelectProvider } from "@/providers/CountrySelectProvider";
import { useAuthState } from "@saleor/sdk";
import React, { useEffect, useState } from "react";
import { BillingAddressSection } from "./BillingAddressSection";
import { ShippingAddressSection } from "./ShippingAddressSection";

export const Addresses: React.FC = () => {
  const { user: authUser } = useAuthState();
  const { checkout } = useCheckout();

  const [useShippingAsBillingAddress, setUseShippingAsBillingAddress] =
    useState(!checkout?.billingAddress);

  const [{ data }] = useUserQuery({
    pause: !authUser?.id,
  });

  const user = data?.me;
  const userAddresses = user?.addresses;

  return (
    <div>
      {checkout.isShippingRequired && (
        <CountrySelectProvider
          selectedCountryCode={
            checkout?.shippingAddress?.country?.code as CountryCode
          }
        >
          <ShippingAddressSection
            addresses={userAddresses}
            defaultShippingAddress={user?.defaultShippingAddress}
            useShippingAsBillingAddress={useShippingAsBillingAddress}
            setUseShippingAsBillingAddress={setUseShippingAsBillingAddress}
          />
        </CountrySelectProvider>
      )}
      <CountrySelectProvider
        selectedCountryCode={
          checkout?.billingAddress?.country?.code as CountryCode
        }
      >
        <BillingAddressSection
          addresses={userAddresses}
          defaultBillingAddress={user?.defaultBillingAddress}
          useShippingAsBillingAddress={useShippingAsBillingAddress}
        />
      </CountrySelectProvider>
    </div>
  );
};
