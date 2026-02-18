# Technical Documentation: Michael Mathan S Portfolio

This repository contains the source code for a high-end, production-grade portfolio application. It is engineered as a performance-optimized Single Page Application (SPA) leveraging modern browser capabilities and a zero-build-step deployment model.

## 🏗️ System Architecture

### 1. Core Engine
- **Framework**: [React 19.2.4](https://react.dev/) (Functional Components + Hooks).
- **Runtime Environment**: Browser-native ESM (EcmaScript Modules) via [esm.sh](https://esm.sh).
- **Dependency Management**: Centralized `importmap` in `index.html` to handle module resolution without a package manager (npm/yarn) at runtime.

### 2. Frontend Infrastructure
- **Styling Engine**: [Tailwind CSS v3.4](https://tailwindcss.com/) (CDN-delivered Play CDN for rapid prototyping).
- **Iconography**: [Lucide React](https://lucide.dev/) (Vector-based, tree-shakable components).
- **Typography**: Dual-font system:
  - **Headings**: `Montserrat` (Sans-serif, 800-400 weight).
  - **Body/System**: `Roboto` (Standard sans-serif, optimized for readability).

### 3. State & Logic Flow
- **Data-Driven UI**: The application implements a "Source of Truth" pattern where all content is decoupled from components into `data.ts`, enabling easy content updates without logic modification.
- **Scroll Synchronization**: `App.tsx` utilizes a global scroll listener with `Intersection Observer`-like logic to trigger `reveal` animations when components enter the viewport.
- **Interactive States**: 
  - **Project Cards**: Implement 3D tilt logic using relative cursor positioning and CSS `perspective-1000`.
  - **Border Beam**: Uses `offsetPath` and `offset-distance` animations for a high-end GPU-accelerated glow effect.

## 🎨 Design System Specs

| Property | Value | Tailwind Equivalent |
| :--- | :--- | :--- |
| **Primary Background** | `#020617` | `bg-slate-950` |
| **Secondary Background** | `#0f172a` | `bg-slate-900` |
| **Accent Primary** | `#22d3ee` | `text-cyan-400` |
| **Accent Secondary** | `#4f46e5` | `text-indigo-600` |
| **Surface Borders** | `#1e293b` | `border-slate-800` |

## 🚀 Performance Optimizations

1. **Hardware Acceleration**: Animations (`float`, `shimmer`, `border-beam`) utilize `transform` and `opacity` properties to ensure they run on the GPU (Composite layer) rather than the CPU (Layout/Paint layers).
2. **Asset Optimization**: External images are handled via high-speed CDNs.
3. **No-Runtime Latency**: By avoiding heavy third-party state management libraries (Redux/Zustand), the initial bundle size is kept to a minimum, resulting in near-instant LCP (Largest Contentful Paint).

## 🛠️ Developer Guide

### Environment Setup
No local installation of `node_modules` is required. To run the project locally:
1. Ensure you have a simple HTTP server (e.g., `npx serve` or VS Code's "Live Server").
2. Open `index.html` through the server.

### Extending the Schema
If you need to add new data types (e.g., "Certifications"):
1. Update the interface in `types.ts`.
2. Add the data object in `data.ts`.
3. Create a corresponding component in `components/` and register it in `App.tsx`.

### Animation Keyframes
Custom animations are defined globally in `index.html`. These can be extended or overridden:
- `animate-glow`: Pulsing shadow effect.
- `animate-border-beam`: Continuous path-following border light.
- `reveal.active`: Entry animation for scroll-triggered sections.

## 📄 License

Internal use only. Michael Mathan S © 2025.
