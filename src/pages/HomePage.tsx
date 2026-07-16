import { Link } from 'react-router-dom'
import { ChatbotWidget } from '../components/ChatbotWidget'
import { ArticleCard } from '../components/ArticleCard'
import { insights } from '../data/insights'
import { industries } from '../data/industries'
import { capabilities } from '../data/capabilities'

const heroImages = {
  main: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  grid: [
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=200&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    'https://images.unsplash.com/photo-1491438590914-b09a426d2aae?w=200&q=80',
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&q=80',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=200&q=80',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200&q=80',
  ],
  featured: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
}

export function HomePage() {
  const latestInsights = insights.slice(0, 3)

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grid">
          <div className="home-hero__left">
            <div className="home-hero__headline-row">
              <h1 className="home-hero__title">What&apos;s your next brilliant move?</h1>
              <Link to="/insights" className="home-hero__arrow-btn" aria-label="Explore insights">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <p className="home-hero__subtitle">
              Game-changing work. People and AI powering growth. At McKinsey, we help you think bigger, build stronger, and expand opportunity for all.
            </p>
            <div className="home-hero__images">
              <div className="home-hero__main-image">
                <img src={heroImages.main} alt="" />
              </div>
              <div className="home-hero__image-grid">
                {heroImages.grid.map((src, i) => (
                  <div key={i} className="home-hero__grid-item">
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/insights/ai-enterprise-transformation" className="home-hero__featured">
            <div className="home-hero__featured-bg">
              <img src={heroImages.featured} alt="" />
            </div>
            <div className="home-hero__featured-content">
              <span className="home-hero__featured-tag">INTERACTIVE</span>
              <h2 className="home-hero__featured-title">
                What to read next: McKinsey&apos;s 2026 annual book recommendations
              </h2>
            </div>
          </Link>
        </div>
        <ChatbotWidget />
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>How we help clients</h2>
            <p>
              We partner with leaders in every industry and geography to solve their most important challenges and capture their greatest opportunities.
            </p>
          </div>
          <div className="help-grid">
            {capabilities.slice(0, 4).map((cap) => (
              <Link key={cap.slug} to={`/capabilities/${cap.slug}`} className="help-card">
                <h3>{cap.name}</h3>
                <p>{cap.tagline}</p>
                <span className="help-card__link">Learn more →</span>
              </Link>
            ))}
          </div>
          <Link to="/capabilities" className="section__link">
            View all capabilities
          </Link>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2>Our latest thinking</h2>
            <p>Insights on the issues that matter most in business and management.</p>
          </div>
          <div className="card-grid">
            {latestInsights.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <Link to="/insights" className="section__link">
            View all insights
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Industries we serve</h2>
            <p>Deep expertise across sectors to help you navigate complexity and drive performance.</p>
          </div>
          <div className="tile-grid">
            {industries.slice(0, 6).map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`} className="tile-card">
                <div className="tile-card__image">
                  <img src={industry.image} alt="" loading="lazy" />
                </div>
                <div className="tile-card__overlay">
                  <h3 className="tile-card__title">{industry.name}</h3>
                  <p className="tile-card__tagline">{industry.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/industries" className="section__link">
            View all industries
          </Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Join a firm where you can change the world</h2>
          <p>
            Work with exceptional people on the challenges that matter. Build skills, relationships, and a career with lasting impact.
          </p>
          <Link to="/careers" className="btn btn--white">
            Explore careers
          </Link>
        </div>
      </section>
    </>
  )
}
