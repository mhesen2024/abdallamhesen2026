# Abdalla Mhesen — Portfolio

A modern, animated single-page portfolio built with **React 19** and **Vite**. It features smooth scrolling, WebGL/Canvas backgrounds, neon glassmorphism styling, and a working contact form powered by FormSubmit.

## Features

- **Hero** section with animated background, intro, tagline, and call-to-action buttons.
- **About** section with bio and skills overview.
- **Skills** grid with an infinite logo loop.
- **Projects** showcase with filtering, list/detail views, and an image gallery.
- **Contact** form with live validation states (sending / sent / error) via FormSubmit AJAX.
- Smooth scrolling with [Lenis](https://github.com/darkroomengineering/lenis).
- Motion and transitions with [Framer Motion](https://www.framer.com/motion/).
- WebGL effects using [OGL](https://github.com/oframe/ogl) and [Three.js](https://threejs.org/).

## Tech Stack

| Category   | Tools |
|------------|-------|
| Framework  | React 19, React Router DOM 7 |
| Build Tool | Vite 8 |
| Styling    | Tailwind CSS 4 |
| Animation  | Framer Motion, Lenis |
| Graphics   | Three.js, OGL |
| Icons      | lucide-react, react-icons |
| HTTP       | Axios |
| Linting    | ESLint 9 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
git clone <repository-url>
cd portofoloio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run dev
```

## Project Structure

```
src/
├── App.jsx                 # Root app & section layout
├── main.jsx                # Entry point
├── index.css               # Global styles (Tailwind)
├── LightRays.jsx           # Background light-ray effect
├── assets/                 # Images
└── component/
    ├── Navbar/             # Navigation bar
    ├── Hero/               # Landing hero section
    ├── About/              # Bio + skills overview
    ├── Skills/             # Skill cards, grid, logo loop
    ├── Projects/           # Project list, details, gallery, data
    ├── Contact/            # Contact form & info
    ├── Footer.jsx
    ├── LogoLoop.jsx
    ├── MagicRings.jsx
    └── SectionHeading.jsx
```

## Contact Form

The contact form (`src/component/Contact/ContactForm.jsx`) sends submissions through
[FormSubmit](https://formsubmit.co/) using its AJAX endpoint. The endpoint uses a
FormSubmit token (instead of a raw email) to keep the email address out of the source code.

> **Note:** A FormSubmit form must be activated once by clicking the confirmation link
> in the email sent on the first submission before messages are delivered.

## License

This project is for personal portfolio use.
