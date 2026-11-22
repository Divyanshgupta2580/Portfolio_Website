export function NotFound() {
  return (
    <main className="shell section not-found">
      <p className="eyebrow">Error 404</p>
      <h1>This route doesn't exist.</h1>
      <p>The page you are looking for has been moved or does not exist.</p>
      <a href="/" className="button button-primary">Back Home</a>
    </main>
  )
}
