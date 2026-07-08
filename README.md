# Rohit Rajput — Portfolio (React)

A modern, fully responsive portfolio built with React.js featuring dark/light mode, typing animations, scroll effects, and more.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy on Vercel, Netlify, GitHub Pages, etc.

---

## 📁 Project Structure

```
rohit-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Testimonials.js / Testimonials.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js
│   ├── index.css   ← Global CSS variables & resets
│   └── index.js
└── package.json
```

---

## ✏️ Customization

### Update your project links
In `src/components/Projects.js`, find each project object and replace `link: '#'` with your actual live URL.

### Update social links
In `src/components/Contact.js`, replace the `href` values for LinkedIn and GitHub.

### Add/remove projects
In `src/components/Projects.js`, edit the `projects` array.

### Change theme colors
In `src/index.css`, edit the CSS variables inside `:root` (light) and `[data-theme="dark"]` (dark).

---

## ✨ Features

- 🌙☀️ Dark / Light mode toggle
- ⌨️ Animated typing effect in hero
- 🔲 Morphing avatar blob animation
- 📊 Scroll progress bar
- ✨ Scroll-triggered fade-in animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🃏 Hover effects on all interactive cards
- ✅ Working contact form with validation

---

## 🚢 Deploy

**Vercel** (recommended):
```bash
npm install -g vercel
vercel
```

**Netlify**: Drag & drop the `build/` folder at netlify.com/drop
