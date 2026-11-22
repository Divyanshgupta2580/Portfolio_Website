import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ScrollReveal } from './ScrollReveal'

export function Opportunities({ onSelectOpportunity }: { onSelectOpportunity: (type: string) => void }) {
  return (
    <section id="opportunities" className="section" aria-labelledby="opportunities-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Opportunities</p>
          <h2 id="opportunities-title">What I'm Open To</h2>
          <p>I am actively seeking opportunities to collaborate, learn, and build impactful engineering solutions.</p>
        </ScrollReveal>
        <div className="card-grid three-columns">
          {PORTFOLIO_DATA.opportunities.map((opportunity, index) => (
            <ScrollReveal as="article" className="panel opportunity-card" key={opportunity.id} delay={index * 65}>
              <p className="eyebrow">{opportunity.badge}</p>
              <h3>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
              <ul className="fact-list">
                {opportunity.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <button type="button" className="button" onClick={() => onSelectOpportunity(opportunity.opportunityType)}>
                Let's Talk
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
