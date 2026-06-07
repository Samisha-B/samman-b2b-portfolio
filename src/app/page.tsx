import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import HeroVisual from "./components/HeroVisual";

const categories = [
  {
    title: "Fresh vegetables",
    text: "Tomato, onion, chilli, okra, capsicum, potato, and region-specific seasonal lines packed for wholesale movement.",
    meta: "Packed for mandi, retail chain, and distribution partners",
  },
  {
    title: "Fruit programs",
    text: "Banana, citrus, pomegranate, grapes, and mixed seasonal fruit aligned to quality windows and dispatch planning.",
    meta: "Short-lead procurement with consistent grading",
  },
  {
    title: "Bulk sourcing",
    text: "Structured sourcing for hotels, processors, institutional kitchens, modern retail, and export-aligned buyers.",
    meta: "Volume-ready coordination with supply visibility",
  },
];

const process = [
  [
    "Requirement mapping",
    "We define volume, cadence, pack format, destination, and quality expectations before dispatch planning begins.",
  ],
  [
    "Source coordination",
    "Supply is aligned with growers and partner markets using seasonality, lot availability, and movement windows.",
  ],
  [
    "Grading and packing",
    "Orders are screened, sorted, packed, and tagged for cleaner receiving and more reliable downstream handling.",
  ],
  [
    "Dispatch and updates",
    "Buyers receive clear movement communication for procurement teams, depots, and receiving managers.",
  ],
];

const highlights = [
  { value: "8+", label: "high-demand produce lines" },
  { value: "24–48h", label: "dispatch rhythm for local cycles" },
  { value: "B2B", label: "built for procurement teams" },
];

const exportCards = [
  {
    eyebrow: "Supply confidence",
    title: "Documentation-ready thinking",
    text: "The operating approach is structured around consistency, paperwork discipline, dispatch clarity, and professional buyer communication.",
  },
  {
    eyebrow: "Market fit",
    title: "Built for wholesalers and retail chains",
    text: "The interface and inquiry flow are designed for serious buying conversations, not consumer-style browsing.",
  },
  {
    eyebrow: "Seasonality",
    title: "Planned around live availability",
    text: "Programs can shift with season windows, destination needs, and packaging preferences without disrupting the visual or content hierarchy.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <section className="hero section">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">Premium produce sourcing from India</span>
              <h1>
                Fresh fruits and vegetables for <span>serious B2B buyers</span>.
              </h1>
              <p className="hero-text">
                Samman helps wholesalers, retail chains, and procurement teams
                source dependable fresh produce with cleaner coordination,
                polished communication, and business-ready supply presentation.
              </p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Start an inquiry
                </a>
                <a className="btn btn-secondary" href="#range">
                  View produce range
                </a>
              </div>

              <ul className="hero-points" role="list">
                <li>Structured for wholesale and recurring supply</li>
                <li>Clear grading, packing, and dispatch flow</li>
                <li>Calm premium experience for procurement teams</li>
              </ul>
            </Reveal>

            <Reveal className="hero-art" delay={0.1}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        <section className="section surface-band">
          <div className="container intro-band">
            {highlights.map((item, idx) => (
              <Reveal
                className="metric-card"
                key={item.label}
                delay={idx * 0.08}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split-grid">
            <Reveal>
              <span className="eyebrow">Supply positioning</span>
              <h2>Procurement-focused sourcing, presented with clarity.</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                This is not a consumer produce storefront. The page is built for
                wholesale conversations: buyers who care about dependable
                sourcing, shipment timing, category visibility, and a supplier
                presence that feels trustworthy from the first screen.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Every section is aligned to a professional B2B flow, from hero
                messaging and category framing to the final inquiry form and
                contact details.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" id="range">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Produce range</span>
              <h2>Fresh categories arranged for business buyers.</h2>
              <p>
                The range is framed like a professional sourcing portfolio rather
                than a generic feature grid, with cleaner spacing, stronger
                alignment, and more useful labels.
              </p>
            </Reveal>

            <div className="category-grid">
              {categories.map((item, idx) => (
                <Reveal
                  className="category-card"
                  key={item.title}
                  delay={idx * 0.08}
                >
                  <div className="category-icon" aria-hidden="true">
                    {idx === 0 && (
                      <svg viewBox="0 0 80 80" role="img">
                        <rect x="12" y="42" width="56" height="20" rx="10" />
                        <path d="M26 42c0-9 6-16 14-16s14 7 14 16" />
                        <path d="M40 26c0-8 6-12 13-12" />
                      </svg>
                    )}

                    {idx === 1 && (
                      <svg viewBox="0 0 80 80" role="img">
                        <circle cx="29" cy="42" r="13" />
                        <circle cx="49" cy="37" r="15" />
                        <path d="M49 20c3-5 8-7 13-7" />
                      </svg>
                    )}

                    {idx === 2 && (
                      <svg viewBox="0 0 80 80" role="img">
                        <path d="M18 53c0-10 10-18 22-18s22 8 22 18v7H18z" />
                        <path d="M29 34c1-8 7-13 15-13" />
                        <path d="M49 36c7-2 12 1 14 7" />
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

        <section className="section process-section" id="process">
          <div className="container process-layout">
            <Reveal className="section-head narrow">
              <span className="eyebrow">How it works</span>
              <h2>Simple process, better delivery discipline.</h2>
              <p>
                The process section is kept functional and calm, with tighter
                card rhythm and clearer sequencing so the site feels
                operationally credible.
              </p>
            </Reveal>

            <div className="process-list">
              {process.map(([title, text], idx) => (
                <Reveal
                  className="process-card"
                  key={title}
                  delay={idx * 0.08}
                >
                  <span className="step">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="export">
          <div className="container export-grid">
            <Reveal className="export-panel primary-panel">
              <span className="eyebrow">Export vision</span>
              <h2>
                A sourcing brand that can scale into broader trade conversations.
              </h2>
              <p>
                The visual language is intentionally premium and restrained so
                the brand can speak to domestic wholesale buyers today and
                export-oriented relationships tomorrow.
              </p>

              <div className="panel-tags" role="list">
                <span>Sourced in India</span>
                <span>Retail chains</span>
                <span>Bulk orders</span>
                <span>Seasonal produce</span>
              </div>
            </Reveal>

            <div className="export-stack">
              {exportCards.map((card, idx) => (
                <Reveal
                  className="export-panel"
                  key={card.title}
                  delay={idx * 0.08}
                >
                  <span className="panel-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <Reveal className="contact-copy">
              <span className="eyebrow">Inquiry</span>
              <h2>Start a wholesale conversation.</h2>
              <p>
                Use the inquiry form to share required categories, volumes,
                location, and buying cadence. The form is styled as a clean
                business touchpoint, not a generic landing page form.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@sammanfresh.com">
                    hello@sammanfresh.com
                  </a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+919999999999">+91 99999 99999</a>
                </div>
                <div>
                  <span>Location</span>
                  <p>Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="form-card" delay={0.08}>
              <form className="inquiry-form">
                <div className="section-head" style={{ marginBottom: "0.5rem" }}>
                  <span className="eyebrow">Business inquiry</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
                    Send a sourcing request
                  </h3>
                </div>

                <div className="form-row">
                  <label>
                    <span>Your name</span>
                    <input type="text" placeholder="Full name" />
                  </label>

                  <label>
                    <span>Company name</span>
                    <input type="text" placeholder="Business name" />
                  </label>
                </div>

                <div className="form-row single">
                  <label>
                    <span>Business email</span>
                    <input type="email" placeholder="you@company.com" />
                  </label>
                </div>

                <div className="form-row single">
                  <label>
                    <span>Buyer type</span>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select buyer category
                      </option>
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
                    <span>Produce requirements</span>
                    <textarea
                      rows={5}
                      placeholder="Describe categories, volumes, delivery frequency, or sourcing needs..."
                    />
                  </label>
                </div>

                <button type="submit" className="btn btn-primary full">
                  Send business inquiry
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-panel">
            <Reveal>
              <span className="eyebrow">Business-ready presentation</span>
              <h2>
                Premium enough to build trust, practical enough to convert
                inquiries.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="cta-row end">
                <a className="btn btn-primary" href="#contact">
                  Request supply details
                </a>
                <a className="btn btn-secondary" href="#about">
                  See positioning
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <span className="brand-mark small" aria-hidden="true">
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

            <div>
              <strong>Samman</strong>
              <p>Fresh produce sourcing for wholesale and modern trade.</p>
            </div>
          </div>

          <p className="footer-copy">
            Built for fruits and vegetables sourcing, wholesale coordination, and premium business presentation.
          </p>
        </div>
      </footer>
    </>
  );
}