// src/app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import HeroVisual from './components/HeroVisual';

const categories = [
  {
    title: "Fresh Vegetables",
    text: "Tomato, onion, chilli, okra, capsicum, potato, and region-specific seasonal lines packed for wholesale movement.",
    meta: "Packed for mandi, retail chain, and distribution partners",
  },
  {
    title: "Fruit Programs",
    text: "Banana, citrus, pomegranate, grapes, and mixed seasonal fruit aligned to quality windows and dispatch planning.",
    meta: "Short-lead procurement with consistent grading",
  },
  {
    title: "Bulk Sourcing",
    text: "Structured sourcing for hotels, processors, institutional kitchens, modern retail, and export-aligned buyers.",
    meta: "Volume-ready coordination with supply visibility",
  },
];

const process = [
  ["Requirement mapping",  "We define volume, cadence, pack format, destination, and quality expectations before dispatch planning begins."],
  ["Source coordination",  "Supply is aligned with growers and partner markets using seasonality, lot availability, and movement windows."],
  ["Grading and packing",  "Orders are screened, sorted, packed, and tagged for cleaner receiving and reliable downstream handling."],
  ["Dispatch and updates", "Buyers receive clear movement communication for procurement teams, depots, and receiving managers."],
];

const highlights = [
  { value: "8+",    label: "high-demand produce lines consistently sourced" },
  { value: "24–48h",label: "dispatch rhythm for local supply cycles" },
  { value: "B2B",   label: "built exclusively for procurement teams" },
];

const exportCards = [
  {
    eyebrow: "Supply confidence",
    title:   "Documentation-ready thinking",
    text:    "The operating approach is structured around consistency, paperwork discipline, dispatch clarity, and professional buyer communication.",
  },
  {
    eyebrow: "Market fit",
    title:   "Built for wholesalers and retail chains",
    text:    "The interface and inquiry flow are designed for serious buying conversations, not consumer-style browsing.",
  },
  {
    eyebrow: "Seasonality",
    title:   "Planned around live availability",
    text:    "Programs shift with season windows, destination needs, and packaging preferences without disrupting the supply hierarchy.",
  },
];

export default function Page() {
  const heroBgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero background
  useEffect(() => {
    const el = heroBgRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset  = scrollY * 0.28;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────── */}
        <section className="hero" id="top" aria-label="Hero">

          {/* Farm photograph — positioned via CSS var so it can be swapped */}
          <div
            ref={heroBgRef}
            className="hero-bg"
            style={{ '--hero-img': 'url(/hero-farm.png)' } as React.CSSProperties}
            aria-hidden="true"
          />

          {/* Grain texture */}
          <div className="hero-grain" aria-hidden="true" />

          <div className="container">
            <div className="hero-grid">

              {/* Left: editorial headline block */}
              <Reveal className="hero-copy">
                <div className="hero-eyebrow-wrap">
                  <span className="eyebrow">Premium produce sourcing</span>
                  <span className="hero-badge">India Origin</span>
                </div>

                <h1>
                  Fresh produce for{' '}
                  <em>serious B2B buyers.</em>
                </h1>

                <p className="hero-lead">
                  Samman helps wholesalers, retail chains, and procurement teams
                  source dependable fresh produce — with cleaner coordination,
                  polished communication, and business-ready supply presentation
                  direct from Maharashtra farms.
                </p>

                <div className="cta-group">
                  <a className="btn btn-primary" href="#contact">
                    Start a sourcing inquiry
                  </a>
                  <a className="btn btn-secondary" href="#range">
                    View produce range
                  </a>
                </div>

                <div className="hero-trust-strip">
                  <div className="trust-row">
                    <span className="trust-item">Structured for wholesale and recurring supply</span>
                    <span className="trust-item">Clear grading, packing and dispatch flow</span>
                    <span className="trust-item">Export-aligned documentation</span>
                  </div>
                </div>
              </Reveal>

              {/* Right: glass sourcing dashboard */}
              <Reveal className="hero-art" delay={0.1}>
                <HeroVisual />
              </Reveal>

            </div>
          </div>
        </section>

        {/* ── METRICS BAND ──────────────────────────── */}
        <section className="metrics-section surface-band">
          <div className="container intro-band">
            {highlights.map((item, idx) => (
              <Reveal className="metric-card" key={item.label} delay={idx * 0.08}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────── */}
        <section className="section" id="about">
          <div className="container split-grid">
            <Reveal>
              <span className="eyebrow">Supply positioning</span>
              <h2>Procurement-focused sourcing, presented with clarity.</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                This is not a consumer produce storefront. Samman is built for
                wholesale conversations — buyers who care about dependable
                sourcing, shipment timing, category visibility, and a supplier
                presence that feels trustworthy from the first screen.
              </p>
              <p style={{ marginTop: '1.25rem' }}>
                Every section is aligned to a professional B2B flow: from hero
                messaging and category framing through to the final inquiry form
                and contact details. Our vision extends to overseas partnerships.
              </p>

              <div className="panel-tags">
                {["Mall supply programs","Retail chains","Wholesale buyers","Institutional procurement","Export partnerships"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── RANGE ─────────────────────────────────── */}
        <section className="section surface-band" id="range">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Produce range</span>
              <h2>Fresh categories arranged for business buyers.</h2>
              <p>
                The range is framed like a professional sourcing portfolio —
                cleaner spacing, stronger alignment, and more useful labels
                for procurement teams.
              </p>
            </Reveal>

            <div className="category-grid">
              {categories.map((item, idx) => (
                <Reveal className="category-card" key={item.title} delay={idx * 0.09}>
                  <div className="category-icon" aria-hidden="true">
                    {idx === 0 && (
                      <svg viewBox="0 0 80 80">
                        <rect x="12" y="42" width="56" height="20" rx="10"/>
                        <path d="M26 42c0-9 6-16 14-16s14 7 14 16"/>
                        <path d="M40 26c0-8 6-12 13-12"/>
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg viewBox="0 0 80 80">
                        <circle cx="29" cy="42" r="13"/>
                        <circle cx="49" cy="37" r="15"/>
                        <path d="M49 20c3-5 8-7 13-7"/>
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg viewBox="0 0 80 80">
                        <path d="M18 53c0-10 10-18 22-18s22 8 22 18v7H18z"/>
                        <path d="M29 34c1-8 7-13 15-13"/>
                        <path d="M49 36c7-2 12 1 14 7"/>
                      </svg>
                    )}
                  </div>

                  <div className="category-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span>{item.meta}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────── */}
        <section className="section" id="process">
          <div className="container process-layout">
            <Reveal className="section-head narrow">
              <span className="eyebrow">How it works</span>
              <h2>Simple process, better delivery discipline.</h2>
              <p>
                A professional sourcing relationship depends on clarity,
                consistency, and predictable operational communication.
              </p>
            </Reveal>

            <div className="process-list">
              {process.map(([title, text], idx) => (
                <Reveal className="process-card" key={title} delay={idx * 0.08}>
                  <span className="step">0{idx + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPORT ────────────────────────────────── */}
        <section className="section surface-band" id="export">
          <div className="container export-grid">
            <Reveal className="primary-panel">
              <span className="eyebrow">Export vision</span>
              <h2>Built for domestic strength, ready for overseas growth.</h2>
              <p>
                Samman is actively building toward international trade
                partnerships. Our produce range, supply discipline, and
                commercial mindset are aligned for business expansion beyond India.
              </p>

              <div className="panel-tags">
                {["India HQ","Export ready","Trade partners welcome","Retail chains"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="cta-row">
                <a href="#contact" className="btn btn-secondary">
                  Start an export conversation
                </a>
              </div>
            </Reveal>

            <div className="export-stack">
              {exportCards.map((card, idx) => (
                <Reveal className="export-panel" key={card.title} delay={idx * 0.08}>
                  <span className="panel-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────── */}
        <section className="section" id="contact">
          <div className="container contact-grid">
            <Reveal className="contact-copy">
              <span className="eyebrow">Inquiry</span>
              <h2>Start a wholesale conversation.</h2>
              <p>
                Share required categories, volumes, delivery location, and
                buying cadence. We respond with a clear supply proposal.
              </p>

              <div className="contact-details">
                <div>
                  <span>Business email</span>
                  <a href="mailto:hello@sammanfresh.com">hello@sammanfresh.com</a>
                </div>
                <div>
                  <span>Phone / WhatsApp</span>
                  <a href="tel:+919999999999">+91 99999 99999</a>
                </div>
                <div>
                  <span>Location</span>
                  <p style={{ color: 'var(--color-text)' }}>Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="form-card" delay={0.1}>
              <form className="inquiry-form">
                <div className="form-row">
                  <label>
                    <span>Your name</span>
                    <input type="text" name="name" placeholder="Full name" />
                  </label>
                  <label>
                    <span>Company</span>
                    <input type="text" name="company" placeholder="Business name" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="+91" />
                  </label>
                </div>

                <div className="form-row single">
                  <label>
                    <span>Buyer type</span>
                    <select name="type" defaultValue="">
                      <option value="" disabled>Select buyer category</option>
                      <option>Mall / retail chain</option>
                      <option>Wholesale buyer</option>
                      <option>Institutional buyer</option>
                      <option>Overseas importer / distributor</option>
                      <option>Other business buyer</option>
                    </select>
                  </label>
                </div>

                <div className="form-row single">
                  <label>
                    <span>Requirement details</span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Share quantities, destination, frequency, and preferred packaging."
                    />
                  </label>
                </div>

                <button className="btn btn-primary full" type="submit">
                  Send business inquiry
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* ── CTA BAND ──────────────────────────────── */}
        <section className="section cta-section">
          <div className="container cta-panel">
            <Reveal>
              <span className="eyebrow">Business-ready</span>
              <h2 style={{ marginTop: '0.75rem' }}>
                Premium enough to build trust,<br />
                practical enough to convert inquiries.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">Request supply details</a>
                <a className="btn btn-secondary" href="#about">See positioning</a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <span className="brand-mark small" aria-hidden="true">
              <svg viewBox="0 0 56 56">
                <path d="M12 30c0-9 7-16 16-16 7 0 13 4 16 10 6 1 10 6 10 12 0 8-6 14-14 14H25c-8 0-13-6-13-13 0-3 0-5 0-7z" fill="currentColor" opacity="0.18"/>
                <path d="M18 30c0-8 6-14 14-14 6 0 11 3 14 9 5 1 8 5 8 10 0 7-5 11-12 11H28c-6 0-10-4-10-10v-6z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31 17c1-5 4-8 8-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Samman Enterprises</strong>
              <p className="footer-copy">Fresh produce sourcing for wholesale and modern trade, Nagpur · Maharashtra · India</p>
            </div>
          </div>

          <p className="footer-copy" style={{ color: 'var(--color-text-faint)', fontSize: 'var(--text-xs)' }}>
            © 2025 Samman Enterprises. B2B produce sourcing.
          </p>
        </div>
      </footer>
    </>
  );
}