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
  { id: 1, titulo: 'Foro de presentación', tipo: 'foro', modulo: 1, vencimiento: '2025-06-02', estado: 'completada', puntaje: 10, puntajeMax: 10, descripcion: 'Presentate al grupo.' },
  { id: 2, titulo: 'Cuestionario Módulo 1', tipo: 'encuesta', modulo: 1, vencimiento: '2025-06-05', estado: 'completada', puntaje: 8, puntajeMax: 10, descripcion: '10 preguntas sobre fundamentos de EaD.', preguntas: [{ id: 'q1', texto: '¿Cuál es el modelo de Garrison?', opciones: ['CoI', 'ADDIE', 'Bloom', 'SAMR'], respuestaCorrecta: 0 }] },
  { id: 3, titulo: 'Análisis comparativo de LMS', tipo: 'tarea', modulo: 2, vencimiento: '2025-06-12', estado: 'completada', puntaje: 9, puntajeMax: 10, descripcion: 'Compara dos plataformas LMS.' },
  { id: 4, titulo: 'Microvideo educativo', tipo: 'tarea', modulo: 3, vencimiento: '2025-06-20', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Video 3-5 min aplicando principios de Mayer.' },
  { id: 5, titulo: 'Primer parcial', tipo: 'examen', modulo: null, vencimiento: '2025-06-25', estado: 'proximo', puntaje: null, puntajeMax: 100, descripcion: 'Evaluación integradora.' },
]

export const FOROS_INICIALES = [
  { id: 'general', titulo: 'General', descripcion: 'Espacio abierto para consultas generales.', tipo: 'general', acceso: 'todos', mensajes: [{ id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '1 jun', texto: 'Bienvenidos al taller.' }] },
  { id: 'mod1', titulo: 'Módulo 1', descripcion: 'Fundamentos de EaD y Community of Inquiry.', tipo: 'modulo', moduloId: 1, acceso: 'todos', mensajes: [{ id: 1, autor: 'Carlos López', avatar: 'CL', fecha: '3 jun', texto: 'Consulta sobre presencia social.' }] },
  { id: 'mod2', titulo: 'Módulo 2', descripcion: 'Tecnologías y LMS.', tipo: 'modulo', moduloId: 2, acceso: 'todos', mensajes: [] },
  { id: 'mod3', titulo: 'Módulo 3', descripcion: 'Diseño de contenidos digitales.', tipo: 'modulo', moduloId: 3, acceso: 'todos', mensajes: [] },
  { id: 'tfi-general', titulo: 'TFI - General', descripcion: 'Consultas sobre el Trabajo Final.', tipo: 'tfi', acceso: 'todos', mensajes: [] },
  { id: 'extras', titulo: 'Extras', descripcion: 'Recursos complementarios.', tipo: 'extra', acceso: 'todos', mensajes: [] },
]

export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador - TIADET 2025',
  subtitulo: 'Diseño de un curso virtual en el área de la salud',
  fecha_entrega: '15 de julio de 2025',
  descripcion: 'Diseño completo de un curso virtual de cuatro semanas en el área de la salud. Debe demostrar integración de aprendizajes de los cinco módulos.',
  requisitos: [
    'Fundamentación pedagógica (500+ palabras)',
    'Programa del curso: objetivos, contenidos y cronograma',
    'Al menos 2 recursos digitales diseñados',
    'Sistema de evaluación con rúbricas',
    'Estrategia de comunicación y moderación',
    'Presentación oral de 15 minutos',
  ],
  criterios: [
    { criterio: 'Fundamentación pedagógica', peso: '25%' },
    { criterio: 'Coherencia diseño instruccional', peso: '25%' },
    { criterio: 'Calidad de materiales', peso: '20%' },
    { criterio: 'Sistema de evaluación', peso: '20%' },
    { criterio: 'Presentación oral', peso: '10%' },
  ],
}

export const EVENTOS = [
  { id: 1, titulo: 'Vence: Microvideo educativo', fecha: '2025-06-20', tipo: 'entrega' },
  { id: 2, titulo: 'Primer parcial', fecha: '2025-06-25', tipo: 'examen' },
  { id: 3, titulo: 'Clase sincrónica - Módulo 4', fecha: '2025-06-26', tipo: 'clase' },
  { id: 4, titulo: 'Vence: TFI escrito', fecha: '2025-07-15', tipo: 'entrega' },
  { id: 5, titulo: 'Presentaciones orales TFI', fecha: '2025-07-22', tipo: 'examen' },
]
