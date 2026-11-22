export function SectionHeading({ number, label, title, accent }: {
  number: string
  label: string
  title: string
  accent: string
}) {
  return (
    <div className="section-header">
      <div className="section-num" aria-hidden="true">{number}</div>
      <div className="section-label">{label}</div>
      <h2 className="section-title reveal-text">{title} <span className="accent">{accent}</span></h2>
    </div>
  )
}
