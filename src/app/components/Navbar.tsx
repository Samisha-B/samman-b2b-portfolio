'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#range', label: 'Range' },
  { href: '#process', label: 'Process' },
  { href: '#export', label: 'Export' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
const [theme, setTheme] = useState<'light' | 'dark'>('light')

useEffect(() => {
  const saved = localStorage.getItem('theme')
  const initialTheme = saved === 'dark' || saved === 'light' ? saved : 'light'
  setTheme(initialTheme)
  document.documentElement.setAttribute('data-theme', initialTheme)
}, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 820) setIsOpen(false);
    };

    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header >

      <div className="container">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Samman home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 56 56">
                <path
                  d="M12 30c0-9 7-16 16-16 7 0 13 4 16 10 6 1 10 6 10 12 0 8-6 14-14 14H25c-8 0-13-6-13-13 0-3 0-5 0-7z"
                  fill="currentColor"
                  opacity="0.18"
                />
                <path
                  d="M18 30c0-8 6-14 14-14 6 0 11 3 14 9 5 1 8 5 8 10 0 7-5 11-12 11H28c-6 0-10-4-10-10v-6z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 17c1-5 4-8 8-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="brand-wordmark">
              <strong>Samman</strong>
              <span>B2B produce sourcing</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2" />
                  <path d="M12 21v2" />
                  <path d="M4.22 4.22l1.42 1.42" />
                  <path d="M18.36 18.36l1.42 1.42" />
                  <path d="M1 12h2" />
                  <path d="M21 12h2" />
                  <path d="M4.22 19.78l1.42-1.42" />
                  <path d="M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a className="btn btn-primary" href="#contact">
              Start inquiry
            </a>

            <button
              type="button"
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-panel ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a className="btn btn-primary" href="#contact" onClick={() => setIsOpen(false)}>
            Start inquiry
          </a>
        </div>
      </div>
    </header>
  );
}