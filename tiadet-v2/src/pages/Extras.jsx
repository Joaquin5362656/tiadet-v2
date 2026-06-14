import Layout from '../components/Layout'

export default function Extras() {
  return (
    <Layout title="Actividades Extra">
      <h1 className="page-title">Actividades Extras</h1>
      <p className="page-subtitle">Contenidos y recursos complementarios al taller.</p>

      <div className="card" style={{marginTop:20}}>
        <div className="empty-state">
          <div className="empty-state-icon">✨</div>
          <p className="empty-state-text">
            Esta sección incluirá mini-cursos y recursos opcionales como: Inteligencia Artificial en medicina, casos de estudio, webinars internacionales, y más.
          </p>
          <p style={{fontSize:13,color:'var(--text-3)',marginTop:12}}>
            Estarán disponibles durante todo el cuatrimestre.
          </p>
        </div>
      </div>
    </Layout>
  )
}
