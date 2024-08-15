import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] }, // 适用于所有这些类型的文件
  { languageOptions: { globals: globals.browser } }, // 设定全局变量
  pluginJs.configs.recommended, // 使用 @eslint/js 插件的推荐配置
  ...tseslint.configs.recommended, // 使用 typescript-eslint 插件的推荐配置
  pluginReact.configs.flat.recommended, // 使用 eslint-plugin-react 插件的推荐配置
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-undef": "error",
      "no-const-assign": "error",
    },
  },
  {
    settings: {
      react: {
        version: "detect", // 自动检测 React 的版本
      },
    },
  },
  {
    ignores: [
      ".prettierrc.js",
      "commitlint.config.js",
      "node_modules/*", // ignore its content
    ],
  },
];
