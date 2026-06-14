import Navbar from '../components/Navbar'

export default function Extras() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1 className="page-title">Actividades Extras</h1>
        <p className="page-subtitle">Contenidos y recursos complementarios al taller.</p>

        <div className="card" style={{marginTop:20}}>
          <div className="empty-state">
            <div className="empty-state-icon">*</div>
            <p className="empty-state-text">
              Esta seccion incluira mini-cursos y recursos opcionales como: Inteligencia Artificial en medicina, casos de estudio, webinars internacionales, y mas.
            </p>
            <p style={{fontSize:13,color:'var(--color-text-tertiary)',marginTop:12}}>
              Estaran disponibles durante todo el cuatrimestre.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
