import { PORTFOLIO_DATA } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, ProtonMailIcon } from './Icons'

export function SocialLinks() {
  const { personal } = PORTFOLIO_DATA
  return (
    <ul className="social-links" aria-label="Social and contact links">
      <li><a href={personal.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a></li>
      <li><a href={personal.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a></li>
      <li><a href={'mailto:' + personal.email} aria-label="Email"><ProtonMailIcon size={18} /></a></li>
    </ul>
  )
}
