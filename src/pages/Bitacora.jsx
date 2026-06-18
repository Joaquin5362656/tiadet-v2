import Navbar from '../components/Navbar'

export default function Bitacora() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1 className="page-title">Bitácora</h1>
        <p className="page-subtitle">Novedades, eventos y recursos para la formación humana integral.</p>

        <div style={{display:'flex',flexDirection:'column',gap:14,marginTop:20}}>
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
