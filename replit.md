# Overview

This is a luxury gifting e-commerce website for "The HOT Bundle," a premium gift curation service operating in Abuja and Benin, Nigeria. The application is built as a single-page marketing website that showcases custom gift bundles, services, and company information with a focus on luxury aesthetics and user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client is built using React 18 with TypeScript, leveraging a modern component-based architecture:

- **Framework**: React with TypeScript for type safety and maintainability
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and a comprehensive theming system supporting light/dark modes
- **State Management**: React Query (TanStack Query) for server state management and local React state for UI interactions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The server follows a minimalist Express.js setup with TypeScript:

- **Framework**: Express.js with TypeScript for API endpoints
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **Development Setup**: Integrated Vite middleware for seamless full-stack development experience

## Design System
The application implements a luxury-focused design system:

- **Color Palette**: Gold accents (HSL 45 85% 60%) with sophisticated black/white base colors
- **Typography**: Poppins font family from Google Fonts with defined hierarchy
- **Component System**: Consistent spacing using Tailwind's 4px unit system (4, 8, 16, 24)
- **Theme Support**: Complete light/dark mode implementation with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

## Data Management
The application uses a layered data approach:

- **Schema Definition**: Centralized schema definitions in the shared directory using Drizzle ORM and Zod for validation
- **Type Safety**: End-to-end TypeScript types from database to frontend components
- **Development Storage**: In-memory storage implementation for rapid development
- **Production Ready**: Database migration system configured for PostgreSQL deployment

## Component Architecture
The frontend follows a modular component structure:

- **Pages**: Route-level components that compose multiple sections
- **Layout Components**: Reusable header, footer, and navigation elements
- **Section Components**: Self-contained sections like Hero, About, Gallery, Contact
- **UI Components**: Design system components based on Shadcn/ui
- **Theme Provider**: Context-based theme management with local storage persistence

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Development server and build tool with React plugin
- **Express.js**: Backend server framework with TypeScript support

## UI and Styling
- **Shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Poppins font family for typography

## Database and Storage
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema migrations
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Schema validation library integrated with Drizzle

## Development Tools
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Third-party Services
- **Replit Integration**: Development environment optimizations and error handling
- **Instagram Integration**: Social media links to @thehotbundle Instagram account
- **Email Integration**: Contact form configured for thehotbundle@gmail.com
- **Phone Integration**: Direct calling links for Nigerian phone numbers (+2349039525262, +2349066890560)