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
  { id: 1, tipo: 'warning', texto: 'Próxima semana vence la mini-narrativa LANIN del Módulo 2. Revisá los requisitos en la guía del Taller.' },
  { id: 2, tipo: 'success', texto: 'Nuevo material disponible en Módulo 3: herramientas Kahoot.it, Genially, Arloopa y Frame VR para gamificación y XR.' },
  { id: 3, tipo: 'danger', texto: 'Recordá que se requiere al menos un 80% de asistencia a los encuentros sincrónicos obligatorios para alcanzar la condición de Alumno Regular en el Taller.' },
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
      'El docente virtual como facilitador / mediador / mentor del aprendizaje: El cambio del rol tradicional hacia el acompañamiento personalizado, orientación en recursos digitales y promoción del pensamiento crítico. Diferencias entre educación presencial y a distancia: Análisis de la interacción, tiempo y espacios diferenciados, y el rol clave de la comunicación en la virtualidad.',
      'Estrategias motivacionales: Cómo fomentar la autonomía del estudiante, mantener su compromiso y crear comunidades de aprendizaje colaborativo (CoI framework).',
      'Estándares de calidad educativa: Revisión exhaustiva de Quality Matters (QM) Rubric, E-xcellence de la European Association for Quality Assurance y la Harvard Initiative for Digital Learning (HIDL) & Harvard Initiative for Learning and Teaching (HILT) para asegurar prácticas de excelencia. Sustento académico-pedagógico de las siguientes Recomendaciones: utilización de E-xcellence para diseñar la estrategia institucional y su gobernanza; adopción de QM para validar y certificar cursos individuales dentro de dicha estrategia; incorporación de principios HIDL/HILT para la innovación pedagógica, la investigación aplicada y el desarrollo docente continuo.',
      'Introducción al enfoque TEIDE: Aplicación de la guía teórico-metodológica para estructurar proyectos educativos sustentados en la investigación y el desarrollo docente, incluyendo la evaluación constante de herramientas y resultados.'
    ],
    modus_operandi: 'En el encuentro sincrónico se realizará una breve reseña comparativa de las diversas métricas de calidad educativa y su recomendación de uso según el Objetivo, el Alcance, el Diseño y los Resultados del Aprendizaje, la Evaluación y la Retroalimentación, la Accesibilidad, la Inclusión y el Diseño Universal (DUA), la Tecnología y su impacto en el entorno de aprendizaje y se analizarán videos breves con situaciones representativas para reflexionar y propender a procesos metacognitivos.',
    actividades_desc: [
      'Evaluación censal diagnóstica de la experiencia docente individual respecto a los estándares de calidad educativa en la EaD utilizando un Formulario de Google. Creación de una nube de palabras de fortalezas y debilidades mediante Mentimeter. Análisis estadístico.',
      'Análisis de casos de éxito a nivel global (incluyendo HarvardX) y de los cursantes utilizando las métricas de excelencia pertinentes, seleccionadas para cada caso.',
      'Foro estructurado de intercambio sobre desafíos y estrategias personales.'
    ],
    bibliografia_imprescindible: [
      { texto: 'Barboza Norbis, L. (2021). Guía teórico-metodológica TEIDE.' },
      { texto: 'Bates, A. W. (Tony). (2019). Teaching in a digital age: Guidelines for designing teaching and learning (2nd ed.). Tony Bates Associates Ltd.' },
    ],
    referencias_profundizar: [
      { subtema: 'Quality Matters (QM)', items: [
        { texto: 'Legon, R., & Runyon, J. (2018). Research on the Quality Matters rubric: A history and review of research. Quality Matters.' },
        { texto: 'Lowenthal, P. R., & Hodges, C. B. (2015). In search of quality: Using Quality Matters to analyze the quality of online courses. International Review of Research in Open and Distributed Learning, 16(5), 85-101.', url: 'https://doi.org/10.19173/irrodl.v16i5.2348' },
        { texto: 'Quality Matters. (2023). Higher education rubric (7th ed.). Maryland Online.' },
      ]},
      { subtema: 'E-xcellence (ENQA / EADTU)', items: [
        { texto: 'Ossiannilsson, E., Williams, K., Camilleri, A. F., & Brown, M. (2015). Quality models in online and open education around the globe: State of the art and recommendations. International Council for Open and Distance Education (ICDE).' },
        { texto: 'Williams, K., Kear, K., & Rosewell, J. (2016). E-xcellence: Quality assessment for e-learning (3rd ed.). European Association of Distance Teaching Universities (EADTU).' },
      ]},
      { subtema: 'Harvard (HIDL & HILT)', items: [
        { texto: 'Bok, D. (2020). Higher education in America (Revised ed.). Princeton University Press.' },
        { texto: 'Ho, A. D., Chuang, I., Reich, J., Coleman, C. A., Jordon, J., Cattaneo, M. D., McKinney, J., & Petersen, L. H. (2015). HarvardX and MITx: Two years of open online courses fall 2012-summer 2014 (HarvardX Working Paper No. 10). Harvard University.', url: 'https://doi.org/10.2139/ssrn.2586847' },
      ]},
      { subtema: 'Integración y mejora continua (enfoque mixto)', items: [
        { texto: 'Picciano, A. G. (2017). Theories and frameworks for online education: Seeking an integrated model. Online Learning, 21(3), 166-190.', url: 'https://doi.org/10.24059/olj.v21i3.1225' },
        { texto: 'Zawacki-Richter, O., & Qayyum, A. (Eds.). (2019). The open and distance education anthology: Quality in open and distance learning. Springer.', url: 'https://doi.org/10.1007/978-981-13-7740-2' },
      ]},
    ],
    recursos: [
      { tipo: 'link', label: 'Community of Inquiry framework', url: 'https://coi.athabascau.ca/' },
      { tipo: 'link', label: 'Quality Matters', url: 'https://www.qualitymatters.org/' },
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
      'Diseño de evaluación en EaD: Diferenciación entre evaluación diagnóstica, formativa y sumativa digital y retroalimentación constructiva.',
      'La clase invertida (flipped classroom) y el aprendizaje basado en Problemas/Proyectos (ABP) de McMaster, Ontario, Canadá. Su implementación en la era de la IA: esfuerzo productivo del educando y andamiaje de la IA, con alternancia temporal de fases de encendido y apagado.',
      'Fenómeno de la dependencia algorítmica (nunca habilidad). Configuración de LLM como cotutores socráticos. Ejemplo: LearnLM.',
      'Guía LANIN: Importancia de las narrativas para que los alumnos construyan sentido y relevancia educativa, transformando contenido en experiencias de aprendizaje significativos.',
      'Narrativas basadas en problemas: Aplicación práctica en el área de enfermedades tropicales transmisibles, promoviendo análisis crítico y solución de casos reales en formato narrativo.',
      'Gestión del tiempo y evaluación continua: Cómo monitorear progresos virtualmente y ajustar estrategias pedagógicas.'
    ],
    modus_operandi: 'Durante el encuentro sincrónico se expondrán clases invertidas cocreadas por los educandos, las que serán sometidas al proceso de heteroevaluación por pares.',
    actividades_desc: [
      'Creación de mini-narrativas por equipos para un caso clínico de una misma enfermedad tropical transmisible. Clase invertida (flipped classroom). Modelo ABP (Aprendizaje basado en Problemas/Proyectos). Heteroevaluación por pares.',
      'Exposición infográfica del Diseño individual de rúbricas adaptadas a la evaluación formativa de educandos en la asignatura a cargo de cada Profesor en la METT.',
      'Foro virtual para elaboración de instrumentos evaluativos con criterios MAS-TEIDE y LANIN con monitoreo y retroalimentación del docente Tutor para promover la mejora continua de los productos en elaboración.'
    ],
    bibliografia_imprescindible: [
      { texto: 'Barrows, H. S., & Bennett, K. (1972). The diagnostic (problem solving) reasoning of the medical student. Medical Education, 6(1), 8-16.', url: 'https://doi.org/10.1111/j.1365-2923.1972.tb01783.x' },
      { texto: 'Neufeld, V. R., & Barrows, H. S. (1974). The "McMaster Philosophy": An approach to medical education. Journal of Medical Education, 49(11), 1040-1050.', url: 'https://doi.org/10.1097/00001888-197411000-00004' },
      { texto: 'Oubiña, J.R. (2024). TFI del Taller 7 – EDET, cohorte 2024. La visión LANIN: Los Alumnos Necesitan Incluir Narrativas.' },
    ],
    referencias_profundizar: [
      { subtema: 'El Trabajo Fundacional de la Universidad de McMaster', items: [
        { texto: 'Barrows, H. S. (1996). Problem-based learning in medicine and beyond: A brief overview. New Directions for Teaching and Learning, 1996(68), 3-12.', url: 'https://doi.org/10.1002/tl.37219966804' },
        { texto: 'Barrows, H. S., & Tamblyn, R. M. (1980). Problem-based learning: An approach to medical education. Springer Publishing Company.' },
      ]},
      { subtema: 'La Transición y la Aplicación a la Educación a Distancia (EaD / dPBL)', items: [
        { texto: 'Barrows, H. S. (2002). Is it truly possible to have such a thing as dPBL? Distance Education, 23(1), 119-122.', url: 'https://doi.org/10.1080/01587910220124026' },
        { texto: 'Donnelly, R. (2010). Harmonizing technology with pedagogy in Blended Problem-Based Learning. Interdisciplinary Journal of Problem-Based Learning, 4(1), 29-61.', url: 'https://doi.org/10.7771/1541-5015.1112' },
        { texto: 'Savin-Baden, M. (2007). A practical guide to problem-based learning online. Routledge.' },
      ]},
      { subtema: 'La Era de la Inteligencia Artificial Generativa (2024-2026)', items: [
        { texto: 'Abidi, S. H., et al. (2026). AI-supported case-based learning in medical education: a comprehensive scoping review. Frontiers in Medicine, 13, 1798097.' },
        { texto: 'Boman, M. (2025). Scaffolding for success: Blending learning with and about Generative AI in medical education. Medical Teacher, 47(3), 280-286.' },
        { texto: 'Corral-Gudino, L., et al. (2025). Integrating Generative Artificial Intelligence (AI) in Medical Education: A Framework for Preserving Clinical Reasoning. Applied Sciences, 15(12), 5946.' },
      ]},
      { subtema: 'Revisiones Sistemáticas y Meta-Análisis', items: [
        { texto: 'Albanese, M. A., & Mitchell, S. (1993). Problem-based learning: A review of literature on its outcomes and program implementation issues. Academic Medicine, 68(1), 52-81.', url: 'https://doi.org/10.1097/00001888-199301000-00012' },
        { texto: 'Colliver, J. A. (2000). Effectiveness of problem-based learning curricula: Research and theory. Academic Medicine, 75(3), 259-266.', url: 'https://doi.org/10.1097/00001888-200003000-00017' },
        { texto: 'Dochy, F., Segers, M., Van den Bossche, P., & Gijbels, D. (2003). Effects of problem-based learning: A meta-analysis. Learning and Instruction, 13(5), 533-568.', url: 'https://doi.org/10.1016/S0959-4752(02)00025-7' },
        { texto: 'Leary, H., Walker, A., Shelton, B. E., & Fitt, M. H. (2013). Exploring the Relationships Between Tutor Background, Tutor Training, and Student Learning: A Problem-based Learning Meta-Analysis. Interdisciplinary Journal of Problem-Based Learning, 7(1), 103-125.', url: 'https://doi.org/10.7771/1541-5015.1331' },
        { texto: 'Loyens, S. M. M., Wijnia, L., Van der Sluijs-Duker, I., & Rikers, R. M. J. P. (2020). Problem-Based Learning. En Oxford Research Encyclopedia of Education. Oxford University Press.', url: 'https://doi.org/10.1093/acrefore/9780190264093.013.861' },
      ]},
    ],
    recursos: [
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
      'Fundamentos de la gamificación: Conceptos básicos, tipos de elementos gamificados y beneficios en la motivación y retención.',
      'Tecnologías emergentes: Introducción a Realidad Virtual (VR), Aumentada (AR) y Mixta (XR): Características, aplicaciones educativas y limitaciones actuales.',
      'Uso de imágenes y vídeos en 360°: Creación y aprovechamiento para inmersión y entendimiento espacial.',
      'Software y plataformas recomendadas: Presentación de herramientas amigables como CoSpaces, Oculus Education y similares.',
      'Diseño instructivo gamificado: Cómo integrar estos recursos en el currículo virtual y medir su impacto.',
      'Introducción al uso de plataformas tales como Kahoot.it, Genially, Arloopa y OBS Studio (Frame VR).'
    ],
    modus_operandi: '1er. Encuentro sincrónico: Presentación de las herramientas más frecuentemente utilizadas en gamificación y en realidades inmersivas.\n\n2° y 3° encuentro sincrónicos: Puesta en común, reflexión y debate analítico, comparado y metacognitivo sobre los instrumentos didácticos utilizados y su contribución genuina a la transformación educativa.',
    actividades_desc: [
      'Evaluación por equipos de un ejemplo pedagógico elaborado en OBS Studio Frame VR por el autor de este TFI durante el curso de la EDET-2024: https://framevr.io/viral-science-of-the-music#',
      'Contribuciones individuales para la optimización de la obra creada, seguidas de una heteroevaluación por pares.',
      'Diseño y simulación práctica individual en un entorno XR básico a elección, según la asignatura a cargo de cada docente.',
      'Evaluación y discusión sobre la experiencia inmersiva, seguida de heteroevaluación por pares.',
      'Diseño colaborativo de un recurso gamificado para una temática específica según la asignatura a dictar en la METT, empleando la plataforma Kahoot.it quienes dictan materias de las ciencias básicas y Genially, quienes lo hacen en materias clínicas.',
      'Evaluación por equipos de un ejemplo pedagógico elaborado en Kahoot según rúbricas previamente elaboradas. PIN: 04935041 — https://kahoot.it/challenge/04935041?challenge-id=214d1bd3-9421-469f-bbc9-1248e5b43b41_1781613719821',
    ],
    bibliografia_imprescindible: [
      { texto: 'Rosenthal, A., Toscano, L. Apuntes. Curso EDET. Seminario 5. 2024.' },
      { texto: 'Christopoulos, A., Mystakidis S. Gamification in Education. Chapter 4. Encyclopedia 2023, 3, 1223–1243.', url: 'https://doi.org/10.3390/encyclopedia3040089' },
      { texto: 'Nunes Pozzo, D., Gutiérrez Roa, I., González Beleño, C. A., Arévalo Fajardo, B. Y., Herrera Cantillo, C. P., Cudris Guerrero, V. (2024). "Perspectives and applications of virtual reality in higher education: An analysis of Latin America\'s publications". Procedia Computer Science 238: 962-967.' },
    ],
    referencias_profundizar: [
      { subtema: 'Gamificación', items: [
        { texto: 'BID. Los videojuegos no son un juego. Los desconocidos éxitos de los estudios de América Latina y el Caribe. Cap. 14: Aprender jugando: videojuegos y educación en la era digital. Pg. 193.' },
        { texto: 'Bonwell, C. C., & Eison, J. A. (1991). Active learning: Creating excitement in the classroom. ASHE-ERIC Higher Education Report No. 1. George Washington University.' },
        { texto: 'Caillois R. (1967). Los juegos y los hombres. La máscara y el vértigo. Fondo de Cultura Económica, México. 286 p.' },
        { texto: 'Csikszentmihalyi, M. (1990). Flow: The psychology of optimal experience. Harper & Row.' },
        { texto: 'Deci, E. L., & Ryan, R. M. (1985). Intrinsic motivation and self-determination in human behavior. Springer.' },
        { texto: 'Egenfeldt-Nielsen, S., Smith, J. H., & Tosca, S. P. (2020). Understanding video games: The essential introduction (4th ed.). Routledge. 402 p.' },
        { texto: 'Esnaola Horacek, G. y Ansó MB. (2019). Competencias digitales lúdicas y enseñanza. REIDOCREA, 8, 399–410.' },
        { texto: 'Gee, J. P. (2004). Lo que nos enseñan los videojuegos sobre el aprendizaje y el alfabetismo (J. M. Pomares, Trad.). Málaga: Ediciones Aljibe. 264 p.' },
        { texto: 'Graesser, A., Chipman, P., Leeming, F., & Biedenbach, S. (2009). "Deep learning and emotion in serious games". En "Serious games: Mechanisms and effects", 81-100.' },
        { texto: 'Gros Salvat, B. (2014). Revista Interuniversitaria de Formación del Profesorado, 79(28.1): 115-128.' },
        { texto: 'Kapp, K. M. (2012). The gamification of learning and instruction: game-based methods and strategies for training and education. Pfeiffer.' },
        { texto: 'Michael, D.R., Chen S. (2005). Serious Games: Games That Educate, Train, and Inform. 1st edition.' },
        { texto: 'Muriel, D., & Crawford, G. (2018). Video games as culture: Considering the role and importance of video games in contemporary society. Routledge.' },
        { texto: 'Nicol, D. J., & Macfarlane-Dick, D. (2006). Formative assessment and self-regulated learning: A model and seven principles of good feedback practice. Studies in Higher Education, 31(2), 199-218.' },
        { texto: 'Radianti, J., Majchrzak, T.A., Fromm, J., Wohlgenannt I. (2020). A systematic review of immersive virtual reality applications for higher education: Design elements, lessons learned, and research agenda. Computers & Education, 147.', url: 'https://doi.org/10.1016/j.compedu.2019.10377' },
        { texto: 'Scolari, Carlos A. (ed.) (2013). Homo Videoludens 2.0. De Pacman a la gamification. Col·lecció Transmedia XXI. Universitat de Barcelona.' },
        { texto: 'Vygotsky, L.S. (1978). La mente en la sociedad: El desarrollo de los procesos psicológicos superiores. Harvard University Press.' },
        { texto: 'Zichermann, G., and Cunningham, C. Gamification by Design. Implementing Game Mechanics in Web and Mobile Apps.' },
      ]},
      { subtema: 'Tecnologías emergentes (VR, AR, XR)', items: [
        { texto: 'Bacca, J., Baldiris, S., Fabregat, R., Graf, S., & Kinshuk. (2014). "Augmented reality trends in education: A systematic review of research and applications." Educational Technology & Society, 17(4), 133-149.' },
        { texto: 'Cruz Morales, M. A.; Morales Cárdenas, A. y Ayala Ruiz, Á. (2006). Diseño de productos asistidos por realidad virtual inmersiva. Ingeniería Mecánica. Tecnología y Desarrollo, 2(3), 93-100.' },
        { texto: 'De Freitas, S., Neumann, T. (2009). "The use of exploratory learning for supporting immersive learning in virtual environments." Computers & Education, 52(2), 343-352.' },
        { texto: 'Dede, C. (2009). "Immersive interfaces for engagement and learning." Science, 323(5910), 66-69.' },
        { texto: 'Lerma García, L., et al. (2020). "Realidad virtual como técnica de enseñanza en Educación Superior: perspectiva del usuario." Enseñanza & Teaching, 38:111-123.' },
        { texto: 'Merchant, Z., Goetz, E. T., Cifuentes, L., Keeney-Kennicutt, W., Davis, T. J. (2014). "Effectiveness of virtual reality-based instruction on students\' learning outcomes in K-12 and higher education: A meta-analysis." Computers & Education, 70, 29-40.' },
      ]},
    ],
    recursos: [
      { tipo: 'link', label: 'CoSpaces Edu', url: 'https://cospaces.io/edu/' },
      { tipo: 'link', label: 'Kahoot! — PIN: 04935041', url: 'https://kahoot.it/' },
      { tipo: 'link', label: 'Genially', url: 'https://genially.com/' },
      { tipo: 'link', label: 'Arloopa', url: 'https://arloopa.com/' },
      { tipo: 'link', label: 'OBS Studio Frame VR', url: 'https://framevr.io/' },
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
    objetivo: 'Garantizar una educación inclusiva e integradora mediante prácticas y tecnologías que responden a las necesidades de estudiantes con discapacidades sensoriales mediante diseño universal.',
    resumen: 'Normativas internacionales WCAG 2.1/2.2/3 para accesibilidad en plataformas educativas. Tecnologías asistivas: lectores de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles. Diseño Universal para el Aprendizaje (DUA). Estrategias didácticas para una inclusión plena. Ejemplos aplicados al diseño de cursos sobre salud tropical.',
    temas: [
      'WCAG 2.1/2.2/3',
      'Tecnologías asistivas (lector de pantalla, subtítulos)',
      'Diseño Universal para el Aprendizaje (DUA)',
      'Audiodescripción',
      'Estrategias didácticas inclusivas'
    ],
    contenidos: [
      'Normativas y estándares de accesibilidad: Revisión de WCAG (Web Content Accessibility Pautas) 2.1 / 2.2 / 3 y protocolos internacionales en educación digital.',
      'Diferencia entre inclusión e integración de la persona con discapacidad sensorial.',
      'Tecnologías asistivas: Software lector de pantalla, subtítulos automáticos, audiodescripción y alternativas táctiles.',
      'Diseño universal: Creación de contenidos y plataformas que sean navegables, comprensibles y utilizables para todos.',
      'Estrategias didácticas inclusivas: Adaptaciones en materiales, evaluación y comunicación.',
      'Análisis de casos: Accesibilidad aplicada en cursos de salud tropical y su impacto en la participación.'
    ],
    modus_operandi: 'En el encuentro sincrónico se planteará la diferencia entre la mera inclusión y la integración de la persona con discapacidad sensorial, así como los instrumentos disponibles y las posibles estrategias a adoptar con el objetivo de lograr la última realidad mencionada en el ámbito educativo.',
    actividades_desc: [
      'Testeo de recursos con lector de pantalla.',
      'Adaptación de material audiovisual con subtítulos y audiodescripción.',
      'Análisis del libro electrónico elaborado por el equipo del autor en la EDET-2024: "E-BOOK DE REFERENCIA. Diseño de Materiales accesibles". — https://drive.google.com/file/d/1Zy0RBLuNHul48O0fm1BpdReaAvYFwV6x/view?usp=sharing',
      'Discusión grupal: ¿Se puede incluir material escaneado en un audiolibro como el analizado? ¿Por qué? ¿Es conveniente la utilización de imágenes múltiples de Pptx sin epígrafes al pie de las mismas en un audiolibro? ¿Por qué? ¿Es conveniente la utilización de columna única o doble en cada página?',
      'Diseño individual de un plan de accesibilidad integral para un módulo específico de la asignatura a cargo del educando (docente de la METT).'
    ],
    bibliografia_imprescindible: [
      { texto: 'Cobo C. Contenido, contenedor y contexto en la transformación de la educación. Cap. 2.', url: 'http://www.edaddeplata.org/pdf/areaeducativacristobal_cobo.pdf' },
      { texto: 'Seale, J. (2014). E-learning and Disability in Higher Education: Accessibility Research and Practice. Routledge.' },
      { texto: 'World Wide Web Consortium (W3C). (2018). Web Content Accessibility Guidelines (WCAG) 2.1.' },
      { texto: 'Lion C. Los desafíos de aprender en un mundo algorítmico. Cap. 1. En: Aprendizaje y Tecnologías. Habilidades del presente, proyecciones de futuro. Carina Lion (Comp). Ed. Noveduc. 2020.', url: 'https://moodle4vz.unsl.edu.ar/moodle/pluginfile.php/37260/mod_resource/content/1/capitulo%201%20libro%20aprendizajes.pdf' },
      { texto: 'Naciones Unidas. Objetivos de desarrollo sostenible. Objetivo 4: Garantizar una educación inclusiva, equitativa y de calidad.', url: 'https://www.un.org/sustainabledevelopment/es/education/' },
    ],
    referencias_profundizar: [
      { subtema: 'Referencias seleccionadas', items: [
        { texto: 'Bullrich Esteban & Sánchez Zinny Gabriel. Ahora...Calidad. Apuntes para el debate sobre política educativa en la Argentina. 1ª ed. Buenos Aires: Pensar Fundación 2011. Cap. 8. P 165-181.' },
        { texto: 'Coll C, Monereo C. Psicología de la educación virtual: aprender y enseñar con las tecnologías de la información y la comunicación. Madrid - Morata. 2008.' },
        { texto: 'Fernández Zalazar D, Jofre CM. Sociedad del conocimiento y accesibilidad para la educación inclusiva. Iberoamérica Social. Revista Red de Estudios Sociales. XII: 9-11, 2019.', url: 'https://iberoamericasocial.com/ojs/index.php/IS/article/view/367' },
        { texto: 'Fernández Zalazar D. Hablemos de discapacidad. En: Articulaciones de los materiales con el escenario contemporáneo.', url: 'https://campus.citep.rec.uba.ar/mod/page/view.php?id=28671' },
        { texto: 'Fundación Visibilia. Lectura Fácil.', url: 'https://fundacionvisibilia.org/lectura-facil.html' },
        { texto: 'Información para todos. Las reglas europeas para hacer información fácil de leer y comprender.', url: 'https://biblioteca.fundaciononce.es/publicaciones/otras-editoriales/informacion-para-todos-las-reglas-europeas-para-hacer-informacion' },
        { texto: 'Jofre MC. Lineamientos de estilo para creación de documentos accesibles. 2020.', url: 'https://www.campusvirtual.psi.uba.ar/wp/wp-content/uploads/2020/03/Lineamientos-de-estilo-para-creaci%C3%B3n-de-documentos-accesibles.pdf' },
        { texto: 'Nomura M, Nielsen GS, Trombacke B. Guidelines for easy-to-read materials (IFLA Professional Report 120).', url: 'https://repository.ifla.org/bitstream/123456789/637/1/ifla-professional-reports-nr-120-es.pdf' },
        { texto: 'Odetti V. De lo hipermedial a lo performativo: El devenir de los materiales didácticos digitales. Cap. 4. En: Las Tecnologías en (y para) la educación. FLACSO Editorial. Uruguay. 2020.', url: 'https://www.flacso.edu.uy/publicaciones/edutic2020/garcia_garcia_tecnologias_en_y_para_la_educacion.pdf' },
        { texto: 'Onrubia J. Aprender y enseñar en entornos virtuales: actividad conjunta, ayuda pedagógica y construcción del conocimiento. RED. Revista de Educación a Distancia.', url: 'http://www.um.es/ead/red/M2/' },
        { texto: 'Pardo Kuklinski H, Cobo C. Expandir la universidad más allá de la enseñanza remota: de la emergencia hacia un modelo híbrido post-pandemia. Outliers School. Barcelona. 2020.' },
        { texto: 'Scolari CA. Las leyes de la interfaz. 144 pp. Barcelona: Gedisa. 2018.' },
        { texto: 'Scolari CA. Narrativas transmedia. Cuando todos los medios cuentan. Barcelona: Deusto S.A. Ediciones. 2013.' },
        { texto: 'Universal Design for Learning. CAST.', url: 'https://www.cast.org/impact/universal-design-for-learning-udl' },
      ]},
    ],
    recursos: [
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
    objetivo: 'Conocer el potencial y limitaciones de la IAGen para el diseño pedagógico, creación de contenidos y seguimiento personalizado en EaD en pos de la optimización de la eficiencia.',
    resumen: 'Introducción a la IA Generativa (IAGen): definición y ejemplos prácticos en educación. Aplicaciones en la enseñanza: creación de contenidos, generación automática de evaluaciones, tutorías inteligentes. Personalización del aprendizaje con IA. Consideraciones éticas: privacidad, sesgos y transparencia. Futuro de la educación con IA.',
    temas: [
      'Fundamentos de IA Generativa',
      'Aplicaciones en diseño pedagógico',
      'Tutorías inteligentes y personalización',
      'Ética, sesgos y privacidad',
      'Futuro de la educación con IA'
    ],
    contenidos: [
      'Conceptos de IA generativa: Definición y ejemplos prácticos actuales en educación.',
      'Aplicaciones en la enseñanza: Creación de contenidos, generación automática de evaluaciones y tutorías inteligentes.',
      'Personalización del aprendizaje: Uso de IA para adaptar rutas formativas según el progreso y perfil de cada alumno.',
      'Consideraciones éticas: Privacidad, sesgos y transparencia en el uso de IA en contextos educativos.',
      'Ética en el uso de la IA. Educación crítica como práctica de humanización (no automatización).',
      'Las cinco estrategias de Freire en pos de la educación crítica. Los cinco principios pedagógicos críticos de Costa y Murphy.',
      'Buenas prácticas para la IA en Medicina.',
      'Futuro de la educación con IA: Tendencias y recomendaciones.',
      'Uso de plataformas según el objetivo a alcanzar respectivamente en la docencia y en la investigación científica.'
    ],
    modus_operandi: '1er. Encuentro sincrónico: se explorará el uso de chatbots basados en diferentes modelos de lenguaje (LLM), como ChatGPT, Google Gemini, Grok y Microsoft Copilot. Se abordarán mediante ejemplificación práctica las siguientes temáticas: técnicas para la construcción y evaluación de Prompts eficientes, diseño de asistentes personalizados (Gems), uso de extensiones para el procesamiento de imágenes, gráficos y generación de contenidos (ChatGPT Extensions), funciones especializadas para la búsqueda, análisis y presentación de información (Google Deep Research), y uso colaborativo de IA para potenciar el rendimiento de equipos de trabajo en el ámbito científico (Perplexity Spaces).\n\n2do. y 3er. encuentro sincrónicos: mediante casos prácticos, se incorporarán herramientas de transformación conceptual del conocimiento (Mapify), representación visual (Napkin), asistencia integral para el estudio (NotebookLM), gestión inteligente de artículos y referencias bibliográficas (Zotero, Research Rabbit, Elicit, PubTator), integración y automatización de flujos (n8n), y plataformas computacionales Low Code/No Code orientadas a la construcción de entornos de investigación reproducibles (Vercel V0, Google Colab, Galaxy). Finalmente, se explorará una plataforma de Código Abierto (Hugging Face) y se presentará una aplicación de referencia en clínica médica (Diagnóstico Diferencial).',
    actividades_desc: [
      'Experimentos grupales con herramientas básicas de distintas plataformas de IA generativa: exposición de párrafos pre-elaborados por equipos de docentes a diversos detectores de plagio y uso de la IA Gen. Comparación de resultados y heteroevaluación de los mismos por pares.',
      'Resolución de problemas con selección grupal de las plataformas más apropiadas para cada caso.',
      'Debate ético en foros sobre los beneficios y los riesgos del uso de la IA Gen en la educación de posgrado, según las experiencias personales (y de los alumnos a su cargo) de su aplicación.',
      'Diseño conceptual de un asistente docente basado en IA.'
    ],
    bibliografia_imprescindible: [
      { texto: 'Andreoli, S., Aubert, E., Cherbavaz, M.C., Perillo, L. "Entre humanos y algoritmos: percepciones docentes sobre la exploración con IAG en la Enseñanza del Nivel Superior," pp. 63-77.' },
      { texto: 'Costa, C., & Murphy, M. Critical education, generative artificial intelligence and the tyranny of freedom: a critique of modern technocracy. Technology, Pedagogy and Education, 35:3, 547-563.', url: 'https://doi.org/10.1080/1475939X.2025.2547728' },
      { texto: 'Holmes, W., et al. (2021). Artificial Intelligence in Education. Promises and Implications for Teaching and Learning. UNESCO.' },
      { texto: 'León XIV (2026). Carta Encíclica Magnifica Humanitas sobre la custodia de la persona humana en el tiempo de la inteligencia artificial.', url: 'https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html' },
      { texto: 'Lion, C., Bravo Aravena, S., Torres M.E. La Inteligencia Artificial en la educación. Salir de la caja negra. Educación, Lenguaje y Sociedad, Vol. XXIII Nº 23 (Junio 2024) pp. 1-26.', url: 'http://dx.doi.org/10.19137/els-2024-232303' },
      { texto: 'Moya García, M. I., & Trujillo Ruiz, J.A. (2026). Manual de Buenas Prácticas para la Inteligencia Artificial en Medicina. Organización Médica Colegial de España.', url: 'https://www.cgcom.es/publicaciones/manual_OMC_buenas_practicas_IA' },
      { texto: 'Sadin, É. (2026). El desierto de nosotros mismos. El giro intelectual y creativo de la Inteligencia Artificial. Ed. Caja Negra. Colección: FUTUROS PRÓXIMOS.' },
    ],
    referencias_profundizar: [
      { subtema: 'Referencias seleccionadas', items: [
        { texto: 'Abdulnour, R.-E. E., Gin, B., & Boscardin, C. K. (2025). Educational strategies for clinical supervision of artificial intelligence use. The New England Journal of Medicine, 393(8), 786–797.', url: 'https://doi.org/10.1056/NEJMra2503232' },
        { texto: 'Basavaraja, M. T., & Rajashekara, S. N. (2025). Navigating scholarly literature with ResearchRabbit: A comprehensive analysis. Journal of Science & Technology Metrics, 6(1), 1–9.', url: 'https://doi.org/10.6025/jstm/2025/6/1/1-9' },
        { texto: 'Bisong, E. (2019). Google Colaboratory. En Building Machine Learning and Deep Learning Models on Google Cloud Platform (pp. 59–64). Apress.' },
        { texto: 'Clark, A. (2025). Extending Minds with Generative AI. Nature Comm, 16:4627, 1-4.' },
        { texto: 'Fernández Enguita, M. (2024). Esta vez sí: con la IA nada será igual en la Universidad. Papeles de economía española Nº 180.' },
        { texto: 'Ferrarelli, M. y Lion, C. (2025). "Espejos y espejismos: diálogos entre enseñanza, aprendizajes e IAG". Propuesta Educativa, 34(63), pp 12-24.' },
        { texto: 'Flynn, I. T. W., & Peters, S. I. (2025). The usefulness of NotebookLM\'s audio overview for planetary scientists. Perspectives of Earth and Space Scientists, 6.', url: 'https://doi.org/10.1029/2025CN000282' },
        { texto: 'Kosmyna, N., et al. Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an Assistant for Essay Writing Task.' },
        { texto: 'Lau, M.S.Y., et al. (2026). Toward AI foundation models for epidemics: Promise, challenges, and paths forward. PNAS, 123(13), e2526192123.', url: 'https://doi.org/10.1073/pnas.2526192123' },
        { texto: 'Lee, P., Bubeck, S., & Petro, J. (2023). Benefits, limits, and risks of GPT-4 as an AI chatbot for medicine. The New England Journal of Medicine, 388(13), 1233–1239.', url: 'https://doi.org/10.1056/NEJMsr2214184' },
        { texto: 'Tufino, E. (2025). NotebookLM: An LLM with RAG for active learning and collaborative tutoring. arXiv.', url: 'https://arxiv.org/abs/2504.09720' },
        { texto: 'Von Platen, P., et al. (2022). The Hugging Face Hub as a platform for machine learning collaboration. NeurIPS 2022.' },
        { texto: 'Wei, C.-H., et al. (2024). PubTator 3.0: An AI-powered literature resource for unlocking biomedical knowledge. arXiv.', url: 'https://arxiv.org/abs/2401.11048' },
        { texto: 'Yang, L., et al. (2026). AI agents and epidemiological intelligence for respiratory infectious diseases. Journal of Medical Internet Research, 28, e86936.', url: 'https://doi.org/10.2196/86936' },
      ]},
    ],
    recursos: [
      { tipo: 'link', label: 'UNESCO - AI in Education', url: 'https://www.unesco.org/en/digital-education/artificial-intelligence' },
      { tipo: 'link', label: 'NotebookLM - Google', url: 'https://notebooklm.google.com/' },
      { tipo: 'link', label: 'Zotero', url: 'https://www.zotero.org/' },
      { tipo: 'link', label: 'Research Rabbit', url: 'https://www.researchrabbit.ai/' },
      { tipo: 'link', label: 'Elicit', url: 'https://elicit.com/' },
      { tipo: 'link', label: 'Mapify', url: 'https://mapify.so/' },
      { tipo: 'link', label: 'Napkin', url: 'https://napkin.ai/' },
      { tipo: 'link', label: 'Perplexity Spaces', url: 'https://www.perplexity.ai/' },
      { tipo: 'link', label: 'Hugging Face', url: 'https://huggingface.co/' },
      { tipo: 'link', label: 'Google Colab', url: 'https://colab.research.google.com/' },
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

function puntajeAMedalla(puntaje, puntajeMax) {
  if (puntaje == null || puntajeMax == null) return null
  const pct = puntaje / puntajeMax
  if (pct >= 0.9) return 'oro'
  if (pct >= 0.7) return 'plata'
  return 'bronce'
}

export const ACTIVIDADES_INICIALES = [
  { id: 1, titulo: 'Reflexión guiada sobre experiencia docente en EaD', tipo: 'tarea', modulo: 1, vencimiento: '2026-06-15', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Ensayo breve (400-600 palabras) reflexionando sobre tu experiencia previa en educación a distancia. Identificá fortalezas, debilidades y expectativas para el Taller.' },
  { id: 2, titulo: 'Mini-narrativa LANIN: caso clínico de ETT', tipo: 'tarea', modulo: 2, vencimiento: '2026-06-22', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Creá una mini-narrativa para un caso clínico de una enfermedad tropical transmisible aplicando la metodología LANIN. Extensión: 500-800 palabras.' },
  { id: 3, titulo: 'Diseño de recurso gamificado', tipo: 'tarea', modulo: 3, vencimiento: '2026-06-29', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Diseñá colaborativamente un recurso gamificado para una temática de enfermedades tropicales transmisibles. Podés usar Genially, Kahoot u otra herramienta.' },
  { id: 4, titulo: 'Encuesta de experiencia inmersiva', tipo: 'encuesta', modulo: 3, vencimiento: '2026-07-16', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Evaluá tu experiencia con la simulación XR y los recursos gamificados del módulo.', preguntas: [
    { id: 'q1', texto: '¿En qué medida considerás que la visión MAS-TEIDE-LANIN aporta un enfoque innovador para la educación a distancia en enfermedades tropicales?', opciones: ['Significativamente innovador','Moderadamente innovador','Poco innovador','No aporta innovación'], respuestaCorrecta: null },
    { id: 'q2', texto: '¿Qué componente del Taller te resultó más valioso para tu práctica docente?', opciones: ['Narrativas LANIN y casos del NOA/NEA','Tecnologías XR y gamificación','Diseño universal y accesibilidad','IA Generativa aplicada a la educación'], respuestaCorrecta: null },
  ]},
  { id: 5, titulo: 'Plan de accesibilidad integral', tipo: 'tarea', modulo: 4, vencimiento: '2026-07-06', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Diseñá un plan de accesibilidad integral para un módulo específico de la METT, incluyendo subtítulos, audiodescripción y alternativas táctiles.' },
  { id: 6, titulo: 'Experimento con IA Generativa', tipo: 'tarea', modulo: 5, vencimiento: '2026-07-13', estado: 'pendiente', puntaje: null, puntajeMax: 10, descripcion: 'Usá una herramienta de IA Gen (ChatGPT, Claude, Gemini) para generar un plan de clase o material educativo. Reflexioná sobre los resultados obtenidos.' },
  { id: 7, titulo: 'Proyecto Integrador Final', tipo: 'tarea', modulo: null, vencimiento: '2026-08-07', estado: 'pendiente', puntaje: null, puntajeMax: 100, descripcion: 'Rediseño completo de un módulo de la METT integrando: gamificación/XR + accesibilidad + IA + narrativas LANIN. Incluye defensa oral sincrónica.' },
  { id: 8, titulo: 'Análisis de caso: HarvardX', tipo: 'tarea', modulo: 1, vencimiento: '2026-06-12', estado: 'completada', puntaje: 8, puntajeMax: 10, descripcion: 'Analizá un caso de éxito en educación a distancia identificando los estándares de calidad aplicados y cómo podrían transferirse a la METT.', retroalimentacion: 'Muy buen análisis. Identificaste correctamente los estándares Quality Matters. Para profundizar, sugiero revisar cómo alinear esos estándares con el contexto específico del NOA/NEA.' },
  { id: 9, titulo: 'Diseño de rúbrica formativa', tipo: 'tarea', modulo: 2, vencimiento: '2026-06-14', estado: 'completada', puntaje: 9, puntajeMax: 10, descripcion: 'Diseñá una rúbrica analítica para evaluar una actividad de tu especialidad, incorporando criterios LANIN y TEIDE.', retroalimentacion: 'Excelente rúbrica. Los criterios LANIN están bien integrados y los niveles de desempeño son claros. Te recomiendo agregar un nivel "ejemplar" para incentivar la excelencia por encima del estándar.' },
  { id: 10, titulo: 'Testeo con lector de pantalla', tipo: 'tarea', modulo: 4, vencimiento: '2026-06-14', estado: 'completada', puntaje: 7, puntajeMax: 10, descripcion: 'Probá un recurso educativo propio con un lector de pantalla (NVDA o VoiceOver) y documentá los problemas de accesibilidad encontrados.', retroalimentacion: 'Buen trabajo inicial. El informe documenta los problemas principales, pero faltó incluir soluciones concretas para cada barrera identificada. Revisá la guía WCAG 2.1 para proponer alternativas viables.' },
].map(a => ({ ...a, medalla: puntajeAMedalla(a.puntaje, a.puntajeMax) }))

export const FOROS_INICIALES = [
  { id: 'general', titulo: 'Foro General', descripcion: 'Espacio abierto para consultas, intercambios y comentarios generales del Taller.', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '8 jun', texto: 'Bienvenidos al Taller Interactivo Avanzado en EaD con Tecnologías. En este recorrido exploraremos la visión MAS-TEIDE-LANIN para transformar la educación a distancia en el ámbito de las enfermedades tropicales transmisibles. Este espacio es de todos — úsenlo para cualquier consulta o intercambio.' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '9 jun', texto: 'Gracias! Una pregunta: los materiales quedan disponibles despues de que cierra cada modulo?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '9 jun', texto: 'Si, todo el material queda accesible durante todo el cuatrimestre y 30 dias despues del cierre del Taller.' },
  ]},
  { id: 'mod1', titulo: 'Foro Módulo 1', descripcion: 'Discusión sobre el rol del docente virtual, estándares de calidad y marco TEIDE.', tipo: 'modulo', moduloId: 1, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Carlos Lopez', avatar: 'CL', fecha: '12 jun', texto: 'Me parece muy interesante el concepto de "brújula cognitiva" vs "mapa". En mi práctica actual soy más mapa que brújula. Como empiezo a cambiar eso?' },
    { id: 2, autor: 'Paula Fernandez', avatar: 'PF', fecha: '12 jun', texto: 'Creo que el primer paso es diseñar actividades que obliguen al estudiante a tomar decisiones, no solo consumir contenido. Los estándares Quality Matters dan buena guía para eso.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '13 jun', texto: 'Exacto, Paula. Quality Matters proporciona un marco concreto. En el Módulo 2 veremos cómo las narrativas LANIN pueden ayudar a construir esa brújula.' },
  ]},
  { id: 'mod2', titulo: 'Foro Módulo 2', descripcion: 'Debate sobre evaluación formativa, rúbricas y narrativas LANIN en ETT.', tipo: 'modulo', moduloId: 2, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Roberto Rodríguez', avatar: 'RR', fecha: '19 jun', texto: 'La estrategia LANIN me parece poderosa para conectar la teoría con la realidad del Impenetrable. Estoy pensando en una narrativa sobre un brote de dengue en una comunidad rural.' },
    { id: 2, autor: 'María García', avatar: 'MG', fecha: '19 jun', texto: 'Me pregunto cómo evaluar las narrativas de manera objetiva. Una rúbrica bien diseñada sería clave para eso.' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '20 jun', texto: 'Buena observación, María. En la actividad de diseño de rúbrica vamos justamente a trabajar eso: criterios claros para evaluar narrativas LANIN.' },
  ]},
  { id: 'mod3', titulo: 'Foro Módulo 3', descripcion: 'Intercambio sobre gamificación, VR, AR y XR aplicados a la enseñanza médica.', tipo: 'modulo', moduloId: 3, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Ana Gómez', avatar: 'AG', fecha: '26 jun', texto: 'Probé CoSpaces para modelar el ciclo del vector del dengue. La visualización en 3D ayuda mucho a entender la transmisión. Alguien más lo probo?' },
    { id: 2, autor: 'Jorge Pérez', avatar: 'JP', fecha: '27 jun', texto: 'Todavia no, pero me interesa. Que tal es la curva de aprendizaje de CoSpaces?' },
    { id: 3, autor: 'Ana Gómez', avatar: 'AG', fecha: '27 jun', texto: 'Es bastante intuitivo. En una tarde ya tenes algo funcional. Lo recomiendo.' },
  ]},
  { id: 'mod4', titulo: 'Foro Módulo 4', descripcion: 'Discusión sobre accesibilidad WCAG, tecnologías asistivas y DUA.', tipo: 'modulo', moduloId: 4, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martínez', avatar: 'LM', fecha: '3 jul', texto: 'Nunca habia usado un lector de pantalla. Probar NVDA con mis propios materiales fue revelador — casi nada es accesible. ¿Por dónde arrancar?' },
    { id: 2, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '4 jul', texto: 'Arrancá por lo básico: estructura de encabezados, textos alternativos en imágenes y subtitulado de videos. WCAG 2.1 nivel A es un buen primer objetivo.' },
  ]},
  { id: 'mod5', titulo: 'Foro Módulo 5', descripcion: 'Debate sobre IA Generativa en educación: aplicaciones, ética y sesgos.', tipo: 'modulo', moduloId: 5, acceso: 'todos', mensajes: [
    { id: 1, autor: 'Federico Flores', avatar: 'FF', fecha: '10 jul', texto: 'Usé ChatGPT para generar un plan de clase sobre malaria. El resultado fue bueno pero note algunos datos imprecisos. La supervisión humana es indispensable.' },
    { id: 2, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '11 jul', texto: 'Totalmente, Federico. La IA es una herramienta, no un reemplazo. La ética y la verificación crítica son parte central de este módulo.' },
  ]},
  { id: 'tfi-general', titulo: 'TFI — General', descripcion: 'Espacio de consultas generales sobre el Trabajo Final Integrador.', tipo: 'tfi', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '1 jul', texto: 'El TFI consiste en el rediseño completo de un módulo de la METT integrando gamificación/XR + accesibilidad + IA + narrativas LANIN. La rúbrica con 6 criterios y 4 niveles ya está disponible. Cualquier consulta, acá o en el foro privado.' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '2 jul', texto: 'Puede ser sobre cualquier enfermedad tropical o tiene que ser una en particular?' },
    { id: 3, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '2 jul', texto: 'Puede ser cualquier enfermedad tropical transmisible que se aborda en la METT. Lo importante es que integre los 4 ejes del Taller: XR/gamificación, accesibilidad, IA y narrativas LANIN.' },
  ]},
  { id: 'tfi-grupos', titulo: 'TFI — Mi Grupo', descripcion: 'Coordinacion interna del grupo de trabajo para el TFI.', tipo: 'tfi-grupo', acceso: 'todos', mensajes: [
    { id: 1, autor: 'María García', avatar: 'MG', fecha: '12 jun', texto: 'Hola grupo! Arrancamos con una reunion por Zoom esta semana para definir qué modulo de la METT vamos a rediseñar?' },
    { id: 2, autor: 'Carlos Lopez', avatar: 'CL', fecha: '12 jun', texto: 'Me parece bien. Propongo el jueves 12 a las 19hs. Les queda?' },
  ]},
  { id: 'tfi-privado', titulo: 'TFI — Consulta Privada', descripcion: 'Canal privado entre vos y la docente para consultas sobre tu TFI.', tipo: 'tfi-privado', acceso: 'privado', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '9 jun', texto: 'Este espacio es tuyo para consultas privadas sobre el TFI. En qué módulo de la METT pensás basar tu rediseño?' },
  ]},
  { id: 'admin', titulo: 'Consultas Administrativas', descripcion: 'Espacio para consultas sobre inscripción, certificados, plazos, cursada y trámites del Taller.', tipo: 'general', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Dra. Ana Méndez', avatar: 'AM', fecha: '8 jun', texto: 'Bienvenidos al foro de consultas administrativas. Aquí pueden preguntar sobre plazos de entrega, certificados, inscripción y cualquier tema administrativo relacionado con el Taller.' },
  ]},
  { id: 'bitacora', titulo: 'Foro de Bitácora', descripcion: 'Recursos, links y temas de interes por fuera de los modulos obligatorios.', tipo: 'extra', acceso: 'todos', mensajes: [
    { id: 1, autor: 'Laura Martínez', avatar: 'LM', fecha: '10 jun', texto: 'Comparto este articulo sobre el impacto de la IA en diagnostico medico, muy relevante para el Módulo 5: https://www.thelancet.com' },
    { id: 2, autor: 'Jorge Perez', avatar: 'JP', fecha: '10 jun', texto: 'Gracias Laura! Tambien recomiendo el simulador de brotes epidemicos de la OPS, muy util para pensar narrativas LANIN: https://www.paho.org' },
  ]},
]

export const TFI_ENUNCIADO = {
  titulo: 'Trabajo Final Integrador — TIA-EDiT 2026',
  subtitulo: 'Rediseño de un módulo de la METT con enfoque MAS-TEIDE-LANIN',
  fecha_entrega: '7 de agosto de 2026',
  descripcion: 'El Trabajo Final Integrador consiste en el rediseño completo de un módulo de la Maestría en Enfermedades Tropicales Transmisibles (METT), integrando todos los elementos del Taller:\n\n• Gamificación y/o Realidad Extendida (XR)\n• Accesibilidad universal (WCAG 2.1/2.2)\n• IA Generativa para diseño pedagógico\n• Narrativas LANIN para aprendizaje significativo\n\nEl trabajo debe demostrar la capacidad de transitar desde un rol de "mapa" al de "brújula cognitiva", integrando la Misión-Acción-Servicio (MAS) con tecnologías disruptivas en el campo de las Enfermedades Tropicales Transmisibles.',
  sistema_evaluacion: {
    asistencia_obligatoria: '80% de los encuentros sincrónicos',
    evaluacion_continua: { peso: '60%', descripcion: 'Actividades por módulo evaluadas con rúbricas según criterios Quality Matters. Entregables: narrativas, rúbricas, diseños gamificados, planos de accesibilidad.' },
    portafolio_docente: { peso: '20%', descripcion: 'Compilación reflexiva de todos los productos del Taller.' },
    proyecto_integrador: { peso: '20%', descripcion: 'Rediseño completo de un módulo de la METT + defensa sincrónica con heteroevaluación por pares.' },
    aprobacion: '70% o más del puntaje máximo. Certificado por la institución Universitaria, acreditada por la CONEAU y que actualmente cuenta con un Sistema Institucional de Educación a Distancia (SIED) validado. En función del número de horas que corresponden a este Taller (60), el mismo otorgará 4 créditos a quienes lo aprueben.',
  },
  criterios_generales: [
    'Calidad técnica del diseño instruccional',
    'Alineación con estándares internacionales de EaD (Quality Matters, E-xcellence)',
    'Aplicabilidad a Salud Global y enfermedades tropicales transmisibles',
    'Reflexión crítica sobre la práctica docente',
    'Innovación ética en el uso de tecnologías emergentes',
  ],
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
        { nivel: 'Excelente', descripcion: 'El docente actúa como una brújula dinámica, estructurando la "presencia docente" (Anderson) para mitigar la soledad del estudiante y guiar el pensamiento crítico en entornos distribuidos.' },
        { nivel: 'Competente', descripcion: 'El docente facilita el aprendizaje y ofrece retroalimentación adecuada, aunque mantiene ciertos rasgos del modelo tradicional de transmisor de información.' },
        { nivel: 'En Desarrollo', descripcion: 'El docente se limita a responder dudas técnicas o administrativas sin una mediación pedagógica profunda sobre el contenido biomédico.' },
        { nivel: 'Insuficiente', descripcion: 'El docente actúa exclusivamente como "mapa" estático; no hay evidencia de acompañamiento personalizado ni guía cognitiva.' },
      ],
    },
    {
      criterio: 'Arquitectura Pedagógica bajo Marco TEIDE',
      niveles: [
        { nivel: 'Excelente', descripcion: 'El diseño del módulo es producto de una investigación-acción rigurosa, alineando objetivos, actividades y evaluaciones con estándares internacionales (Quality Matters/E-xcellence).' },
        { nivel: 'Competente', descripcion: 'El diseño es coherente y funcional, integrando la tecnología de forma deliberada pero con una fundamentación teórica menos robusta que el estándar de excelencia.' },
        { nivel: 'En Desarrollo', descripcion: 'El diseño instruccional es lineal; la tecnología se utiliza como un repositorio de archivos sin una secuenciación didáctica compleja.' },
        { nivel: 'Insuficiente', descripcion: 'Ausencia de coherencia entre los objetivos de salud global y las actividades propuestas; diseño instruccional precario o improvisado.' },
      ],
    },
    {
      criterio: 'Construcción de Sentido: Estrategia LANIN',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Integra narrativas inmersivas que dotan de relevancia y sentido ético al contenido técnico, vinculando la ciencia con la realidad humana de zonas de pobreza extrema.' },
        { nivel: 'Competente', descripcion: 'Incluye estudios de caso narrativos que favorecen el aprendizaje significativo, aunque la conexión con la práctica social en territorio es limitada.' },
        { nivel: 'En Desarrollo', descripcion: 'Utiliza relatos o anécdotas de forma tangencial, sin que estas constituyan el motor del proceso de construcción de significado para el alumno.' },
        { nivel: 'Insuficiente', descripcion: 'Presentación de datos biomédicos aislados (asfixia aristocrática); ausencia de narrativas que conecten la teoría con la realidad epidemiológica.' },
      ],
    },
    {
      criterio: 'Sinergia Tecnológica Disruptiva (XR/IA)',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Implementa Realidad Extendida e IA Generativa como "prótesis cognitivas", facilitando la visualización de la complejidad molecular y simulaciones de crisis sanitarias en tiempo real.' },
        { nivel: 'Competente', descripcion: 'Utiliza herramientas de gamificación (Genially/Kahoot) y simuladores básicos para aumentar la motivación intrínseca y la interactividad.' },
        { nivel: 'En Desarrollo', descripcion: 'Emplea tecnologías estándar (LMS/Moodle/Zoom) de forma adecuada, pero sin explorar el potencial de las tecnologías emergentes para la transformación educativa.' },
        { nivel: 'Insuficiente', descripcion: 'Dependencia de herramientas analógicas o digitales básicas; ausencia de innovación tecnológica o uso ético de la inteligencia artificial.' },
      ],
    },
    {
      criterio: 'Accesibilidad Universal y DUA (WCAG)',
      niveles: [
        { nivel: 'Excelente', descripcion: 'Cumple estrictamente con las pautas WCAG 2.1/2.2, ofreciendo materiales multimodales (audiolibros, subtítulos, audiodescripción) para una inclusión plena de personas con discapacidad.' },
        { nivel: 'Competente', descripcion: 'El contenido es navegable y legible, mostrando un compromiso claro con la diversidad de estilos de aprendizaje y la equidad en el acceso.' },
        { nivel: 'En Desarrollo', descripcion: 'Reconoce la importancia de la inclusión, pero las adaptaciones técnicas para discapacidades sensoriales son parciales o inconsistentes.' },
        { nivel: 'Insuficiente', descripcion: 'No se observan estrategias de accesibilidad; el diseño tecnológico genera barreras que excluyen a estudiantes con necesidades específicas o baja conectividad.' },
      ],
    },
    {
      criterio: 'Impacto MAS: Misión-Acción-Servicio',
      niveles: [
        { nivel: 'Excelente', descripcion: 'El proyecto demuestra una capacidad medible para transformar la realidad sanitaria en el NOA/NEA, alineando la excelencia de Harvard con el servicio en el Impenetrable.' },
        { nivel: 'Competente', descripcion: 'Propone soluciones aplicables a problemas de Salud Pública regional, demostrando una clara intencionalidad de servicio a la comunidad médica.' },
        { nivel: 'En Desarrollo', descripcion: 'El impacto social se menciona de forma genérica sin indicadores claros de cómo la formación mejorará la práctica clínica en contextos vulnerables.' },
        { nivel: 'Insuficiente', descripcion: 'Proyecto meramente académico-teórico sin vocación de servicio ni conexión con la problemática de la pobreza multidimensional regional.' },
      ],
    },
  ],
  acreditacion: [
    { nivel: 'Aprobación Distinguida (90-100%)', descripcion: 'Cumple con el nivel de Excelencia en al menos 5 criterios. Demuestra una transformación ontológica en su práctica docente.' },
    { nivel: 'Aprobación Estándar (70-89%)', descripcion: 'Alcanza el nivel Competente en todos los rubros. El diseño es sólido y cumple con los estándares internacionales de EaD.' },
    { nivel: 'En Proceso (<70%)', descripcion: 'Requiere revisión y tutoría suplementaria en los criterios de innovación y accesibilidad para alcanzar el estándar de la METT.' },
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
  { id: 19, titulo: 'Cierre del Taller', fecha: '2026-08-31', tipo: 'clase' },
]
