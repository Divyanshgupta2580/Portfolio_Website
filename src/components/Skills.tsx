import { PORTFOLIO_DATA } from '../data/portfolioData'
import { ScrollReveal } from './ScrollReveal'
import { Tags } from './Tags'

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">Technical Toolkit</p>
          <h2 id="skills-title">Tools I Build With</h2>
          <p>Languages, frameworks, databases, and infrastructure used across my projects and engineering work.</p>
        </ScrollReveal>
        <div className="card-grid skills-grid">
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <ScrollReveal as="article" className="panel skill-card" key={category.title} delay={(index % 2) * 65}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <dl className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <dt>{skill.name}</dt><dd>{skill.tag}</dd>
                  </div>
                ))}
              </dl>
              {category.capabilities && <Tags items={category.capabilities} />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
