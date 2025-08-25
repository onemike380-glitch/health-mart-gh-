Project Summary
Health Mart GH is an innovative online healthcare platform designed for hospitals in Ghana to sell medications directly to patients. It provides a user-friendly experience with features like user authentication for patients, hospitals, and administrators, a searchable drug catalog, a shopping cart, order management, and a dashboard for hospitals to manage their inventory. The platform aims to enhance access to healthcare products and streamline the purchasing process.

Project Module Description
Health Mart GH includes the following key functional modules:

Components: Reusable UI components located in src/components/ui.
Contexts: Context providers for managing authentication and cart state, found in src/contexts.
Hooks: Custom React hooks for managing application logic, located in src/hooks.
Pages: Various views of the application, including home, login, registration, and drug listings, located in src/pages.
Services: Integration with the Supabase backend for authentication, drug management, cart operations, and order processing, found in src/services.
Utils: Utility functions and mock data for testing, located in src/utils.
Directory Tree
/data/template-dist/personal_demonstration_template/shadcn-ui
├── .gitignore                        # Specifies files and directories for Git to ignore
├── .mgx                              
│   └── config.yaml                   # Configuration file for mgx
├── README.md                         # Project documentation
├── components.json                   # Metadata for components
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML entry point
├── package.json                      # Project dependencies and scripts
├── pnpm-lock.yaml                    # Lock file for dependencies
├── postcss.config.js                 # PostCSS configuration
├── public                            # Public assets (images, etc.)
│   ├── favicon.svg                   # Favicon for the application
│   └── robots.txt                    # Robots.txt for web crawling
├── src                               # Source files for the application
│   ├── App.tsx                       # Root component of the application
│   ├── components                    # Directory for UI components
│   │   └── ui                        # Contains various UI components (button, card, etc.)
│   ├── contexts                      # Context providers for authentication and cart
│   ├── hooks                         # Custom React hooks
│   ├── pages                         # Application views
│   │   ├── CartPage.tsx              # Shopping cart page
│   │   ├── DrugsPage.tsx             # Page for browsing medications
│   │   ├── HomePage.tsx              # Home page of the application
│   │   ├── LoginPage.tsx             # User login page
│   │   ├── RegisterPage.tsx          # User registration page
│   ├── services                      # Services for API interactions
│   ├── types                         # Type definitions for the application
│   └── utils                         # Utility functions and mock data
├── tailwind.config.ts                # Configuration for Tailwind CSS styles
├── template_config.json              # Template-specific configuration
├── tsconfig.*.json                   # TypeScript configuration files for various environments
└── vite.config.ts                    # Configuration file for Vite
File Description Inventory
.gitignore: Specifies files and directories for Git to ignore.
.mgx/config.yaml: Configuration settings for the mgx tool.
README.md: Primary documentation for usage and structure.
components.json: Metadata about available components.
eslint.config.js: Rules and configurations for ESLint.
index.html: Main HTML document.
package.json: Lists project dependencies and scripts for npm tasks.
pnpm-lock.yaml: Records exact versions of installed packages.
postcss.config.js: Configures PostCSS processing for styles.
public/: Directory for static assets.
src/: Contains all source code files for the application.
tailwind.config.ts: Configuration for Tailwind CSS styles.
template_config.json: Contains specific templates and project configurations.
tsconfig.*.json: TypeScript configuration files for various environments.
Technology Stack
This project utilizes the following technologies:

Vite: Build tool for fast front-end development.
TypeScript: Strongly typed programming language that builds on JavaScript.
React: JavaScript library for building user interfaces.
shadcn-ui: A library of pre-built components.
Tailwind CSS: Utility-first CSS framework for custom designs.
Supabase: Backend as a service for authentication and database management.
Usage
To get started with the project:

Install Dependencies
Run the following command to install the necessary dependencies:

pnpm install
Build for Production
To create a production build of the application:

pnpm run build
Note
The application’s main JavaScript and component files reside under the src directory, where most development efforts should focus.

App Viewer

Alex# health-mart-gh-
