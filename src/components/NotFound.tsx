export function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="section-label">Error 404</div>
        <h1 className="section-title">This route doesn't exist.</h1>
        <p>The page you are looking for has been moved or does not exist.</p>
        <a href="/" className="proj-link" style={{ marginTop: 24 }}>Back Home</a>
      </div>
    </section>
  )
}
