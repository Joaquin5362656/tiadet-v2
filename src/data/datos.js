import imgNovedad1 from '../assets/novedad1.png'
import imgNovedad2 from '../assets/novedad2.png'
import imgNovedad3 from '../assets/novedad3.png'

export const USUARIOS_INICIALES = [
  { id: 1, dni: '12345678', email: 'mgarcia@mail.com', password: '1234', nombre: 'María García', rol: 'alumno', foto: null, legajo: 'DOC-001' },
  { id: 2, dni: '87654321', email: 'clopez@mail.com', password: '1234', nombre: 'Carlos López', rol: 'alumno', foto: null, legajo: 'DOC-002' },
  { id: 3, dni: '11223344', email: 'pfernandez@mail.com', password: '1234', nombre: 'Paula Fernández', rol: 'alumno', foto: null, legajo: 'DOC-003' },
  { id: 5, dni: '99001122', email: 'lmartinez@mail.com', password: '1234', nombre: 'Laura Martínez', rol: 'alumno', foto: null, legajo: 'DOC-004' },
  { id: 6, dni: '33445566', email: 'jperez@mail.com', password: '1234', nombre: 'Jorge Pérez', rol: 'alumno', foto: null, legajo: 'DOC-005' },
  { id: 7, dni: '77889900', email: 'agomez@mail.com', password: '1234', nombre: 'Ana Gómez', rol: 'alumno', foto: null, legajo: 'DOC-006' },
  { id: 9, dni: '10111213', email: 'bhernandez@mail.com', password: '1234', nombre: 'Beatriz Hernández', rol: 'alumno', foto: null, legajo: 'DOC-007' },
  { id: 10, dni: '14151617', email: 'dcastro@mail.com', password: '1234', nombre: 'Diego Castro', rol: 'alumno', foto: null, legajo: 'DOC-008' },
  { id: 11, dni: '18192021', email: 'estrada@mail.com', password: '1234', nombre: 'Elena Estrada', rol: 'alumno', foto: null, legajo: 'DOC-009' },
  { id: 12, dni: '22232425', email: 'fflores@mail.com', password: '1234', nombre: 'Federico Flores', rol: 'alumno', foto: null, legajo: 'DOC-010' },
  { id: 13, dni: '26272829', email: 'ggimenez@mail.com', password: '1234', nombre: 'Gabriela Giménez', rol: 'alumno', foto: null, legajo: 'DOC-011' },
  { id: 14, dni: '30313233', email: 'hquispe@mail.com', password: '1234', nombre: 'Hugo Quispe', rol: 'alumno', foto: null, legajo: 'DOC-012' },
  { id: 15, dni: '34353637', email: 'idiaz@mail.com', password: '1234', nombre: 'Inés Díaz', rol: 'alumno', foto: null, legajo: 'DOC-013' },
  { id: 16, dni: '38394041', email: 'nrios@mail.com', password: '1234', nombre: 'Nicolás Ríos', rol: 'alumno', foto: null, legajo: 'DOC-014' },
  { id: 17, dni: '42434445', email: 'omoreno@mail.com', password: '1234', nombre: 'Olga Moreno', rol: 'alumno', foto: null, legajo: 'DOC-015' },
  { id: 18, dni: '46474849', email: 'smedina@mail.com', password: '1234', nombre: 'Silvina Medina', rol: 'alumno', foto: null, legajo: 'DOC-016' },
  { id: 19, dni: '50515253', email: 'taguirre@mail.com', password: '1234', nombre: 'Tomás Aguirre', rol: 'alumno', foto: null, legajo: 'DOC-017' },
  { id: 20, dni: '54555657', email: 'varias@mail.com', password: '1234', nombre: 'Verónica Arias', rol: 'alumno', foto: null, legajo: 'DOC-018' },
  { id: 21, dni: '58596061', email: 'srojas@mail.com', password: '1234', nombre: 'Santiago Rojas', rol: 'alumno', foto: null, legajo: 'DOC-019' },
  { id: 22, dni: '62636465', email: 'dmolina@mail.com', password: '1234', nombre: 'Daniela Molina', rol: 'alumno', foto: null, legajo: 'DOC-020' },
  { id: 23, dni: '66676869', email: 'fcampos@mail.com', password: '1234', nombre: 'Fernando Campos', rol: 'alumno', foto: null, legajo: 'DOC-021' },
  { id: 24, dni: '70717273', email: 'mnavarro@mail.com', password: '1234', nombre: 'Mónica Navarro', rol: 'alumno', foto: null, legajo: 'DOC-022' },
  { id: 25, dni: '74757677', email: 'gvargas@mail.com', password: '1234', nombre: 'Guillermo Vargas', rol: 'alumno', foto: null, legajo: 'DOC-023' },
  { id: 4, dni: 'prof001', email: 'amendez@uba.ar', password: 'prof', nombre: 'Dra. Ana Méndez', rol: 'docente', foto: null, legajo: 'DOC-PRF' },
]

export const ANUNCIOS = [
  { id: 1, tipo: 'warning', texto: 'Próxima semana vence la mini-narrativa LANIN del Módulo 2. Revisá los requisitos en la guía del taller.' },
  { id: 2, tipo: 'success', texto: 'Nuevo material disponible en Módulo 3: herramientas Kahoot.it, Genially, Arloopa y Frame VR para gamificación y XR.' },
  { id: 3, tipo: 'danger', texto: 'Recordá que el 80% de asistencia a sincrónicos es obligatorio para aprobar el taller.' },
]

export const NOVEDADES = [
  { id: 1, titulo: 'OPS lanza plataforma inmersiva de Realidad Virtual para capacitar a técnicos de laboratorios de salud pública', fuente: 'OPS', fecha: 'Feb 2026', resumen: 'Plataforma VR para estandarizar la vigilancia segura de dengue, influenza y otros patógenos con potencial epidémico en América Latina y el Caribe.', url: 'https://www.paho.org/en/news/6-2-2026-paho-launches-virtual-reality-laboratory-build-capacity-respiratory-virus', categoria: 'Educación médica', imagen: imgNovedad1 },
  { id: 2, titulo: 'NIAID actualiza PathogenAR: app de Realidad Aumentada para estudiar patógenos en 3D', fuente: 'NIAID', fecha: '2026', resumen: 'Aplicación AR de libre acceso para estudiar estructura tridimensional de patógenos, replicación del virus hepatitis B y simulación de toma de muestras nasofaríngeas.', url: 'https://www.niaid.nih.gov/research/pathogenar-mobile-app', categoria: 'Tecnología', imagen: imgNovedad2 },
  { id: 3, titulo: 'Manual de buenas prácticas para el uso de la Inteligencia Artificial en Medicina', fuente: 'OMC España', fecha: '2026', resumen: 'Guía imprescindible para la correcta praxis médica en tiempos de IA Gen, coordinada por María Isabel Moya García y José Antonio Trujillo Ruiz.', url: 'https://www.cgcom.es/publicaciones/manual_OMC_buenas_practicas_IA', categoria: 'Salud pública', imagen: imgNovedad3 },
]

export const MODULOS = [
  {
    id: 1, numero: '01',
    titulo: 'Fundamentos y Rol del Docente en la Educación a Distancia',
    descripcion: 'Rol del docente virtual, estándares de calidad y marco TEIDE.',
    horas_sincronicas: 4,
    horas_asincronicas: 4,
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
      'Evaluación censal diagnóstica de la experiencia docente individual respecto a los estándares de calidad educativa en la EaD utilizando un Formulario de Google.',
      'Creación de una nube de palabras de fortalezas y debilidades mediante Mentimeter.',
      'Análisis estadístico de resultados de la evaluación censal.',
      'Análisis de casos de éxito a nivel global (incluyendo HarvardX) y de los cursantes utilizando las métricas de excelencia pertinentes.',
      'Foro estructurado de intercambio sobre desafíos y estrategias personales.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Barboza Norbis - Guía TEIDE (2021)', url: '#' },
      { tipo: 'pdf', label: 'Bates - Teaching in a Digital Age (2019)', url: '#' },
      { tipo: 'link', label: 'Quality Matters Rubric 7th ed.', url: 'https://www.qualitymatters.org/' },
      { tipo: 'link', label: 'Community of Inquiry framework', url: 'https://coi.athabascau.ca/' },
      { tipo: 'link', label: 'E-xcellence - EADTU', url: 'https://e-xcellencelabel.eadtu.eu/' },
      { tipo: 'link', label: 'UNESCO - ICDE quality models', url: 'https://icde.org/' },
    ],
    recorridoSemanal: [
      {
        semana: 1,
        tema: 'El docente virtual como facilitador',
        contenidos: 'Rol del docente virtual como facilitador, mediador y mentor. Diferencias entre educación presencial y a distancia.',
        actividad: 'Evaluación censal diagnóstica mediante Formulario de Google. Foro de presentación y debate sobre rol docente.',
      },
      {
        semana: 2,
        tema: 'Estrategias motivacionales y CoI',
        contenidos: 'Community of Inquiry framework (Garrison, Anderson y Archer). Estrategias para fomentar autonomía y comunidades de aprendizaje.',
        actividad: 'Creación de nube de palabras con Mentimeter. Análisis estadístico de resultados de la evaluación censal.',
      },
      {
        semana: 3,
        tema: 'Estándares de calidad internacional',
        contenidos: 'Quality Matters Rubric, E-xcellence EUA, Harvard HIDL/HILT. Análisis de casos de éxito global como HarvardX.',
        actividad: 'Análisis de caso: HarvardX — identificación de estándares de calidad.',
      },
      {
        semana: 4,
        tema: 'Guía TEIDE y cierre del módulo',
        contenidos: 'Introducción a la Guía TEIDE para estructurar proyectos educativos. Sustento académico-pedagógico de las recomendaciones E-xcellence, QM y HIDL/HILT.',
        actividad: 'Foro estructurado de intercambio sobre desafíos y estrategias personales.',
      },
    ],
  },
  {
    id: 2, numero: '02',
    titulo: 'Evaluación y Narrativas para el Aprendizaje',
    descripcion: 'Evaluación en EaD y metodología LANIN de narrativas.',
    horas_sincronicas: 4,
    horas_asincronicas: 4,
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
      'Diseño de evaluación en EaD: diferenciación entre evaluación diagnóstica, formativa y sumativa digital, retroalimentación constructiva.',
      'La clase invertida (flipped classroom) y el Aprendizaje Basado en Problemas/Proyectos (ABP) de McMaster, Ontario, Canadá. Su implementación en la era de la IA: esfuerzo productivo del educando y andamiaje de la IA, con alternancia temporal de fases de encendido y apagado.',
      'Fenómeno de la dependencia algorítmica (nunca habilidad). Configuración de LLM como cotutores socráticos (ej. LearnLM).',
      'Guía LANIN: importancia de las narrativas para que los alumnos construyan sentido y relevancia educativa, transformando contenido en experiencias de aprendizaje significativas.',
      'Narrativas basadas en problemas: aplicación práctica en el área de enfermedades tropicales transmisibles, promoviendo análisis crítico y solución de casos reales en formato narrativo.',
      'Gestión del tiempo y evaluación continua: cómo monitorear progresos virtualmente y ajustar estrategias pedagógicas.'
    ],
    actividades_desc: [
      'Creación de mini-narrativas por equipos para un caso clínico de una misma enfermedad tropical transmisible. Clase invertida (flipped classroom). Modelo ABP. Heteroevaluación por pares.',
      'Exposición infográfica del Diseño individual de rúbricas adaptadas a la evaluación formativa de educandos en la asignatura a cargo de cada profesor en la METT.',
      'Foro virtual para elaboración de instrumentos evaluativos con criterios MAS-TEIDE y LANIN con monitoreo y retroalimentación del docente Tutor.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Barrows & Bennett - Diagnostic reasoning (1972)', url: '#' },
      { tipo: 'pdf', label: 'Neufeld & Barrows - The McMaster Philosophy (1974)', url: '#' },
      { tipo: 'pdf', label: 'Oubiña - TFI Taller 7 EDET: Visión LANIN (2024)', url: '#' },
      { tipo: 'link', label: 'Rubistar — generador de rúbricas', url: 'https://rubistar.4teachers.org' },
      { tipo: 'link', label: 'LearnLM - Google', url: 'https://ai.google/discover/learnlm/' },
    ],
    recorridoSemanal: [
      {
        semana: 1,
        tema: 'Evaluación en EaD y clase invertida',
        contenidos: 'Diseño de evaluación diagnóstica, formativa y sumativa en entornos virtuales. La clase invertida y el ABP de McMaster. Retroalimentación constructiva.',
        actividad: 'Clase invertida cocreada por los educandos. Heteroevaluación por pares.',
      },
      {
        semana: 2,
        tema: 'ABP, dependencia algorítmica y LearnLM',
        contenidos: 'ABP en la era de la IA. Fenómeno de la dependencia algorítmica (nunca habilidad). Configuración de LLM como cotutores socráticos (LearnLM).',
        actividad: 'Taller virtual: diseño de mini-narrativa LANIN para caso de ETT.',
      },
      {
        semana: 3,
        tema: 'Narrativas basadas en problemas',
        contenidos: 'Estrategia LANIN. Aplicación práctica en Enfermedades Tropicales Transmisibles. Análisis crítico y solución de casos reales en formato narrativo.',
        actividad: 'Creación de mini-narrativa LANIN para un caso clínico (entrega Semana 4).',
      },
      {
        semana: 4,
        tema: 'Rúbricas y cierre',
        contenidos: 'Exposición infográfica de rúbricas adaptadas. Foro virtual para elaboración de instrumentos evaluativos con criterios MAS-TEIDE y LANIN.',
        actividad: 'Diseño de rúbrica formativa con criterios LANIN y TEIDE. Foro de retroalimentación del Tutor.',
      },
    ],
  },
  {
    id: 3, numero: '03',
    titulo: 'Herramientas para la Gamificación y Realidad Extendida',
    descripcion: 'VR, AR, XR, 360° y gamificación aplicada a la enseñanza médica.',
    horas_sincronicas: 4,
    horas_asincronicas: 12,
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
      'Software y plataformas recomendadas: CoSpaces, Oculus Education, Kahoot.it, Genially, Arloopa y OBS Studio (Frame VR).',
      'Diseño instruccional gamificado: cómo integrar estos recursos en el currículo virtual y medir su impacto.'
    ],
    actividades_desc: [
      'Evaluación por equipos de un ejemplo pedagógico elaborado en OBS Studio Frame VR: https://framevr.io/viral-science-of-the-music#',
      'Contribuciones individuales para la optimización de la obra creada, seguidas de heteroevaluación por pares.',
      'Diseño y simulación práctica individual en un entorno XR básico a elección, según la asignatura a cargo de cada docente.',
      'Diseño colaborativo de un recurso gamificado empleando Kahoot.it (ciencias básicas) o Genially (materias clínicas).',
      'Evaluación por equipos de un ejemplo pedagógico elaborado en Kahoot según rúbricas — PIN: 04935041.',
    ],
    recursos: [
      { tipo: 'pdf', label: 'Rosenthal & Toscano - Apuntes EDET (2024)', url: '#' },
      { tipo: 'pdf', label: 'Christopoulos & Mystakidis - Gamification in Education (2023)', url: '#' },
      { tipo: 'pdf', label: 'Radianti et al. - Systematic review of VR in higher education (2020)', url: '#' },
      { tipo: 'link', label: 'CoSpaces Edu', url: 'https://cospaces.io/edu/' },
      { tipo: 'link', label: 'Kahoot! — PIN: 04935041', url: 'https://kahoot.it/' },
      { tipo: 'link', label: 'Genially', url: 'https://genially.com/' },
    ],
    recorridoSemanal: [
      {
        semana: 1,
        tema: '1er encuentro: Fundamentos de gamificación y herramientas',
        contenidos: 'Conceptos básicos de gamificación. Presentación de herramientas: Kahoot.it, Genially, Arloopa y OBS Studio Frame VR.',
        actividad: 'Evaluación por equipos del ejemplo pedagógico en Frame VR: https://framevr.io/viral-science-of-the-music#',
      },
      {
        semana: 2,
        tema: '2do encuentro: XR y diseño individual',
        contenidos: 'VR, AR, XR y 360°. Plataformas CoSpaces, Oculus Education. Diseño y simulación práctica en entorno XR básico.',
        actividad: 'Diseño y simulación individual en entorno XR a elección. Contribuciones para optimización de obra en Frame VR.',
      },
      {
        semana: 3,
        tema: '3er encuentro: Recurso gamificado y cierre',
        contenidos: 'Diseño colaborativo de recurso gamificado con Kahoot.it (ciencias básicas) o Genially (materias clínicas).',
        actividad: 'Diseño colaborativo de recurso gamificado. Evaluación por equipos con rúbricas — PIN Kahoot: 04935041.',
      },
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
      'Diferencia entre inclusión e integración de la persona con discapacidad sensorial.',
      'Tecnologías asistivas: software lector de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles.',
      'Diseño universal: creación de contenidos y plataformas navegables, comprensibles y usables para todos.',
      'Estrategias didácticas inclusivas: adaptaciones en materiales, evaluación y comunicación.',
      'Análisis de casos: accesibilidad aplicada en cursos de salud tropical y su impacto en la participación.'
    ],
    actividades_desc: [
      'Testeo de recursos con lector de pantalla.',
      'Adaptación de material audiovisual con subtítulos y audiodescripción.',
      'Análisis del libro electrónico: "E-BOOK DE REFERENCIA. Diseño de Materiales accesibles" — https://drive.google.com/file/d/1Zy0RBLuNHul48O0fm1BpdReaAvYFwV6x/view',
      'Discusión grupal: ¿Se puede incluir material escaneado en un audiolibro? ¿Por qué? ¿Es conveniente la utilización de imágenes múltiples de Pptx sin epígrafes? ¿Es conveniente utilizar columna única o doble en cada página?',
      'Diseño individual de un plan de accesibilidad integral para un módulo específico de la asignatura a cargo del educando.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Cobo - Contenido, contenedor y contexto (2016)', url: '#' },
      { tipo: 'pdf', label: 'Seale - E-learning and Disability in Higher Education (2014)', url: '#' },
      { tipo: 'pdf', label: 'Lion - Los desafíos de aprender en un mundo algorítmico (2020)', url: '#' },
      { tipo: 'link', label: 'W3C - WCAG 2.1', url: 'https://www.w3.org/TR/WCAG21/' },
      { tipo: 'link', label: 'W3C - WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
      { tipo: 'link', label: 'UN SDG Goal 4 — Educación inclusiva', url: 'https://www.un.org/sustainabledevelopment/es/education/' },
      { tipo: 'link', label: 'CAST — Universal Design for Learning', url: 'https://www.cast.org/impact/universal-design-for-learning-udl' },
    ],
    recorridoSemanal: [
      {
        semana: 1,
        tema: 'Normativas WCAG',
        contenidos: 'Introducción a WCAG 2.1/2.2. Principios de accesibilidad web: perceptible, operable, comprensible y robusto. Diferencia entre inclusión e integración.',
        actividad: 'Testeo de recurso propio con lector de pantalla (NVDA o VoiceOver).',
      },
      {
        semana: 2,
        tema: 'Tecnologías asistivas',
        contenidos: 'Lectores de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles para discapacidad visual y auditiva.',
        actividad: 'Adaptación de material audiovisual con subtítulos y audiodescripción. Análisis del E-Book accesible.',
      },
      {
        semana: 3,
        tema: 'Discusión y análisis de accesibilidad',
        contenidos: 'Discusión grupal sobre formato de materiales accesibles. Análisis de accesibilidad de un módulo de la METT.',
        actividad: 'Discusión grupal: material escaneado en audiolibro, epígrafes en imágenes, columna única vs doble.',
      },
      {
        semana: 4,
        tema: 'Estrategias inclusivas y cierre',
        contenidos: 'Estrategias didácticas inclusivas. Adaptaciones en materiales, evaluación y comunicación. Casos aplicados a salud tropical.',
        actividad: 'Diseño de plan de accesibilidad integral para un módulo específico de la asignatura a cargo del educando.',
      },
    ],
  },
  {
    id: 5, numero: '05',
    titulo: 'Inteligencia Artificial Generativa en la Educación a Distancia',
    descripcion: 'IA Gen para diseño pedagógico, contenidos y tutorías inteligentes.',
    horas_sincronicas: 8,
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
      'Técnicas de construcción y evaluación de Prompts eficientes. Diseño de asistentes personalizados (Gems). ChatGPT Extensions, Google Deep Research, Perplexity Spaces.',
      'Herramientas de transformación conceptual (Mapify), representación visual (Napkin), asistencia integral para estudio (NotebookLM), gestión inteligente de referencias (Zotero, Research Rabbit, Elicit, PubTator).',
      'Las cinco estrategias de Freire para la educación crítica. Los cinco principios pedagógicos críticos de Costa y Murphy.',
      'Buenas prácticas para la IA en Medicina (Manual OMC).',
      'Consideraciones éticas: privacidad, sesgos y transparencia en el uso de IA en contextos educativos.',
      'Educación crítica como práctica de humanización (no automatización). Futuro de la educación con IA: tendencias y recomendaciones.'
    ],
    actividades_desc: [
      'Experimentos grupales con herramientas básicas de distintas plataformas de IA generativa: exposición de textos a detectores de plagio y uso de IA Gen. Comparación de resultados y heteroevaluación por pares.',
      'Resolución de problemas con selección grupal de las plataformas más apropiadas para cada caso.',
      'Debate ético en foros sobre beneficios y riesgos del uso de IA Gen en educación de posgrado, según experiencias personales.',
      'Diseño conceptual de un asistente docente basado en IA.'
    ],
    recursos: [
      { tipo: 'pdf', label: 'Holmes et al. - AI in Education (UNESCO 2021)', url: '#' },
      { tipo: 'pdf', label: 'Costa & Murphy - Critical education and GenAI (2025)', url: '#' },
      { tipo: 'pdf', label: 'Lion et al. - IA en la educación (2024)', url: '#' },
      { tipo: 'link', label: 'UNESCO - AI in Education', url: 'https://www.unesco.org/en/digital-education/artificial-intelligence' },
      { tipo: 'link', label: 'León XIV - Magnifica Humanitas (2026)', url: 'https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html' },
      { tipo: 'link', label: 'Manual OMC - Buenas prácticas IA en Medicina (2026)', url: 'https://www.cgcom.es/publicaciones/manual_OMC_buenas_practicas_IA' },
      { tipo: 'link', label: 'NotebookLM - Google', url: 'https://notebooklm.google.com/' },
      { tipo: 'link', label: 'Zotero', url: 'https://www.zotero.org/' },
    ],
    recorridoSemanal: [
      {
        semana: 1,
        tema: '1er encuentro: LLMs y Prompts',
        contenidos: 'Uso de chatbots basados en LLM: ChatGPT, Google Gemini, Grok, Microsoft Copilot. Técnicas de construcción y evaluación de Prompts. Diseño de asistentes personalizados (Gems). ChatGPT Extensions, Google Deep Research, Perplexity Spaces.',
        actividad: 'Experimentos grupales con distintas plataformas de IA Gen. Exposición de textos a detectores de plagio. Comparación y heteroevaluación por pares.',
      },
      {
        semana: 2,
        tema: '2do encuentro: Herramientas de investigación y estudio',
        contenidos: 'Mapify, Napkin, NotebookLM para asistencia integral al estudio. Gestión inteligente de referencias: Zotero, Research Rabbit, Elicit, PubTator.',
        actividad: 'Resolución de problemas con selección grupal de plataformas. Diseño conceptual de un asistente docente basado en IA.',
      },
      {
        semana: 3,
        tema: '3er encuentro: Ética y cierre',
        contenidos: 'Las cinco estrategias de Freire. Los cinco principios pedagógicos críticos de Costa y Murphy. Buenas prácticas para IA en Medicina. Educación crítica como práctica de humanización.',
        actividad: 'Debate ético en foros sobre beneficios y riesgos del uso de IA Gen en educación de posgrado.',
      },
    ],
  },
]

export const ACTIVIDADES_INICIALES = [
  { id: 1, titulo: 'Reflexión guiada sobre experiencia docente en EaD', tipo: 'tarea', modulo: 1, vencimiento: '2026-06-15', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Ensayo breve (400-600 palabras) reflexionando sobre tu experiencia previa en educación a distancia. Identificá fortalezas, debilidades y expectativas para el taller.' },
  { id: 2, titulo: 'Mini-narrativa LANIN: caso clínico de ETT', tipo: 'tarea', modulo: 2, vencimiento: '2026-06-22', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Creá una mini-narrativa para un caso clínico de una enfermedad tropical transmisible aplicando la metodología LANIN. Extensión: 500-800 palabras.' },
  { id: 3, titulo: 'Diseño de recurso gamificado', tipo: 'tarea', modulo: 3, vencimiento: '2026-06-29', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Diseñá colaborativamente un recurso gamificado para una temática de enfermedades tropicales transmisibles. Podés usar Genially, Kahoot u otra herramienta.' },
  { id: 4, titulo: 'Encuesta de experiencia inmersiva', tipo: 'encuesta', modulo: 3, vencimiento: '2026-07-16', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Evaluá tu experiencia con la simulación XR y los recursos gamificados del módulo.', preguntas: [
    { id: 'q1', texto: '¿En qué medida considerás que la visión MAS-TEIDE-LANIN aporta un enfoque innovador para la educación a distancia en enfermedades tropicales?', opciones: ['Significativamente innovador','Moderadamente innovador','Poco innovador','No aporta innovación'], respuestaCorrecta: null },
    { id: 'q2', texto: '¿Qué componente del taller te resultó más valioso para tu práctica docente?', opciones: ['Narrativas LANIN y casos del NOA/NEA','Tecnologías XR y gamificación','Diseño universal y accesibilidad','IA Generativa aplicada a la educación'], respuestaCorrecta: null },
  ]},
  { id: 5, titulo: 'Plan de accesibilidad integral', tipo: 'tarea', modulo: 4, vencimiento: '2026-07-06', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Diseñá un plan de accesibilidad integral para un módulo específico de la METT, incluyendo subtítulos, audiodescripción y alternativas táctiles.' },
  { id: 6, titulo: 'Experimento con IA Generativa', tipo: 'tarea', modulo: 5, vencimiento: '2026-07-13', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Usá una herramienta de IA Gen (ChatGPT, Claude, Gemini) para generar un plan de clase o material educativo. Reflexioná sobre los resultados obtenidos.' },
  { id: 7, titulo: 'Proyecto Integrador Final', tipo: 'tarea', modulo: null, vencimiento: '2026-08-07', estado: 'pendiente', puntaje: null, puntajeMax: 100, descripcion: 'Rediseño completo de un módulo de la METT integrando: gamificación/XR + accesibilidad + IA + narrativas LANIN. Incluye defensa oral sincrónica.' },
  { id: 8, titulo: 'Análisis de caso: HarvardX', tipo: 'tarea', modulo: 1, vencimiento: '2026-06-12', estado: 'completada', puntaje: 8, puntajeMax: 10, descripcion: 'Analizá un caso de éxito en educación a distancia identificando los estándares de calidad aplicados y cómo podrían transferirse a la METT.', retroalimentacion: 'Muy buen análisis. Identificaste correctamente los estándares Quality Matters. Para profundizar, sugiero revisar cómo alinear esos estándares con el contexto específico del NOA/NEA.' },
  { id: 9, titulo: 'Diseño de rúbrica formativa', tipo: 'tarea', modulo: 2, vencimiento: '2026-06-14', estado: 'completada', puntaje: 9, puntajeMax: 10, descripcion: 'Diseñá una rúbrica analítica para evaluar una actividad de tu especialidad, incorporando criterios LANIN y TEIDE.', retroalimentacion: 'Excelente rúbrica. Los criterios LANIN están bien integrados y los niveles de desempeño son claros. Te recomiendo agregar un nivel "ejemplar" para incentivar la excelencia por encima del estándar.' },
  { id: 10, titulo: 'Testeo con lector de pantalla', tipo: 'tarea', modulo: 4, vencimiento: '2026-06-14', estado: 'completada', puntaje: 7, puntajeMax: 10, descripcion: 'Probá un recurso educativo propio con un lector de pantalla (NVDA o VoiceOver) y documentá los problemas de accesibilidad encontrados.', retroalimentacion: 'Buen trabajo inicial. El informe documenta los problemas principales, pero faltó incluir soluciones concretas para cada barrera identificada. Revisá la guía WCAG 2.1 para proponer alternativas viables.' },
]

export const FOROS_INICIALES = [
  { id: 'general', titulo: 'Foro General', descripcion: 'Espacio abierto para consultas, intercambios y comentarios generales del taller.', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '8 jun', texto: 'Bienvenidos al Taller Interactivo Avanzado en EaD con Tecnologías. En este recorrido exploraremos la visión MAS-TEIDE-LANIN para transformar la educación a distancia en el ámbito de las enfermedades tropicales transmisibles. Este espacio es de todos — úsenlo para cualquier consulta o intercambio.' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '9 jun', texto: 'Gracias! Una pregunta: los materiales quedan disponibles despues de que cierra cada modulo?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '9 jun', texto: 'Si, todo el material queda accesible durante todo el cuatrimestre y 30 dias despues del cierre del taller.' },
  ]},
  { id: 'mod1', titulo: 'Foro Módulo 1', descripcion: 'Discusión sobre el rol del docente virtual, estándares de calidad y marco TEIDE.', tipo: 'modulo', moduloId: 1, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Carlos Lopez', avatar: 'CL', fecha: '12 jun', texto: 'Me parece muy interesante el concepto de "brújula cognitiva" vs "mapa". En mi práctica actual soy más mapa que brújula. Como empiezo a cambiar eso?' },
    { id: 2, autor: 'Paula Fernandez', avatar: 'PF', fecha: '12 jun', texto: 'Creo que el primer paso es diseñar actividades que obliguen al estudiante a tomar decisiones, no solo consumir contenido. Los estándares Quality Matters dan buena guía para eso.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '13 jun', texto: 'Exacto, Paula. Quality Matters proporciona un marco concreto. En el Módulo 2 veremos cómo las narrativas LANIN pueden ayudar a construir esa brújula.' },
  ]},
  { id: 'mod2', titulo: 'Foro Módulo 2', descripcion: 'Debate sobre evaluación formativa, rúbricas y narrativas LANIN en ETT.', tipo: 'modulo', moduloId: 2, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Roberto Rodriguez', avatar: 'RR', fecha: '19 jun', texto: 'La estrategia LANIN me parece poderosa para conectar la teoría con la realidad del Impenetrable. Estoy pensando en una narrativa sobre un brote de dengue en una comunidad rural.' },
    { id: 2, autor: 'Maria Garcia', avatar: 'MG', fecha: '19 jun', texto: 'Me pregunto cómo evaluar las narrativas de manera objetiva. Una rúbrica bien diseñada sería clave para eso.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '20 jun', texto: 'Buena observación, Maria. En la actividad de diseño de rúbrica vamos justamente a trabajar eso: criterios claros para evaluar narrativas LANIN.' },
  ]},
  { id: 'mod3', titulo: 'Foro Módulo 3', descripcion: 'Intercambio sobre gamificación, VR, AR y XR aplicados a la enseñanza médica.', tipo: 'modulo', moduloId: 3, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Ana Gomez', avatar: 'AG', fecha: '26 jun', texto: 'Probé CoSpaces para modelar el ciclo del vector del dengue. La visualización en 3D ayuda mucho a entender la transmisión. Alguien más lo probo?' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '27 jun', texto: 'Todavia no, pero me interesa. Que tal es la curva de aprendizaje de CoSpaces?' },
    { id: 3, autor: 'Ana Gomez', avatar: 'AG', fecha: '27 jun', texto: 'Es bastante intuitivo. En una tarde ya tenes algo funcional. Lo recomiendo.' },
  ]},
  { id: 'mod4', titulo: 'Foro Módulo 4', descripcion: 'Discusión sobre accesibilidad WCAG, tecnologías asistivas y DUA.', tipo: 'modulo', moduloId: 4, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martinez', avatar: 'LM', fecha: '3 jul', texto: 'Nunca habia usado un lector de pantalla. Probar NVDA con mis propios materiales fue revelador — casi nada es accesible. Por donde arrancar?' },
    { id: 2, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jul', texto: 'Arrancá por lo básico: estructura de encabezados, textos alternativos en imágenes y subtitulado de videos. WCAG 2.1 nivel A es un buen primer objetivo.' },
  ]},
  { id: 'mod5', titulo: 'Foro Módulo 5', descripcion: 'Debate sobre IA Generativa en educación: aplicaciones, ética y sesgos.', tipo: 'modulo', moduloId: 5, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Federico Flores', avatar: 'FF', fecha: '10 jul', texto: 'Usé ChatGPT para generar un plan de clase sobre malaria. El resultado fue bueno pero note algunos datos imprecisos. La supervisión humana es indispensable.' },
    { id: 2, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '11 jul', texto: 'Totalmente, Federico. La IA es una herramienta, no un reemplazo. La ética y la verificación crítica son parte central de este módulo.' },
  ]},
  { id: 'tfi-general', titulo: 'TFI — General', descripcion: 'Espacio de consultas generales sobre el Trabajo Final Integrador.', tipo: 'tfi', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '1 jul', texto: 'El TFI consiste en el rediseño completo de un módulo de la METT integrando gamificación/XR + accesibilidad + IA + narrativas LANIN. La rúbrica con 6 criterios y 4 niveles ya está disponible. Cualquier consulta, acá o en el foro privado.' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '2 jul', texto: 'Puede ser sobre cualquier enfermedad tropical o tiene que ser una en particular?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '2 jul', texto: 'Puede ser cualquier enfermedad tropical transmisible que se aborda en la METT. Lo importante es que integre los 4 ejes del taller: XR/gamificación, accesibilidad, IA y narrativas LANIN.' },
  ]},
  { id: 'tfi-grupos', titulo: 'TFI — Mi Grupo', descripcion: 'Coordinacion interna del grupo de trabajo para el TFI.', tipo: 'tfi-grupo', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Maria Garcia', avatar: 'MG', fecha: '12 jun', texto: 'Hola grupo! Arrancamos con una reunion por Zoom esta semana para definir qué modulo de la METT vamos a rediseñar?' },
    { id: 2, autor: 'Carlos Lopez', avatar: 'CL', fecha: '12 jun', texto: 'Me parece bien. Propongo el jueves 12 a las 19hs. Les queda?' },
  ]},
  { id: 'tfi-privado', titulo: 'TFI — Consulta Privada', descripcion: 'Canal privado entre vos y la docente para consultas sobre tu TFI.', tipo: 'tfi-privado', acceso: 'privado', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '9 jun', texto: 'Este espacio es tuyo para consultas privadas sobre el TFI. En qué módulo de la METT pensás basar tu rediseño?' },
  ]},
  { id: 'admin', titulo: 'Consultas Administrativas', descripcion: 'Espacio para consultas sobre inscripción, certificados, plazos, cursada y trámites del taller.', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '8 jun', texto: 'Bienvenidos al foro de consultas administrativas. Aquí pueden preguntar sobre plazos de entrega, certificados, inscripción y cualquier tema administrativo relacionado con el taller.' },
  ]},
  { id: 'bitacora', titulo: 'Foro de Bitácora', descripcion: 'Recursos, links y temas de interes por fuera de los modulos obligatorios.', tipo: 'extra', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martinez', avatar: 'LM', fecha: '10 jun', texto: 'Comparto este articulo sobre el impacto de la IA en diagnostico medico, muy relevante para el Módulo 5: https://www.thelancet.com' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '10 jun', texto: 'Gracias Laura! Tambien recomiendo el simulador de brotes epidemicos de la OPS, muy util para pensar narrativas LANIN: https://www.paho.org' },
  ]},
]

export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador — TIA-EDiT 2026',
  subtitulo: 'Rediseño de un módulo de la METT con enfoque MAS-TEIDE-LANIN',
  fecha_entrega: '7 de agosto de 2026',
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

export const EVENTOS = [
  // --- Semana 2: Jun 8-12 ---
  { id: 1, titulo: 'Sesión de bienvenida y orientación', fecha: '2026-06-08', tipo: 'clase' },
  { id: 2, titulo: 'Encuentro sincrónico — Módulo 1: Fundamentos y Rol Docente', fecha: '2026-06-11', tipo: 'clase' },
  // --- Semana 3: Jun 15-19 ---
  { id: 3, titulo: 'Vence: Reflexión guiada EaD', fecha: '2026-06-15', tipo: 'entrega' },
  { id: 4, titulo: 'Encuentro sincrónico — Módulo 2: Evaluación y Narrativas', fecha: '2026-06-18', tipo: 'clase' },
  // --- Semana 4: Jun 22-26 ---
  { id: 5, titulo: 'Vence: Mini-narrativa LANIN', fecha: '2026-06-22', tipo: 'entrega' },
  { id: 6, titulo: 'M3 - 1er encuentro sincrónico: Gamificación y herramientas', fecha: '2026-06-25', tipo: 'clase' },
  // --- Semana 5: Jun 29-Jul 3 ---
  { id: 7, titulo: 'Vence: Diseño de recurso gamificado', fecha: '2026-06-29', tipo: 'entrega' },
  { id: 8, titulo: 'M3 - 2do encuentro sincrónico: XR y diseño individual', fecha: '2026-07-02', tipo: 'clase' },
  // --- Semana 6: Jul 6-10 ---
  { id: 9, titulo: 'Vence: Plan de accesibilidad integral', fecha: '2026-07-06', tipo: 'entrega' },
  { id: 10, titulo: 'M3 - 3er encuentro sincrónico: Recurso gamificado y cierre', fecha: '2026-07-09', tipo: 'clase' },
  // --- Semana 7: Jul 13-17 ---
  { id: 11, titulo: 'Encuentro sincrónico — Módulo 4: Accesibilidad', fecha: '2026-07-14', tipo: 'clase' },
  { id: 12, titulo: 'Vence: Encuesta experiencia inmersiva', fecha: '2026-07-16', tipo: 'entrega' },
  // --- Semana 8: Jul 20-24 ---
  { id: 13, titulo: 'M5 - 1er encuentro sincrónico: LLMs y Prompts', fecha: '2026-07-21', tipo: 'clase' },
  // --- Semana 9: Jul 27-31 ---
  { id: 14, titulo: 'M5 - 2do encuentro sincrónico: Herramientas de investigación', fecha: '2026-07-28', tipo: 'clase' },
  // --- Semana 10: Aug 3-7 ---
  { id: 15, titulo: 'M5 - 3er encuentro sincrónico: Ética y cierre', fecha: '2026-08-04', tipo: 'clase' },
  { id: 16, titulo: 'Vence: Experimento con IA Gen', fecha: '2026-08-06', tipo: 'entrega' },
  // --- Agosto ---
  { id: 17, titulo: 'Vence: Entrega TFI escrito', fecha: '2026-08-07', tipo: 'entrega' },
  { id: 18, titulo: 'Defensas orales sincrónicas TFI', fecha: '2026-08-28', tipo: 'examen' },
  { id: 19, titulo: 'Cierre del taller', fecha: '2026-08-31', tipo: 'clase' },
]
