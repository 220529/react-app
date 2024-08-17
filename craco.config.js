const path = require("path");
const CracoLessPlugin = require("craco-less");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  webpack: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    // 设置代理 —— 如果有需要的话！
    setupMiddlewares: (middlewares, devServer) => {
      // 添加代理中间件
      devServer.app.use(
        "/api",
        createProxyMiddleware({
          // 目标服务器地址
          target: "http://nest.lytt.fun",
          // 修改请求头中的 Origin 字段以匹配目标服务器
          changeOrigin: true,
          // 如果目标服务器是 HTTPS 但没有有效证书，则设置为 false
          secure: false,
        })
      );

      // 返回中间件列表
      return middlewares;
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
};
