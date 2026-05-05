# 🍔 Burger Customizer

A modern, production-grade React burger customization application built with enterprise-level architecture and best practices.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Architecture](#architecture)
- [Environment Setup](#environment-setup)
- [Future Improvements](#future-improvements)

## 🎯 Project Overview

This project is a complete refactor of an older React burger builder application. It demonstrates modern frontend development practices, enterprise architecture patterns, and production-ready code organization.

## ✨ Features

- 🛠️ Interactive burger customization with dynamic pricing
- 📋 Ingredient management (add/remove)
- 📝 Checkout form with validation
- 📦 Order management
- 📱 Fully responsive design
- 🔄 Real-time state management
- 🎨 Professional UI/UX

## 🛠️ Tech Stack

### Core
- **React 18.3** - Latest React with functional components and hooks
- **TypeScript 5.5** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool and dev server

### State Management & Routing
- **Redux Toolkit 2.2** - Modern Redux with simplified API
- **React Router DOM 6.26** - Declarative routing

### Form Handling & Validation
- **React Hook Form 7.53** - Performant form library
- **Zod 3.23** - Type-safe schema validation

### HTTP & API
- **Axios 1.7** - Promise-based HTTP client

### Code Quality & Development
- **ESLint 8.57** - Code linting
- **Prettier 3.3** - Code formatting
- **Husky 9.1** - Git hooks
- **Lint-staged 15.2** - Pre-commit checks
- **SASS** - CSS preprocessor with modules

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or later)
- npm or yarn or pnpm

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your API base URL

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting errors
- `npm run format` - Format code with Prettier
- `npm run prepare` - Install Husky hooks

## 📁 Folder Structure

```
src/
├── app/                          # Core application setup
│   ├── providers/                # React providers (Redux, Router, etc.)
│   ├── router/                   # Routing configuration
│   └── store/                    # Redux store configuration
├── assets/                       # Static assets
│   ├── images/                   # Image files
│   ├── icons/                    # Icon files
│   └── styles/                   # Global styles
├── components/                   # Reusable components
│   ├── ui/                       # Basic UI components (Button, Input, etc.)
│   ├── forms/                    # Form components
│   ├── layout/                   # Layout components
│   └── shared/                   # Shared components
├── features/                     # Feature-based modules
│   ├── burger/                   # Burger builder feature
│   │   ├── components/           # Burger-specific components
│   │   ├── pages/                # Burger pages
│   │   ├── services/             # Burger API services
│   │   ├── hooks/                # Burger custom hooks
│   │   ├── slice/                # Redux slice
│   │   ├── utils/                # Burger utilities
│   │   └── types/                # Burger types
│   └── order/                    # Order management feature
│       ├── components/           # Order-specific components
│       ├── pages/                # Order pages
│       ├── services/             # Order API services
│       ├── hooks/                # Order custom hooks
│       ├── slice/                # Redux slice
│       ├── validation/           # Validation schemas
│       └── utils/                # Order utilities
├── hooks/                        # Global custom hooks
├── services/                     # Global API services
├── utils/                        # Utility functions
├── constants/                    # Constant values
├── config/                       # Configuration files
├── layouts/                      # Layout components
├── pages/                        # Page components
├── validations/                  # Global validation schemas
├── lib/                          # Third-party library configurations
├── types/                        # Global TypeScript types
├── App.tsx                       # Root application component
└── main.tsx                      # Application entry point
```

## 🏗️ Architecture

### Key Architectural Decisions

1. **Feature-based Organization**
   - Code is organized around features rather than file types
   - Improves maintainability and scalability
   - Easy to add/remove features without affecting others

2. **Clean Separation of Concerns**
   - Components only handle UI rendering
   - Hooks manage state and side effects
   - Services handle API communication
   - Slices manage Redux state

3. **Type Safety First**
   - Full TypeScript coverage
   - Zod for runtime type validation
   - Type-safe Redux with Redux Toolkit

4. **Modern State Management**
   - Redux Toolkit for predictable state management
   - Custom hooks for Redux integration
   - Async thunks for API calls

5. **Performance Optimizations**
   - Vite for fast builds and HMR
   - Code splitting with React.lazy
   - Memoization where appropriate

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

## 🔮 Future Improvements

- [ ] Add unit and integration tests with Vitest and Testing Library
- [ ] Implement authentication and user accounts
- [ ] Add dark mode support
- [ ] Implement skeleton loaders
- [ ] Add toast notifications
- [ ] Implement error boundaries
- [ ] Add internationalization (i18n)
- [ ] Implement Progressive Web App (PWA)
- [ ] Add analytics tracking
- [ ] Implement CI/CD pipeline

## 📄 License

This project is open source and available under the MIT License.




---

## 👨‍💻 Author

Built with ❤️ by a Bansi Borad

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</div>
