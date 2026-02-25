<div align="center">

<img src="public/mobixora-logo-2.png" alt="Mobixora Logo" width="280" />

# Mobixora — India's Premium Mobile Marketplace

**A full-stack, production-ready e-commerce platform for smartphones, built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Clerk authentication.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.dev)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

---

[🌐 Live Demo](https://mobixora.vercel.app) &nbsp;·&nbsp; [📖 Documentation](#-table-of-contents) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/yourusername/mobixora/issues) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/yourusername/mobixora/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

**Mobixora** is a premium mobile phone e-commerce platform inspired by the best of Amazon India and Flipkart. It offers a rich, dense, commercial-grade UI with advanced filtering, real-time search, authentication, a persistent cart, and a product catalogue of **67+ phones** across **12+ top brands** — all locally served with official press images.

The application is fully server-side-ready, statically-typed end-to-end, and configured for a zero-friction Vercel deployment targeting Indian users in the `bom1` (Mumbai) edge region.

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| **Homepage** | Hero carousel, Shop by Category, Shop by Brand, Featured Products |
| **Products Page** | Advanced filtering sidebar + live inline search |
| **Product Detail** | Image gallery, specs, offers, Amazon-style reviews |
| **Admin Panel** | Secure dashboard, product management, category control |
| **Cart** | Persistent cart with EMI breakdown |

---

## ✨ Features

### 🛍️ Shopping Experience
- **67+ phone catalogue** — iPhone 11–16 Pro Max, Pixel 7–9 Pro XL, OnePlus 13, Galaxy S24 Ultra, Vivo V50, ROG Phone 9, and many more
- **Advanced search** — live inline search + navbar search, matching name, brand, description, processor & highlights
- **Multi-filter sidebar** — Brand, Category, Price range, RAM, Storage, Customer Rating
- **Sort options** — Price, Rating, Discount, Newest First
- **Product detail pages** — image gallery with thumbnail switcher, full specs table, offer cards

### 🛡️ Admin & Control
- **Secure Admin Panel** — dedicated `/admin` route with custom session protection
- **Dashboard Stats** — real-time overview of products, stock, and categories
- **Product Management** — add, edit, and delete handsets from the catalogue
- **Category Control** — manage store categories with custom images and metadata

### 🎨 UI / UX
- **Amazon-style Reviews** — high-quality verified reviews section with ratings and dates
- **Premium dark hero sections** with gradient backgrounds and glassmorphism cards
- **Shop by Category** — 5 categories with real mobile hardware photography
- **Shop by Brand** — 12 brand logos served locally (never breaks)
- **Auto-sliding hero carousel** with 6 promotional banners
- **Responsive** — fully mobile-optimised, fixed mobile menus, professional close buttons
- **Micro-animations** — hover lifts, scale transitions, gradient colour dots
- **Performance** — sub-50ms TTFB via Vercel `bom1` (Mumbai) region

### 🔐 Authentication
- **Clerk** — Sign In / Sign Up / Profile with Google OAuth
- Persistent cart across sessions (localStorage)
- Signed-in user gets `UserButton` with avatar in navbar

### 📃 Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, category, brand, product sections |
| `/products` | Filterable, searchable product listing |
| `/products/[id]` | Product detail with gallery & checkout |
| `/cart` | Cart with quantity controls & order summary |
| `/checkout` | Checkout form |
| `/about` | Brand story, team, values, milestones |
| `/contact` | Contact form, FAQ accordion, social links |
| `/sign-in` | Clerk sign-in page |
| `/sign-up` | Clerk sign-up page |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | TypeScript 5 |
| **UI** | React 19 + Tailwind CSS v4 |
| **Auth** | [Clerk](https://clerk.dev) (@clerk/nextjs ^6) |
| **State** | React `useState` / `useContext` (CartContext) |
| **Routing** | Next.js App Router + `useSearchParams` |
| **Images** | `next/image` + locally served press photos |
| **Styling** | Tailwind CSS v4 + inline CSS for gradients/animations |
| **Linting** | ESLint 9 + eslint-config-next |
| **Deployment** | Vercel (bom1 — Mumbai region) |

---

## 📁 Project Structure

```
Mobile-Ecomm/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Clerk + Navbar + Footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact page
│   ├── cart/page.tsx             # Cart page
│   ├── checkout/page.tsx         # Checkout page
│   ├── products/
│   │   ├── page.tsx              # Products listing with filters
│   │   └── [id]/page.tsx         # Product detail page
│   └── sign-in / sign-up/       # Clerk auth pages
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky navbar with search, auth, cart
│   │   ├── Footer.tsx            # Footer with links & branding
│   │   └── TopBar.tsx            # Announcement bar
│   ├── home/
│   │   ├── HeroSlider.tsx        # Auto-sliding hero carousel
│   │   ├── ShopByCategory.tsx    # Category cards section
│   │   ├── ShopByBrand.tsx       # Brand logo grid
│   │   └── FeaturedProducts.tsx  # Product card grid sections
│   └── products/
│       └── ProductCard.tsx       # Individual product card
│
├── context/
│   └── CartContext.tsx           # Global cart state (localStorage)
│
├── data/
│   ├── products.ts               # 24 base products
│   ├── productsExtra.ts          # 43 additional products (2025–2026)
│   ├── brands.ts                 # 12 brands with local logo paths
│   ├── categories.ts             # 5 categories with local images
│   └── banners.ts                # Hero & offer banner data
│
├── public/
│   ├── mobixora-logo-2.png       # Brand logo
│   ├── product-images/           # 50+ GSMArena press photos (local)
│   ├── brand-logos/              # 12 brand SVG/PNG logos (local)
│   └── category-images/          # 5 category hero images (local)
│
├── lib/
│   └── utils.ts                  # Helpers (formatPrice, etc.)
│
├── vercel.json                   # Vercel deployment config
├── next.config.ts                # Next.js config
├── tsconfig.json                 # TypeScript config
└── package.json
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A free [Clerk](https://clerk.dev) account

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mobixora.git
cd mobixora
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
# Clerk Authentication (required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Clerk redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ Yes | Clerk publishable key (from Clerk Dashboard) |
| `CLERK_SECRET_KEY` | ✅ Yes | Clerk secret key (from Clerk Dashboard) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | ✅ Yes | Path for sign-in page (`/sign-in`) |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | ✅ Yes | Path for sign-up page (`/sign-up`) |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | ✅ Yes | Redirect after sign-in (`/`) |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | ✅ Yes | Redirect after sign-up (`/`) |
| `NEXT_PUBLIC_APP_URL` | Optional | Production URL for metadata |

> 🔑 **Get your Clerk keys** → [Dashboard → API Keys](https://dashboard.clerk.com)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The repo includes a production-ready `vercel.json` that handles:

- ✅ Correct build/output/install commands
- ✅ Security headers (CSP, X-Frame-Options, XSS-Protection)
- ✅ Aggressive cache headers for all static images (`max-age=31536000, immutable`)
- ✅ `bom1` (Mumbai) edge region for lowest latency to Indian users

#### Steps:

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub
3. Set **Root Directory** to the project folder (e.g. `Mobile-Ecomm`)
4. Add all environment variables from the table above in the **Vercel Dashboard → Environment Variables**
5. Click **Deploy** ✅

#### One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mobixora)

---

## ⚡ Performance

| Metric | Value |
|--------|-------|
| **Images** | All product/brand/category images served locally (no CDN dependency) |
| **Cache** | Static image assets cached for 1 year with `immutable` headers |
| **Region** | `bom1` Mumbai — sub-50ms TTFB for Indian users |
| **SSR** | App Router with React Server Components where applicable |
| **Bundle** | Tree-shaken, TypeScript-compiled Next.js output |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# Fork the repo and clone your fork
git clone https://github.com/yourusername/mobixora.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git commit -m "feat: add your feature"

# Push and open a Pull Request
git push origin feature/your-feature-name
```

Please follow the [Conventional Commits](https://www.conventionalcommits.org) specification.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Mobixora Team**

⭐ **Star this repo** if you found it helpful!

</div>