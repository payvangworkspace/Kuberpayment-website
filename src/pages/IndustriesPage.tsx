import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { mainNav } from '../data/navigation'

const industriesNav = mainNav.find((n) => n.label === 'Industries')
const allIndustries = industriesNav?.groups?.flatMap((g) => g.items) ?? []

export function IndustriesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Industries' }]} />
          <h1>Industries</h1>
          <p>
            We bring deep functional and industry expertise to help organizations solve their most complex challenges and capture new opportunities.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="industries-list">
            {allIndustries.map((industry) => (
              <Link
                key={industry.label}
                to={industry.path}
                className="industries-list__item"
              >
                <h3>{industry.label}</h3>
                {industry.description && <p>{industry.description}</p>}
                <span className="industries-list__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
