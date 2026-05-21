# Jay Padhara — Portfolio Website

> Dark Cyberpunk / Neon theme · React · Framer Motion · Fully animated

## 🚀 Quick Start

```bash
cd jay-portfolio
npm install
npm start
```

Opens at `http://localhost:3000`

---

## 📁 File Structure

```
jay-portfolio/
├── public/
│   ├── index.html
│   └── resume.pdf          ← ⭐ DROP YOUR RESUME PDF HERE
│
├── src/
│   ├── data/
│   │   └── portfolioData.js  ← ⭐ EDIT ALL YOUR INFO HERE
│   │
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── CustomCursor.jsx / .css
│   │
│   ├── styles/
│   │   └── globals.css       ← Theme variables & global styles
│   │
│   ├── App.jsx
│   └── index.js
│
└── package.json
```

---

## ✏️ How to Customize

### 1. Your personal info (`src/data/portfolioData.js`)
Edit **everything** in this one file:
- `personalInfo` — name, title, bio, email, phone, social links
- `skills` — add/remove skills with proficiency levels (0–100)
- `experience` — work history with role, company, descriptions
- `projects` — all your projects with GitHub links
- `education` — your degree(s)
- `stats` — the 4 animated counter cards in the hero

### 2. Your photo
Replace `personalInfo.avatar` with:
- A direct image URL, OR
- Place `profile.jpg` in `src/assets/` and import it in `Hero.jsx`

### 3. Your resume
Drop your `resume.pdf` into the `public/` folder.
The Download button and navbar link will work automatically.

### 4. Contact form
The form is wired up but needs a backend. Options:
- **EmailJS** (easiest, free): https://www.emailjs.com
- **Formspree**: https://formspree.io
- **Your own API**

In `Contact.jsx`, replace the `handleSubmit` function body.

### 5. Instagram handle
Update `personalInfo.social.instagram` in portfolioData.js with your actual URL.

---

## 🎨 Theme Customization (`src/styles/globals.css`)

Change CSS variables at the top:
```css
--neon-cyan:   #00f5ff;   /* Main accent */
--neon-purple: #b400ff;   /* Secondary accent */
--neon-green:  #00ff88;   /* Status/open badge */
--bg-primary:  #020408;   /* Main background */
```

---

## 📦 Deploy

```bash
npm run build
```
Then deploy the `build/` folder to:
- **Vercel** (recommended): `vercel --prod`
- **Netlify**: drag & drop `build/` folder
- **GitHub Pages**: use `gh-pages` package

---

## 🛠 Tech Stack
- React 18
- Framer Motion (animations)
- React Type Animation (typewriter)
- React CountUp (stats counters)
- React Intersection Observer (scroll triggers)
- React Icons
- Google Fonts: Orbitron, Share Tech Mono, Rajdhani
