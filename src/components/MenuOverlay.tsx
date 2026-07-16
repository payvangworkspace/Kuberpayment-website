import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { mainNav, type NavItem } from '../data/navigation'
import { useMenu } from '../context/MenuContext'

export function MenuOverlay() {
  const { isOpen, closeMenu } = useMenu()
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)

  useEffect(() => {
    if (!isOpen) {
      setActiveItem(null)
    }
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="menu-overlay__header">
        {activeItem ? (
          <button
            type="button"
            className="menu-overlay__back"
            onClick={() => setActiveItem(null)}
            aria-label="Back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="menu-overlay__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
        <Link to="/" className="menu-overlay__logo" onClick={closeMenu}>
          McKinsey & Company
        </Link>
        <div className="menu-overlay__header-spacer" />
      </div>

      <div className="menu-overlay__body">
        {!activeItem ? (
          <nav className="menu-overlay__nav">
            {mainNav.map((item) =>
              item.hasSubmenu ? (
                <button
                  key={item.label}
                  type="button"
                  className="menu-overlay__item"
                  onClick={() => setActiveItem(item)}
                >
                  <span>{item.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="menu-overlay__item"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                </Link>
              ),
            )}
          </nav>
        ) : (
          <nav className="menu-overlay__subnav">
            <Link
              to={activeItem.path}
              className="menu-overlay__subnav-title"
              onClick={closeMenu}
            >
              {activeItem.label}
            </Link>
            {activeItem.groups?.map((group) => (
              <div key={group.title ?? 'default'} className="menu-overlay__group">
                {group.title && <h3 className="menu-overlay__group-title">{group.title}</h3>}
                {group.items.map((child) => (
                  <Link
                    key={child.label}
                    to={child.path}
                    className="menu-overlay__subitem"
                    onClick={closeMenu}
                  >
                    <span className="menu-overlay__subitem-label">{child.label}</span>
                    {child.description && (
                      <span className="menu-overlay__subitem-desc">{child.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>

      <div className="menu-overlay__footer">
        <button type="button" className="menu-overlay__signin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          Sign In
        </button>
      </div>
    </div>
  )
}
