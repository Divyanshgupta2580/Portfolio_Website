import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

const canAnimate = () =>
  'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function ScrollReveal({ children, as: Component = 'div', className = '', delay = 0, id }: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  id?: string
}) {
  const element = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(() => !canAnimate())

  useEffect(() => {
    if (!canAnimate() || !element.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setVisible(true)
      observer.disconnect()
    }, { threshold: 0.06 })
    observer.observe(element.current)

    return () => observer.disconnect()
  }, [])

  return (
    <Component ref={element} id={id} className={'reveal ' + className} data-visible={visible}
      style={{ transitionDelay: visible && delay ? delay + 'ms' : undefined }}>
      {children}
    </Component>
  )
}
