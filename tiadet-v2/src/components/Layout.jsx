import Sidebar from './Sidebar'

export default function Layout({ title, children, actions }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="page-area">
        <div className="page-topbar">
          <span className="topbar-title">{title}</span>
          {actions && <div className="topbar-right">{actions}</div>}
        </div>
        <div className="page-body">
          {children}
        </div>
      </div>
    </div>
  )
}
