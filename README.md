# Raman Dahal — 3D Portfolio Website

A premium, fully responsive 3D portfolio built with **React + Vite + Tailwind CSS + Framer Motion + Three.js**, with an app-style ⋮ menu, animated page transitions, and a working EmailJS contact form.

---

## 1. Create the project in VS Code

Open VS Code, then open a terminal (**Terminal → New Terminal**) and go to the folder where you unzipped this project:

```bash
cd path/to/portfolio
```

> Tip: in VS Code you can also use **File → Open Folder** and select the `portfolio` folder, then open the terminal — it will already be in the right place.

## 2. Install dependencies

You need **Node.js 18 or newer** installed (download from https://nodejs.org). Then run:

```bash
npm install
```

This downloads every library listed in `package.json`.

## 3. Run locally

```bash
npm run dev
```

Open the URL it prints (usually **http://localhost:5173**) in your browser. The site will hot-reload as you edit files.

To make a production build and preview it:

```bash
npm run build
npm run preview
```

## 4. Connect GitHub

1. Create a new **empty** repository on https://github.com (e.g. `raman-portfolio`). Do not add a README there.
2. In the VS Code terminal, run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit: Raman Dahal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/raman-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 5. Deploy on Netlify

1. Go to https://app.netlify.com and sign in (you can sign in with GitHub).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and select your `raman-portfolio` repository.
4. Netlify auto-detects the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. In about a minute your site is live with a free `*.netlify.app` URL.

Every time you `git push`, Netlify redeploys automatically.

## 6. Configure EmailJS (makes the contact form send real emails)

The form sends messages to **ramandahal1010@gmail.com** using EmailJS.

1. Create a free account at https://www.emailjs.com.
2. **Add an Email Service** (e.g. Gmail) → copy the **Service ID**.
3. **Create an Email Template**. In the template, use these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message
   Set the template's **To Email** field to `ramandahal1010@gmail.com`.
   Copy the **Template ID**.
4. In **Account → General**, copy your **Public Key**.
5. Open `src/sections/Contact.jsx` and replace the three placeholders at the top:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

6. Save, commit, and push:

```bash
git add .
git commit -m "Configure EmailJS"
git push
```

Netlify redeploys and the contact form now delivers email.

## 7. Upload your resume.pdf

A generated `resume.pdf` is already in the `public/` folder and the **Download Resume** button works immediately.

To use your own resume:
1. Replace `public/resume.pdf` with your file (keep the exact name `resume.pdf`).
2. Optionally replace `public/profile.svg` with your photo (rename it `profile.jpg` and update the `src` in `src/sections/Home.jsx` to `/profile.jpg`).
3. Commit and push:

```bash
git add .
git commit -m "Add personal resume and photo"
git push
```

## 8. Final folder structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.svg          # replace with your photo if desired
│   └── resume.pdf           # downloadable resume
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── NavMenu.jsx
│   │   └── TiltCard.jsx
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Additional.jsx
│   │   ├── References.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

Built with care. Enjoy your premium finance-tech portfolio.
