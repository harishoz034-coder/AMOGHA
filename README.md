# Amogha Pure Veg Restaurant — Next.js 14 Web Application

A premium, production-grade restaurant website for **Amogha Pure Veg Restaurant** (Satyam Theatre Road, Ameerpet, Hyderabad), built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🛠️ Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 🌐 Deploying to Netlify (Step-by-Step)

### Option 1: Git-Connected Deploy (Recommended)
1. Push this project folder to a new **GitHub repository**.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
4. Select your `amogha-restaurant` repository.
5. Netlify will automatically detect **Next.js**:
   - **Base directory**: (leave blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**. Netlify will install `@netlify/plugin-nextjs` automatically and deploy your site.

### Option 2: Netlify CLI Deploy
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login and deploy
netlify login
netlify init
netlify deploy --build --prod
```

---

## 🌐 Deploying to Vercel (Zero-Config)
1. Push to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Vercel automatically configures Next.js. Click **Deploy**.

---

## 📁 Project Structure

```
amogha-restaurant/
├── public/                 # Static assets (robots.txt)
├── src/
│   ├── app/                # Next.js 14 App Router pages & layout
│   ├── components/         # Modular UI components (Navbar, Hero, Menu, etc.)
│   ├── data/               # Menu items, links, restaurant metadata
│   └── styles/             # Global Tailwind CSS & print styles
├── .env.example            # Environment variables template
├── .gitignore              # Standard gitignore (excludes node_modules, .next)
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Exact dependency lockfile
├── postcss.config.js       # PostCSS Tailwind configuration
├── tailwind.config.ts      # Custom Tailwind theme & color tokens
└── tsconfig.json           # TypeScript configuration
```
