import { useLayoutEffect, useRef, useState } from 'react'
import { About } from './components/About'
import { AboutModal } from './components/AboutModal'
import type { AboutModalType } from './components/AboutModal'
import { Achievements } from './components/Achievements'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { Opportunities } from './components/Opportunities'
import { ProjectModal } from './components/ProjectModal'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { PORTFOLIO_DATA } from './data/portfolioData'
import type { Project } from './data/portfolioData'
import { setupReferenceInteractions } from './referenceInteractions'

type Overlay =
  | { kind: 'about'; topic: AboutModalType }
  | { kind: 'project'; project: Project }
  | { kind: 'contact'; opportunity: string; details?: string }

export const App = () => {
  const [overlay, setOverlay] = useState<Overlay | null>(null)
  const trigger = useRef<HTMLElement | null>(null)
  const open = (next: Overlay) => {
    if (!overlay && document.activeElement instanceof HTMLElement) trigger.current = document.activeElement
    setOverlay(next)
  }
  const close = () => {
    setOverlay(null)
    requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }))
  }
  const openProject = (project: Project) => open({ kind: 'project', project })
  const openContact = (opportunity = PORTFOLIO_DATA.opportunityTypes[0], details = '') =>
    open({ kind: 'contact', opportunity, details })
  const showPortfolio = ['/', '/index.html'].includes(window.location.pathname)

  useLayoutEffect(() => {
    if (showPortfolio) return setupReferenceInteractions()
  }, [showPortfolio])

  if (!showPortfolio) return <NotFound />

  return (
    <>
      <div id="cursor" aria-hidden="true" />
      <Navbar />
      <Hero />
      <About onOpenDetails={(topic) => open({ kind: 'about', topic })} />
      <Journey />
      <Projects onOpenProject={openProject} />
      <Skills />
      <Achievements />
      <Capabilities />
      <Opportunities onSelectOpportunity={openContact} />
      <Contact />
      <Footer />
      <ScrollProgress />
      {overlay?.kind === 'about' &&
        <AboutModal topic={overlay.topic} onClose={close} onOpenProject={openProject} />}
      {overlay?.kind === 'project' &&
        <ProjectModal project={overlay.project} onClose={close} onRequestCode={(name) =>
          openContact(PORTFOLIO_DATA.codeRequestType, 'I would like to request access to the source code for ' + name + '.')
        } />}
      {overlay?.kind === 'contact' &&
        <ContactModal opportunity={overlay.opportunity} details={overlay.details} onClose={close} />}
    </>
  )
}

export default App
