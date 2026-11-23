import { sections } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { DesktopNav, MobileNav } from './components/Navigation'
import { InfoSection } from './sections/InfoSection'
import { JobsSection } from './sections/JobsSection'
import { SkillsSection } from './sections/SkillsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { JourneySection } from './sections/JourneySection'
import { ContactsSection } from './sections/ContactsSection'
import { ProfileRail } from './components/ProfileRail'

const sectionIds = sections.map((s) => s.id)

function App() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <DesktopNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <ProfileRail />
      <main className="mobile-main relative z-10 min-w-0 overflow-x-clip md:overflow-x-visible md:pt-16">
        <InfoSection />
        <JobsSection />
        <SkillsSection />
        <AchievementsSection />
        <JourneySection />
        <ContactsSection />
      </main>
    </>
  )
}

export default App
