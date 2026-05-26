# Geoscience Python & ML Curriculum — Offline Website

## How to view

### Option 1 — Direct browser (simplest)
Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
No server needed for basic browsing.

### Option 2 — Local web server (recommended)
Run a simple HTTP server from the project folder:

**Python 3:**
```
cd geoscience-curriculum
python -m http.server 8080
```
Then open: http://localhost:8080

**Node.js (npx):**
```
npx serve geoscience-curriculum
```

**VS Code:**
Install the "Live Server" extension and click "Go Live".

## Contents

```
geoscience-curriculum/
├── index.html        Main curriculum page
├── css/
│   └── style.css     All styles (light + dark mode)
├── js/
│   └── main.js       Tab switching and interactivity
└── README.md         This file
```

## Features
- Fully offline — no CDN dependencies, no external requests
- Light and dark mode (follows system preference)
- Interactive year tabs and expandable course cards
- Keyboard accessible
- Responsive layout for desktop and mobile

## Curriculum overview
- Year 1: Foundations of Computational Geoscience (GEO 101–102)
- Year 2: Applied Data Science for Geoscience (GEO 201–203)
- Year 3: Machine Learning & Domain-Specific Applications (GEO 301–303)
- Year 4/Honours: Deep Learning & Advanced Workflows (GEO 401–403)
- Postgraduate: Specialised Research-Level Courses (PGS 501–506)
