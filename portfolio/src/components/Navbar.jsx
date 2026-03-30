const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="brand">A. Dharani Dharan</div>
      <nav>
        {NAV_LINKS.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <button type="button" className="theme-switch" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  )
}
