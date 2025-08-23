# Yugeshwaran G - Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built for Yugeshwaran G, showcasing his skills as an aspiring Full Stack Developer. The application features a professional design with gradient color schemes, interactive hover effects, and a comprehensive contact form with resume download functionality. The portfolio is designed to effectively communicate professional skills, experience, and achievements while providing easy access to downloadable resume content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React-based SPA**: Built with React 18 using TypeScript for type safety and modern development practices
- **Component Library**: Utilizes shadcn/ui components with Radix UI primitives for accessibility and consistent design
- **Styling System**: 
  - Tailwind CSS for utility-first styling with custom CSS variables for theming
  - Custom gradient color schemes with purple/blue theme variants
  - Responsive design with mobile-first approach
- **State Management**: 
  - React Query (@tanstack/react-query) for server state management
  - React Hook Form with Zod validation for form handling
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Express.js Server**: RESTful API built with Express and TypeScript
- **In-Memory Storage**: Uses a simple in-memory storage implementation for contact form submissions
- **API Endpoints**:
  - `/api/contact` - POST endpoint for contact form submissions with validation
  - `/api/resume/download` - GET endpoint for resume downloads with analytics tracking

### Data Storage Solutions
- **Database Ready**: Configured with Drizzle ORM and PostgreSQL schema definitions
- **Current Implementation**: In-memory storage for development with easy migration path to PostgreSQL
- **Schema Design**: Contacts table with fields for name, email, subject, message, and timestamps

### Authentication and Authorization
- **No Authentication Required**: Portfolio is public-facing with no user authentication needed
- **Form Validation**: Server-side validation using Zod schemas for contact form security

### Development and Build Tools
- **Vite**: Modern build tool for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across frontend, backend, and shared code
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development Features**: Hot module replacement, error overlays, and Replit integration

### External Dependencies

#### UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography

#### Backend and Data
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect configuration
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Zod**: Schema validation for both frontend and backend

#### Development and Deployment
- **Vite**: Build tool with React plugin and development optimizations
- **TypeScript**: Static type checking across the entire application
- **Replit Integration**: Development environment plugins for Replit platform

#### Resume Integration
- **Google Drive API**: Direct resume download from Google Drive link
- **Download Analytics**: Server-side tracking of resume download events
- **Fallback Mechanism**: Error handling for resume download failures