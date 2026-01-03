# React + Vite Project

A modern web application built with React and Vite, providing a fast development environment with Hot Module Replacement (HMR) and a pre-configured ESLint setup.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Create a production-ready build:

```bash
npm run build
```

## 🛠️ Tech Stack & Plugins

This template utilizes the official Vite plugins for React development:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

### React Compiler

The React Compiler is not enabled by default to optimize performance. To integrate it into your workflow, follow the [official installation guide](https://react.dev/learn/react-compiler/installation).

## 🧹 Code Quality

The project includes a minimal ESLint configuration. For production-grade applications, we recommend:

1.  **TypeScript**: Migrate to TypeScript for better type safety.
2.  **Type-aware Linting**: Enable type-aware rules via [`typescript-eslint`](https://typescript-eslint.io).
3.  **TS Template**: Refer to the [official Vite React-TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for reference.
