import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ScrollReveal } from './ScrollReveal'
import { Tags } from './Tags'

export function Capabilities() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2 id="capabilities-title">Engineering Capabilities</h2>
          <p>Core domains of practical software engineering, artificial intelligence systems, and scalable backend architectures I build with.</p>
        </ScrollReveal>
        <div className="card-grid three-columns">
          {PORTFOLIO_DATA.capabilities.map((capability, index) => (
            <ScrollReveal as="article" className="panel capability-card" key={capability.id} delay={index * 65}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <Tags items={capability.tags} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
