const links = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
] as const

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="logo">
        <span className="logo-dot" aria-hidden="true" />
        React Right
      </a>
      <div className="nav-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="mono">{label}</a>
        ))}
      </div>
    </nav>
  )
}
