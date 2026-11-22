import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NAVIGATION, PORTFOLIO_DATA } from '../data/portfolioData'

function savedTheme() {
  try {
    return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const { personal } = PORTFOLIO_DATA
  const [theme, setTheme] = useState(savedTheme)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The theme still applies for the current page when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const sections = NAVIGATION.flatMap(({ id }) => {
      const element = document.getElementById(id)
      return element ? [element] : []
    })
    let frame = 0
    const update = () => {
      frame = 0
      const threshold = Math.min(window.innerHeight / 3, 220)
      const current = sections.findLast((section) => section.getBoundingClientRect().top <= threshold)
      setActive(current?.id ?? '')
    }
    const queueUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', queueUpdate, { passive: true })
    window.addEventListener('resize', queueUpdate)
    return () => {
      window.removeEventListener('scroll', queueUpdate)
      window.removeEventListener('resize', queueUpdate)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButton.current?.focus()
    }
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onEscape)
    document.addEventListener('pointerdown', onOutside)
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.removeEventListener('pointerdown', onOutside)
    }
  }, [open])

  return (
    <header className="site-header" ref={header}>
      <div className="shell header-inner">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label={personal.name + ' home'}>
          {personal.avatarPlaceholderText}<span>.</span>
        </a>
        <nav id="site-navigation" className="site-nav" aria-label="Main navigation" data-open={open}>
          {NAVIGATION.map(({ id, label }) => (
            <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <button type="button" className="mobile-contact button button-primary"
            onClick={() => { setOpen(false); menuButton.current?.focus(); onOpenContact() }}>
            Let's Connect
          </button>
        </nav>
        <div className="header-actions">
          <a className="button button-primary resume-link" href={personal.resumePath} target="_blank" rel="noreferrer">Resume</a>
          <button type="button" className="button button-icon theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button type="button" className="button button-icon menu-toggle" ref={menuButton}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-navigation"
            onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
