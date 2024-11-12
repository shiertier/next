# Next.js & NextUI 模板

这是一个用于创建使用 Next.js 14（应用程序目录）和 NextUI（v2）的应用程序的模板。

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-app-template)

## 使用的技术

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 如何使用

### 使用 create-next-app 创建新项目

要使用 `create-next-app` 基于此模板创建新项目，请运行以下命令：

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### 安装依赖

你可以使用 `npm`, `yarn`, `pnpm`, `bun` 等包管理器，以下是使用 `npm` 的示例：

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

### 设置 pnpm（可选）

如果你使用 `pnpm`，你需要将以下代码添加到你的 `.npmrc` 文件中：

```bash
public-hoist-pattern[]=*@nextui-org/*
```

修改 `.npmrc` 文件后，你需要再次运行 `pnpm install` 以确保依赖项正确安装。

# 更新记录

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