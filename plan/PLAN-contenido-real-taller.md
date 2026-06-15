# PLAN: Implementar el contenido real del Taller (según TIADET.md)

## Contexto

El prototipo actual en `src/data/datos.js` contiene módulos genéricos de EaD.
El TIADET.md (secciones 5.3 a 5.3.6) define un taller completamente distinto:
un **Taller Interactivo Avanzado en Enseñanza a Distancia con Tecnologías**
con enfoque **MAS-TEIDE-LANIN**, orientado a docentes de la METT
(Maestría en Enfermedades Tropicales Transmisibles).

---

## Archivos a modificar

| # | Archivo | Cambio | Prioridad |
|---|---------|--------|-----------|
| 1 | `src/data/datos.js` | Reemplazar módulos, actividades, TFI, eventos, anuncios, foros | 🟥 Crítica |
| 2 | `src/pages/TFI.jsx` | Agregar rúbrica de 6 criterios × 4 niveles | 🟧 Alta |
| 3 | `src/pages/Modulos.jsx` | Mostrar objetivo y carga horaria por módulo | 🟧 Alta |
| 4 | `src/pages/Home.jsx` | Mensaje de bienvenida con MAS-TEIDE-LANIN | 🟨 Media |
| 5 | `src/pages/Extras.jsx` | Contenido complementario real | 🟨 Media |

---

## 🟥 1. Reemplazar módulos en `datos.js`

### Estado actual

```js
MODULOS = [
  { id:1, titulo: 'Fundamentos de la Educación a Distancia',
    temas: ['Historia de la EaD','Constructivismo','Community of Inquiry','Diseño instruccional'] },
  { id:2, titulo: 'Tecnologías para el Aprendizaje',
    temas: ['LMS y plataformas','Videoconferencia','Herramientas colaborativas','Criterios de selección'] },
  { id:3, titulo: 'Diseño de Contenidos Digitales',
    temas: ['Multimedia de Mayer','Microlearning','WCAG 2.1','Producción de video'] },
  { id:4, titulo: 'Evaluación en Entornos Virtuales',
    temas: ['Evaluación formativa','Rúbricas','Integridad académica','Retroalimentación','Portafolios digitales'] },
  { id:5, titulo: 'Comunidad Virtual y Proyecto Integrador',
    temas: ['Moderación de foros','Trabajo colaborativo','Rol del tutor','TFI','Comunidad virtual'] },
]
```

### Estado deseado

```js
MODULOS = [
  {
    id: 1, numero: '01',
    titulo: 'Fundamentos y Rol del Docente en la Educación a Distancia',
    descripcion: 'Rol del docente virtual, estándares de calidad y marco TEIDE.',
    horas_sincronicas: 4,
    horas_asincronicas: 8,
    estado: 'completado',
    objetivo: 'Comprender las particularidades del rol del docente en espacios virtuales y los estándares internacionales para garantizar calidad y efectividad.',
    resumen: 'El docente virtual como facilitador/mediador/mentor del aprendizaje. Diferencias entre educación presencial y a distancia. Estrategias motivacionales y creación de comunidades de aprendizaje colaborativo (CoI framework). Estándares de calidad: Quality Matters Rubric, E-xcellence EUA, Harvard HIDL/HILT. Introducción a la Guía TEIDE para estructurar proyectos educativos con base en investigación y desarrollo docente.',
    temas: [
      'Docente virtual como facilitador, mediador y mentor',
      'Diferencias presencial vs EaD',
      'Estrategias motivacionales y CoI',
      'Quality Matters, E-xcellence, HIDL/HILT',
      'Guía TEIDE'
    ],
    contenidos: [
      'El docente virtual como facilitador/mediador/mentor del aprendizaje: cambio del rol tradicional hacia el acompañamiento personalizado, orientación en recursos digitales y promoción del pensamiento crítico.',
      'Diferencias entre educación presencial y a distancia: análisis de la interacción, tiempo y espacios diferenciados, rol clave de la comunicación en la virtualidad.',
      'Estrategias motivacionales: cómo fomentar la autonomía del estudiante, mantener su compromiso y crear comunidades de aprendizaje colaborativo (CoI framework de Garrison, Anderson y Archer).',
      'Estándares de calidad educativa: revisión de Quality Matters Rubric, E-xcellence del European Association for Quality Assurance y Harvard Initiative for Digital Learning (HIDL) y Harvard Initiative for Teaching and Learning (HILT).',
      'Introducción a TEIDE: aplicación de la guía teórico-metodológica para estructurar proyectos educativos con base en investigación y desarrollo docente.'
    ],
    actividades_desc: [
      'Reflexión guiada sobre experiencia docente previa en EaD.',
      'Análisis de casos de éxito a nivel global (incluyendo HarvardX).',
      'Foro estructurado de intercambio sobre desafíos y estrategias personales.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Bates - Teaching in a Digital Age (2019)', url: '#' },
      { tipo: 'pdf', label: 'Barboza Norbis - Guía TEIDE (2021)', url: '#' },
      { tipo: 'link', label: 'Community of Inquiry framework', url: 'https://coi.athabascau.ca/' },
      { tipo: 'link', label: 'Quality Matters Rubric', url: 'https://www.qualitymatters.org/' },
    ],
  },
  {
    id: 2, numero: '02',
    titulo: 'Evaluación y Narrativas para el Aprendizaje',
    descripcion: 'Evaluación en EaD y metodología LANIN de narrativas.',
    horas_sincronicas: 4,
    horas_asincronicas: 8,
    estado: 'completado',
    objetivo: 'Integrar métodos de evaluación efectivos y narrativas significativas para fomentar un aprendizaje profundo y contextualizado.',
    resumen: 'Diseño de evaluación formativa y sumativa en EaD con retroalimentación constructiva. Incorporación de la estrategia LANIN (Los Alumnos Necesitan Incluir Narrativas): construcción de relatos para el aprendizaje significativo. Casos prácticos en Enfermedades Tropicales Transmisibles desde el enfoque narrativo y basado en problemas. Gestión del tiempo y evaluación continua.',
    temas: [
      'Evaluación formativa y sumativa digital',
      'Estrategia LANIN: narrativas para aprendizaje significativo',
      'Casos de Enfermedades Tropicales Transmisibles',
      'Rúbricas adaptadas a evaluación formativa',
      'Gestión del tiempo y monitoreo virtual'
    ],
    contenidos: [
      'Diseño de evaluación en EaD: diferenciación entre evaluación formativa y sumativa digital, retroalimentación constructiva.',
      'Guía LANIN: importancia de las narrativas para que los alumnos construyan sentido y relevancia educativa, transformando contenido en experiencias de aprendizaje significativas.',
      'Narrativas basadas en problemas: aplicación práctica en el área de enfermedades tropicales transmisibles, promoviendo análisis crítico y solución de casos reales en formato narrativo.',
      'Gestión del tiempo y evaluación continua: cómo monitorear progresos virtualmente y ajustar estrategias pedagógicas.'
    ],
    actividades_desc: [
      'Creación de mini-narrativas para un caso clínico de una enfermedad tropical transmisible.',
      'Diseño de rúbricas adaptadas a la evaluación formativa.',
      'Taller virtual para elaboración de instrumento evaluativo con criterios LANIN y TEIDE.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Oubiña - TFI Taller 7 EDET: Visión LANIN (2024)', url: '#' },
      { tipo: 'link', label: 'Rubistar — generador de rúbricas', url: 'https://rubistar.4teachers.org' },
    ],
  },
  {
    id: 3, numero: '03',
    titulo: 'Herramientas para la Gamificación y Realidad Extendida',
    descripcion: 'VR, AR, XR, 360° y gamificación aplicada a la enseñanza médica.',
    horas_sincronicas: 4,
    horas_asincronicas: 8,
    estado: 'en_curso',
    objetivo: 'Explorar y aplicar tecnologías inmersivas y gamificadas para la enseñanza de contenidos complejos en la órbita de las enfermedades tropicales transmisibles.',
    resumen: 'Conceptos y ventajas de la gamificación en educación. Integración de tecnologías de realidad virtual (VR), aumentada (AR) y mixta (XR) para enseñanza médica. Uso de imágenes y videos en 360° para inmersión. Plataformas como CoSpaces y Oculus Education. Diseño instruccional gamificado y medición de impacto.',
    temas: [
      'Fundamentos de gamificación',
      'Realidad Virtual (VR), Aumentada (AR) y Mixta (XR)',
      'Imágenes y video en 360°',
      'CoSpaces, Oculus Education',
      'Diseño instruccional gamificado'
    ],
    contenidos: [
      'Fundamentos de gamificación: conceptos básicos, tipos de elementos gamificados, beneficios en motivación y retención.',
      'Introducción a Realidad Virtual (VR), Aumentada (AR) y Mixta (XR): características, aplicaciones educativas y limitaciones actuales.',
      'Uso de imágenes y videos en 360°: creación y aprovechamiento para inmersión y entendimiento espacial.',
      'Software y plataformas recomendadas: CoSpaces, Oculus Education y herramientas similares.',
      'Diseño instruccional gamificado: cómo integrar estos recursos en el currículo virtual y medir su impacto.'
    ],
    actividades_desc: [
      'Simulación práctica con entorno XR básico.',
      'Diseño colaborativo de un recurso gamificado para una temática específica.',
      'Evaluación y discusión sobre la experiencia inmersiva.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Deterding et al. - Gamification (CHI 2011)', url: '#' },
      { tipo: 'pdf', label: 'Radianti et al. - Systematic review of VR in higher education (2020)', url: '#' },
      { tipo: 'link', label: 'CoSpaces Edu', url: 'https://cospaces.io/edu/' },
    ],
  },
  {
    id: 4, numero: '04',
    titulo: 'Accesibilidad para estudiantes con discapacidad visual y auditiva',
    descripcion: 'WCAG, tecnologías asistivas y Diseño Universal para el Aprendizaje.',
    horas_sincronicas: 4,
    horas_asincronicas: 8,
    estado: 'pendiente',
    objetivo: 'Garantizar una educación inclusiva mediante prácticas y tecnologías que respondan a las necesidades de estudiantes con discapacidades sensoriales mediante diseño universal.',
    resumen: 'Normativas internacionales WCAG 2.1/2.2 para accesibilidad en plataformas educativas. Tecnologías asistivas: lectores de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles. Diseño Universal para el Aprendizaje (DUA). Estrategias didácticas para una inclusión plena. Ejemplos aplicados al diseño de cursos sobre salud tropical.',
    temas: [
      'WCAG 2.1/2.2',
      'Tecnologías asistivas (lector de pantalla, subtítulos)',
      'Diseño Universal para el Aprendizaje (DUA)',
      'Audiodescripción',
      'Estrategias didácticas inclusivas'
    ],
    contenidos: [
      'Normativas y estándares de accesibilidad: revisión de WCAG 2.1/2.2 y protocolos internacionales en educación digital.',
      'Tecnologías asistivas: software lector de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles.',
      'Diseño universal: creación de contenidos y plataformas navegables, comprensibles y usables para todos.',
      'Estrategias didácticas inclusivas: adaptaciones en materiales, evaluación y comunicación.',
      'Análisis de casos: accesibilidad aplicada en cursos de salud tropical y su impacto en la participación.'
    ],
    actividades_desc: [
      'Testeo de recursos con lector de pantalla.',
      'Adaptación de material audiovisual con subtítulos y audiodescripción.',
      'Diseño de un plan de accesibilidad integral para un módulo específico.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Seale - E-learning and Disability in Higher Education (2014)', url: '#' },
      { tipo: 'link', label: 'W3C - WCAG 2.1', url: 'https://www.w3.org/TR/WCAG21/' },
      { tipo: 'link', label: 'W3C - WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
    ],
  },
  {
    id: 5, numero: '05',
    titulo: 'Inteligencia Artificial Generativa en la Educación a Distancia',
    descripcion: 'IA Gen para diseño pedagógico, contenidos y tutorías inteligentes.',
    horas_sincronicas: 4,
    horas_asincronicas: 8,
    estado: 'pendiente',
    objetivo: 'Conocer el potencial y limitaciones de la IA Generativa para el diseño pedagógico, creación de contenidos y seguimiento personalizado en EaD en pos de la optimización de la eficiencia.',
    resumen: 'Introducción a la IA Generativa (IAGen): definición y ejemplos prácticos en educación. Aplicaciones en la enseñanza: creación de contenidos, generación automática de evaluaciones, tutorías inteligentes. Personalización del aprendizaje con IA. Consideraciones éticas: privacidad, sesgos y transparencia. Futuro de la educación con IA.',
    temas: [
      'Fundamentos de IA Generativa',
      'Aplicaciones en diseño pedagógico',
      'Tutorías inteligentes y personalización',
      'Ética, sesgos y privacidad',
      'Futuro de la educación con IA'
    ],
    contenidos: [
      'Conceptos de IA generativa: definición y ejemplos prácticos actuales en educación.',
      'Aplicaciones en la enseñanza: creación de contenidos, generación automática de evaluaciones y tutorías inteligentes.',
      'Personalización del aprendizaje: uso de IA para adaptar rutas formativas según progreso y perfil de cada alumno.',
      'Consideraciones éticas: privacidad, sesgos y transparencia en el uso de IA en contextos educativos.',
      'Futuro de la educación con IA: tendencias y recomendaciones.'
    ],
    actividades_desc: [
      'Experimentos con herramientas básicas de IA generativa.',
      'Debate ético sobre beneficios y riesgos en la educación.',
      'Diseño conceptual de un asistente docente basado en IA.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Luckin et al. - Intelligence Unleashed: AI in Education (Pearson 2016)', url: '#' },
      { tipo: 'pdf', label: 'Holmes et al. - AI in Education (UNESCO 2021)', url: '#' },
      { tipo: 'link', label: 'UNESCO - AI in Education', url: 'https://www.unesco.org/en/digital-education/artificial-intelligence' },
    ],
  },
]
```

### Impacto colateral de este cambio

Al cambiar los módulos, también hay que actualizar:

- **ACTIVIDADES_INICIALES**: Reemplazar las 6 actividades existentes por nuevas actividades alineadas a los nuevos módulos (ver sección 1b).
- **FOROS_INICIALES**: Actualizar descripciones y mensajes de ejemplo en foros de módulos.
- **EVENTOS**: Reemplazar fechas y eventos para alinearse al nuevo cronograma de 60 horas.
- **ANUNCIOS**: Actualizar textos referenciando el nuevo contenido.

---

## 🟥 1b. Reemplazar actividades en `datos.js`

### Estado actual

6 actividades mezclan encuestas, tareas y un examen parcial. No corresponden a los nuevos módulos.

### Estado deseado

```js
ACTIVIDADES_INICIALES = [
  // Módulo 1
  { id:1, titulo:'Reflexión guiada sobre experiencia docente en EaD', tipo:'tarea', modulo:1,
    vencimiento:'2026-07-05', estado:'completada', puntaje:9, puntajeMax:10,
    descripcion:'Ensayo breve (400-600 palabras) reflexionando sobre tu experiencia previa en educación a distancia. Identificá fortalezas, debilidades y expectativas para el taller.' },
  { id:2, titulo:'Análisis de caso: HarvardX', tipo:'tarea', modulo:1,
    vencimiento:'2026-07-08', estado:'completada', puntaje:8, puntajeMax:10,
    descripcion:'Analizá un caso de éxito en educación a distancia (HarvardX u otro) identificando los estándares de calidad aplicados y cómo podrían transferirse a la METT.' },

  // Módulo 2
  { id:3, titulo:'Mini-narrativa LANIN: caso clínico de ETT', tipo:'tarea', modulo:2,
    vencimiento:'2026-07-15', estado:'completada', puntaje:9, puntajeMax:10,
    descripcion:'Creá una mini-narrativa para un caso clínico de una enfermedad tropical transmisible aplicando la metodología LANIN. Extensión: 500-800 palabras.' },
  { id:4, titulo:'Diseño de rúbrica formativa', tipo:'tarea', modulo:2,
    vencimiento:'2026-07-18', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Diseñá una rúbrica analítica para evaluar una actividad de tu especialidad, incorporando criterios LANIN y TEIDE.' },

  // Módulo 3
  { id:5, titulo:'Diseño de recurso gamificado', tipo:'tarea', modulo:3,
    vencimiento:'2026-07-25', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Diseñá colaborativamente un recurso gamificado para una temática de enfermedades tropicales transmisibles. Podés usar Genially, Kahoot u otra herramienta.' },
  { id:6, titulo:'Encuesta de experiencia inmersiva', tipo:'encuesta', modulo:3,
    vencimiento:'2026-07-26', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Evaluá tu experiencia con la simulación XR y los recursos gamificados del módulo.', preguntas:[
      { id:'q1', texto:'¿Qué tan útiles considerás las tecnologías XR para la enseñanza de enfermedades tropicales?', opciones:['Muy útiles','Útiles','Poco útiles','No son útiles'], respuestaCorrecta:null },
      { id:'q2', texto:'¿Qué herramienta te resultó más interesante?', opciones:['Realidad Virtual','Realidad Aumentada','Video 360°','Gamificación'], respuestaCorrecta:null },
    ]},

  // Módulo 4
  { id:7, titulo:'Testeo con lector de pantalla', tipo:'tarea', modulo:4,
    vencimiento:'2026-08-02', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Probá un recurso educativo propio con un lector de pantalla (NVDA o VoiceOver) y documentá los problemas de accesibilidad encontrados.' },
  { id:8, titulo:'Plan de accesibilidad integral', tipo:'tarea', modulo:4,
    vencimiento:'2026-08-05', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Diseñá un plan de accesibilidad integral para un módulo específico de la METT, incluyendo subtítulos, audiodescripción y alternativas táctiles.' },

  // Módulo 5
  { id:9, titulo:'Experimento con IA Generativa', tipo:'tarea', modulo:5,
    vencimiento:'2026-08-12', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Usá una herramienta de IA Gen (ChatGPT, Claude, Gemini) para generar un plan de clase o material educativo. Reflexioná sobre los resultados obtenidos.' },
  { id:10, titulo:'Diseño conceptual de asistente IA', tipo:'tarea', modulo:5,
    vencimiento:'2026-08-15', estado:'pendiente', puntaje:null, puntajeMax:10,
    descripcion:'Diseñá conceptualmente un asistente docente basado en IA para una asignatura de la METT. Incluí funcionalidades, limitaciones y consideraciones éticas.' },

  // Proyecto Integrador
  { id:11, titulo:'Proyecto Integrador Final (avance)', tipo:'tarea', modulo:null,
    vencimiento:'2026-08-22', estado:'pendiente', puntaje:null, puntajeMax:100,
    descripcion:'Rediseño completo de un módulo de la METT integrando: gamificación/XR + accesibilidad + IA + narrativas LANIN. Este es el avance escrito. La defensa oral será sincrónica.' },
]
```

---

## 🟥 1c. Reemplazar TFI_ENUNCIADO en `datos.js`

### Estado deseado

```js
export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador — TIADET 2026',
  subtitulo: 'Rediseño de un módulo de la METT con enfoque MAS-TEIDE-LANIN',
  fecha_entrega: '22 de agosto de 2026',
  descripcion: 'El Trabajo Final Integrador consiste en el rediseño completo de un módulo de la Maestría en Enfermedades Tropicales Transmisibles (METT), integrando todos los elementos del taller:\n\n• Gamificación y/o Realidad Extendida (XR)\n• Accesibilidad universal (WCAG 2.1/2.2)\n• IA Generativa para diseño pedagógico\n• Narrativas LANIN para aprendizaje significativo\n\nEl trabajo debe demostrar la capacidad de transitar desde un rol de "mapa" al de "brújula cognitiva", integrando la Misión-Acción-Servicio (MAS) con tecnologías disruptivas en el campo de las Enfermedades Tropicales Transmisibles.',
  sistema_evaluacion: {
    asistencia_obligatoria: '80% de los encuentros sincrónicos',
    evaluacion_continua: { peso: '60%', descripcion: 'Actividades por módulo evaluadas con rúbricas según criterios Quality Matters' },
    portafolio_docente: { peso: '20%', descripcion: 'Compilación reflexiva de todos los productos del taller' },
    proyecto_integrador: { peso: '20%', descripcion: 'Rediseño completo de un módulo de la METT + defensa sincrónica con heteroevaluación por pares' },
  },
  requisitos: [
    'Fundamentación pedagógica del rediseño con marco TEIDE (mínimo 800 palabras)',
    'Integración de gamificación y/o Realidad Extendida (XR)',
    'Plan de accesibilidad universal cumpliendo WCAG 2.1/2.2',
    'Uso de IA Generativa en el diseño pedagógico',
    'Narrativa LANIN que conecte el contenido con la realidad humana de zonas de pobreza extrema',
    'Sistema de evaluación con rúbricas analíticas',
    'Defensa sincrónica de 20 minutos con heteroevaluación por pares',
  ],
  rubrica: [
    {
      criterio: 'Mediación Docente y "Brújula" Cognitiva',
      niveles: [
        { nivel: 'Excelente', descripcion: 'El docente actúa como brújula dinámica, estructurando la presencia docente para guiar el pensamiento crítico en entornos distribuidos.' },
        { nivel: 'Competente', descripcion: 'El docente facilita el aprendizaje y ofrece retroalimentación adecuada, aunque mantiene rasgos del modelo tradicional.' },
        { nivel: 'En Desarrollo', descripcion: 'El docente se limita a responder dudas técnicas sin mediación pedagógica profunda.' },
        { nivel: 'Insuficiente', descripcion: 'El docente actúa como mapa estático sin acompañamiento personalizado ni guía cognitiva.' },
      ],
    },
    {
      criterio: 'Arquitectura Pedagógica bajo Marco TEIDE',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Diseño producto de investigación-acción rigurosa, alineado con estándares internacionales (Quality Matters/E-xcellence).' },
        { nivel: 'Competente', descripcion: 'Diseño coherente y funcional, integrando tecnología con fundamentación teórica.' },
        { nivel: 'En Desarrollo', descripcion: 'Diseño instruccional lineal; tecnología usada como repositorio sin secuenciación didáctica compleja.' },
        { nivel: 'Insuficiente', descripcion: 'Ausencia de coherencia entre objetivos y actividades; diseño instruccional precario o improvisado.' },
      ],
    },
    {
      criterio: 'Construcción de Sentido: Estrategia LANIN',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Narrativas inmersivas que vinculan la ciencia con la realidad humana de zonas de pobreza extrema (NOA/NEA).' },
        { nivel: 'Competente', descripcion: 'Estudios de caso narrativos que favorecen aprendizaje significativo, aunque con conexión limitada al territorio.' },
        { nivel: 'En Desarrollo', descripcion: 'Relatos usados de forma tangencial, sin constituir el motor del proceso de construcción de significado.' },
        { nivel: 'Insuficiente', descripcion: 'Datos biomédicos aislados; ausencia de narrativas que conecten teoría con realidad epidemiológica.' },
      ],
    },
    {
      criterio: 'Sinergia Tecnológica Disruptiva (XR/IA)',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Implementa Realidad Extendida e IA Generativa como prótesis cognitivas, facilitando visualización molecular y simulaciones de crisis sanitarias.' },
        { nivel: 'Competente', descripcion: 'Usa gamificación (Genially/Kahoot) y simuladores básicos para aumentar motivación intrínseca.' },
        { nivel: 'En Desarrollo', descripcion: 'Emplea tecnología estándar (LMS/Zoom) sin explorar el potencial transformador de tecnologías emergentes.' },
        { nivel: 'Insuficiente', descripcion: 'Dependencia de herramientas analógicas o digitales básicas; ausencia de innovación tecnológica.' },
      ],
    },
    {
      criterio: 'Accesibilidad Universal y DUA (WCAG)',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Cumple estrictamente WCAG 2.1/2.2 con materiales multimodales (audiolibros, subtítulos, audiodescripción).' },
        { nivel: 'Competente', descripcion: 'Contenido navegable y legible con compromiso claro con la diversidad de estilos de aprendizaje.' },
        { nivel: 'En Desarrollo', descripcion: 'Reconoce importancia de inclusión pero las adaptaciones son parciales o inconsistentes.' },
        { nivel: 'Insuficiente', descripcion: 'No hay estrategias de accesibilidad; el diseño genera barreras que excluyen a estudiantes con necesidades específicas.' },
      ],
    },
    {
      criterio: 'Impacto MAS: Misión-Acción-Servicio',
      niveles: [
        { nivel: 'Excelente', descripcion: 'El proyecto demuestra capacidad medible para transformar la realidad sanitaria en el NOA/NEA, alineando excelencia académica con servicio en el Impenetrable.' },
        { nivel: 'Competente', descripcion: 'Propone soluciones aplicables a problemas de salud pública regional con intencionalidad de servicio.' },
        { nivel: 'En Desarrollo', descripcion: 'Impacto social mencionado de forma genérica sin indicadores claros de mejora en contextos vulnerables.' },
        { nivel: 'Insuficiente', descripcion: 'Proyecto meramente académico-teórico sin vocación de servicio ni conexión con la pobreza multidimensional regional.' },
      ],
    },
  ],
  acreditacion: [
    { nivel: 'Aprobación Distinguida (90-100%)', descripcion: 'Cumple con el nivel de Excelencia en al menos 5 criterios. Demuestra una transformación ontológica en su práctica docente.' },
    { nivel: 'Aprobación Estándar (70-89%)', descripcion: 'Alcanza el nivel Competente en todos los rubros. Diseño sólido que cumple con estándares internacionales de EaD.' },
    { nivel: 'En Proceso (<70%)', descripcion: 'Requiere revisión y tutoría suplementaria en criterios de innovación y accesibilidad para alcanzar el estándar METT.' },
  ],
  criterios: [
    { criterio: 'Mediación Docente y Brújula Cognitiva', peso: '15%' },
    { criterio: 'Arquitectura Pedagógica TEIDE', peso: '20%' },
    { criterio: 'Construcción de Sentido LANIN', peso: '20%' },
    { criterio: 'Sinergia Tecnológica (XR/IA)', peso: '20%' },
    { criterio: 'Accesibilidad Universal', peso: '15%' },
    { criterio: 'Impacto MAS', peso: '10%' },
  ],
}
```

---

## 🟥 1d. Reemplazar EVENTOS en `datos.js`

```js
export const EVENTOS = [
  { id:1, titulo:'Encuentro sincrónico — Módulo 1', fecha:'2026-07-02', tipo:'clase' },
  { id:2, titulo:'Vence: Reflexión guiada EaD', fecha:'2026-07-05', tipo:'entrega' },
  { id:3, titulo:'Vence: Análisis de caso HarvardX', fecha:'2026-07-08', tipo:'entrega' },
  { id:4, titulo:'Encuentro sincrónico — Módulo 2', fecha:'2026-07-09', tipo:'clase' },
  { id:5, titulo:'Vence: Mini-narrativa LANIN', fecha:'2026-07-15', tipo:'entrega' },
  { id:6, titulo:'Vence: Diseño de rúbrica formativa', fecha:'2026-07-18', tipo:'entrega' },
  { id:7, titulo:'Encuentro sincrónico — Módulo 3', fecha:'2026-07-19', tipo:'clase' },
  { id:8, titulo:'Vence: Diseño de recurso gamificado', fecha:'2026-07-25', tipo:'entrega' },
  { id:9, titulo:'Encuentro sincrónico — Módulo 4', fecha:'2026-07-26', tipo:'clase' },
  { id:10, titulo:'Vence: Testeo con lector de pantalla', fecha:'2026-08-02', tipo:'entrega' },
  { id:11, titulo:'Vence: Plan de accesibilidad integral', fecha:'2026-08-05', tipo:'entrega' },
  { id:12, titulo:'Encuentro sincrónico — Módulo 5', fecha:'2026-08-06', tipo:'clase' },
  { id:13, titulo:'Vence: Experimento con IA Gen', fecha:'2026-08-12', tipo:'entrega' },
  { id:14, titulo:'Vence: Diseño conceptual asistente IA', fecha:'2026-08-15', tipo:'entrega' },
  { id:15, titulo:'Vence: Entrega TFI escrito', fecha:'2026-08-22', tipo:'entrega' },
  { id:16, titulo:'Defensas orales sincrónicas TFI', fecha:'2026-08-29', tipo:'examen' },
  { id:17, titulo:'Cierre del taller', fecha:'2026-08-31', tipo:'clase' },
]
```

---

## 🟥 1e. Actualizar FOROS_INICIALES en `datos.js`

Cambiar descripciones y mensajes de ejemplo para reflejar los nuevos contenidos:

- **Foro General**: mensaje de bienvenida mencionando MAS-TEIDE-LANIN
- **Foro Módulo 1**: discusión sobre rol del docente virtual y estándares Quality Matters
- **Foro Módulo 2**: discusión sobre narrativas LANIN y casos de ETT
- **Foro Módulo 3**: discusión sobre gamificación y XR en enseñanza médica
- **Foro Módulo 4**: discusión sobre accesibilidad WCAG y DUA
- **Foro Módulo 5**: discusión sobre IA Gen, ética y sesgos
- **Foro TFI**: referencias al rediseño de módulo METT con rúbrica TEIDE

---

## 🟥 1f. Actualizar ANUNCIOS en `datos.js`

```js
export const ANUNCIOS = [
  { id:1, tipo:'info', texto:'Bienvenidos al Taller Interactivo Avanzado en EaD con Tecnologías. Este taller sigue la visión MAS-TEIDE-LANIN.' },
  { id:2, tipo:'warning', texto:'En 1 semana vence la mini-narrativa LANIN del Módulo 2. Revisá los requisitos en la guía.' },
  { id:3, tipo:'success', texto:'Nuevo material disponible en Módulo 3: guía de herramientas XR y gamificación.' },
  { id:4, tipo:'danger', texto:'Recordá que el 80% de asistencia a sincrónicos es obligatorio para aprobar el taller.' },
]
```

---

## 🟧 2. Agregar rúbrica a TFI.jsx

### Qué hacer

Agregar una sección expandible (acordeón) en la página TFI que muestre la tabla completa de 6 criterios × 4 niveles con sus descriptores.

### Cómo

- Importar `TFI_ENUNCIADO` (contiene `rubrica` y `acreditacion`)
- Agregar estado `rubricaExpandida` (boolean)
- Renderizar la rúbrica como tabla cuando el usuario hace clic en "Ver rúbrica completa"
- Agregar también los niveles de acreditación (Distinguida / Estándar / En Proceso)

### Estructura visual

```
┌──────────────────────────────────────────────┐
│  Criterio          │ Excelente│Competente│... │
│────────────────────┼──────────┼──────────┼────│
│ Mediación Docente  │ desc...  │ desc...  │... │
│ Arquitectura TEIDE │ desc...  │ desc...  │... │
│ LANIN              │ desc...  │ desc...  │... │
│ Sinergia XR/IA     │ desc...  │ desc...  │... │
│ Accesibilidad      │ desc...  │ desc...  │... │
│ Impacto MAS        │ desc...  │ desc...  │... │
└──────────────────────────────────────────────┘
```

---

## 🟧 3. Mostrar objetivo y horas en ModuloDetalle.jsx

### Qué hacer

En la vista de detalle de módulo, agregar:
- **Barra de información**: horas sincrónicas y asincrónicas
- **Sección de objetivo**: mostrar `m.objetivo` debajo del título
- **Lista de contenidos**: mostrar `m.contenidos` como items detallados
- **Actividades del módulo**: mostrar `m.actividades_desc`

### Dónde

Dentro del componente `ModuloDetalle`, en el `<div className="mod-detalle-main">`, después del encabezado y antes de los videos.

---

## 🟨 4. Actualizar Home.jsx

### Qué hacer

- Cambiar el subtítulo de bienvenida para que diga algo como:
  "Bienvenido al Taller Interactivo Avanzado en Enseñanza a Distancia con Tecnologías — una experiencia formativa con visión MAS-TEIDE-LANIN"

---

## 🟨 5. Actualizar Extras.jsx

### Qué hacer

Agregar contenido con mini-cursos y recursos opcionales reales mencionados en el TIADET:
- Mini-curso: "IA en el diagnóstico médico"
- Mini-curso: "Telemedicina y salud global"
- Webinars internacionales (HarvardX, UNESCO, OPS)
- Casos de estudio: Impenetrable chaqueño, NOA/NEA
- Laboratorios de Narrativas de Salud Global

---

## Orden sugerido de implementación

| Paso | Archivo | Tiempo estimado |
|------|---------|----------------|
| 1 | `datos.js` — MODULOS | ⭐ Mayor esfuerzo |
| 2 | `datos.js` — ACTIVIDADES_INICIALES | Vinculado al paso 1 |
| 3 | `datos.js` — TFI_ENUNCIADO | Independiente |
| 4 | `datos.js` — EVENTOS | Depende del cronograma |
| 5 | `datos.js` — FOROS_INICIALES | Independiente |
| 6 | `datos.js` — ANUNCIOS | Independiente |
| 7 | `TFI.jsx` — Rúbrica | Depende del paso 3 |
| 8 | `Modulos.jsx` — Horas/objetivos | Depende del paso 1 |
| 9 | `Home.jsx` | Mínimo |
| 10 | `Extras.jsx` | Mínimo |

Se puede hacer en paralelo: pasos 3+4+5+6 son independientes entre sí.

---

## Notas adicionales

- La estructura actual de `MODULOS` en datos.js tiene campos `estado`, `resumen`, `temas`, `recursos`. La nueva estructura agrega `horas_sincronicas`, `horas_asincronicas`, `objetivo`, `contenidos`, `actividades_desc`. Los componentes que consumen módulos (`Modulos.jsx`, `Home.jsx`, `Actividades.jsx`) solo usan `id/numero/titulo/descripcion/estado/resumen/temas/recursos`, por lo que los campos nuevos son adicionales y no rompen nada.
- `Actividades.jsx` filtra actividades por `modulo` (id numérico). Como los ids de módulos se mantienen (1-5), las actividades nuevas se vincularán correctamente.
- La rúbrica tiene 6 criterios con 4 niveles cada uno. Para visualizarla bien en TFI.jsx conviene usar una cuadrícula o tabla responsiva.
- Los datos de `FOROS_INICIALES` pueden mantener su estructura actual; solo cambian descripciones y mensajes de ejemplo.
