# Unit 20 Challenge — React Portfolio (Vite + React Router)

You’re going to build a **real portfolio site** with React. Not a template. Not a clone. Something you’d actually send to an employer.

This challenge is intentionally flexible: you’ll meet a clear set of **minimum requirements**, then you’ll customize the look, content, and personality so it feels like _you_.

---

## What You’re Building

A **single-page application (SPA)** portfolio that includes:

- A consistent layout (Header + Main Content + Footer)
- Multiple “pages” using **React Router**
- A project/work section driven by data (not copy/paste components)
- A contact section (no backend required yet)
- A resume/skills section
- A deployed site on **Netlify**

---

## Learning Goals

By the end, you should be able to:

- Build a React app with reusable components
- Use `react-router-dom` to render multiple routes
- Render repeated UI from an array of project data
- Validate form inputs with React state
- Deploy a Vite app to Netlify
- Present yourself professionally as a developer

---

## User Story

```md
AS AN employer reviewing junior developers  
I WANT to quickly understand a candidate’s skills and see real projects  
SO THAT I can decide whether to interview them
```

---

## Acceptance Criteria (Minimum Requirements)

### Layout + Navigation

```md
GIVEN a React portfolio SPA  
WHEN I load the site  
THEN I see a Header, main content area, and Footer

WHEN I view the Header  
THEN I see the developer’s name/brand and a navigation menu

WHEN I use the navigation  
THEN the URL updates and the page content updates without a full reload
```

### Required Routes

Your site must include **at least** these routes (you may rename labels):

- **About**
- **Portfolio** (or “Projects” / “Work”)
- **Contact**
- **Resume** (or “Skills”)

```md
WHEN the site loads for the first time  
THEN the About route is shown by default
```

---

### About Route

```md
WHEN I view the About page  
THEN I see an avatar or professional photo  
AND I see a short bio written in your own words
```

This should sound human and authentic — not generic.

---

### Portfolio / Work Route

```md
WHEN I view the Portfolio page  
THEN I see a list of projects rendered from an array of data  
AND each project includes:

- Project title
- Screenshot or GIF
- Link to deployed app (or demo video)
- Link to GitHub repository
```

**Minimum projects:** 3  
**Recommended:** 5–6

> Tip: If something isn’t deployable, record a short demo video.

---

### Contact Route (No Backend Required)

```md
WHEN I view the Contact page  
THEN I see a form with:

- Name
- Email
- Message

WHEN I leave a required field empty and blur the input  
THEN I see a required field message

WHEN I enter an invalid email  
THEN I see an email validation message
```

The form does **not** need to submit anywhere for this challenge.

---

### Resume Route

```md
WHEN I view the Resume page  
THEN I see:

- A downloadable resume link (PDF recommended)
- A list of technical proficiencies
```

---

### Footer

```md
WHEN I view the Footer  
THEN I see icon or text links to:

- GitHub
- LinkedIn
- One additional platform (Portfolio blog, X/Twitter, Stack Overflow, etc.)
```

---

### Deployment

```md
THEN the site is deployed to Netlify  
AND the deployed application loads without console errors
```

---

## Make It Yours (Required)

To avoid identical portfolios, you must customize:

- Your **brand name or headline**
- Your **color palette**
- Your **typography choices**
- All written content (no placeholder text)
- Your own project list
- At least **one unique enhancement**

### Unique Enhancement (Pick One)

- Dark mode toggle
- Small animation (CSS or Framer Motion)
- Skills badges or tech icons
- “Currently Learning” section
- Featured project section
- Embedded Loom demo video
- Simple blog route (2 placeholder posts is fine)

---

## Technical Requirements

- React (Vite)
- `react-router-dom`
- Functional components + hooks
- Reusable `Project` component
- Clean file structure
- Deployed to Netlify

---

## Suggested Component Structure (Recommended)

```
src/
  components/
    Header.jsx
    Nav.jsx
    Footer.jsx
    ProjectCard.jsx
  pages/
    About.jsx
    Portfolio.jsx
    Contact.jsx
    Resume.jsx
  App.jsx
```

---

## Getting Started (Vite)

1. Create the app:

```bash
npm create vite@latest
# choose: React + JavaScript
cd your-project
npm install
npm run dev
```

2. Install React Router:

```bash
npm install react-router-dom
```

3. Recommended scripts:

```json
"scripts": {
  "dev": "vite",
  "start": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## Netlify Deployment (Vite)

In Netlify:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

If routes fail on refresh, create a file:

`public/_redirects`

```txt
/*    /index.html   200
```

---

## Design + Quality Checklist

Before submitting:

- Responsive layout (mobile + desktop)
- Active navigation highlight
- No broken images
- No console errors
- Real project screenshots
- Clear spacing and readable typography
- Custom color palette (not default styles)
- Clean commit history

---

## Grading Breakdown

### Technical Requirements — 40%

- React + Router working
- Reusable Project component
- Form validation implemented
- Clean structure

### Deployment — 30%

- Live Netlify link
- Working production routes
- GitHub repository submitted

### Design / UX — 20%

- Polished layout
- Mobile-friendly
- Clear branding and personality

### Repository Quality — 10%

- Clear commit messages
- Organized file structure
- Strong README

---

## README Requirements (In Your Repo)

Your project README must include:

- Project name + short pitch
- Screenshot or GIF
- Deployed link
- Tech stack
- Installation steps (`npm install`, `npm run dev`)
- Links to GitHub + LinkedIn

---

## Submission

Submit BOTH:

1. Netlify live URL
2. GitHub repository URL

---

Build something you’re proud to show. This is no longer just homework — it’s your professional presence.
