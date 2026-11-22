import { PORTFOLIO_DATA } from '../data/portfolioData'
import { AwardMark, BoltMark, GlobeMark } from './ReferenceIcons'
import { SectionHeading } from './SectionHeading'

const { personal, journey } = PORTFOLIO_DATA
const icons = [AwardMark, BoltMark, GlobeMark]
const colors = ['var(--purple)', 'var(--cyan)', 'var(--green)']

export function Achievements() {
  const { academic } = personal
  return (
    <section id="achievements">
      <div className="container">
        <SectionHeading number="07" label="Achievements" title="Academic & Hackathon" accent="Highlights." />
        <div className="ach-grid fade-up">
          <div className="ach-card" data-hover>
            <div className="ach-num" style={{ color: 'var(--cyan)' }}>{academic.sem1Cgpa}</div>
            <h3 className="ach-title">Semester 1 CGPA</h3>
            <p className="ach-subtitle">{academic.degree} · {academic.college}</p>
          </div>
          <div className="ach-card" data-hover>
            <div className="ach-num" style={{ color: 'var(--green)' }}>{academic.sem2Cgpa}</div>
            <h3 className="ach-title">Semester 2 CGPA</h3>
            <p className="ach-subtitle">{academic.university} · Expected graduation {academic.graduation}</p>
          </div>
          {journey.map(({ title, organization, projectTitle, contribution }, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div className="ach-card" key={title} data-hover>
                <div className="ach-icon" style={{ color: colors[index % colors.length] }}><Icon /></div>
                <h3 className="ach-title">{organization}</h3>
                <p className="ach-subtitle"><strong>{projectTitle}</strong> · {contribution}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
