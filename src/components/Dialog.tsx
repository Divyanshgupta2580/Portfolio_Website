import { useId, useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

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
    dialog.showModal()
    return () => { dialog.close() }
  }, [])

  return (
    <dialog ref={ref} className="dialog" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const { top, right, bottom, left } = event.currentTarget.getBoundingClientRect()
        if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) onClose()
      }}>
      <div className="dialog-inner">
        <div className="dialog-heading">
          <div>
            {label && <p className="eyebrow">{label}</p>}
            <h2 id={titleId}>{title}</h2>
          </div>
          <button type="button" className="button button-icon" aria-label="Close dialog" onClick={onClose}>
            <X size={21} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  )
}
