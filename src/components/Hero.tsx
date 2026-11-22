import { useState } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import { SocialLinks } from './SocialLinks'

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  const { personal } = PORTFOLIO_DATA
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-masthead">
          <p className="hero-status"><span aria-hidden="true" />{personal.statusBadge}</p>
          <h1 id="hero-title">{personal.name}</h1>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h2>{personal.headline}</h2>
            <p>{personal.bio}</p>
            <div className="actions">
              <a className="button button-primary" href="#projects">View Projects</a>
              <button type="button" className="button" onClick={onOpenContact}>Let's Connect</button>
            </div>
            <SocialLinks />
          </div>
          <figure className="hero-portrait">
            {imageError
              ? <span className="portrait-fallback" aria-label={personal.name}>{personal.avatarPlaceholderText}</span>
              : <img src={personal.portraitPath} alt={personal.name} width={896} height={1009}
                  fetchPriority="high" onError={() => setImageError(true)} />}
            <figcaption>{personal.portraitTags.join(' / ')}</figcaption>
          </figure>
        </div>
        <dl className="hero-highlights">
          {personal.highlights.map(({ label, value, description }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd><strong>{value}</strong><span>{description}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
