# Plan: Actualizar contenido del prototipo según TIA-EDIT versión final

> **Proyecto:** TIA-EDiT (Campus Virtual)
> **Fecha:** 18 de junio de 2026
> **Estado:** Pendiente

## Contexto general

Se actualizó el documento `TIA-EDIT-version final.md` con contenido nuevo y corregido sobre el Taller, la bibliografía, y otros aspectos del Trabajo Final Integrador. El prototipo actual (v3) ya implementó la estructura general del taller con 5 módulos, but varios detalles de contenido (actividades específicas, cargas horarias, herramientas, bibliografía) no están alineados con esta versión final. Se requiere actualizar `datos.js` y algunas páginas para lograr coherencia 1:1 con el documento.

## Suposiciones y restricciones

- Los **Fundamentos neuropsicopedagógicos** (sección 7.2) **NO** se incluirán en el prototipo por decisión del usuario — es contenido académico del TFI.
- Las rutas existentes (`/modulos`, `/actividades`, `/foros`, `/tfi`, `/area-personal`, `/participantes`, `/extras`) se mantienen salvo que `/extras` pase a llamarse `/bitacora`.
- No hay backend — todo el contenido es estático en `src/data/datos.js`.
- Las cargas horarias de los módulos se actualizan según el documento (totales: M1=8h, M2=8h, M3=16h, M4=12h, M5=16h = 60h).
- El Módulo 5 se actualiza con detalle parcial (herramientas principales, no todas las mencionadas en el doc).

---

## Subtareas

### ST-01 — Actualizar cargas horarias de los 5 módulos

**Problema que resuelve:**
Los 5 módulos en `datos.js` tienen `horas_sincronicas: 4` y `horas_asincronicas: 8` (12h c/u), pero el documento final especifica distribuciones distintas para cada módulo que suman 60h totales.

**Estrategia de solución:**
Actualizar los campos `horas_sincronicas` y `horas_asincronicas` en cada objeto de `MODULOS` según la tabla del documento 5.3.4.

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar horas_sincronicas y horas_asincronicas en M1-M5 |

**Pasos de implementación:**

1. En Módulo 1: cambiar `horas_sincronicas: 4, horas_asincronicas: 8` → `4, 4` (total 8h)
2. En Módulo 2: cambiar `horas_sincronicas: 4, horas_asincronicas: 8` → `4, 4` (total 8h)
3. En Módulo 3: cambiar `horas_sincronicas: 4, horas_asincronicas: 8` → `4, 12` (total 16h)
4. En Módulo 4: mantener `4, 8` (total 12h) — ya coincide
5. En Módulo 5: cambiar `horas_sincronicas: 4, horas_asincronicas: 8` → `8, 8` (total 16h)
6. Verificar que la suma total sea 60h y que la UI refleje los nuevos valores.

---

### ST-02 — Enriquecer Módulo 1 (Fundamentos y Rol Docente)

**Problema que resuelve:**
El Módulo 1 actual es genérico; el documento especifica actividades concretas (evaluación censal diagnóstica, nube de palabras con Mentimeter, análisis estadístico) y bibliografía detallada que no están reflejadas.

**Estrategia de solución:**
Actualizar `contenidos`, `actividades_desc` y `recursos` del Módulo 1 en `datos.js` para reflejar las actividades y referencias del documento (sección 5.3.4, Módulo 1).

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar contenidos, actividades_desc, recursos y recorridoSemanal de Módulo 1 |

**Pasos de implementación:**

1. Agregar a `actividades_desc`: "Evaluación censal diagnóstica de la experiencia docente individual respecto a los estándares de calidad educativa en la EaD utilizando un Formulario de Google", "Creación de una nube de palabras de fortalezas y debilidades mediante Mentimeter", "Análisis estadístico de resultados"
2. Actualizar `contenidos` para reflejar textualmente los contenidos del documento (estándares QM, E-xcellence, HIDL/HILT, Guía TEIDE)
3. Agregar a `recursos` las referencias del documento: Bates (2019), Barboza Norbis Guía TEIDE (2021), Legon & Runyon (2018), Quality Matters (2023), Ossiannilsson et al. (2015), Williams et al. (2016), Bok (2020), Ho et al. (2015), Picciano (2017), Zawacki-Richter & Qayyum (2019)
4. Actualizar `recorridoSemanal` para incluir la actividad de Mentimeter y el análisis estadístico
5. Verificar que el módulo se vea correctamente en la UI

---

### ST-03 — Enriquecer Módulo 2 (Evaluación y Narrativas)

**Problema que resuelve:**
El Módulo 2 actual no incluye: clase invertida, ABP de McMaster, el concepto de "dependencia algorítmica" / "nunca habilidad", LearnLM, ni la bibliografía extensa sobre ABP y LANIN que figura en el documento.

**Estrategia de solución:**
Enriquecer contenidos, actividades y recursos del Módulo 2 según la sección 5.3.4 (Módulo 2) del documento, incluyendo los conceptos pedagógicos de McMaster y las narrativas LANIN.

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar contenidos, actividades_desc, recursos y recorridoSemanal de Módulo 2 |

**Pasos de implementación:**

1. Agregar a `contenidos`: "La clase invertida y el aprendizaje basado en Problemas/Proyectos (ABP) de McMaster, Ontario, Canadá", "Fenómeno de la dependencia algorítmica (nunca habilidad)", "Configuración de LLM como cotutores socráticos (ej. LearnLM)", "Guía LANIN: Los Alumnos Necesitan Incluir Narrativas"
2. Agregar a `actividades_desc`: "Exposición infográfica del Diseño individual de rúbricas adaptadas a la evaluación formativa", "Foro virtual para elaboración de instrumentos evaluativos con criterios MAS-TEIDE y LANIN"
3. Agregar a `recursos` las referencias: Barrows & Bennett (1972), Neufeld & Barrows (1974), Oubiña TFI Taller 7 (2024), Barrows (1996), Barrows & Tamblyn (1980), Barrows (2002), Donnelly (2010), Savin-Baden (2007), Abidi et al. (2026), Boman (2025), Corral-Gudino et al. (2025), Albanese & Mitchell (1993), Colliver (2000), Dochy et al. (2003), Leary et al. (2013), Loyens et al. (2020)
4. Actualizar `recorridoSemanal` con las actividades específicas mencionadas en el doc
5. Verificar en UI

---

### ST-04 — Enriquecer Módulo 3 (Gamificación y Realidad Extendida)

**Problema que resuelve:**
El Módulo 3 actual no menciona herramientas específicas (Kahoot.it, Genially, Arloopa, OBS Studio Frame VR), el enlace a Frame VR, el PIN de Kahoot, ni las referencias bibliográficas sobre gamificación y XR que figuran en el documento.

**Estrategia de solución:**
Actualizar el Módulo 3 según la sección 5.3.4 (Módulo 3) del documento, agregando herramientas, actividades específicas, y la bibliografía extendida sobre gamificación.

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar contenidos, actividades_desc, recursos y recorridoSemanal de Módulo 3 |

**Pasos de implementación:**

1. Actualizar `contenidos` para incluir: Kahoot.it, Genially, Arloopa, OBS Studio (Frame VR), CoSpaces, Oculus Education
2. Agregar a `actividades_desc`: "Evaluación por equipos de un ejemplo pedagógico elaborado en OBS Studio Frame VR: https://framevr.io/viral-science-of-the-music#", "Contribuciones individuales para la optimización de la obra creada, seguidas de heteroevaluación por pares", "Diseño y simulación práctica individual en un entorno XR básico", "Diseño colaborativo de un recurso gamificado empleando Kahoot.it (ciencias básicas) o Genially (materias clínicas)", "Evaluación por equipos de un ejemplo pedagógico elaborado en Kahoot según rúbricas — PIN: 04935041"
3. Eliminar la actividad genérica actual y reemplazar con las tres instancias especificadas en el doc (actividades del 1er, 2do y 3er encuentro sincrónico)
4. Agregar a `recursos`: Rosenthal & Toscano (2024), Christopoulos & Mystakidis (2023), Nunes Pozzo et al. (2024), y las referencias de gamificación: BID, Bonwell & Eison, Caillois, Csikszentmihalyi, Deci & Ryan, Egenfeldt-Nielsen et al., Esnaola Horacek & Ansó, Gee, Kapp, Radianti et al., Scolari, Vygotsky, Zichermann & Cunningham; y tecnologías emergentes: Bacca et al., Dede, Lerma García et al., Merchant et al., Radianti et al. (2020)
5. Actualizar `recorridoSemanal` para reflejar 3 semanas de contenido más denso (vs 4 semanas actuales)
6. Verificar en UI

---

### ST-05 — Enriquecer Módulo 4 (Accesibilidad)

**Problema que resuelve:**
El Módulo 4 actual es genérico; el documento especifica actividades concretas (testeo con lector de pantalla, adaptación audiovisual, análisis del E-Book accesible, discusión grupal sobre formato de materiales) y bibliografía específica.

**Estrategia de solución:**
Actualizar el Módulo 4 según la sección 5.3.4 (Módulo 4) del documento, incluyendo el enlace al E-Book de accesibilidad, las preguntas de discusión, y la bibliografía.

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar contenidos, actividades_desc, recursos y recorridoSemanal de Módulo 4 |

**Pasos de implementación:**

1. Agregar a `actividades_desc`: "Análisis del libro electrónico elaborado por el equipo del autor en la EDET-2024: 'E-BOOK DE REFERENCIA. Diseño de Materiales accesibles' — https://drive.google.com/file/d/1Zy0RBLuNHul48O0fm1BpdReaAvYFwV6x/view", "Discusión grupal: ¿Se puede incluir material escaneado en un audiolibro? ¿Por qué? ¿Es conveniente la utilización de imágenes múltiples de Pptx sin epígrafes? ¿Es conveniente utilizar columna única o doble en cada página?"
2. Modificar `actividades_desc` existentes para que coincidan con el documento: "Testeo de recursos con lector de pantalla", "Adaptación de material audiovisual con subtítulos y audiodescripción", "Diseño individual de un plan de accesibilidad integral para un módulo específico"
3. Agregar a `contenidos`: Diferencia entre inclusión e integración de la persona con discapacidad sensorial
4. Agregar a `recursos`: Cobo (2016), Seale (2014), WCAG 2.1, Lion (2020), UN SDG Goal 4, y referencias para profundizar: Bullrich & Sánchez Zinny, Coll & Monereo, Díaz Cantón, Fernández Zalazar, Jofre, Odetti, Onrubia, Pardo Kuklinski & Cobo, Scolari, Trust, CAST UDL
5. Verificar en UI

---

### ST-06 — Enriquecer Módulo 5 (IA Generativa) — Detalle parcial

**Problema que resuelve:**
El Módulo 5 actual tiene 4h sincrónicas y es genérico; el documento especifica 8h sincrónicas distribuidas en 3 encuentros, con herramientas principales como NotebookLM, Zotero, debate ético, y bibliografía actualizada.

**Estrategia de solución:**
Actualizar el Módulo 5 con detalle parcial (herramientas principales) según la sección 5.3.4 (Módulo 5). Incluir: los 3 encuentros sincrónicos con los LLMs principales (ChatGPT, Gemini, Grok, Copilot), NotebookLM, Zotero, detección de plagio, debate ético. No incluir herramientas muy específicas como n8n, Vercel V0, Galaxy, Hugging Face (a menos que sean relevantes).

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar horas, contenidos, actividades_desc, recursos y recorridoSemanal de Módulo 5 |

**Pasos de implementación:**

1. Ya se actualizó `horas_sincronicas` a 8 en ST-01
2. Actualizar `contenidos` para incluir: técnicas de construcción y evaluación de Prompts, diseño de asistentes personalizados (Gems), ChatGPT Extensions, Google Deep Research, Perplexity Spaces; herramientas de transformación conceptual (Mapify), representación visual (Napkin), asistencia integral para estudio (NotebookLM), gestión inteligente de referencias (Zotero, Research Rabbit, Elicit, PubTator); las 5 estrategias de Freire para educación crítica; los 5 principios pedagógicos críticos de Costa y Murphy; buenas prácticas para IA en Medicina
3. Agregar a `actividades_desc`: "Experimentos grupales con herramientas básicas de distintas plataformas de IA generativa: exposición de textos a detectores de plagio y uso de IA Gen. Comparación de resultados y heteroevaluación por pares", "Resolución de problemas con selección grupal de las plataformas más apropiadas para cada caso", "Debate ético en foros sobre beneficios y riesgos del uso de IA Gen en educación de posgrado", "Diseño conceptual de un asistente docente basado en IA"
4. Estructurar `recorridoSemanal` en 3 semanas (no 4) para reflejar los 3 encuentros sincrónicos
5. Agregar a `recursos`: Andreoli et al., Costa & Murphy (2025), Holmes et al. UNESCO (2021), León XIV (2026), Lion et al. (2024), Moya García & Trujillo Ruiz (2026), Sadin (2026); y referencias para profundizar: Abdulnour et al. (2025), Boscardin et al. (2025), Clark (2025), Fernández Enguita (2024), Ferrarelli & Lion (2025), Lee et al. (2023), Yang et al. (2026)
6. Verificar en UI

---

### ST-07 — Renombrar Extras → Bitácora y actualizar contenido

**Problema que resuelve:**
El documento (sección 7.1) menciona una "solapa designada Bitácora" con enlaces a eventos y temáticas no relacionadas estrictamente con el currículo. Actualmente existe `/extras` que cumple un rol similar pero no está alineado con esta descripción.

**Estrategia de solución:**
Renombrar la ruta `/extras` a `/bitacora`, actualizar el componente, el Navbar, y enriquecer el contenido según la descripción del documento (eventos, temáticas extracurriculares, formación humana integral).

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/App.jsx` | Cambiar ruta `/extras` → `/bitacora`, actualizar import y componente |
| MODIFICAR | `src/components/Navbar.jsx` | Cambiar link "Extras" → "Bitácora" |
| MODIFICAR | `src/pages/Extras.jsx` | Renombrar archivo a `Bitacora.jsx`, actualizar título y contenido |
| RENOMBRAR | `src/pages/Extras.jsx` → `src/pages/Bitacora.jsx` | Renombrar físicamente el archivo |
| MODIFICAR | `src/pages/Extras.css` → `src/pages/Bitacora.css` | Renombrar CSS si existe; si no, crear |

**Pasos de implementación:**

1. Renombrar `Extras.jsx` a `Bitacora.jsx`
2. En `Bitacora.jsx`: cambiar título a "Bitácora", subtítulo a "Novedades, eventos y recursos para la formación humana integral", actualizar contenido para reflejar eventos extramuros y temáticas no curriculares
3. En `App.jsx`: cambiar `import Extras from './pages/Extras'` → `import Bitacora from './pages/Bitacora'`, cambiar ruta de `'/extras'` a `'/bitacora'` y componente de `<Extras />` a `<Bitacora />`
4. En `Navbar.jsx`: cambiar "Extras" por "Bitácora" y la ruta `/extras` por `/bitacora`
5. Si existe `Extras.css`, renombrarlo a `Bitacora.css` y actualizar el import en Bitacora.jsx
6. Verificar navegación en la UI

---

### ST-08 — Actualizar Anuncios, Novedades y Eventos

**Problema que resuelve:**
Los anuncios, novedades y eventos actuales pueden no estar alineados con el contenido del documento final. Se requiere revisar y actualizar según sea necesario.

**Estrategia de solución:**
Revisar los arrays `ANUNCIOS`, `NOVEDADES` y `EVENTOS` en `datos.js` contra el documento para asegurar coherencia. Los anuncios deben reflejar las actividades específicas de los módulos actualizados. Los eventos deben coincidir con el cronograma del taller (60h, 5 módulos).

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| MODIFICAR | `src/data/datos.js` | Actualizar ANUNCIOS, NOVEDADES y EVENTOS según coherencia con documento |

**Pasos de implementación:**

1. Revisar `ANUNCIOS`: verificar que los textos hagan referencia correcta a las actividades actualizadas de cada módulo
2. Revisar `NOVEDADES`: confirmar que las 3 novedades actuales siguen siendo relevantes; agregar si es necesario
3. Revisar `EVENTOS`: verificar que las fechas y tipos de eventos (clases sincrónicas, entregas) estén alineados con la estructura del taller (60h, 5 módulos con diferentes cargas)
4. Verificar que el calendario en AreaPersonal muestre los eventos correctamente

---

### ST-09 — Verificación final de consistencia

**Problema que resuelve:**
Después de todas las modificaciones, es necesario asegurar que no haya inconsistencias entre el documento y el prototipo, y que la UI funcione correctamente.

**Estrategia de solución:**
Ejecutar el build de producción (o dev server) para verificar que no hay errores, y hacer una revisión visual de cada página afectada.

**Archivos a modificar:**

| Acción | Archivo | Descripción del cambio |
|--------|---------|----------------------|
| VERIFICAR | `src/data/datos.js` | Consistencia general de datos |
| VERIFICAR | `src/App.jsx` | Rutas correctas |
| VERIFICAR | `src/components/Navbar.jsx` | Navegación correcta |
| VERIFICAR | `src/pages/Bitacora.jsx` | Contenido correcto |
| VERIFICAR | `src/pages/Modulos.jsx` | Visualización correcta de módulos |
| VERIFICAR | `npm run build` | Build sin errores |

**Pasos de implementación:**

1. Ejecutar `npm run build` para verificar que no hay errores de compilación
2. Navegar visualmente por cada página modificada (Home, Módulos 1-5, Bitácora)
3. Verificar que las cargas horarias se muestren correctamente en cada módulo
4. Verificar que los recursos/bibliografía se muestren en cada módulo
5. Verificar que la ruta `/bitacora` funcione y el Navbar la muestre
6. Verificar que no haya links rotos (especialmente los URLs reales agregados)

---

## Tablero de progreso

| ID | Subtarea | Estado | Responsable | Notas |
|----|----------|--------|-------------|-------|
| ST-01 | Actualizar cargas horarias | ⬜ Pendiente | — | — |
| ST-02 | Enriquecer Módulo 1 | ⬜ Pendiente | — | Incluye Mentimeter, evaluación censal, bibliografía |
| ST-03 | Enriquecer Módulo 2 | ⬜ Pendiente | — | Incluye ABP McMaster, dependencia algorítmica, LANIN |
| ST-04 | Enriquecer Módulo 3 | ⬜ Pendiente | — | Incluye Kahoot, Genially, Frame VR, gamificación |
| ST-05 | Enriquecer Módulo 4 | ⬜ Pendiente | — | Incluye E-Book accesible, discusión grupal |
| ST-06 | Enriquecer Módulo 5 | ⬜ Pendiente | — | Detalle parcial: NotebookLM, Zotero, debate ético |
| ST-07 | Renombrar Extras → Bitácora | ⬜ Pendiente | — | Ruta, Navbar, contenido |
| ST-08 | Actualizar Anuncios, Novedades, Eventos | ⬜ Pendiente | — | Coherencia con módulos actualizados |
| ST-09 | Verificación final de consistencia | ⬜ Pendiente | — | Build, revisión visual |

**Leyenda:** ⬜ Pendiente · 🔄 En progreso · ✅ Completada · ⚠️ Bloqueada
