import { Plus } from 'lucide-react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import type { AboutModalType } from './AboutModal'
import { ScrollReveal } from './ScrollReveal'

export function About({ onOpenDetails }: { onOpenDetails: (topic: AboutModalType) => void }) {
  const { personal } = PORTFOLIO_DATA
  const { academic } = personal

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="shell">
        <ScrollReveal className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2 id="about-title">Engineering with Purpose &amp; Precision</h2>
          <p>{personal.about}</p>
        </ScrollReveal>
        <div className="about-grid">
          <ScrollReveal as="article" className="education-panel" delay={60}>
            <p className="eyebrow">Academic Background</p>
            <h3>{academic.degree}</h3>
            <p>{academic.college} · {academic.university}</p>
            <p>Expected graduation {academic.graduation}</p>
            <dl className="education-metrics">
              <div><dt>Semester 1 CGPA</dt><dd>{academic.sem1Cgpa}</dd></div>
              <div><dt>Semester 2 CGPA</dt><dd>{academic.sem2Cgpa}</dd></div>
            </dl>
          </ScrollReveal>
          <ScrollReveal as="div" className="focus-list" delay={120}>
            {personal.focus.map(({ title, description }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
        <div className="profile-cards">
          {personal.profileCards.map(({ id, value, label, description }, index) => (
            <ScrollReveal key={id} delay={index * 55}>
              <button type="button" className="profile-card" onClick={() => onOpenDetails(id)}>
                <strong>{value}</strong><span>{label}</span><small>{description}</small>
                <Plus size={18} aria-hidden="true" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
