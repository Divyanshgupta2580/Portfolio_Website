import { NAVIGATION, PORTFOLIO_DATA } from '../data/portfolioData'

export function Navbar() {
  const { personal } = PORTFOLIO_DATA
  const [initial, ...rest] = personal.avatarPlaceholderText

  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="hamburger" id="hamburger" role="button" tabIndex={0} aria-label="Open menu"
        aria-controls="mobileMenu" aria-expanded="false">
        <span /><span /><span />
      </div>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label={personal.name + ' home'} data-hover>
          {initial}<span>{rest.join('')}</span>.
        </a>
        <div className="nav-links" id="mobileMenu">
          {NAVIGATION.map(({ id, label }) => <a key={id} href={'#' + id} data-hover>{label}</a>)}
        </div>
        <div className="nav-right">
          <button type="button" className="theme-btn" id="themeToggle" aria-label="Switch theme" data-hover>☀</button>
          <a href={personal.resumePath} target="_blank" rel="noreferrer" className="nav-resume-btn" data-hover>Resume↗</a>
        </div>
      </div>
    </nav>
  )
}
