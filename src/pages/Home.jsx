import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/AuthContext'
import { ANUNCIOS, NOVEDADES, MODULOS } from '../data/datos'
import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
  const { usuario } = useAuth()
  const navigate = useNavigate()
  const esInvitado = usuario?.rol === 'invitado'

  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1>Taller Interactivo Avanzado en Enseñanza a Distancia con Tecnologías</h1>
        <p>Bienvenido, {usuario?.nombre} — una experiencia formativa con visión <strong>MAS-TEIDE-LANIN</strong></p>

        {!esInvitado && (
          <section style={{ marginTop: 32 }}>
            <h2 className="section-label">Anuncios</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ANUNCIOS.map(a => (
                <div key={a.id} className="card" style={{ padding: 12 }}>
                  {a.texto}
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: 32 }}>
          <h2 className="section-label">Novedades</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
            {NOVEDADES.map(n => (
              <a key={n.id} href={n.url} target="_blank" rel="noreferrer" className="card novedad-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                {n.imagen && <img src={n.imagen} alt={n.titulo} className="novedad-img" />}
                <div className="novedad-body">
                  <p className="novedad-titulo">{n.titulo}</p>
                  <p className="novedad-resumen">{n.resumen}</p>
                  <p className="novedad-meta">{n.fuente} • {n.fecha}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 className="section-label">Módulos</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {MODULOS.map(m => (
              <div
                key={m.id}
                className="card modulo-card"
                onClick={() => m.estado !== 'bloqueado' && navigate(`/modulos/${m.id}`)}
                style={{
                  cursor: m.estado !== 'bloqueado' ? 'pointer' : 'not-allowed',
                  opacity: m.estado === 'bloqueado' ? 0.5 : 1,
                  padding: 14,
                }}
              >
                <strong>{m.numero}. {m.titulo}</strong>
                <p style={{ fontSize: 14, color: 'var(--color-text-tertiary)', margin: '4px 0 0' }}>{m.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Criterios de Evaluación del Taller */}
        <section style={{ marginTop: 32 }}>
          <h2 className="section-label">Criterios de Evaluación del Taller</h2>
          <div className="card" style={{ padding: 20 }}>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 16 }}>
              Su estructura se fundamenta en los criterios de excelencia de la Harvard Initiative for Digital Learning y los marcos <strong>TEIDE</strong> (Transformación Educativa basada en Investigación y Desarrollo Docente) y <strong>LANIN</strong> (Los Alumnos Necesitan Incluir Narrativas). El instrumento evalúa la capacidad de cada participante del Taller para transitar el camino desde un rol de &laquo;mapa&raquo; al de &laquo;brújula cognitiva&raquo;, integrando la Misión-Acción-Servicio (MAS) con tecnologías disruptivas en el campo de las Enfermedades Tropicales Transmisibles.
            </p>

            <h3 className="evaluacion-subtitulo">Evaluación del Taller</h3>
            <ul className="evaluacion-lista">
              <li><strong>Asistencia obligatoria:</strong> 80% de los encuentros sincrónicos.</li>
              <li><strong>Evaluación continua (60% de la calificación final):</strong> Actividades por módulo con rúbricas según criterios QM (Quality Matters). Entregables: narrativas, rúbricas, diseños gamificados, planos de accesibilidad.</li>
              <li><strong>Portafolio Docente Digital (20%):</strong> Compilación reflexiva de todos los productos.</li>
              <li><strong>Proyecto Integrador Final + Defensa (20%):</strong> Rediseño completo de un módulo de la Maestría integrando todos los elementos (gamificación/XR + accesibilidad + IA + narrativas). Presentación sincrónica y heteroevaluación por pares (peer-review).</li>
              <li><strong>Criterios generales:</strong> Calidad técnica, alineación con estándares, aplicabilidad a Salud Global, reflexión crítica e innovación ética.</li>
              <li><strong>Aprobación:</strong> 70% o más del puntaje máximo. Certificado por la institución Universitaria, acreditada por la CONEAU y que actualmente cuenta con un Sistema Institucional de Educación a Distancia (SIED) validado. En función del número de horas que corresponden a este Taller (60), el mismo otorgará 4 créditos a quienes lo aprueben.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
