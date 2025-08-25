# Health Mart GH

**Health Mart GH** is a modern online healthcare platform empowering hospitals in Ghana to sell medications directly to patients. Built for usability, security, and scalability, it streamlines the healthcare shopping experience with robust features and an intuitive interface.

---

## 🚀 Project Overview

Health Mart GH bridges the gap between hospitals and patients by providing:

- **Direct medication sales** from healthcare facilities
- **Secure user authentication** and patient management
- **Easy shopping and checkout** with a persistent cart
- **Seamless backend integration** via Supabase
- **Responsive, accessible UI** using shadcn-ui and Tailwind CSS

---

## 🗂️ Project Structure

A modular, maintainable architecture:

```
/data/template-dist/personal_demonstration_template/shadcn-ui
├── .gitignore               # Files and folders to ignore in Git
├── .mgx/config.yaml         # mgx tool configuration
├── README.md                # Project documentation (you're here!)
├── components.json          # Component metadata
├── eslint.config.js         # Linting configuration
├── index.html               # App entry point
├── package.json             # Dependencies & scripts
├── pnpm-lock.yaml           # pnpm package lockfile
├── postcss.config.js        # PostCSS configuration
├── public/                  # Static public assets
│   ├── favicon.svg
│   └── robots.txt
├── src/                     # Source code
│   ├── App.tsx              # Main App component
│   ├── components/          # Reusable UI components
│   │   └── ui/              # shadcn-ui components (Button, Card, etc.)
│   ├── contexts/            # Auth & Cart context providers
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # App pages (Home, Login, Register, Drugs, Cart)
│   ├── services/            # Supabase & API logic
│   ├── types/               # Global TS type definitions
│   └── utils/               # Helper functions & mock data
├── tailwind.config.ts       # Tailwind CSS config
├── template_config.json     # Project template settings
├── tsconfig.*.json          # TypeScript project configs
└── vite.config.ts           # Vite bundler config
```

---

## 📦 Key Modules & Their Roles

- **Components**: UI building blocks in `src/components/ui`
- **Contexts**: Global state (auth, cart) in `src/contexts`
- **Hooks**: Reusable app logic in `src/hooks`
- **Pages**: Main app views in `src/pages`
- **Services**: Supabase integrations in `src/services`
- **Types**: TypeScript types in `src/types`
- **Utils**: Utilities and mocks in `src/utils`

---

## ⚙️ Technology Stack

- **Vite** — Blazing fast dev server and build tool
- **TypeScript** — Type-safe JavaScript
- **React** — Modern UI library
- **shadcn-ui** — Accessible, customizable UI components
- **Tailwind CSS** — Utility-first CSS framework
- **Supabase** — Backend-as-a-Service: Auth, Database, Storage

---

## 🛠️ Getting Started

Clone the repo, then:

### 1. Install dependencies
```sh
pnpm install
```

### 2. Start the development server
```sh
pnpm run dev
```

### 3. Build for production
```sh
pnpm run build
```

---

## 💡 Notes

- All main logic is in the `src/` directory.
- UI is fully responsive and accessible.
- Uses Supabase for real-time backend operations.

---

## 👀 App Preview

> _Insert a screenshot or GIF here!_

---

## 🤝 Contributing

PRs and suggestions are welcome! Please open an issue to discuss changes or improvements.

---

## 📄 License

This project is licensed under the MIT License.

---

**Health Mart GH — Empowering Ghana’s healthcare, one click at a time.**

