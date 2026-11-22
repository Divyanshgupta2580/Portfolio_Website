import { useId, useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'

export function Dialog({ title, label, children, onClose }: {
  title: string
  label?: string
  children: ReactNode
  onClose: () => void
}) {
  const titleId = useId()
  const ref = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const cursor = document.getElementById('cursor')
    const parent = cursor?.parentNode
    const next = cursor?.nextSibling ?? null
    const previousOverflow = document.documentElement.style.overflow
    dialog.showModal()
    if (cursor) dialog.prepend(cursor)
    document.documentElement.style.overflow = 'hidden'

    return () => {
      if (cursor && parent) parent.insertBefore(cursor, next)
      document.documentElement.style.overflow = previousOverflow
      dialog.close()
    }
  }, [])

  return (
    <dialog ref={ref} className="exp-list" aria-labelledby={titleId}
      style={{
        margin: 'auto', width: 'min(880px, calc(100% - 48px))', maxHeight: 'calc(100dvh - 48px)',
        background: 'var(--bg)', color: 'var(--text)', overflow: 'auto',
      }}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const { top, right, bottom, left } = event.currentTarget.getBoundingClientRect()
        if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) onClose()
      }}>
      <div className="exp-right">
        {label && <p className="section-label">{label}</p>}
        <h2 className="section-title" id={titleId}>{title}</h2>
        <button type="button" className="proj-link" aria-label="Close dialog"
          style={{ color: 'var(--text)', margin: '16px 0 24px' }}
          onClick={onClose} data-hover>Close</button>
        {children}
      </div>
    </dialog>
  )
}
