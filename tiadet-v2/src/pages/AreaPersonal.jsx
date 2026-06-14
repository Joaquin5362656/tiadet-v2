import { useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../components/AuthContext'
import { EVENTOS, ACTIVIDADES_INICIALES } from '../data/datos'
import './AreaPersonal.css'

export default function AreaPersonal() {
  const { usuario, actualizarFoto } = useAuth()
  const [fotoRef, setFotoRef]       = useState(null)
  const completadas                 = ACTIVIDADES_INICIALES.filter(a=>a.estado==='completada').length
  const pendientes                  = ACTIVIDADES_INICIALES.filter(a=>a.estado==='pendiente').length
  const activas                     = ACTIVIDADES_INICIALES.filter(a=>a.estado!=='proximo')
  const pct                         = Math.round((completadas / activas.length) * 100) || 0

  function handleFotoChange(e) {
    const f = e.target.files[0]
    if (f) {
      const reader = new FileReader()
      reader.onload = (evt) => {
        const dataUrl = evt.target.result
        actualizarFoto(dataUrl)
        setFotoRef(f.name)
      }
      reader.readAsDataURL(f)
    }
  }

  return (
    <Layout title="Área Personal">
      <div className="ap-grid">
        <div className="ap-main">
          {/* Perfil */}
          <div className="card ap-perfil">
            <h2 className="section-label">Mi Perfil</h2>
            <div className="perfil-row">
              <div className="perfil-foto-blk">
                <div className="perfil-avatar-grande">
                  {usuario?.foto ? (
                    <img src={usuario.foto} alt="Foto" />
                  ) : (
                    usuario?.nombre.split(' ').slice(0,2).map(p=>p[0]).join('')
                  )}
                </div>
                <label className="perfil-foto-label">
                  <input type="file" accept="image/*" onChange={handleFotoChange} style={{display:'none'}} />
                  📷 Cambiar foto
                </label>
                {fotoRef && <p style={{fontSize:11,color:'var(--text-3)',marginTop:4}}>✓ Foto actualizada</p>}
              </div>
              <div className="perfil-info">
                <div className="perfil-item">
                  <span className="perfil-label">Nombre</span>
                  <span className="perfil-valor">{usuario?.nombre}</span>
                </div>
                <div className="perfil-item">
                  <span className="perfil-label">DNI</span>
                  <span className="perfil-valor">{usuario?.dni}</span>
                </div>
                <div className="perfil-item">
                  <span className="perfil-label">Email</span>
                  <span className="perfil-valor">{usuario?.email}</span>
                </div>
                <div className="perfil-item">
                  <span className="perfil-label">Legajo</span>
                  <span className="perfil-valor">{usuario?.legajo}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progreso */}
          <div className="card ap-progreso">
            <h2 className="section-label">Mi Progreso</h2>
            <div className="progreso-big">
              <div className="prog-circulo" style={{
                background: `conic-gradient(var(--accent) 0deg ${pct*3.6}deg, var(--border) ${pct*3.6}deg)`
              }}>
                <div className="prog-circulo-inner">
                  <span className="prog-pct">{pct}%</span>
                </div>
              </div>
              <div className="prog-stats">
                <div className="prog-stat-item">
                  <span className="prog-stat-num green">{completadas}</span>
                  <span className="prog-stat-lbl">completadas</span>
                </div>
                <div className="prog-stat-item">
                  <span className="prog-stat-num warn">{pendientes}</span>
                  <span className="prog-stat-lbl">pendientes</span>
                </div>
                <div className="prog-stat-item">
                  <span className="prog-stat-num">{activas.length}</span>
                  <span className="prog-stat-lbl">totales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="ap-aside">
          {/* Calendario */}
          <div className="card">
            <h2 className="section-label">Próximas fechas</h2>
            <div className="calendario-lista">
              {EVENTOS.slice(0,6).map(evt=>(
                <div key={evt.id} className={`calendario-item calendario-${evt.tipo}`}>
                  <span className="cal-fecha">{new Date(evt.fecha).toLocaleDateString('es-AR',{month:'short',day:'numeric'})}</span>
                  <div className="cal-info">
                    <p className="cal-titulo">{evt.titulo}</p>
                    <span className="cal-tipo">{evt.tipo==='entrega'?'📤 Entrega':evt.tipo==='examen'?'📝 Examen':'🎓 Clase'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notificaciones */}
          <div className="card" style={{marginTop:14}}>
            <h2 className="section-label">Notificaciones</h2>
            <div className="notif-item notif-info">
              <span className="notif-icon">ℹ</span>
              <span className="notif-texto">Falta 1 semana para el TFI</span>
            </div>
            <div className="notif-item notif-warn">
              <span className="notif-icon">⚠</span>
              <span className="notif-texto">Tenés 1 actividad pendiente</span>
            </div>
            <div className="notif-item notif-success">
              <span className="notif-icon">✓</span>
              <span className="notif-texto">Completaste el Módulo 2</span>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
