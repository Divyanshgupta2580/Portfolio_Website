import { PORTFOLIO_DATA } from '../data/portfolioData'
import { BoltMark, CodeMark, ScreenMark, ServerMark, ShieldMark } from './ReferenceIcons'
import { SectionHeading } from './SectionHeading'

const headers = [
  { Icon: CodeMark, color: '#ff6b35' },
  { Icon: ScreenMark, color: '#00ff9d' },
  { Icon: ServerMark, color: '#00e5ff' },
  { Icon: ShieldMark, color: '#9D4EDD' },
  { Icon: BoltMark, color: '#FFE500' },
]
const marquee = ['Docker', 'Python', 'React', 'PostgreSQL', 'FastAPI', 'MongoDB', 'Redis', 'Vite']

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading number="06" label="Skills" title="My" accent="Toolkit." />
        <div className="fade-up">
          <div className="skills-grid">
            {PORTFOLIO_DATA.skills.map((category, index) => {
              const { Icon, color } = headers[index % headers.length]
              return (
                <div className="skill-category" key={category.title}>
                  <div className="skill-cat-header no-box">
                    <div className="skill-cat-icon"><Icon /></div>
                    <div className="skill-cat-name">{category.title}</div>
                    <div className="skill-dot" style={{ background: color }} />
                  </div>
                  <div className="skills-tags">
                    {category.skills.map(({ name, tag }) => <span className="skill-tag" key={name} title={tag}>{name}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="skills-marquee" aria-hidden="true">
        <div className="marquee-track" id="marqueeTrack">
          {[...marquee, ...marquee].map((skill, index) => (
            <span className="marquee-item" key={skill + index}>{skill} <span className="marquee-sep">✦</span></span>
          ))}
        </div>
      </div>
    </section>
  )
}
