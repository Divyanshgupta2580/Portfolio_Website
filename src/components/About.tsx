import { useState } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import type { AboutModalType } from './AboutModal'
import { SectionHeading } from './SectionHeading'

const { personal } = PORTFOLIO_DATA
const chipColors = ['var(--cyan)', 'var(--green)', 'var(--yellow)', 'var(--orange)']

export function About({ onOpenDetails }: { onOpenDetails: (topic: AboutModalType) => void }) {
  const [imageError, setImageError] = useState(false)
  const { academic } = personal

  return (
    <section id="about">
      <div className="container">
        <SectionHeading number="02" label="About Me" title="Who I" accent="Am." />
        <div className="about-grid fade-up">
          <div className="about-left">
            <div className="about-photo-frame" data-hover>
              {imageError ? <span className="avatar-emoji">{personal.avatarPlaceholderText}</span> :
                <img src={personal.portraitPath} alt={personal.name} className="about-photo"
                  width={personal.portraitSize.width} height={personal.portraitSize.height}
                  onError={() => setImageError(true)} />}
            </div>
            <div className="about-chips">
              {personal.profileCards.map(({ id, value, label }, index) => (
                <div className="about-chip" key={id} role="button" tabIndex={0} data-hover
                  onClick={() => onOpenDetails(id)} onKeyDown={(event) => {
                    if (event.key !== 'Enter' && event.key !== ' ') return
                    event.preventDefault()
                    onOpenDetails(id)
                  }}>
                  <div className="chip-dot" style={{ background: chipColors[index] }} />
                  {value} {label}
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <div className="about-bio">
              <p>{personal.about}</p>
              <p><strong>{academic.degree}</strong> · {academic.college}, {academic.university}. Expected graduation {academic.graduation}. CGPA {academic.sem1Cgpa} in semester 1 and {academic.sem2Cgpa} in semester 2.</p>
              {personal.focus.map(({ title, description }) => <p key={title}><strong>{title}</strong> {description}.</p>)}
              <p><a href="#contact" className="accent-link connect-link" data-hover>Connect with me</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
