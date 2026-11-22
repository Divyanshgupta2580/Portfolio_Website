import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0)
    }
    const resize = new ResizeObserver(update)
    resize.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', update)
      resize.disconnect()
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ transform: 'scaleX(' + progress + ')' }} aria-hidden="true" />
      <a className="scroll-top button button-icon button-primary" href="#home" aria-label="Scroll to top" hidden={progress < 0.09}>
        <ArrowUp size={20} aria-hidden="true" />
      </a>
    </>
  )
}
