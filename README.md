# Hackathon 2026 Interactive Web Platform

A lightweight, high-performance landing page engineered for tech competitions and hackathons. Built with custom CSS architecture and modular Vanilla JavaScript, it offers a responsive UI with a dark theme and translucent glassmorphism interface elements.

## Technical Highlights

- **Dynamic Navigation Bar**: Features scroll-aware background opacity adjustments, custom CSS hover indicators, and an immersive glassmorphism filter to maintain legibility over media contents.
- **Asynchronous Countdown Engine**: Real-time event timer that calculates precise time intervals down to the second, automatically terminating the polling loop and updating the DOM upon event start.
- **Canvas-based Particle Simulation**: Built on top of the HTML5 2D Context API, rendering vector-based particles with frame-rate optimized animation loops, random properties, and vector boundary detection.
- **Modal Registration Interface**: An off-canvas side panel that manages focus trap, disables body scroll movement during active state, and supports keyboard shortcut dismissal (ESC key).
- **Context-Sensitive Form Fields**: Conditional input rendering logic that dynamically modifies validation constraints (`required`) and triggers input auto-focus upon specific dropdown selections.
- **Single-State Accordion**: An event-driven FAQ module that restricts simultaneous expansion, keeping the visual hierarchy organized and clean.
- **Viewport Intersection Observers**: Uses native web APIs to detect scroll positions and apply GPU-accelerated CSS transforms as elements enter the visual frame.

## Technology Stack

- **Structure**: Semantic HTML5 for proper document markup and web accessibility.
- **Styling**: CSS3 introducing native variables, dynamic grid systems, and backdrop filters.
- **Scripting**: Modern Vanilla JavaScript (ES6+) for DOM manipulation and state management without relying on external frameworks.
- **Graphics**: HTML5 Canvas API for interactive 2D background rendering.
- **Typography**: Embedded Tajawal font family via Google Fonts CDN.

## System Configuration & Themes

The design token system relies on structured CSS custom properties located at the root level:

- **Primary Color (`--primary`)**: `#f59e0b` — Core action color and dynamic canvas elements.
- **Secondary Color (`--secondary`)**: `#ef4444` — Gradient endpoints and highlight indicators.
- **Accent Color (`--accent`)**: `#0ea5e9` — Contrasting visual callouts.
- **Surface Shades (`--dark` / `--dark2`)**: `#111827` / `#1f2937` — Structural backgrounds and drawer containers.
- **Glass Layer (`--card-bg`)**: `rgba(255, 255, 255, 0.04)` — Translucent panel backdrop.

## Project Structure

```text
Hackathon-website
├─ css
│  └─ style.css
├─ index.html
└─ js
   └─ main.js
```