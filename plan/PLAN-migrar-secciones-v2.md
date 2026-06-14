# Plan: Migrar secciones de tiadet-v2 al proyecto principal (tiadet-v3)

> **Proyecto:** TIADET (tiadet-v3)
> **Fecha:** 14 de junio de 2026
> **Estado:** Pendiente

## Contexto general

El proyecto principal (tiadet-v3) tiene 5 rutas con placeholders ("Sección en desarrollo") que deben ser reemplazadas por implementaciones funcionales. Existe una versión anterior (tiadet-v2) que ya tiene estas secciones completamente implementadas con datos, componentes y estilos. Se requiere migrar las secciones de Foros, Actividades, TFI, Área Personal y Extras desde tiadet-v2, adaptando los estilos al sistema de diseño de v3 (variables CSS, Navbar en lugar de Layout + Sidebar) y eliminando todos los emojis del contenido.

## Suposiciones y restricciones

- No se modifica nada de la carpeta `tiadet-v2` — solo se lee como fuente.
- No se tocan las secciones existentes (Home, Login, Participantes, Navbar, AuthContext).
- No se implementa la sección Módulos (sigue como placeholder).
- Los componentes de v2 usan `<Layout>` (que renderiza `<Sidebar>`) — en v3 se reemplaza por `<Navbar />` + `<div className="page-content">`.
- Las variables CSS de v2 (`--accent`, `--text-2`, `--surface`, etc.) se mapean a las de v3 (`--color-primary`, `--color-text-secondary`, `--color-surface`, etc.).
- Los emojis se eliminan tanto de los datos como del JSX.
- Las clases de badge cambian: `badge-green` → `badge-success`, `badge-blue` → `badge-primary`, `badge-warn` → `badge-warning`.

---

## Subtareas

### ST-01 — Actualizar datos estáticos en `datos.js`

**Problema que resuelve:**
Los arreglos `FOROS_INICIALES`, `ACTIVIDADES_INICIALES`, `TFI_ENUNCIADO` y `EVENTOS` en v3 tienen menos items y datos menos completos que los de v2. Las nuevas páginas necesitan los datos completos de v2 (9 foros, 7 actividades, descripción larga de TFI, 7 eventos).

**Estrategia de solución:**
Reemplazar los 4 arreglos/objetos en `src/data/datos.js` con sus equivalentes de v2, eliminando el campo `icono` (emojis) de cada foro y limpiando cualquier emoji residual en textos. No se modifican `USUARIOS_INICIALES`, `ANUNCIOS`, `NOVEDADES` ni `MODULOS`.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Reemplazar `FOROS_INICIALES` (6→9 foros, sin campo `icono`), `ACTIVIDADES_INICIALES` (5→7), `TFI_ENUNCIADO` (descripción + detalles completos), `EVENTOS` (5→7) |

**Pasos de implementación:**

1. Copiar `FOROS_INICIALES` desde `tiadet-v2/src/data/datos.js` eliminando el campo `icono` de cada objeto.
2. Copiar `ACTIVIDADES_INICIALES` desde v2 — incluye 7 actividades con preguntas de encuesta completas.
3. Copiar `TFI_ENUNCIADO` desde v2 — descripción multilínea, 6 requisitos, 5 criterios con peso.
4. Copiar `EVENTOS` desde v2 — 7 eventos en lugar de 5.
5. Verificar que no haya emojis en ningún texto de los datos copiados.

---

### ST-02 — Crear página Foros (`Foros.jsx` + `Foros.css`)

**Problema que resuelve:**
La ruta `/foros` muestra "Sección en desarrollo". Debe mostrar el listado de foros con filtros, vista de hilo con mensajes, y posibilidad de responder.

**Estrategia de solución:**
Crear `src/pages/Foros.jsx` copiando la lógica de `tiadet-v2/src/pages/Foros.jsx`, reemplazando `<Layout>` por `<Navbar />` + `page-content`, eliminando emojis, y adaptando clases CSS. Crear `src/pages/Foros.css` con los estilos de v2 traducidos a variables CSS de v3.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR | `src/pages/Foros.jsx` | Componente completo de foros (lista + hilo + reply) |
| CREAR | `src/pages/Foros.css` | Estilos adaptados a variables CSS de v3 |

**Pasos de implementación:**

1. Crear `src/pages/Foros.jsx` con la misma lógica de estado que v2 (forosData, foroId, texto, filtroTipo).
2. Reemplazar `<Layout title="Foros">` por `<> <Navbar /> <div className="page-content">`.
3. Eliminar import de `Layout`, importar `Navbar` desde `../components/Navbar`.
4. Eliminar la constante `GRUPOS` (no se usa).
5. Remover emojis: eliminar `foro.icono`, `💬` en empty state, `🔒` en badges.
6. Reemplazar `badge-warn` por `badge-warning` en JSX.
7. Crear `src/pages/Foros.css` traduciendo variables:
   - `var(--accent)` → `var(--color-primary)`
   - `var(--accent-lt)` → `var(--color-primary-light)`
   - `var(--text-2)` → `var(--color-text-secondary)`
   - `var(--text-3)` → `var(--color-text-tertiary)`
   - `var(--surface)` → `var(--color-surface)`
   - `var(--border)` → `var(--color-border)`
   - `var(--bg)` → `var(--color-bg)`
   - `var(--radius)` → `var(--radius-md)`

---

### ST-03 — Crear página Actividades (`Actividades.jsx` + `Actividades.css`)

**Problema que resuelve:**
La ruta `/actividades` muestra "Sección en desarrollo". Debe mostrar el listado de actividades con barra de progreso, filtros, acordeón, encuestas, subida de archivos y notas.

**Estrategia de solución:**
Migrar desde v2 reemplazando Layout y eliminando emojis en los íconos de tipo de actividad y en el área de archivos.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR | `src/pages/Actividades.jsx` | Componente completo de actividades |
| CREAR | `src/pages/Actividades.css` | Estilos adaptados a v3 |

**Pasos de implementación:**

1. Crear `src/pages/Actividades.jsx` con igual lógica de estado que v2.
2. Reemplazar `<Layout title="Actividades">` por `<> <Navbar /> <div className="page-content">`.
3. Eliminar import de `Layout`, importar `Navbar` desde `../components/Navbar`.
4. Reemplazar emojis en `TIPO_CFG`: usar letras o textos simples.
5. Reemplazar `📎` en file-chosen por texto "Archivo:".
6. Reemplazar `✓` en encuesta-enviada por texto "OK".
7. Reemplazar `badge-green` → `badge-success`, `badge-warn` → `badge-warning`.
8. Crear `src/pages/Actividades.css` con la misma traducción de variables que ST-02.
9. Prefijar clases de filtros como `.act-filtro-btn`, `.act-filtro-active` para evitar conflictos con Foros.

---

### ST-04 — Crear página TFI (`TFI.jsx` + `TFI.css`)

**Problema que resuelve:**
La ruta `/tfi` muestra "Sección en desarrollo". Debe mostrar el enunciado completo del TFI con requisitos, criterios de evaluación, y formulario de entrega.

**Estrategia de solución:**
Migrar desde v2 con la misma transformación Layout → Navbar + eliminación de emojis.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR | `src/pages/TFI.jsx` | Componente de TFI (enunciado + entrega) |
| CREAR | `src/pages/TFI.css` | Estilos adaptados a v3 |

**Pasos de implementación:**

1. Crear `src/pages/TFI.jsx` copiando lógica de v2.
2. Reemplazar `<Layout title="...">` por `<> <Navbar /> <div className="page-content">`.
3. Eliminar emojis: `📅` en badge, `📎` en file-chosen, `📄` y `🔗` en recursos de apoyo.
4. Reemplazar `badge-warn` → `badge-warning`, `badge-blue` → `badge-primary`.
5. Crear `src/pages/TFI.css` con la traducción de variables.

---

### ST-05 — Crear página Área Personal (`AreaPersonal.jsx` + `AreaPersonal.css`)

**Problema que resuelve:**
La ruta `/area-personal` muestra "Sección en desarrollo". Debe mostrar perfil del usuario, progreso, calendario de eventos y notificaciones.

**Estrategia de solución:**
Migrar desde v2. Esta página usa `useAuth` (ya existe en v3), `EVENTOS` y `ACTIVIDADES_INICIALES` (datos actualizados en ST-01).

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR | `src/pages/AreaPersonal.jsx` | Componente de área personal |
| CREAR | `src/pages/AreaPersonal.css` | Estilos adaptados a v3 |

**Pasos de implementación:**

1. Crear `src/pages/AreaPersonal.jsx` copiando lógica de v2.
2. Reemplazar `<Layout title="Área Personal">` por `<> <Navbar /> <div className="page-content">`.
3. Eliminar emojis: `📷` en label de foto, `📤`/`📝`/`🎓` en tipos de calendario, `ℹ`/`⚠`/`✓` en notificaciones.
4. Reemplazar `var(--info)` y `var(--info-lt)` por `var(--color-primary)` y `var(--color-primary-light)` en CSS (v3 no tiene colores `info`).
5. Crear `src/pages/AreaPersonal.css`.

---

### ST-06 — Crear página Extras (`Extras.jsx`)

**Problema que resuelve:**
La ruta `/extras` muestra un texto breve. Debe mostrar un diseño más completo con el mismo mensaje pero usando la estructura de página de v3.

**Estrategia de solución:**
Crear página simple (solo 22 líneas en v2) reemplazando Layout y eliminando el emoji `✨`.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| CREAR | `src/pages/Extras.jsx` | Página de extras (sin CSS propio) |

**Pasos de implementación:**

1. Crear `src/pages/Extras.jsx` reemplazando `<Layout>` por `<Navbar />` + `page-content`.
2. Eliminar el emoji `✨` del empty-state-icon.
3. No requiere CSS propio (usa clases globales `.card`, `.empty-state`, `.empty-state-text`).

---

### ST-07 — Actualizar `App.jsx` y limpiar `Placeholders.jsx`

**Problema que resuelve:**
`App.jsx` importa todas las páginas desde `Placeholders.jsx`. Después de crear los archivos individuales, hay que actualizar los imports.

**Estrategia de solución:**
Cambiar imports en `App.jsx` para que cada ruta use su nuevo componente individual. Reducir `Placeholders.jsx` para que solo exporte `Modulos`.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/App.jsx` | Cambiar imports de Placeholders a componentes individuales |
| MODIFICAR | `src/pages/Placeholders.jsx` | Eliminar exports de Foros, Actividades, TFI, AreaPersonal, Extras (solo dejar Modulos) |

**Pasos de implementación:**

1. En `App.jsx`, reemplazar el import único por imports individuales.
2. En `Placeholders.jsx`, eliminar las 5 funciones exportadas, dejando solo `Modulos`.

---

### ST-08 — Agregar utilidades CSS a `global.css`

**Problema que resuelve:**
Las páginas migradas usan las clases `.page-title` y `.page-subtitle` que existen en v2 pero no en v3. Sin estas clases, los títulos de página no tienen estilo.

**Estrategia de solución:**
Agregar las dos clases utilitarias a `src/styles/global.css` siguiendo el mismo patrón de las utilidades existentes.

**Archivos a modificar / crear:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/styles/global.css` | Agregar `.page-title` y `.page-subtitle` |

**Pasos de implementación:**

1. Agregar al final de `global.css` (antes del scrollbar):
   ```css
   .page-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); margin-bottom: var(--spacing-xs); }
   .page-subtitle { font-size: var(--font-size-sm); color: var(--color-text-tertiary); margin-bottom: var(--spacing-2xl); }
   ```

---

## Tablero de progreso

| ID | Subtarea | Estado | Responsable | Notas |
|----|----------|--------|-------------|-------|
| ST-01 | Actualizar datos estáticos (`datos.js`) | ⬜ Pendiente | — | Reemplazar 4 arreglos, sin emojis |
| ST-02 | Crear página Foros (`Foros.jsx` + `Foros.css`) | ⬜ Pendiente | — | Migrar desde v2, adaptar CSS |
| ST-03 | Crear página Actividades (`Actividades.jsx` + `Actividades.css`) | ⬜ Pendiente | — | Migrar desde v2, adaptar CSS |
| ST-04 | Crear página TFI (`TFI.jsx` + `TFI.css`) | ⬜ Pendiente | — | Migrar desde v2, adaptar CSS |
| ST-05 | Crear página Área Personal (`AreaPersonal.jsx` + `AreaPersonal.css`) | ⬜ Pendiente | — | Migrar desde v2, adaptar CSS |
| ST-06 | Crear página Extras (`Extras.jsx`) | ⬜ Pendiente | — | Migrar desde v2, sin CSS propio |
| ST-07 | Actualizar `App.jsx` y limpiar `Placeholders.jsx` | ⬜ Pendiente | — | Cambiar imports, reducir placeholders |
| ST-08 | Agregar utilidades CSS a `global.css` | ⬜ Pendiente | — | `.page-title` y `.page-subtitle` |

**Leyenda:** ⬜ Pendiente · 🔄 En progreso · ✅ Completada · ⚠️ Bloqueada
