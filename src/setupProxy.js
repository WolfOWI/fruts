const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ec.europa.eu",
      changeOrigin: true,
      pathRewrite: { "^/api": "/agrifood/api/fruitAndVegetable/prices" },
      logLevel: "debug",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
  );
};
