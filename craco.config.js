const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    devServer: {
      proxy: {
        // 这里配置你要代理的目标地址
        "/api": {
          target: "http://47.93.17.251:9005", // 你要代理的地址
          // changeOrigin: true,
          // pathRewrite: { "^/api": "/api" }, // 可选的，重写路径，如果接口路径有变化，需要进行重写
        },
      },
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
};
