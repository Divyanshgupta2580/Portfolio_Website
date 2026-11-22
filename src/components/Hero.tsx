import type { CSSProperties } from 'react'
import { PORTFOLIO_DATA } from '../data/portfolioData'
import { SocialLinks } from './SocialLinks'

const { personal, projects, skills } = PORTFOLIO_DATA
const tags = [...personal.portraitTags, 'React', 'Express', 'PostgreSQL', 'Redis', 'Docker']
const rotations = [-3, 2, -1, 4, 4, -2, 1, 1, -3]
const stats = [
  { value: personal.profileCards[2].value, label: personal.profileCards[2].label },
  { value: personal.academic.sem2Cgpa, label: 'CGPA · Semester 2' },
  { value: projects.length, label: 'Projects' },
  { value: skills.reduce((total, group) => total + group.skills.length, 0), label: 'Technologies' },
]

export function Hero() {
  const [firstName, ...lastName] = personal.name.split(' ')

  return (
    <section id="hero">
      <canvas id="space-canvas" aria-hidden="true" />
      <div className="container" id="home">
        <div className="hero-grid fade-up">
          <div className="hero-left">
            <div className="hero-badge">● {personal.statusBadge}</div>
            <h1 className="hero-name reveal-text">{firstName}<br /><span className="highlight">{lastName.join(' ')}</span></h1>
            <div className="hero-role reveal-text" style={{ transitionDelay: '0.1s' }} aria-label={personal.headline}>
              <span id="typingText" aria-hidden="true">{personal.headline}</span><span className="cursor" aria-hidden="true" />
            </div>
            <p className="hero-desc reveal-text" style={{ transitionDelay: '0.2s' }}>{personal.bio}</p>
            <div className="hero-btns reveal-text" style={{ transitionDelay: '0.3s' }}>
              <a href="#projects" className="btn-magnetic btn-primary" data-hover>View Projects →</a>
              <a href="#contact" className="btn-magnetic btn-secondary" data-hover>Get in Touch ↗</a>
            </div>
            <div className="hero-socials reveal-text" style={{ transitionDelay: '0.4s' }}>
              <SocialLinks />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-tags-area">
              {tags.slice(0, 2).map((tag, index) => (
                <div className="hero-tag" key={tag} style={{ '--rot': rotations[index] + 'deg' } as CSSProperties}>#{tag}</div>
              ))}
              <a href={personal.resumePath} target="_blank" rel="noreferrer" className="hero-tag credential-btn"
                style={{ '--rot': '-1deg', background: '#9D4EDD', color: '#fff', borderColor: '#000', cursor: 'pointer', textDecoration: 'none' } as CSSProperties}
                data-hover>Download Resume ↗</a>
              {tags.slice(2).map((tag, index) => (
                <div className="hero-tag" key={tag} style={{ '--rot': rotations[index + 2] + 'deg' } as CSSProperties}>#{tag}</div>
              ))}
            </div>
            <div className="hero-stats">
              {stats.map(({ label, value }) => (
                <div className="stat-box" key={label}>
                  <div className="stat-val">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
