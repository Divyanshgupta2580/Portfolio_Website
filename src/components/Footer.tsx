import { PORTFOLIO_DATA } from '../data/portfolioData'

export function Footer() {
  const { personal } = PORTFOLIO_DATA
  return (
    <footer className="site-footer">
      <div className="footer-copy">© {new Date().getFullYear()} {personal.name} · All rights reserved</div>
      <div className="footer-design"><span>{personal.name}</span> · {personal.footer.focus}</div>
    </footer>
  )
}
