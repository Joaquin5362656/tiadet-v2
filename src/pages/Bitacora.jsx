import Navbar from '../components/Navbar'
import './Bitacora.css'

const JUEGOS = [
  {
    grupo: 'Kahoot!',
    color: '#46178f',
    items: [
      {
        nombre: 'Educación a distancia',
        descripcion: 'Según rúbricas elaboradas por el autor del TFI con motivo del Taller TIA-EDiT 2026.',
        pin: '04935041',
        url: 'https://kahoot.it/challenge/04935041?challenge-id=214d1bd3-9421-469f-bbc9-1248e5b43b41_81613719821',
      },
      {
        nombre: 'Virusito',
        descripcion: 'La competencia anual de la Maestría en Biología Molecular Médica — UBA, iniciada en EDET-2024.',
        url: 'https://kahoot.it/challenge/04992349?challenge-id=214d1bd3-9421-469f-bbc9-1248e5b43b41_27709732348',
      },
      {
        nombre: 'Vacunas del ayer, del hoy y del mañana',
        descripcion: 'Trilogía elaborada durante el ciclo lectivo EDET-2024.',
        subitems: [
          { nombre: 'Justa del saber — Vacunas y el Ayer', url: 'https://play.kahoot.it/v2/lobby?quizId=5b74a9ab-275e-45ee-9658-1bca3164ae3f' },
          { nombre: 'Justa del saber — Vacunas y el Hoy', url: 'https://play.kahoot.it/v2/lobby?quizId=4cd3d0eb-eeb5-4699-9769-3bdeefb5d7ae' },
          { nombre: 'Justa del saber — Vacunas y el Mañana... y sus desafíos', url: 'https://play.kahoot.it/v2/lobby?quizId=58dd1f2f-26be-435b-ba59-ffba87f1dd' },
        ],
      },
    ],
  },
  {
    grupo: 'Educaplay',
    color: '#d9534f',
    items: [
      {
        nombre: 'Ruleta de palabras — Introducción a las vacunas',
        descripcion: 'Pasapalabras elaborado por el autor del TFI durante el ciclo lectivo EDET-2024.',
        url: 'https://es.educaplay.com/editor-de-recursos/20544794/',
      },
    ],
  },
  {
    grupo: 'Frame VR',
    color: '#2b9e6a',
    items: [
      {
        nombre: 'Visita inmersiva a un Campus Universitario',
        descripcion: 'Recorrido virtual elaborado por el autor del TFI durante el ciclo lectivo EDET-2024.',
        url: 'https://framevr.io/viral-science-of-the-music#',
      },
    ],
  },
]

export default function Bitacora() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1 className="page-title">Bitácora</h1>
        <p className="page-subtitle">Novedades, eventos y recursos para la formación humana integral.</p>

        <div style={{display:'flex',flexDirection:'column',gap:14,marginTop:20}}>
          <div className="card" style={{padding:20}}>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
              <span style={{fontSize:24}}>🎮</span>
              <h2 className="section-label" style={{margin:0}}>Aprender Jugando</h2>
            </div>
            <p style={{fontSize:14,color:'var(--color-text-secondary)',marginBottom:16,lineHeight:1.5}}>
              Explorá, competí y aprendé con estos juegos didácticos diseñados para el Taller. Hacé clic en cualquier juego para abrirlo.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {JUEGOS.map((grupo, gi) => (
                <div key={gi} className="juego-grupo">
                  <div className="juego-grupo-header" style={{backgroundColor:grupo.color}}>
                    <span className="juego-grupo-icono">{gi === 0 ? '⚡' : gi === 1 ? '🎯' : '🌐'}</span>
                    <span className="juego-grupo-nombre">{grupo.grupo}</span>
                  </div>
                  <div className="juego-grupo-body">
                    {grupo.items.map((item, ii) => (
                      <div key={ii} className="juego-item">
                        <a href={item.url} target="_blank" rel="noreferrer" className="juego-link">
                          <span className="juego-link-nombre">▶ {item.nombre}</span>
                          {item.descripcion && <span className="juego-desc">{item.descripcion}</span>}
                          {item.pin && <span className="juego-pin">PIN: <strong>{item.pin}</strong></span>}
                        </a>
                        {item.subitems && (
                          <div className="juego-subitems">
                            {item.subitems.map((sub, si) => (
                              <a key={si} href={sub.url} target="_blank" rel="noreferrer" className="juego-sub-link">
                                ▶ {sub.nombre}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{padding:18}}>
            <h2 className="section-label">Laboratorios de Narrativas de Salud Global</h2>
            <p style={{fontSize:14,color:'var(--color-text-secondary)',lineHeight:1.6,marginTop:8}}>
              Codiseñá historias inmersivas (storytelling) utilizando IA Generativa para simular entornos de crisis epidemiológicas en el Impenetrable chaqueño. Una actividad que transforma la evaluación en un acto de investigación-acción.
            </p>
          </div>
          <div className="card" style={{padding:18}}>
            <h2 className="section-label">Mini-curso: IA en el diagnóstico médico</h2>
            <p style={{fontSize:14,color:'var(--color-text-secondary)',lineHeight:1.6,marginTop:8}}>
              Exploración de herramientas de IA aplicadas al diagnóstico de enfermedades tropicales. Incluye sesiones con ChatGPT, análisis de imágenes médicas y consideraciones éticas.
            </p>
          </div>
          <div className="card" style={{padding:18}}>
            <h2 className="section-label">Webinars internacionales</h2>
            <p style={{fontSize:14,color:'var(--color-text-secondary)',lineHeight:1.6,marginTop:8}}>
              Acceso a webinars de instituciones como HarvardX, UNESCO y Organización Panamericana de la Salud sobre educación a distancia y salud global.
            </p>
          </div>
          <div className="card" style={{padding:18}}>
            <h2 className="section-label">Casos de estudio: NOA/NEA</h2>
            <p style={{fontSize:14,color:'var(--color-text-secondary)',lineHeight:1.6,marginTop:8}}>
              Análisis de casos reales en regiones del norte argentino (NOA y NEA) donde la pobreza multidimensional extrema se cruza con la incidencia de enfermedades tropicales transmisibles.
            </p>
          </div>
          <div className="card" style={{padding:18}}>
            <h2 className="section-label">Recursos recomendados</h2>
            <ul style={{fontSize:14,color:'var(--color-text-secondary)',lineHeight:1.8,margin:'8px 0 0 16px'}}>
              <li>Simulador de brotes epidémicos — OPS</li>
              <li>Guía WCAG 2.2 — W3C</li>
              <li>CoSpaces Edu — plataforma XR educativa</li>
              <li>Genially — gamificación educativa</li>
              <li>NVDA — lector de pantalla gratuito</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
