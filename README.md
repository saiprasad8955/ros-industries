# ROS Industries | Global Engineering Solutions

A high-performance, multilingual industrial platform for **ROS Industries**, featuring automated localization, precision engineering product showcases, and a robust lead management system.

## 🚀 Key Features

### 🌍 Global Localization & Routing
- **Dynamic Routing**: Built on Next.js App Router with `/[lang]/[country]` structure.
- **Automated Translation**: Integration with Google Translate API for on-the-fly content translation across multiple languages (German, French, Spanish, etc.).
- **Smart Path Preservation**: Region selector preserves the user's current page while switching languages.

### 📊 Integrated Lead Capture
- **Multi-channel Capture**:
  - **Quick Inquiry**: Floating action button in all pages for rapid engagement.
  - **Professional Quote Portal**: Dedicated `/request-quote` page for detailed engineering requirements.
- **Backend Validation**: Strict data integrity using Zod schemas.
- **Database**: High-performance persistence layer using Prisma and SQLite.

### 🔐 Secure Admin Dashboard
- **Protected Access**: Admin portal gated by JWT-based authentication and Next.js middleware.
- **Leads Management**: Real-time view of all enquiries with detailed message reporting.
- **Metrics & Analytics**: Quick-view cards for total leads, daily captures, and source breakdown.
- **Interactive Portal**: Accessible at `/admin/login`.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4, Framer Motion (Animations).
- **Backend**: Next.js Route Handlers, JWT (jose), Bcrypt.js.
- **Database**: SQLite (Development-ready), Prisma ORM.
- **Translation**: Google Translate API Extensions.

## 🏁 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Database Setup
Ensure you have the environment variables set up (default `.env` is pre-configured for SQLite).
```bash
# Push the schema to local dev.db
npx prisma db push

# Seed the admin user
node prisma/seed.js
```

### 3. Run Development Server
```bash
npm run dev
```

## 👤 Admin Portal Credentials

- **URL**: `/admin/login`
- **User**: `ram@ros.com`
- **Pass**: `Ram@12345`

## 📁 Project Structure

- `src/app/[lang]/[country]`: Localized main application pages.
- `src/app/admin`: Admin portal pages (Login & Dashboard).
- `src/app/api`: Backend endpoints for leads and auth.
- `src/components`: Reusable UI components (Navbar, Footer, ContactButton, etc.).
- `src/lib`: Shared utilities (Auth logic, Prisma client, Zod schemas).
- `prisma/`: Database schema and seed scripts.

---
© 2026 ROS Industries. Precision Engineering. Global Reach.
