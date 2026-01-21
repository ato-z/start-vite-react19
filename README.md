# Vite + React 19 + Tailwind 4 最小启动器

这是一个基于 Vite、React 19 和 Tailwind CSS 4 的最小化项目启动器，提供开箱即用的现代化开发环境。

## 特性

- ⚡️ **Vite** - 极速的开发服务器和构建工具
- ⚛️ **React 19** - 最新的 React 版本
- 🎨 **Tailwind CSS 4** - 原子化 CSS 框架
- 📦 **TypeScript** - 类型安全的开发体验
- 🎯 **路径别名** - 配置 `@` 指向 `src` 目录
- 💅 **Prettier** - 代码格式化工具

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目配置

### 路径别名

项目已配置 `@` 作为 `src` 目录的别名，可以在导入时使用：

```typescript
// 替代
import { Button } from '../../../components/Button'

// 使用别名
import { Button } from '@/components/Button'
```

### Prettier

项目使用 `.prettierrc` 配置文件进行代码格式化。你可以运行：

```bash
npm run format
```

### TypeScript

项目启用了严格的类型检查。所有 `.ts` 和 `.tsx` 文件都会经过 TypeScript 编译器的类型检查。

## 目录结构

```
start-vite-react19/
├── src/
│   ├── assets/      # 静态资源
│   ├── components/  # 组件目录
│   └── main.tsx     # 应用入口
├── public/          # 公共静态资源
├── .prettierrc      # Prettier 配置
├── index.html       # HTML 模板
├── package.json     # 项目依赖
├── tsconfig.json    # TypeScript 配置
└── vite.config.ts   # Vite 配置
```

## 技术栈

- **Vite** - 下一代前端构建工具
- **React 19** - 用于构建用户界面的 JavaScript 库
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **TypeScript** - JavaScript 的超集，提供类型安全

## License

MIT
