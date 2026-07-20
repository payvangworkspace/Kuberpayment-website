import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNav } from '../data/navigation'
import { useMenu } from '../context/MenuContext'
import { useAuthModal } from '../context/AuthModalContext'

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { openMenu } = useMenu()
  const { openSignIn } = useAuthModal()
  const location = useLocation()
  const isDark = location.pathname === '/'

  return (
    <header
      className={`header${isDark ? ' header--dark' : ''}`}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="header__inner">
        <div className="header__left">
          <button
            type="button"
            className="header__hamburger"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <Link to="/" className="header__logo">
            KuberPayment
          </Link>
        </div>

        <nav className="header__nav" aria-label="Main navigation">
          {mainNav.map((item) => {
            const isInsights = item.label === 'Our Insights'
            const featuredGroup =
              item.groups?.find((group) => group.title?.toLowerCase() === 'featured') ?? item.groups?.[0]
            const nonFeaturedGroups = (item.groups ?? []).filter((group) => group !== featuredGroup)
            const goDeeperItems = (nonFeaturedGroups.length ? nonFeaturedGroups : item.groups ?? []).flatMap(
              (group) => group.items,
            )

            return (
              <div
                key={item.label}
                className={`header__nav-item${openDropdown === item.label ? ' header__nav-item--open' : ''}`}
                onMouseEnter={() => item.hasSubmenu && setOpenDropdown(item.label)}
              >
                <Link to={item.path} className="header__nav-link">
                  {item.label}
                  {item.hasSubmenu && (
                    <svg className="header__chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
                {item.hasSubmenu && item.groups && openDropdown === item.label && (
                  <div className={`mega-menu${isInsights ? ' mega-menu--insights' : ''}`}>
                    <div className="mega-menu__inner">
                      {isInsights ? (
                        <div className="mega-menu__insights-grid">
                          <div className="mega-menu__insights-main">
                            <Link
                              to={item.path}
                              className="mega-menu__heading"
                              onClick={() => setOpenDropdown(null)}
                            >
                              Explore our Insights
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                              </svg>
                            </Link>
                            <h3 className="mega-menu__title">Go Deeper</h3>
                            <div className="mega-menu__flow mega-menu__flow--insights">
                              {goDeeperItems.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path}
                                  className="mega-menu__link"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                          {featuredGroup && (
                            <aside className="mega-menu__featured">
                              <h3 className="mega-menu__title">Featured</h3>
                              {featuredGroup.items.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.path}
                                  className="mega-menu__featured-link"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="mega-menu__featured-title">{child.label}</span>
                                  {child.description && (
                                    <span className="mega-menu__featured-desc">{child.description}</span>
                                  )}
                                </Link>
                              ))}
                            </aside>
                          )}
                        </div>
                      ) : (
                        <>
                          <Link
                            to={item.path}
                            className="mega-menu__heading"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </Link>

                          {item.groups.length > 1 ? (
                            <div className="mega-menu__columns">
                              {item.groups.map((group) => (
                                <div key={group.title ?? item.label} className="mega-menu__column">
                                  {group.title && <h3 className="mega-menu__title">{group.title}</h3>}
                                  {group.items.map((child) => (
                                    <Link
                                      key={child.label}
                                      to={child.path}
                                      className="mega-menu__link"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <>
                              {item.groups[0]?.title &&
                                item.groups[0].title.toLowerCase() !== item.label.toLowerCase() && (
                                  <h3 className="mega-menu__title">{item.groups[0].title}</h3>
                                )}
                              <div className="mega-menu__flow">
                                {item.groups[0]?.items.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.path}
                                    className="mega-menu__link"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="header__actions">
          <div className="header__auth">
            <button type="button" className="header__auth-link" onClick={openSignIn}>
              Sign In
            </button>
            <span className="header__auth-sep">|</span>
            <Link to="/register" className="header__auth-link">
              Register
            </Link>
          </div>
          <button type="button" className="header__search" aria-label="Search">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
