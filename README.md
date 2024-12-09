# Next.js & NextUI 模板

这是一个用于创建使用 Next.js 14（应用程序目录）和 NextUI（v2）的应用程序的模板。

# 更新记录

## v0.0.5
- 结构化 navbar 组件
- 增加 sidebar 组件
- 增加 qq 社交图标

## v0.0.4
- 修改 .npmrc 文件，添加 public-hoist-pattern 配置
- 增加 Icon 组件，统一管理图标

## v0.0.3
- 合并 new-icons.tsx 和 icons.tsx，统一使用 icons.tsx
- next.config.js 启用 turbo 以提升构建性能
- 修复 v0.0.2 版本中的问题

## v0.0.2
- 添加 @svgr/webpack 支持 SVG 文件导入，修改文件next.config.js
- 禁用 turbo，修改文件next.config.js
- 增加 svg 图标支持，创建文件components/new-icons.tsx

## v0.0.1
- 优化 error.tsx 的错误处理
- 迁移到 pnpm 包管理器

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

# 提交示例（用于cursor自动提交）

```bash
# 注意，不要涉及pnpm
# 提交更改
git add .
git commit -m "{提交信息}"

# 创建新标签
git tag v{版本号}

# 推送更改和标签
git push origin main
git push origin v{版本号}
```

接下来，返回git add 和git commit 提交更改，然后推送更改。