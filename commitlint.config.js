module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 确保提交类型是以下选项之一:
    // feat: 新功能
    // fix: 修复 bug
    // docs: 文档变更
    // chore: 构建流程或辅助工具的变动
    // style: 不影响代码含义的更改(空白、格式、缺少分号等)
    // refactor: 既不是修复 bug 也不是添加新功能的代码更改
    // ci: CI 配置文件和脚本的更改
    // test: 添加缺失的测试或修正现有的测试
    // revert: 撤销到上一个提交
    // perf: 提高性能的代码更改
    // vercel: 与 Vercel 部署相关的更改
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "revert",
        "perf",
        "vercel",
      ],
    ],
  },
};
