import { PORTFOLIO_DATA } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Opportunities({ onSelectOpportunity }: { onSelectOpportunity: (type: string) => void }) {
  return (
    <section id="opportunities">
      <div className="container">
        <SectionHeading number="09" label="Opportunities" title="What I'm" accent="Open To." />
        <div className="ach-grid fade-up">
          {PORTFOLIO_DATA.opportunities.map((opportunity) => (
            <div className="ach-card" key={opportunity.id} data-hover>
              <p className="section-label">{opportunity.badge}</p>
              <h3 className="ach-title">{opportunity.title}</h3>
              <p className="ach-subtitle">{opportunity.description}</p>
              <ul className="exp-bullets" style={{ margin: '16px 0 24px' }}>
                {opportunity.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <button type="button" className="proj-link" style={{ color: 'var(--text)' }}
                onClick={() => onSelectOpportunity(opportunity.opportunityType)} data-hover>Let's Talk ↗</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
