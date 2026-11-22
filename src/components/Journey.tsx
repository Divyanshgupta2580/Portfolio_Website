import { ABOUT_MODAL_DATA, PORTFOLIO_DATA } from '../data/portfolioData'
import { ScrollReveal } from './ScrollReveal'

export function Journey() {
  const upcoming = ABOUT_MODAL_DATA.hackathons.filter((event) => event.badge === 'Upcoming')
  return (
    <section id="journey" className="section section-alternate" aria-labelledby="journey-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Milestones &amp; Hackathons</p>
          <h2 id="journey-title">Engineering Journey &amp; Competitions</h2>
          <p>Chronological record of hackathon platforms, engineering contributions, and collaborative systems.</p>
        </ScrollReveal>
        <div className="journey-list">
          {PORTFOLIO_DATA.journey.map((item) => (
            <ScrollReveal as="article" className="journey-item" key={item.title}>
              <div className="journey-meta">
                <p className="eyebrow">{item.year}</p>
                <h3>{item.organization}</h3>
                <span className="status-tag">{item.badge}</span>
              </div>
              <div className="journey-copy">
                <h4>{item.projectTitle}</h4>
                <p className="project-subtitle">{item.projectSubtitle}</p>
                <p>{item.description}</p>
                <p><strong>Contribution</strong> {item.contribution}</p>
                <ul className="fact-list">{item.highlights.filter((highlight) =>
                  highlight !== item.contribution && highlight + '.' !== item.contribution
                ).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </ScrollReveal>
          ))}
          {upcoming.map((event) => (
            <ScrollReveal as="article" className="journey-item" key={event.id}>
              <div className="journey-meta">
                <h3>{event.name}</h3>
                <span className="status-tag">{event.badge}</span>
              </div>
              <div className="journey-copy">
                <h4>{event.focus}</h4>
                <p>{event.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
