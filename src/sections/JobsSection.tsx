import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionWrapper } from '../components/SectionWrapper'

export function JobsSection() {
  const [openRoles, setOpenRoles] = useState<Set<string>>(() => new Set())

  function toggle(roleId: string) {
    setOpenRoles((prev) => {
      const next = new Set(prev)
      if (next.has(roleId)) next.delete(roleId)
      else next.add(roleId)
      return next
    })
  }

  return (
    <SectionWrapper
      id="jobs"
      title="Jobs"
      subtitle="Newest first. Open a role to read the full duties."
    >
      <div className="job-list">
        {portfolio.jobs.map((role) => {
          const expanded = openRoles.has(role.id)
          const panelId = `job-panel-${role.id}`
          return (
            <article
              key={role.id}
              id={`job-${role.id}`}
              className={expanded ? 'card-glass job-card job-card--open' : 'card-glass job-card'}
            >
              <h3 className="job-card-org">
                <button
                  type="button"
                  className="job-card-toggle"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(role.id)}
                >
                  <span className="job-card-toggle-copy">
                    <span className="job-card-org-text">{role.organization}</span>
                    <span className="job-card-appointment">{role.appointment}</span>
                    <span className="job-card-meta">
                      {role.location}
                      <span aria-hidden="true"> · </span>
                      {role.dates}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    size={20}
                    className={expanded ? 'job-group-chevron job-group-chevron--open' : 'job-group-chevron'}
                  />
                </button>
              </h3>
              {expanded && (
                <div id={panelId} className="job-blocks">
                  {role.blocks.map((block) => {
                    const blockLabel = 'label' in block ? block.label : undefined
                    return (
                      <div key={blockLabel ?? `${role.id}-main`} className="job-block">
                        {blockLabel && <h4 className="job-block-label">{blockLabel}</h4>}
                        <div className="job-groups">
                          {block.groups.map((group) => (
                            <div key={group.label} className="job-group">
                              <h5 className="job-group-title">{group.label}</h5>
                              <ul className="job-duty-list">
                                {group.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
