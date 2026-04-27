# react-link-in-bio

<p>
  <img alt="React"   src="https://img.shields.io/badge/react-19-61DAFB?logo=react&logoColor=white">
  <img alt="Vite"    src="https://img.shields.io/badge/vite-7-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
  <img alt="Status"  src="https://img.shields.io/badge/status-stable-green">
</p>

> Fork-ready link-in-bio SPA — React 19 + Vite + Tailwind v4, deploy en Vercel con función serverless para Instagram Graph API.

Pensado como punto de partida para páginas personales, landings de creadores, vidrieras de producto. Se forkea, se editan los datos en `src/content/`, se deployea.

El repo viene con un **demo completo** (persona ficticia _Sam Carter_, coach online) — corré `npm run dev` y vas a ver el sitio funcionando con datos coherentes en cada sección. Reemplazá los archivos de `src/content/` con los tuyos al forkear.

## Features

- React 19 + Vite 7 + Tailwind CSS v4 (browser plugin)
- Routing client-side con React Router v7
- Modo claro/oscuro con `ThemeProvider`
- Lazy loading + ErrorBoundary por ruta
- Animaciones con Framer Motion + intersection observer
- Sección Instagram con función serverless (`api/instagram.js`) — el token nunca se expone al cliente
- Componentes intent-based (`layout/`, `ui/`, `data/`, `navigation/`, `feedback/`)
- ESLint + Prettier configurados, accesibilidad (`jsx-a11y`)

## Quickstart

### Requirements

- Node.js 18+
- (Opcional) [Vercel CLI](https://vercel.com/cli) para correr la función `api/instagram.js` en local

### Install

```bash
git clone https://github.com/GDelpo/react-link-in-bio.git
cd react-link-in-bio
npm install
```

### Configure

```bash
cp .env.example .env
# Editar .env y completar INSTAGRAM_ACCESS_TOKEN si vas a usar la sección Instagram
```

Customizar el contenido en `src/content/`:

| Archivo | Qué editar |
|---------|-----------|
| `personalData.js` | Nombre, fecha de nacimiento, ciudad, email, teléfono |
| `profile.js` | Nombre público, títulos, descripción, foto, redes sociales |
| `contact.js` | Mensaje pre-armado de WhatsApp + CTA "buscás algo más" |
| `programs.js` | Productos / programas / servicios — array con precios y descripciones |
| `faq.js` | Preguntas frecuentes |

Reemplazar `public/profile-placeholder.svg` por una foto real (o cambiar la URL en `profile.js` por una externa).

### Run

```bash
npm run dev          # Vite dev server (sin función Instagram)
vercel dev           # Vite + función serverless emulada (requiere CLI)
```

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Build de producción a `dist/` |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint con `--max-warnings 0` |
| `npm run lint:fix` | ESLint con autofix |
| `npm run format` | Prettier sobre `src/**/*.{js,jsx,css,md}` |

## Configuration

| Variable | Descripción |
|----------|-------------|
| `INSTAGRAM_ACCESS_TOKEN` | Token de Instagram Graph API. Sólo server-side. |

## Architecture

```
react-link-in-bio/
├── api/
│   └── instagram.js              # Vercel serverless — proxy a Instagram Graph API
├── public/                       # Assets estáticos (favicon, profile-placeholder.svg)
├── src/
│   ├── App.jsx, main.jsx
│   ├── components/
│   │   ├── layout/               # PageHeader, PageContainer, Sidebar, Navbar, Footer
│   │   ├── ui/                   # AnimatedSection, ThemeToggle, FloatingButtons, Spinner
│   │   ├── data/                 # ProgramsSection, ProgramDetailModal, InstagramSection
│   │   ├── navigation/           # CircularSocialLinks
│   │   └── feedback/             # ErrorBoundary, LoadingFallback
│   ├── config/
│   │   ├── routes.js             # Fuente única de rutas + nav
│   │   ├── pageSections.js       # Secciones renderizadas en /links
│   │   └── navigation.js         # Helpers de navegación
│   ├── content/                  # Datos del sitio — editar al hacer fork
│   ├── contexts/                 # ThemeProvider
│   ├── hooks/                    # useDocumentTitle, intersection, etc.
│   ├── pages/                    # Home, Programs, ProgramDetail, Faqs, Redes, Links, About
│   ├── services/                 # API client + Instagram service
│   ├── styles/, utils/
└── vercel.json                   # Rewrite SPA `/(.*)` → `/`
```

### Aliases (`vite.config.js`)

`@components`, `@contexts`, `@hooks`, `@layouts`, `@content`, `@pages`, `@config`, `@services`, `@` → `src/`

## Deployment (Vercel)

1. Conectar el repo a Vercel.
2. Configurar `INSTAGRAM_ACCESS_TOKEN` en Project Settings → Environment Variables (si vas a usar la sección Instagram).
3. Deploy. Vercel sirve el SPA + la función `/api/instagram` automáticamente.

## Notas

- UI strings en español rioplatense (botones, FAQ, CTAs). Traducir es un find/replace dirigido — todos los strings UI están en `src/content/` y `src/config/pageSections.js`.
- Sin función Instagram (`vite` solo, sin `vercel dev`), la sección muestra un estado vacío grácil — no rompe el resto.
- El template **no incluye** backend de admin / CMS — el contenido se edita por código y se deployea. Para casos con CMS dinámico, hacé fork y agregá la capa que necesites (Sanity, Strapi, Firestore, etc.).

## License

[MIT](LICENSE) © 2026 Guido Delponte
