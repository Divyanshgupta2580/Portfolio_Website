import { PORTFOLIO_DATA } from '../data/portfolioData'
import { EmailMark, GitHubMark, LinkedInMark } from './ReferenceIcons'

const { personal } = PORTFOLIO_DATA
const channels = [
  { label: 'GitHub', href: personal.githubUrl, icon: GitHubMark },
  { label: 'LinkedIn', href: personal.linkedinUrl, icon: LinkedInMark },
  { label: 'Email', href: 'mailto:' + personal.email, icon: EmailMark },
]

export function SocialLinks({ contact = false }: { contact?: boolean }) {
  return channels.map(({ label, href, icon: Icon }) => (
    <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"
      className={contact ? 'social-btn' : 'social-link'} aria-label={label} data-hover>
      {contact ? <><span className="social-btn-icon"><Icon /></span>{label}</> : <Icon />}
    </a>
  ))
}
