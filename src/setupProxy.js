// A Proxy Server for the EU-AgriData API
// (Due to CORS errors, as the EU-AgriData API is fully open, free to use, and does not have API keys or user verification)

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    // The "/api" path is used for proxying API requests (shortcut)
    createProxyMiddleware({
      // The target host of the API
      target: "https://ec.europa.eu",
      // Set to true for virtual hosted sites
      changeOrigin: true,
      pathRewrite: { "^/api": "/agrifood/api/fruitAndVegetable/prices" },
      logLevel: "debug",
    })
  );
};
