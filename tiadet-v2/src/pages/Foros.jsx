import { useState } from 'react'
import Layout from '../components/Layout'
import { FOROS_INICIALES } from '../data/datos'
import { useAuth } from '../components/AuthContext'
import './Foros.css'

const GRUPOS = [
  { key:'general', label:'General' },
  { key:'modulo',  label:'Por Módulo' },
  { key:'tfi',     label:'TFI' },
  { key:'tfi-grupo',  label:'TFI Grupo' },
  { key:'tfi-privado', label:'Privado' },
  { key:'extra',   label:'Extras' },
]

export default function Foros() {
  const { usuario }            = useAuth()
  const [forosData, setForos]  = useState(FOROS_INICIALES)
  const [foroId, setForoId]    = useState(null)
  const [texto, setTexto]      = useState('')
  const [filtroTipo, setFiltro]= useState('todos')

  const foro = forosData.find(f=>f.id===foroId)

  const forosFiltrados = filtroTipo==='todos'
    ? forosData
    : forosData.filter(f=>f.tipo===filtroTipo||
        (filtroTipo==='tfi'&&['tfi','tfi-grupo','tfi-privado'].includes(f.tipo)))

  function enviar() {
    const t = texto.trim(); if (!t) return
    const iniciales = usuario.nombre.split(' ').slice(0,2).map(p=>p[0]).join('')
    const msg = { id:Date.now(), autor:usuario.nombre, avatar:iniciales, fecha:'Ahora', texto:t }
    setForos(prev=>prev.map(f=>f.id===foroId?{...f,mensajes:[...f.mensajes,msg]}:f))
    setTexto('')
  }

  if (foro) return (
    <Layout title={foro.titulo} actions={
      <button className="btn-secondary" style={{fontSize:13}} onClick={()=>setForoId(null)}>← Volver a foros</button>
    }>
      <div className="hilo-grid">
        <div className="hilo-main">
          <div className="hilo-header card">
            <div className="hilo-icon">{foro.icono}</div>
            <div>
              <h1 className="hilo-titulo">{foro.titulo}</h1>
              <p className="hilo-desc">{foro.descripcion}</p>
              {foro.tipo==='tfi-privado' && <span className="badge badge-warn" style={{marginTop:6}}>🔒 Privado — solo vos y la docente</span>}
            </div>
          </div>

          <div className="mensajes-lista">
            {foro.mensajes.length===0 && (
              <div className="empty-state"><div className="empty-state-icon">💬</div><p className="empty-state-text">Todavía no hay mensajes. ¡Sé el primero en escribir!</p></div>
            )}
            {foro.mensajes.map(msg=>{
              const esMio = msg.autor===usuario.nombre
              return (
                <div key={msg.id} className={`msg-row ${esMio?'msg-mio':''}`}>
                  <div className="msg-av">{msg.avatar}</div>
                  <div className="msg-burbuja">
                    <div className="msg-meta"><strong>{msg.autor}</strong><span className="msg-fecha">{msg.fecha}</span></div>
                    <p className="msg-texto">{msg.texto}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="reply-box card">
            <textarea className="reply-ta" placeholder="Escribí tu mensaje..." value={texto} onChange={e=>setTexto(e.target.value)} rows={3} />
            <div className="reply-foot">
              <span className="reply-hint">Mantené un lenguaje académico y respetuoso.</span>
              <button className="btn-primary" disabled={!texto.trim()} onClick={enviar}>Publicar</button>
            </div>
          </div>
        </div>

        <aside className="hilo-aside">
          <div className="card">
            <h2 className="section-label">Participantes</h2>
            {[...new Set(foro.mensajes.map(m=>m.autor))].map(a=>(
              <div key={a} className="part-row">
                <div className="msg-av small">{a.split(' ').slice(0,2).map(p=>p[0]).join('')}</div>
                <span className="part-nombre">{a}</span>
              </div>
            ))}
            {foro.mensajes.length===0 && <p style={{fontSize:12,color:'var(--text-3)'}}>Sin participantes aún.</p>}
          </div>
          <div className="card" style={{marginTop:14}}>
            <h2 className="section-label">Otros foros</h2>
            {forosData.filter(f=>f.id!==foroId).slice(0,5).map(f=>(
              <button key={f.id} className="otro-foro-btn" onClick={()=>setForoId(f.id)}>
                {f.icono} {f.titulo}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  )

  return (
    <Layout title="Foros">
      <h1 className="page-title">Foros de discusión</h1>
      <p className="page-subtitle">Seleccioná un foro para participar.</p>

      <div className="foros-filtros">
        <button className={`filtro-btn ${filtroTipo==='todos'?'filtro-active':''}`} onClick={()=>setFiltro('todos')}>Todos</button>
        <button className={`filtro-btn ${filtroTipo==='general'?'filtro-active':''}`} onClick={()=>setFiltro('general')}>General</button>
        <button className={`filtro-btn ${filtroTipo==='modulo'?'filtro-active':''}`} onClick={()=>setFiltro('modulo')}>Módulos</button>
        <button className={`filtro-btn ${filtroTipo==='tfi'?'filtro-active':''}`} onClick={()=>setFiltro('tfi')}>TFI</button>
        <button className={`filtro-btn ${filtroTipo==='extra'?'filtro-active':''}`} onClick={()=>setFiltro('extra')}>Extras</button>
      </div>

      <div className="foros-lista">
        {forosFiltrados.map(f=>{
          const ultimo = f.mensajes[f.mensajes.length-1]
          return (
            <div key={f.id} className="foro-row card" onClick={()=>setForoId(f.id)}>
              <span className="foro-icono-big">{f.icono}</span>
              <div className="foro-info">
                <div className="foro-row-head">
                  <h3 className="foro-row-titulo">{f.titulo}</h3>
                  {f.tipo==='tfi-privado' && <span className="badge badge-warn">🔒 Privado</span>}
                </div>
                <p className="foro-row-desc">{f.descripcion}</p>
                {ultimo && <p className="foro-ultimo">Último mensaje: <strong>{ultimo.autor}</strong> · {ultimo.fecha}</p>}
              </div>
              <div className="foro-stats">
                <span className="foro-count">{f.mensajes.length}</span>
                <span className="foro-count-lbl">mensajes</span>
              </div>
              <span className="foro-arrow-btn">›</span>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
