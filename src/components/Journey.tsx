import { PORTFOLIO_DATA } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Journey() {
  return (
    <section id="experience">
      <div className="container" id="journey">
        <SectionHeading number="03" label="Milestones & Hackathons" title="Engineering" accent="Journey." />
        <div className="exp-list fade-up">
          {PORTFOLIO_DATA.journey.map((item) => (
            <div className="exp-item" key={item.title}>
              <div className="exp-left">
                <div className="exp-period">{item.year}</div>
                <div className="exp-company">
                  {item.eventUrl
                    ? <a href={item.eventUrl} target="_blank" rel="noreferrer" data-hover>{item.organization} ↗</a>
                    : item.organization}
                </div>
                <div style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>{item.type}</div>
                <div className="exp-type-badge past">{item.badge}</div>
              </div>
              <div className="exp-right">
                <h3 className="exp-role">{item.projectTitle}</h3>
                <ul className="exp-bullets">
                  <li><strong>{item.projectSubtitle}</strong></li>
                  <li>{item.description}</li>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
