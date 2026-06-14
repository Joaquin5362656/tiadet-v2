# TIADET — Agent Instructions

## Stack

React 18, React Router DOM 6, Vite 5. Plain CSS (no preprocessor, no CSS-in-JS). No backend — all data is static in `src/data/datos.js` and auth is mock in-memory + localStorage.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (Vite) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

No lint, typecheck, or test commands exist.

## Key architecture

- Entry: `src/main.jsx` → `src/App.jsx` (routes + auth wrapper)
- Router: `BrowserRouter` with public/login route and 7 private routes
- Auth: `AuthContext.jsx` — stores users in `localStorage` (key `tiadet_usuarios`), session in `tiadet_usuario`. Exposes `login`, `loginInvitado`, `register`, `logout`, `actualizarFoto`.
- Styling: CSS custom properties in `src/styles/variables.css`, loaded via `global.css`. Each component has its own CSS file alongside the JSX (e.g. `Login.jsx` + `Login.css`).
- Guest mode: users with `rol: 'invitado'` see only "Modo invitado" label in navbar (no nav links).

## Important quirks

- `vite.config.js` sets `base: './'` — relative asset paths in production.
- No `Access-Control` headers needed since there's no backend API.
- Spanish locale: UI strings, comments, and CSS class naming are in Spanish.
- Most pages are placeholders. Only `Login`, `Home`, and `Participantes` are implemented.
- Mock credentials shown on login page: alumno `12345678` / `1234`, docente `prof001` / `prof`.
- Test users are hardcoded in `datos.js` (key `USUARIOS_INICIALES`).

## Conventions

- Import CSS files directly (e.g. `import './Login.css'`)
- Use `<Navbar />` as first child of every page component
- Always wrap with `<AuthProvider>` at root — already done in `App.jsx`
- Pages use `.page-content` container div (max-width 1200px, centered)
