const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@providers": path.resolve(__dirname, "src/providers/"),
      "@sections": path.resolve(__dirname, "src/sections/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@graphql": path.resolve(__dirname, "src/graphql"),
      "@fetch": path.resolve(__dirname, "src/fetch"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
};
