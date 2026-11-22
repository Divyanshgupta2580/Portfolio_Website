export function ScrollProgress() {
  return (
    <button id="scrollTop" type="button" aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-hover>△</button>
  )
}
