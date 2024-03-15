const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // This path is used for proxying API requests
    createProxyMiddleware({
      target: "https://ec.europa.eu", // Target host
      changeOrigin: true, // Needed for virtual hosted sites
      pathRewrite: { "^/api": "/agrifood/api/fruitAndVegetable/prices" },
      logLevel: "debug", // Add this line
    })
  );
};
