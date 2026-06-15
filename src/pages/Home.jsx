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
              <a key={n.id} href={n.url} target="_blank" rel="noreferrer" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>{n.titulo}</p>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>{n.resumen}</p>
                <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{n.fuente} • {n.fecha}</p>
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
                <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: '4px 0 0' }}>{m.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
