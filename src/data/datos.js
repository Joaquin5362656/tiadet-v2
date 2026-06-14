export const USUARIOS_INICIALES = [
  { id: 1, dni: '12345678', email: 'mgarcia@mail.com', password: '1234', nombre: 'María García', rol: 'alumno', foto: null, legajo: 'DOC-001' },
  { id: 2, dni: '87654321', email: 'clopez@mail.com', password: '1234', nombre: 'Carlos López', rol: 'alumno', foto: null, legajo: 'DOC-002' },
  { id: 3, dni: '11223344', email: 'pfernandez@mail.com', password: '1234', nombre: 'Paula Fernández', rol: 'alumno', foto: null, legajo: 'DOC-003' },
  { id: 4, dni: '55667788', email: 'rrodriguez@mail.com', password: '1234', nombre: 'Roberto Rodríguez', rol: 'alumno', foto: null, legajo: 'DOC-004' },
  { id: 5, dni: '99001122', email: 'lmartinez@mail.com', password: '1234', nombre: 'Laura Martínez', rol: 'alumno', foto: null, legajo: 'DOC-005' },
  { id: 6, dni: '33445566', email: 'jperez@mail.com', password: '1234', nombre: 'Jorge Pérez', rol: 'alumno', foto: null, legajo: 'DOC-006' },
  { id: 7, dni: '77889900', email: 'agomez@mail.com', password: '1234', nombre: 'Ana Gómez', rol: 'alumno', foto: null, legajo: 'DOC-007' },
  { id: 8, dni: 'prof001', email: 'amendez@uba.ar', password: 'prof', nombre: 'Dra. Ana Méndez', rol: 'docente', foto: null, legajo: 'DOC-PRF' },
]

export const ANUNCIOS = [
  { id: 1, tipo: 'danger', texto: 'El viernes 13/6 la Dra. Méndez no estará. La clase se reprograma.' },
  { id: 2, tipo: 'warning', texto: 'En 1 semana vence la entrega del TFI. Revisa los requisitos.' },
  { id: 3, tipo: 'info', texto: 'El lunes 16/6 no hay clase (feriado nacional).' },
  { id: 4, tipo: 'success', texto: 'Nuevo material disponible en Módulo 3: guía WCAG 2.1.' },
]

export const NOVEDADES = [
  { id: 1, titulo: 'OMS lanza nuevo protocolo de formación médica a distancia', fuente: 'OMS', fecha: '9 jun 2025', resumen: 'Marco de referencia para estandarizar educación médica continua en entornos digitales.', url: 'https://www.who.int', categoria: 'Educación médica' },
  { id: 2, titulo: 'IA en diagnóstico: resultados del estudio MEDAI-2025', fuente: 'The Lancet', fecha: '6 jun 2025', resumen: 'Modelos de IA alcanzan sensibilidad diagnóstica equivalente a especialistas en cardiología.', url: 'https://www.thelancet.com', categoria: 'Tecnología' },
  { id: 3, titulo: 'Argentina: 3 millones de consultas virtuales en 2024', fuente: 'Ministerio de Salud', fecha: '3 jun 2025', resumen: 'Consolidación de telemedicina con crecimiento del 42% respecto a 2023.', url: 'https://www.argentina.gob.ar', categoria: 'Salud pública' },
  { id: 4, titulo: 'Simulación clínica virtual: nuevos estándares para residencias', fuente: 'ACGME', fecha: '1 jun 2025', resumen: 'Simulación virtual incorporada como requisito en 18 especialidades médicas.', url: 'https://www.acgme.org', categoria: 'Educación médica' },
]

export const MODULOS = [
  {
    id: 1, numero: '01',
    titulo: 'Fundamentos de la Educación a Distancia',
    descripcion: 'Historia, modelos pedagógicos y marco teórico de la EaD.',
    estado: 'completado',
    resumen: 'La educación a distancia ha evolucionado desde cursos por correspondencia hasta entornos virtuales actuales. Se analizan modelos pedagógicos con énfasis en constructivismo social y conectivismo, incluyendo el modelo Community of Inquiry de Garrison, Anderson y Archer.',
    temas: ['Historia de la EaD', 'Constructivismo', 'Community of Inquiry', 'Diseño instruccional'],
    recursos: [
      { tipo: 'video', label: 'Introducción a la EaD', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf', label: 'Garrison - Community of Inquiry', url: '#' },
      { tipo: 'link', label: 'Sitio oficial del modelo CoI', url: 'https://coi.athabascau.ca/' },
    ],
  },
  {
    id: 2, numero: '02',
    titulo: 'Tecnologías para el Aprendizaje',
    descripcion: 'LMS, herramientas síncronas y asíncronas.',
    estado: 'completado',
    resumen: 'Análisis de plataformas LMS como Moodle y Canvas. Criterios pedagógicos para selección tecnológica. Herramientas complementarias de videoconferencia y colaboración.',
    temas: ['LMS y plataformas', 'Videoconferencia', 'Herramientas colaborativas', 'Criterios de selección'],
    recursos: [
      { tipo: 'video', label: 'Recorrido por Moodle', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf', label: 'Comparativa de LMS 2025', url: '#' },
    ],
  },
  {
    id: 3, numero: '03',
    titulo: 'Diseño de Contenidos Digitales',
    descripcion: 'Principios multimedia, microlearning y accesibilidad.',
    estado: 'en_curso',
    resumen: 'Teoría cognitiva del aprendizaje multimedia (Mayer). Microlearning y fragmentación de contenidos. Accesibilidad digital WCAG 2.1 como requisito ético y legal.',
    temas: ['Multimedia de Mayer', 'Microlearning', 'WCAG 2.1', 'Producción de video'],
    recursos: [
      { tipo: 'video', label: 'Principios de multimedia', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { tipo: 'pdf', label: 'Mayer - Multimedia Learning', url: '#' },
    ],
  },
  {
    id: 4, numero: '04',
    titulo: 'Evaluación en Entornos Virtuales',
    descripcion: 'Evaluación formativa, rúbricas e integridad académica.',
    estado: 'bloqueado',
    resumen: 'Replanteamiento de instrumentos tradicionales. Evaluación formativa continua y sumativa. Rúbricas analíticas para retroalimentación específica.',
    temas: ['Evaluación formativa', 'Rúbricas', 'Integridad académica', 'Retroalimentación'],
    recursos: [
      { tipo: 'pdf', label: 'Guía de evaluación en línea', url: '#' },
    ],
  },
  {
    id: 5, numero: '05',
    titulo: 'Comunidad Virtual y Proyecto Final',
    descripcion: 'Moderación, trabajo colaborativo y TFI.',
    estado: 'bloqueado',
    resumen: 'Construcción de comunidad como factor clave. Estrategias de moderación y trabajo colaborativo asincrónico. Lineamientos del TFI: diseño completo de curso de 4 semanas.',
    temas: ['Moderación de foros', 'Trabajo colaborativo', 'Rol del tutor', 'TFI'],
    recursos: [
      { tipo: 'pdf', label: 'Salmon - E-tivities', url: '#' },
    ],
  },
]

export const ACTIVIDADES_INICIALES = [
  { id: 1, titulo: 'Foro de presentacion', tipo: 'foro', modulo: 1, vencimiento: '2025-06-02', estado: 'completada', puntaje: 10, puntajeMax: 10, descripcion: 'Presentate al grupo contando tu experiencia docente y expectativas del taller.' },
  { id: 2, titulo: 'Cuestionario Modulo 1', tipo: 'encuesta', modulo: 1, vencimiento: '2025-06-05', estado: 'completada', puntaje: 8, puntajeMax: 10, descripcion: 'Cuestionario de 10 preguntas sobre los fundamentos de la EaD y el modelo CoI.', preguntas: [
    { id: 'q1', texto: 'Cual es el ano aproximado en que surgieron los primeros cursos por correspondencia?', opciones: ['1840', '1920', '1960', '1980'], respuestaCorrecta: 0 },
    { id: 'q2', texto: 'Que modelo teorico identifica presencia cognitiva, docente y social?', opciones: ['ADDIE', 'Community of Inquiry', 'Bloom Taxonomy', 'SAMR'], respuestaCorrecta: 1 },
    { id: 'q3', texto: 'Cual de los siguientes es un principio del conectivismo?', opciones: ['El conocimiento reside en las redes', 'El conocimiento es estatico', 'Aprender es memorizar', 'El docente es la unica fuente'], respuestaCorrecta: 0 },
  ]},
  { id: 3, titulo: 'Analisis comparativo de LMS', tipo: 'tarea', modulo: 2, vencimiento: '2025-06-12', estado: 'completada', puntaje: 9, puntajeMax: 10, descripcion: 'Elegi dos plataformas LMS y comparalas segun criterios pedagogicos y tecnicos. Extension: 800-1200 palabras.' },
  { id: 4, titulo: 'Encuesta de satisfaccion Modulo 2', tipo: 'encuesta', modulo: 2, vencimiento: '2025-06-13', estado: 'completada', puntaje: 10, puntajeMax: 10, descripcion: 'Encuesta anonima sobre tu experiencia con los contenidos y la dinamica del Modulo 2.', preguntas: [
    { id: 'q1', texto: 'Que tan utiles te resultaron los materiales del modulo?', opciones: ['Muy utiles', 'Utiles', 'Poco utiles', 'No me resultaron utiles'], respuestaCorrecta: null },
    { id: 'q2', texto: 'Los tiempos del modulo te parecieron adecuados?', opciones: ['Si, muy adecuados', 'Fueron adecuados', 'Fueron algo ajustados', 'No fueron adecuados'], respuestaCorrecta: null },
  ]},
  { id: 5, titulo: 'Produccion de microvideo educativo', tipo: 'tarea', modulo: 3, vencimiento: '2025-06-20', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Grabá un video de 3–5 minutos explicando un concepto de tu especialidad aplicando los principios de Mayer. Entrega el link de YouTube o Google Drive.' },
  { id: 6, titulo: 'Encuesta diagnostica Modulo 3', tipo: 'encuesta', modulo: 3, vencimiento: '2025-06-16', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Encuesta sobre tus conocimientos previos en diseno de contenidos digitales.', preguntas: [
    { id: 'q1', texto: 'Habias escuchado antes sobre la teoria multimedia de Mayer?', opciones: ['Si, la conozco bien', 'La habia escuchado pero no la dominaba', 'No la conocia'], respuestaCorrecta: null },
    { id: 'q2', texto: 'Producis materiales digitales actualmente para tus clases?', opciones: ['Si, habitualmente', 'Ocasionalmente', 'No, todavia no'], respuestaCorrecta: null },
  ]},
  { id: 7, titulo: 'Primer parcial integrador', tipo: 'examen', modulo: null, vencimiento: '2025-06-25', estado: 'proximo', puntaje: null, puntajeMax: 100, descripcion: 'Evaluacion integradora de los Modulos 1, 2 y 3. Modalidad: respuesta extensa y analisis de casos. Duracion: 2 horas.' },
]

export const FOROS_INICIALES = [
  { id: 'general', titulo: 'Foro General', descripcion: 'Espacio abierto para consultas, intercambios y comentarios generales del taller.', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '1 jun', texto: 'Bienvenidos al taller. Este espacio es de todos — úsenlo para cualquier consulta o intercambio que enriquezca la experiencia grupal.' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '2 jun', texto: 'Gracias! Una pregunta: los materiales quedan disponibles despues de que cierra cada modulo?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '2 jun', texto: 'Si, todo el material queda accesible durante todo el cuatrimestre y 30 dias despues del cierre.' },
  ]},
  { id: 'mod1', titulo: 'Foro Modulo 1', descripcion: 'Discusion sobre fundamentos de la EaD y el modelo Community of Inquiry.', tipo: 'modulo', moduloId: 1, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Carlos Lopez', avatar: 'CL', fecha: '3 jun', texto: 'Alguien mas sintio que el concepto de "presencia social" es el mas dificil de operacionalizar en la practica?' },
    { id: 2, autor: 'Paula Fernandez', avatar: 'PF', fecha: '3 jun', texto: 'Totalmente. En mi residencia usamos Moodle pero nadie interactua en los foros. Creo que la presencia social ahi es casi nula.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jun', texto: 'Exacto, Paula. La presencia social no surge sola — requiere diseno deliberado. El modulo 5 profundiza en esto.' },
  ]},
  { id: 'mod2', titulo: 'Foro Modulo 2', descripcion: 'Debate sobre tecnologias, LMS y criterios de seleccion.', tipo: 'modulo', moduloId: 2, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Roberto Rodriguez', avatar: 'RR', fecha: '8 jun', texto: 'En mi hospital tenemos Moodle pero los docentes solo suben PDFs. Como los convencemos de usar mas funcionalidades?' },
    { id: 2, autor: 'Maria Garcia', avatar: 'MG', fecha: '8 jun', texto: 'Creo que el problema es la capacitacion inicial. Sin apoyo continuo, el docente hace lo minimo.' },
  ]},
  { id: 'mod3', titulo: 'Foro Modulo 3', descripcion: 'Intercambio sobre diseno de contenidos y accesibilidad digital.', tipo: 'modulo', moduloId: 3, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Ana Gomez', avatar: 'AG', fecha: '10 jun', texto: 'Empece a revisar mis materiales con los criterios WCAG y me di cuenta que casi ningun video tiene subtitulos. Por donde empezaron ustedes?' },
  ]},
  { id: 'mod4', titulo: 'Foro Modulo 4', descripcion: 'Espacio para cuando se habilite el Modulo 4 sobre evaluacion.', tipo: 'modulo', moduloId: 4, acceso: 'todos', mensajes: [] },
  { id: 'mod5', titulo: 'Foro Modulo 5', descripcion: 'Espacio para cuando se habilite el Modulo 5.', tipo: 'modulo', moduloId: 5, acceso: 'todos', mensajes: [] },
  { id: 'tfi-general', titulo: 'TFI — General', descripcion: 'Espacio de consultas generales sobre el Trabajo Final Integrador.', tipo: 'tfi', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '5 jun', texto: 'El TFI consiste en disenar un curso virtual completo de 4 semanas. La rubrica ya esta disponible en el Modulo 5. Cualquier consulta, aca o en el foro privado.' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '6 jun', texto: 'Puede ser un curso de cualquier especialidad medica o tiene que ser de la tematica del taller?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '6 jun', texto: 'Puede ser de cualquier especialidad medica que dominen. El foco evaluativo esta en el diseno pedagogico, no en el contenido clinico.' },
  ]},
  { id: 'tfi-grupos', titulo: 'TFI — Mi Grupo', descripcion: 'Coordinacion interna del grupo de trabajo para el TFI.', tipo: 'tfi-grupo', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Maria Garcia', avatar: 'MG', fecha: '7 jun', texto: 'Hola grupo! Arrancamos con una reunion por Zoom esta semana para definir el tema del TFI?' },
    { id: 2, autor: 'Carlos Lopez', avatar: 'CL', fecha: '7 jun', texto: 'Me parece bien. Propongo el jueves 12 a las 19hs. Les queda?' },
  ]},
  { id: 'tfi-privado', titulo: 'TFI — Consulta Privada', descripcion: 'Canal privado entre vos y la docente para consultas sobre tu TFI.', tipo: 'tfi-privado', acceso: 'privado', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jun', texto: 'Este espacio es tuyo para consultas privadas sobre el TFI. En que especialidad pensas basar tu trabajo?' },
  ]},
  { id: 'extras', titulo: 'Foro de Extras', descripcion: 'Recursos, links y temas de interes por fuera de los modulos obligatorios.', tipo: 'extra', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martinez', avatar: 'LM', fecha: '5 jun', texto: 'Comparto este articulo sobre el impacto de la IA en diagnostico medico, muy relevante para el mini-curso que viene: https://www.thelancet.com' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '5 jun', texto: 'Gracias Laura! Muy oportuno con el modulo de extras que se viene.' },
  ]},
]

export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador — TIADET 2025',
  subtitulo: 'Diseno de un curso virtual en el area de la salud',
  fecha_entrega: '15 de julio de 2025',
  descripcion: 'El Trabajo Final Integrador (TFI) consiste en el diseno completo de un curso virtual de cuatro semanas de duracion en el area de la salud o la educacion medica.\n\nEl trabajo debe demostrar la integracion de los aprendizajes de los cinco modulos del taller: fundamentacion pedagogica, seleccion tecnologica justificada, diseno de materiales digitales, sistema de evaluacion con rubricas y estrategia de comunicacion y construccion de comunidad.',
  requisitos: [
    'Fundamentacion pedagogica del diseno (minimo 500 palabras)',
    'Programa del curso: objetivos, contenidos y cronograma de 4 semanas',
    'Al menos 2 recursos digitales disenados (video, infografia, material interactivo)',
    'Sistema de evaluacion completo con rubricas analiticas',
    'Estrategia de comunicacion y moderacion de foros',
    'Presentacion oral de 15 minutos (sincronica)',
  ],
  criterios: [
    { criterio: 'Fundamentacion pedagogica', peso: '25%' },
    { criterio: 'Coherencia diseno instruccional', peso: '25%' },
    { criterio: 'Calidad de materiales digitales', peso: '20%' },
    { criterio: 'Sistema de evaluacion', peso: '20%' },
    { criterio: 'Presentacion oral', peso: '10%' },
  ],
}

export const EVENTOS = [
  { id: 1, titulo: 'Vence: Microvideo educativo', fecha: '2025-06-20', tipo: 'entrega' },
  { id: 2, titulo: 'Primer parcial integrador', fecha: '2025-06-25', tipo: 'examen' },
  { id: 3, titulo: 'Clase sincronica — Modulo 4', fecha: '2025-06-26', tipo: 'clase' },
  { id: 4, titulo: 'Clase sincronica — Modulo 5', fecha: '2025-07-03', tipo: 'clase' },
  { id: 5, titulo: 'Vence: Entrega TFI escrito', fecha: '2025-07-15', tipo: 'entrega' },
  { id: 6, titulo: 'Presentaciones orales TFI', fecha: '2025-07-22', tipo: 'examen' },
  { id: 7, titulo: 'Cierre del taller', fecha: '2025-07-25', tipo: 'clase' },
]
