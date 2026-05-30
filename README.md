# Sujan Singh - SEBI Registered Investment Adviser Portal

An enterprise-grade, highly optimized, SEO-friendly, and accessible Next.js portal for **Sujan Singh (SEBI Registered Investment Adviser - INA000020864)**. Engineered with Next.js App Router, Tailwind CSS, Lucide Icons, and strict lowercase folder conventions, using a robust **Container-Based Architecture**.

---

## 🛠️ Project Architecture

This repository operates under a strict **Container-Based Architecture** where route entrypoints are kept light and slim, while section orchestration and logical states are delegated to dedicated, reusable container components.

```txt
src/
├── app/                  # Next.js App Router pages (under 10 lines, handles SEO metadata & layout)
├── components/
│   ├── layout/           # Shared page wrappers and responsive grid systems
│   │   ├── pagecontainer
│   │   ├── sectioncontainer
│   │   └── gridcontainer
│   ├── ui/               # Reusable presentational elements
│   │   ├── accordion
│   │   ├── button
│   │   ├── card
│   │   ├── input
│   │   └── modal
│   └── navbar & footer   # Global layout elements
├── constants/
│   └── data.js           # Centralized static content and arrays
├── containers/           # Route-specific orchestrational containers (contains all UI sections composition)
│   ├── homecontainer
│   ├── aboutcontainer
│   └── servicescontainer
├── hooks/                # Stateful custom hooks (useForm, useModal)
└── sections/             # Common multi-page presentation sections
```

---

## 🚀 Local Development Setup

Follow these simple steps to spin up the local development portal:

### 1. Prerequisite Installations
Make sure you have Node.js (v18.0.0 or higher) installed on your operating system.

### 2. Dependency Setup
Install clean package dependencies using `npm`:
```bash
npm install
```

### 3. Run Development Server
Boot the Next.js local compiler environment:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your favorite browser to preview the live portal.

### 4. Build Codebase & Lint Check
Verify full compilation and ESLint constraints before pushing changes:
```bash
npm run lint
npm run build
```

---

## 🌐 Production Live Deployment

The codebase is optimized for immediate, zero-config live deployment on cloud platforms like **Vercel** or **Netlify**:

### 1. Deploying to Vercel (Recommended)
1. Push your local commits to a GitHub repository.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **Import Project** and select your repository.
4. Under the configuration panel, keep the standard framework preset as **Next.js** and build command as default.
5. Click **Deploy**. Vercel will build, optimize static rendering assets, and assign a production URL.

### 2. Static Prerendering (Dynamic Sitemap / Crawler guidelines)
Next.js dynamically generates search engine assets at build time:
- **Sitemap Index**: [https://sujansingh.in/sitemap.xml](https://sujansingh.in/sitemap.xml)
- **Robots Policies**: [https://sujansingh.in/robots.txt](https://sujansingh.in/robots.txt)
*(Change your base target domain variables inside `src/app/sitemap.js` and `src/app/robots.js` before live launches.)*
