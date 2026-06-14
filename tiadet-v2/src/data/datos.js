// ── Usuarios registrados (simulados) ──────────────────────────────
export const USUARIOS_INICIALES = [
  { id: 1, dni: '12345678', email: 'mgarcia@mail.com', password: '1234', nombre: 'María García',   rol: 'alumno',  foto: null, legajo: 'DOC-001' },
  { id: 2, dni: '87654321', email: 'clopez@mail.com',  password: '1234', nombre: 'Carlos López',   rol: 'alumno',  foto: null, legajo: 'DOC-002' },
  { id: 3, dni: '11223344', email: 'pfernandez@mail.com', password: '1234', nombre: 'Paula Fernández', rol: 'alumno', foto: null, legajo: 'DOC-003' },
  { id: 4, dni: '55667788', email: 'rrodriguez@mail.com', password: '1234', nombre: 'Roberto Rodríguez', rol: 'alumno', foto: null, legajo: 'DOC-004' },
  { id: 5, dni: '99001122', email: 'lmartinez@mail.com',  password: '1234', nombre: 'Laura Martínez',   rol: 'alumno', foto: null, legajo: 'DOC-005' },
  { id: 6, dni: '33445566', email: 'jperez@mail.com',     password: '1234', nombre: 'Jorge Pérez',       rol: 'alumno', foto: null, legajo: 'DOC-006' },
  { id: 7, dni: '77889900', email: 'agomez@mail.com',     password: '1234', nombre: 'Ana Gómez',         rol: 'alumno', foto: null, legajo: 'DOC-007' },
  { id: 8, dni: 'prof001',  email: 'amendez@uba.ar',      password: 'prof', nombre: 'Dra. Ana Méndez',  rol: 'docente', foto: null, legajo: 'DOC-PRF' },
]

// ── Anuncios del curso ─────────────────────────────────────────────
export const ANUNCIOS = [
  { id: 1, tipo: 'danger',  texto: 'El viernes 13/6 la Dra. Méndez no estará presente. La clase se reprograma.' },
  { id: 2, tipo: 'warn',    texto: 'En 1 semana vence la entrega del TFI — recordá revisar los requisitos.' },
  { id: 3, tipo: 'info',    texto: 'El lunes 16/6 no hay clase (feriado nacional).' },
  { id: 4, tipo: 'success', texto: 'Nuevo material disponible en el Módulo 3: guía de accesibilidad WCAG 2.1.' },
]

// ── Novedades mundiales de medicina (visibles para invitados) ─────
export const NOVEDADES = [
  {
    id: 1,
    titulo: 'OMS lanza nuevo protocolo de formación médica a distancia',
    fuente: 'Organización Mundial de la Salud',
    fecha: '9 jun 2025',
    resumen: 'La OMS publicó un marco de referencia para estandarizar la educación médica continua en entornos digitales, con énfasis en países con acceso limitado a infraestructura.',
    url: 'https://www.who.int',
    categoria: 'Educación médica',
  },
  {
    id: 2,
    titulo: 'Inteligencia artificial en diagnóstico: resultados del estudio MEDAI-2025',
    fuente: 'The Lancet Digital Health',
    fecha: '6 jun 2025',
    resumen: 'Un estudio multicéntrico con 12.000 pacientes muestra que los modelos de IA asistida alcanzan sensibilidad diagnóstica equivalente a médicos especialistas en imágenes de cardiología.',
    url: 'https://www.thelancet.com',
    categoria: 'Tecnología',
  },
  {
    id: 3,
    titulo: 'Argentina avanza en telemedicina: 3 millones de consultas virtuales en 2024',
    fuente: 'Ministerio de Salud — Argentina',
    fecha: '3 jun 2025',
    resumen: 'El informe anual del Ministerio de Salud confirma la consolidación de la telemedicina en el sistema público, con un crecimiento del 42% respecto a 2023.',
    url: 'https://www.argentina.gob.ar/salud',
    categoria: 'Salud pública',
  },
  {
    id: 4,
    titulo: 'Simulación clínica virtual: nuevos estándares para residencias médicas',
    fuente: 'ACGME — EE.UU.',
    fecha: '1 jun 2025',
    resumen: 'El organismo acreditador de residencias médicas de EEUU incorpora la simulación virtual como requisito mínimo en 18 especialidades, marcando un hito en educación clínica.',
    url: 'https://www.acgme.org',
    categoria: 'Educación médica',
  },
]

// ── Módulos (5) ───────────────────────────────────────────────────
export const MODULOS = [
  {
    id: 1, numero: '01',
    titulo: 'Fundamentos de la Educación a Distancia',
    descripcion: 'Historia, modelos pedagógicos y marco teórico de la EaD en contextos de posgrado.',
    estado: 'completado',
    resumen: `La educación a distancia ha evolucionado desde los cursos por correspondencia del siglo XIX hasta los entornos virtuales actuales. Este módulo analiza los modelos pedagógicos que sustentan la enseñanza mediada por tecnología, con énfasis en el constructivismo social y el conectivismo.

Se estudia el modelo de Community of Inquiry (CoI) de Garrison, Anderson y Archer, que identifica tres presencias esenciales: cognitiva, docente y social. Comprender este marco es fundamental para diseñar experiencias de aprendizaje en línea que sean genuinamente significativas.`,
    temas: ['Historia de la EaD', 'Constructivismo y conectivismo', 'Community of Inquiry', 'Diseño instruccional básico'],
    recursos: [
      { tipo: 'video', label: 'Introducción: ¿qué es la EaD?', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf',   label: 'Garrison — Community of Inquiry (resumen)', url: '#' },
      { tipo: 'link',  label: 'Sitio oficial del modelo CoI', url: 'https://coi.athabascau.ca/' },
      { tipo: 'pdf',   label: 'Simonson et al. — Foundations of Distance Education', url: '#' },
    ],
  },
  {
    id: 2, numero: '02',
    titulo: 'Tecnologías para el Aprendizaje',
    descripcion: 'LMS, herramientas síncronas y asíncronas, y criterios de selección tecnológica.',
    estado: 'completado',
    resumen: `Los Sistemas de Gestión del Aprendizaje (LMS) son el eje central de la educación en línea. Se analizan plataformas como Moodle, Canvas y Blackboard, comparando funcionalidades, costos y curvas de aprendizaje.

La selección tecnológica debe responder siempre a un objetivo pedagógico, nunca a la novedad de la herramienta. Se estudian también herramientas complementarias: videoconferencia, pizarras colaborativas y sistemas de evaluación en línea.`,
    temas: ['LMS: Moodle y Canvas', 'Videoconferencia y sincronía', 'Herramientas colaborativas', 'Criterios de selección pedagógica'],
    recursos: [
      { tipo: 'video', label: 'Recorrido por Moodle para docentes', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf',   label: 'Comparativa de plataformas LMS 2025', url: '#' },
      { tipo: 'link',  label: 'EdSurge — Technology for Learning', url: 'https://edsurge.com' },
    ],
  },
  {
    id: 3, numero: '03',
    titulo: 'Diseño de Contenidos Digitales',
    descripcion: 'Principios multimedia, microlearning y accesibilidad en materiales educativos.',
    estado: 'en_curso',
    resumen: `El diseño de contenidos digitales efectivos requiere comprender cómo el cerebro procesa la información multimedia. La teoría cognitiva del aprendizaje multimedia (Mayer) establece principios como coherencia, señalización y modalidad.

El microlearning propone fragmentar contenidos en unidades breves y enfocadas. La accesibilidad digital (WCAG 2.1) es un requisito ético y legal: subtítulos en videos, texto alternativo en imágenes, navegación por teclado.`,
    temas: ['Teoría multimedia de Mayer', 'Microlearning', 'Accesibilidad WCAG 2.1', 'Producción de video educativo'],
    recursos: [
      { tipo: 'video', label: 'Principios de multimedia en educación', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'video', label: 'Cómo crear videos educativos efectivos', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf',   label: 'Mayer — Multimedia Learning (cap. 1–3)', url: '#' },
      { tipo: 'link',  label: 'WCAG 2.1 — Guía rápida', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
    ],
  },
  {
    id: 4, numero: '04',
    titulo: 'Evaluación en Entornos Virtuales',
    descripcion: 'Evaluación formativa, rúbricas, integridad académica y retroalimentación efectiva.',
    estado: 'bloqueado',
    resumen: `La evaluación en entornos virtuales requiere repensar los instrumentos tradicionales. Se estudian la evaluación formativa continua y la evaluación sumativa, junto con instrumentos como rúbricas analíticas, portfolios y proyectos auténticos.`,
    temas: ['Evaluación formativa y sumativa', 'Rúbricas analíticas', 'Integridad académica', 'Retroalimentación efectiva'],
    recursos: [
      { tipo: 'pdf',  label: 'Guía de evaluación en línea — UNED', url: '#' },
      { tipo: 'link', label: 'RubiStar — Generador de rúbricas', url: 'http://rubistar.4teachers.org/' },
    ],
  },
  {
    id: 5, numero: '05',
    titulo: 'Comunidad Virtual y Proyecto Integrador',
    descripcion: 'Moderación de foros, comunidad de aprendizaje y lineamientos del TFI.',
    estado: 'bloqueado',
    resumen: `La construcción de comunidad es el factor más diferencial entre cursos virtuales exitosos y aquellos con alta deserción. Se analizan estrategias de moderación, trabajo colaborativo asincrónico y el rol del tutor virtual.

Este módulo también introduce los lineamientos del Trabajo Final Integrador (TFI), que consiste en el diseño completo de un curso virtual de 4 semanas aplicando todos los aprendizajes del taller.`,
    temas: ['Moderación de foros', 'Trabajo colaborativo', 'Rol del tutor virtual', 'Lineamientos del TFI'],
    recursos: [
      { tipo: 'pdf', label: 'Salmon — E-tivities (resumen ejecutivo)', url: '#' },
      { tipo: 'pdf', label: 'Guía y rúbrica del TFI', url: '#' },
    ],
  },
]

// ── Actividades ───────────────────────────────────────────────────
export const ACTIVIDADES_INICIALES = [
  { id: 1, titulo: 'Foro de presentación', tipo: 'foro', modulo: 1, vencimiento: '2025-06-02', estado: 'completada', puntaje: 10, puntajeMax: 10, descripcion: 'Presentate al grupo contando tu experiencia docente y expectativas del taller.' },
  { id: 2, titulo: 'Cuestionario Módulo 1', tipo: 'encuesta', modulo: 1, vencimiento: '2025-06-05', estado: 'completada', puntaje: 8, puntajeMax: 10, descripcion: 'Cuestionario de 10 preguntas sobre los fundamentos de la EaD y el modelo CoI.', preguntas: [
    { id: 'q1', texto: '¿Cuál es el año aproximado en que surgieron los primeros cursos por correspondencia?', opciones: ['1840', '1920', '1960', '1980'], respuestaCorrecta: 0 },
    { id: 'q2', texto: '¿Qué modelo teórico identifica presencia cognitiva, docente y social?', opciones: ['ADDIE', 'Community of Inquiry', 'Bloom Taxonomy', 'SAMR'], respuestaCorrecta: 1 },
    { id: 'q3', texto: '¿Cuál de los siguientes es un principio del conectivismo?', opciones: ['El conocimiento reside en las redes', 'El conocimiento es estático', 'Aprender es memorizar', 'El docente es la única fuente'], respuestaCorrecta: 0 },
  ]},
  { id: 3, titulo: 'Análisis comparativo de LMS', tipo: 'tarea', modulo: 2, vencimiento: '2025-06-12', estado: 'completada', puntaje: 9, puntajeMax: 10, descripcion: 'Elegí dos plataformas LMS y comparalas según criterios pedagógicos y técnicos. Extensión: 800-1200 palabras.' },
  { id: 4, titulo: 'Encuesta de satisfacción Módulo 2', tipo: 'encuesta', modulo: 2, vencimiento: '2025-06-13', estado: 'completada', puntaje: 10, puntajeMax: 10, descripcion: 'Encuesta anónima sobre tu experiencia con los contenidos y la dinámica del Módulo 2.', preguntas: [
    { id: 'q1', texto: '¿Qué tan útiles te resultaron los materiales del módulo?', opciones: ['Muy útiles', 'Útiles', 'Poco útiles', 'No me resultaron útiles'], respuestaCorrecta: null },
    { id: 'q2', texto: '¿Los tiempos del módulo te parecieron adecuados?', opciones: ['Sí, muy adecuados', 'Fueron adecuados', 'Fueron algo ajustados', 'No fueron adecuados'], respuestaCorrecta: null },
  ]},
  { id: 5, titulo: 'Producción de microvideo educativo', tipo: 'tarea', modulo: 3, vencimiento: '2025-06-20', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Grabá un video de 3–5 minutos explicando un concepto de tu especialidad aplicando los principios de Mayer. Entregá el link de YouTube o Google Drive.' },
  { id: 6, titulo: 'Encuesta diagnóstica Módulo 3', tipo: 'encuesta', modulo: 3, vencimiento: '2025-06-16', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Encuesta sobre tus conocimientos previos en diseño de contenidos digitales.', preguntas: [
    { id: 'q1', texto: '¿Habías escuchado antes sobre la teoría multimedia de Mayer?', opciones: ['Sí, la conozco bien', 'La había escuchado pero no la dominaba', 'No la conocía'], respuestaCorrecta: null },
    { id: 'q2', texto: '¿Producís materiales digitales actualmente para tus clases?', opciones: ['Sí, habitualmente', 'Ocasionalmente', 'No, todavía no'], respuestaCorrecta: null },
  ]},
  { id: 7, titulo: 'Primer parcial integrador', tipo: 'examen', modulo: null, vencimiento: '2025-06-25', estado: 'proximo', puntaje: null, puntajeMax: 100, descripcion: 'Evaluación integradora de los Módulos 1, 2 y 3. Modalidad: respuesta extensa y análisis de casos. Duración: 2 horas.' },
]

// ── Foros ─────────────────────────────────────────────────────────
export const FOROS_INICIALES = [
  { id: 'general', titulo: 'Foro General', descripcion: 'Espacio abierto para consultas, intercambios y comentarios generales del taller.', icono: '💬', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '1 jun', texto: 'Bienvenidos al taller. Este espacio es de todos — úsenlo para cualquier consulta o intercambio que enriquezca la experiencia grupal.' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '2 jun', texto: '¡Gracias! Una pregunta: ¿los materiales quedan disponibles después de que cierra cada módulo?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '2 jun', texto: 'Sí, todo el material queda accesible durante todo el cuatrimestre y 30 días después del cierre.' },
  ]},
  { id: 'mod1', titulo: 'Foro Módulo 1', descripcion: 'Discusión sobre fundamentos de la EaD y el modelo Community of Inquiry.', icono: '📘', tipo: 'modulo', moduloId: 1, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Carlos López', avatar: 'CL', fecha: '3 jun', texto: '¿Alguien más sintió que el concepto de "presencia social" es el más difícil de operacionalizar en la práctica?' },
    { id: 2, autor: 'Paula Fernández', avatar: 'PF', fecha: '3 jun', texto: 'Totalmente. En mi residencia usamos Moodle pero nadie interactúa en los foros. Creo que la presencia social ahí es casi nula.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jun', texto: 'Exacto, Paula. La presencia social no surge sola — requiere diseño deliberado. El módulo 5 profundiza en esto.' },
  ]},
  { id: 'mod2', titulo: 'Foro Módulo 2', descripcion: 'Debate sobre tecnologías, LMS y criterios de selección.', icono: '💻', tipo: 'modulo', moduloId: 2, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Roberto Rodríguez', avatar: 'RR', fecha: '8 jun', texto: 'En mi hospital tenemos Moodle pero los docentes solo suben PDFs. ¿Cómo los convencemos de usar más funcionalidades?' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '8 jun', texto: 'Creo que el problema es la capacitación inicial. Sin apoyo continuo, el docente hace lo mínimo.' },
  ]},
  { id: 'mod3', titulo: 'Foro Módulo 3', descripcion: 'Intercambio sobre diseño de contenidos y accesibilidad digital.', icono: '🎨', tipo: 'modulo', moduloId: 3, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Ana Gómez', avatar: 'AG', fecha: '10 jun', texto: 'Empecé a revisar mis materiales con los criterios WCAG y me di cuenta que casi ningún video tiene subtítulos. ¿Por dónde empezaron ustedes?' },
  ]},
  { id: 'mod4', titulo: 'Foro Módulo 4', descripcion: 'Espacio para cuando se habilite el Módulo 4 sobre evaluación.', icono: '📝', tipo: 'modulo', moduloId: 4, acceso: 'todos', mensajes: [] },
  { id: 'mod5', titulo: 'Foro Módulo 5', descripcion: 'Espacio para cuando se habilite el Módulo 5.', icono: '🌐', tipo: 'modulo', moduloId: 5, acceso: 'todos', mensajes: [] },
  { id: 'tfi-general', titulo: 'TFI — General', descripcion: 'Espacio de consultas generales sobre el Trabajo Final Integrador.', icono: '📋', tipo: 'tfi', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '5 jun', texto: 'El TFI consiste en diseñar un curso virtual completo de 4 semanas. La rúbrica ya está disponible en el Módulo 5. Cualquier consulta, acá o en el foro privado.' },
    { id: 2, autor: 'Jorge Pérez', avatar: 'JP', fecha: '6 jun', texto: '¿Puede ser un curso de cualquier especialidad médica o tiene que ser de la temática del taller?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '6 jun', texto: 'Puede ser de cualquier especialidad médica que dominen. El foco evaluativo está en el diseño pedagógico, no en el contenido clínico.' },
  ]},
  { id: 'tfi-grupos', titulo: 'TFI — Mi Grupo', descripcion: 'Coordinación interna del grupo de trabajo para el TFI.', icono: '👥', tipo: 'tfi-grupo', acceso: 'todos', mensajes: [
    { id: 1, autor: 'María García', avatar: 'MG', fecha: '7 jun', texto: 'Hola grupo! ¿Arrancamos con una reunión por Zoom esta semana para definir el tema del TFI?' },
    { id: 2, autor: 'Carlos López', avatar: 'CL', fecha: '7 jun', texto: 'Me parece bien. Propongo el jueves 12 a las 19hs. ¿Les queda?' },
  ]},
  { id: 'tfi-privado', titulo: 'TFI — Consulta Privada', descripcion: 'Canal privado entre vos y la docente para consultas sobre tu TFI.', icono: '🔒', tipo: 'tfi-privado', acceso: 'privado', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jun', texto: 'Este espacio es tuyo para consultas privadas sobre el TFI. ¿En qué especialidad pensás basar tu trabajo?' },
  ]},
  { id: 'extras', titulo: 'Foro de Extras', descripcion: 'Recursos, links y temas de interés por fuera de los módulos obligatorios.', icono: '✨', tipo: 'extra', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martínez', avatar: 'LM', fecha: '5 jun', texto: 'Comparto este artículo sobre el impacto de la IA en diagnóstico médico, muy relevante para el mini-curso que viene: https://www.thelancet.com' },
    { id: 2, autor: 'Jorge Pérez', avatar: 'JP', fecha: '5 jun', texto: '¡Gracias Laura! Muy oportuno con el módulo de extras que se viene.' },
  ]},
]

// ── Participantes de ejemplo ──────────────────────────────────────
// (se combinan con los USUARIOS_INICIALES en runtime)

// ── TFI ──────────────────────────────────────────────────────────
export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador — TIADET 2025',
  subtitulo: 'Diseño de un curso virtual en el área de la salud',
  fecha_entrega: '15 de julio de 2025',
  descripcion: `El Trabajo Final Integrador (TFI) consiste en el diseño completo de un curso virtual de cuatro semanas de duración en el área de la salud o la educación médica.

El trabajo debe demostrar la integración de los aprendizajes de los cinco módulos del taller: fundamentación pedagógica, selección tecnológica justificada, diseño de materiales digitales, sistema de evaluación con rúbricas y estrategia de comunicación y construcción de comunidad.`,
  requisitos: [
    'Fundamentación pedagógica del diseño (mínimo 500 palabras)',
    'Programa del curso: objetivos, contenidos y cronograma de 4 semanas',
    'Al menos 2 recursos digitales diseñados (video, infografía, material interactivo)',
    'Sistema de evaluación completo con rúbricas analíticas',
    'Estrategia de comunicación y moderación de foros',
    'Presentación oral de 15 minutos (sincrónica)',
  ],
  criterios: [
    { criterio: 'Fundamentación pedagógica', peso: '25%' },
    { criterio: 'Coherencia diseño instruccional', peso: '25%' },
    { criterio: 'Calidad de materiales digitales', peso: '20%' },
    { criterio: 'Sistema de evaluación', peso: '20%' },
    { criterio: 'Presentación oral', peso: '10%' },
  ],
}

// ── Calendario de eventos ─────────────────────────────────────────
export const EVENTOS = [
  { id: 1, titulo: 'Vence: Microvideo educativo', fecha: '2025-06-20', tipo: 'entrega' },
  { id: 2, titulo: 'Primer parcial integrador', fecha: '2025-06-25', tipo: 'examen' },
  { id: 3, titulo: 'Clase sincrónica — Módulo 4', fecha: '2025-06-26', tipo: 'clase' },
  { id: 4, titulo: 'Clase sincrónica — Módulo 5', fecha: '2025-07-03', tipo: 'clase' },
  { id: 5, titulo: 'Vence: Entrega TFI escrito', fecha: '2025-07-15', tipo: 'entrega' },
  { id: 6, titulo: 'Presentaciones orales TFI', fecha: '2025-07-22', tipo: 'examen' },
  { id: 7, titulo: 'Cierre del taller', fecha: '2025-07-25', tipo: 'clase' },
]
