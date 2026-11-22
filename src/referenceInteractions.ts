import { PORTFOLIO_DATA } from './data/portfolioData'

const { personal } = PORTFOLIO_DATA
const roles = [
  ...personal.headline.split(' & '),
  personal.statusBadge.split(' · ')[0],
  personal.focus[0].title,
]

export function setupReferenceInteractions() {
  const controller = new AbortController()
  const { signal } = controller
  const timers = new Set<number>()
  const later = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer)
      callback()
    }, delay)
    timers.add(timer)
  }

  const html = document.documentElement
  const themeBtn = document.getElementById('themeToggle')
  let dark = html.dataset.theme === 'dark'

  function applyTheme(isDark: boolean) {
    html.dataset.theme = isDark ? 'dark' : 'light'
    if (!themeBtn) return
    themeBtn.textContent = isDark ? '☀' : '☾'
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode')
  }

  try {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') dark = saved === 'dark'
  } catch {
    // The initial theme still works when storage is unavailable.
  }
  applyTheme(dark)

  themeBtn?.addEventListener('click', () => {
    dark = !dark
    applyTheme(dark)
    try {
      localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
    } catch {
      // Theme persistence is optional.
    }
  }, { signal })

  let roleIndex = 0
  let characterCount = 0
  let deleting = false
  const typingText = document.getElementById('typingText')

  function type() {
    if (!typingText) return
    const current = roles[roleIndex]
    if (!deleting && characterCount < current.length) {
      typingText.textContent = current.slice(0, ++characterCount)
      later(type, 60)
    } else if (!deleting && characterCount === current.length) {
      later(() => { deleting = true; type() }, 2000)
    } else if (deleting && characterCount > 0) {
      typingText.textContent = current.slice(0, --characterCount)
      later(type, 30)
    } else {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
      later(type, 300)
    }
  }
  if (typingText) type()

  const cursor = document.getElementById('cursor')
  const hoverSelector = '[data-hover], a, button'

  document.addEventListener('mousemove', (event) => {
    if (!cursor) return
    cursor.style.left = event.clientX + 'px'
    cursor.style.top = event.clientY + 'px'
  }, { signal })

  document.addEventListener('mouseover', (event) => {
    if (event.target instanceof Element && event.target.closest(hoverSelector)) {
      cursor?.classList.add('hovered')
    }
  }, { signal })
  document.addEventListener('mouseout', (event) => {
    if (!(event.relatedTarget instanceof Element && event.relatedTarget.closest(hoverSelector))) {
      cursor?.classList.remove('hovered')
    }
  }, { signal })

  document.querySelectorAll<HTMLElement>('.btn-magnetic').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      button.style.transform = 'translate3d(' + x * 0.3 + 'px, ' + y * 0.3 + 'px, 0)'
    }, { signal })
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate3d(0, 0, 0)'
    }, { signal })
  })

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      if (window.innerWidth < 768) return
      const rect = card.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((event.clientY - rect.top - centerY) / centerY) * -5
      const rotateY = ((event.clientX - rect.left - centerX) / centerX) * 5
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)'
    }, { signal })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }, { signal })
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('visible')
      entry.target.querySelectorAll('.reveal-text').forEach((child, index) => {
        later(() => child.classList.add('visible'), index * 100)
      })
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.fade-up, .reveal-text').forEach((element) => observer.observe(element))

  let lastScrollY = window.scrollY
  const navbar = document.getElementById('navbar')
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  const navLinks = document.querySelectorAll('.nav-links a')
  const scrollTop = document.getElementById('scrollTop')
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('hidden', window.scrollY > lastScrollY && window.scrollY > 100)
    lastScrollY = window.scrollY
    let current = ''
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) current = section.id
    })
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === '#' + current
      link.classList.toggle('active', active)
      if (active) link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    })
    scrollTop?.classList.toggle('visible', window.scrollY > 600)
  }, { passive: true, signal })

  const canvas = document.querySelector<HTMLCanvasElement>('#space-canvas')
  const hero = document.getElementById('hero')
  const context = canvas?.getContext('2d')
  let frame = 0
  if (canvas && hero && context) {
    const resize = () => {
      canvas.width = hero.offsetWidth
      canvas.height = hero.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize, { signal })

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.1,
    }))
    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = dark ? '#FFFFFF' : '#000000'
      context.beginPath()
      const scrollOffset = window.scrollY * 0.5
      stars.forEach((star) => {
        let y = star.y - scrollOffset * star.speed
        if (y < 0) y = (y % canvas.height) + canvas.height
        context.moveTo(star.x, y)
        context.arc(star.x, y, star.radius, 0, Math.PI * 2, true)
        star.y -= star.speed * 0.5
        if (star.y < 0) star.y = canvas.height
      })
      context.fill()
      frame = requestAnimationFrame(drawStars)
    }
    drawStars()
  }

  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobileMenu')
  if (hamburger && mobileMenu) {
    const mobile = window.matchMedia('(max-width: 768px)')
    const setMenu = (open: boolean) => {
      hamburger.classList.toggle('active', open)
      mobileMenu.classList.toggle('active', open)
      hamburger.setAttribute('aria-expanded', String(open))
      hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
      mobileMenu.inert = mobile.matches && !open
    }
    const toggleMenu = () => setMenu(!mobileMenu.classList.contains('active'))
    setMenu(false)
    mobile.addEventListener('change', () => setMenu(false), { signal })
    hamburger.addEventListener('click', toggleMenu, { signal })
    hamburger.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      toggleMenu()
    }, { signal })
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !mobileMenu.classList.contains('active')) return
      setMenu(false)
      hamburger.focus()
    }, { signal })
    navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false), { signal }))
  }

  return () => {
    controller.abort()
    observer.disconnect()
    timers.forEach(window.clearTimeout)
    cancelAnimationFrame(frame)
  }
}
