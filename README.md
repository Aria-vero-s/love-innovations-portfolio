# Love Innovations Portfolio

A lightweight, responsive, and visually engaging portfolio website for a multi-skilled tradesman specializing in houseboat maintenance, property renovation, and bespoke woodworking. The site is designed as a static HTML/CSS/JS project with modular JavaScript components and Tailwind CSS.

## 🌐 Live Preview

> _Domain Link Coming soon..._  
[live link](https://aria-vero-s.github.io/love-innovations-portfolio/)

To deploy locally, follow the instructions below.

---

## 📁 Project Structure

```
.
├── index.html                   # Homepage (landing with navigation and hero section)
├── marine-projects.html        # Marine services portfolio page
├── property-projects.html      # Property renovation portfolio page
├── bespoke-projects.html       # Custom woodwork portfolio page
├── project-detail.html         # Dynamic single project view
├── privacy-policy.html         # Privacy policy page
├── terms-of-service.html       # Terms and conditions
├── styles/
│   └── globals.css             # Global Tailwind styles
├── js/
│   ├── main.js                 # Script loader
│   ├── home.js                 # Homepage interactions
│   ├── project-detail.js       # Fullscreen modal, video, image logic
│   ├── marine-projects.js      # Data loader for marine projects
│   ├── property-projects.js    # Data loader for property projects
│   ├── bespoke-projects.js     # Data loader for custom builds
│   ├── utils.js                # Utility functions
│   ├── data/
│   │   └── projects.js         # JSON-like project data
│   ├── components/             # Modular components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── Testimonials.js
│   │   └── ImageWithFallback.js
│   └── shared/
│       ├── navigation.js       # Mobile nav, theme toggle
│       └── theme.js            # Dark/light mode support
├── fonts/
│   ├── Ethnocentric-Regular.woff
│   └── Ethnocentric-Italic.woff
├── images/                     # All project media and profile assets
│   ├── 01_marine/
│   ├── 02_property/
│   ├── 03_bespoke/
│   └── profile.jpg, flight2.jpeg
└── templates/                  # (reserved for future templating/partials)
```

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure and accessibility
- **Tailwind CSS** – Utility-first styling
- **JavaScript** – Vanilla JS with modular ES6 components
- **Lucide Icons** – Icon library for UI elements
- **Responsive Design** – Mobile-first and accessible layout

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aria-vero-s/love-innovations-portfolio.git
cd love-innovations-portfolio
```

### 2. Launch with Live Server

You can use the **Live Server** extension in VSCode or run a local server:

```bash
# With Python 3
python -m http.server
```

Then open `http://localhost:8000` in your browser.

---

## Features

- ⚓ Hero section with parallax effect
- Modular project listing per category: marine, property, bespoke
- Fullscreen media viewer for project images and video
- Dark mode toggle with persistent preference
- Mobile navigation with smooth transitions
- Legal pages: Privacy & Terms

---

## Future Improvements

- Add contact form with Formspree integration
- CMS or static site generator integration (e.g., Eleventy)
- SEO and meta tag optimization

---

## 📄 License

All images and video content are property of the business owner. Not for commercial redistribution.

---

## 🤝 Credits

Developed by **Ariane Saulnier**  
Design, layout, and structure handcrafted for **Love Innovations** (Ben Love)

---
