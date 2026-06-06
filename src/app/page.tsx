import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";

const fruits = ["Apples", "Bananas", "Mangoes", "Grapes", "Oranges", "Pomegranates", "Papayas", "Guavas", "Watermelon", "Pineapple", "Strawberries", "Pears"];
const veggies = ["Potatoes", "Onions", "Tomatoes", "Spinach", "Carrots", "Cauliflower", "Capsicum", "Broccoli", "Beans", "Peas", "Cabbage", "Bitter Gourd"];
const seasonal = ["Litchi", "Custard Apple", "Jamun", "Raw Mango", "Sweet Corn", "Ridge Gourd", "Drumstick", "Taro Root", "Amla", "Star Fruit", "Dragon Fruit", "Jackfruit"];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="hero" id="home">
          <div className="container hero-grid">

            <Reveal>
              <div>
                <div className="hero-badge">
                  <span className="eyebrow">B2B Produce Supplier</span>
                </div>
                <h1 className="hero-title">
                  Fresh produce for <span className="green">modern business buyers.</span>
                </h1>
                <p className="hero-body">
                  Samman Enterprises supplies fruits and vegetables to malls, retail chains,
                  wholesale buyers, and institutional buyers across India — with a clear roadmap
                  for overseas export partnerships.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-green">Request a Business Quote</a>
                  <a href="#products" className="btn btn-ghost">View Produce Range</a>
                </div>
                <div className="hero-chips">
                  <span className="hero-chip">Mall Supply</span>
                  <span className="hero-chip">Retail Chains</span>
                  <span className="hero-chip">Wholesale Buyers</span>
                  <span className="hero-chip">Export Ready</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay="d1">
              <div className="hero-panel">
                <div className="panel-quote">
                  "We supply the full range of fruits and vegetables for business buyers
                  who need dependable, bulk-ready produce sourcing."
                </div>

                <div className="panel-produce">
                  <div className="blob blob-red"/>
                  <div className="blob blob-orange"/>
                  <div className="blob blob-green"/>
                  <div className="blob blob-yellow"/>
                  <div className="blob blob-lime"/>
                  <div className="blob leaf-a"/>
                  <div className="blob leaf-b"/>
                  <div className="blob leaf-c"/>
                  <div className="basket"/>
                </div>

                <div className="panel-float-cards">
                  <div className="pfc">
                    <div className="pfc-dot"/>
                    <h4>Fresh Fruits</h4>
                    <p>12+ varieties sourced for business demand</p>
                  </div>
                  <div className="pfc">
                    <div className="pfc-dot"/>
                    <h4>Vegetables</h4>
                    <p>Daily staples and seasonal categories</p>
                  </div>
                  <div className="pfc">
                    <div className="pfc-dot"/>
                    <h4>Bulk Orders</h4>
                    <p>Repeat supply for retail and wholesale</p>
                  </div>
                  <div className="pfc">
                    <div className="pfc-dot"/>
                    <h4>Export Vision</h4>
                    <p>Actively building overseas supply capacity</p>
                  </div>
                </div>

                <div className="panel-footer">
                  <h4>Owner-led supply relationships</h4>
                  <p>Business buyers get direct, professional communication — not a middleman layer.</p>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section" id="about">
          <div className="container">
            <div className="about-split">
              <Reveal>
                <div>
                  <span className="eyebrow">About us</span>
                  <h2 className="display" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", marginTop: "1rem", maxWidth: "9ch" }}>
                    Built for business supply.
                  </h2>
                  <div className="about-tags" style={{ marginTop: "1.6rem" }}>
                    {["Mall procurement", "Retail chains", "Wholesale buyers", "Institutional supply", "Export partnerships"].map(t => (
                      <span key={t} className="about-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay="d1">
                <div>
                  <p className="lead">
                    Samman Enterprises is a dedicated B2B fruits and vegetables supplier
                    working with commercial procurement teams across India.
                  </p>
                  <p className="note" style={{ marginTop: "1rem" }}>
                    We focus on three things: a broad and dependable produce range, professional
                    supply communication, and consistent availability that lets buyers plan with
                    confidence. Our long-term goal is to expand supply relationships to international
                    buyers and trade partners, leveraging India&apos;s position as one of the world&apos;s
                    largest fruit and vegetable producers.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="about-cards">
              {[
                { icon: "🏬", title: "Mall & retail supply", body: "Built for organized modern trade buyers who need consistent sourcing across multiple store locations and purchasing cycles." },
                { icon: "📦", title: "Bulk order coordination", body: "From single-category volume orders to mixed produce loads, we handle bulk supply with professional coordination and clear timelines." },
                { icon: "🌍", title: "Overseas expansion", body: "We are actively preparing to serve international importers, distributors, and retail partners through direct export supply programs." },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i === 0 ? "" : i === 1 ? "d1" : "d2"}>
                  <div className="card about-card">
                    <div className="about-card-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="section products-bg" id="products">
          <div className="container">
            <Reveal>
              <div style={{ maxWidth: "680px" }}>
                <span className="eyebrow">Produce range</span>
                <h2 className="display" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", marginTop: "1rem" }}>
                  All fruits and vegetables, one partner.
                </h2>
                <p className="note" style={{ marginTop: "1rem" }}>
                  A broad category offering means buyers can consolidate procurement
                  rather than managing multiple vendors. We supply across all major
                  fruit and vegetable categories with seasonal additions throughout the year.
                </p>
              </div>
            </Reveal>

            <div className="products-grid">
              {[
                { emoji: "🍎", label: "Fresh Fruits", items: fruits },
                { emoji: "🥦", label: "Vegetables", items: veggies },
                { emoji: "🌿", label: "Seasonal & Specialty", items: seasonal },
              ].map((cat, i) => (
                <Reveal key={cat.label} delay={i === 0 ? "" : i === 1 ? "d1" : "d2"}>
                  <div className="card product-cat">
                    <div className="product-cat-head">
                      <span>{cat.emoji}</span>
                      <h3>{cat.label}</h3>
                    </div>
                    <ul className="product-list">
                      {cat.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="products-note">+ bulk & mixed orders available</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="products-cta">
                <p>Need a full category breakdown or custom supply quote?</p>
                <a href="#contact" className="btn btn-green">Request full produce catalogue</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section" id="process">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", maxWidth: "560px", marginInline: "auto" }}>
                <span className="eyebrow">How it works</span>
                <h2 className="display" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", marginTop: "1rem" }}>
                  Simple, dependable, B2B-first.
                </h2>
                <p className="note" style={{ marginTop: "0.9rem", maxWidth: "100%" }}>
                  Our process is built for procurement decision-makers who care about
                  reliability, communication, and long-term supply relationships.
                </p>
              </div>
            </Reveal>

            <div className="process-grid">
              {[
                { n: "01", title: "Buyer inquiry", body: "Malls, retailers, or wholesale buyers share their required produce categories, expected volumes, and supply frequency." },
                { n: "02", title: "Category match", body: "We align your requirements with our sourcing, confirm availability, and prepare a clear commercial proposal." },
                { n: "03", title: "Supply execution", body: "Orders are fulfilled on agreed timelines with consistent quality checks and direct business communication throughout." },
                { n: "04", title: "Long-term growth", body: "Relationships grow from domestic B2B supply into larger procurement programs and eventually overseas export partnerships." },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i === 0 ? "" : i === 1 ? "d1" : i === 2 ? "d2" : "d3"}>
                  <div className="card process-step">
                    <div className="step-num">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPORT ── */}
        <section className="section products-bg" id="export">
          <div className="container export-grid">
            <Reveal>
              <div>
                <span className="eyebrow">Export vision</span>
                <h2 className="display" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", marginTop: "1rem", maxWidth: "10ch" }}>
                  India-sourced. World-ready.
                </h2>
                <p className="lead" style={{ marginTop: "1.1rem" }}>
                  Samman Enterprises is building toward international trade. Our produce
                  range, sourcing depth, and professional supply mindset are designed to
                  scale beyond domestic buyers.
                </p>

                <div className="export-points">
                  {[
                    { icon: "🌏", title: "International buyers welcome", body: "We invite inquiries from importers, distributors, and overseas retail buyers looking for a dependable Indian produce partner." },
                    { icon: "📋", title: "Export documentation in progress", body: "We are preparing packaging standards, quality documentation, and the commercial processes needed for cross-border supply." },
                    { icon: "🤝", title: "Long-term trade partnerships", body: "We prioritize multi-year supply relationships over transactional orders — for domestic and overseas buyers alike." },
                  ].map((pt) => (
                    <div key={pt.title} className="export-pt">
                      <div className="export-pt-icon">{pt.icon}</div>
                      <div>
                        <h4>{pt.title}</h4>
                        <p>{pt.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "1.8rem" }}>
                  <a href="#contact" className="btn btn-green">Start an export conversation</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay="d1">
              <div className="export-panel">
                <div className="export-panel-inner">
                  <span style={{ fontSize: "2.2rem" }}>🌿</span>
                  <h3>Sourced in India.<br/>Supplied for the world.</h3>
                  <p>
                    India is one of the largest producers of fruits and vegetables globally.
                    Samman Enterprises positions itself at the intersection of this production
                    strength and the growing global demand for reliable, professionally supplied produce.
                  </p>
                  <div className="export-chips">
                    <span className="export-chip">🇮🇳 India HQ</span>
                    <span className="export-chip">🌍 Export ready</span>
                    <span className="export-chip">🤝 Partners welcome</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-bg" id="contact">
          <div className="container contact-grid">
            <Reveal>
              <div>
                <span className="eyebrow">Get in touch</span>
                <h2 className="display" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", marginTop: "1rem", maxWidth: "9ch" }}>
                  Start a supply conversation.
                </h2>
                <p className="note" style={{ marginTop: "1rem", maxWidth: "44ch" }}>
                  Whether you are a mall procurement head, wholesale buyer, retail chain manager,
                  or overseas importer — we want to hear from you.
                </p>
                <div className="contact-info-list">
                  {[
                    { icon: "✉️", label: "Business email", value: "business@sammanenterprises.com" },
                    { icon: "📞", label: "Phone / WhatsApp", value: "+91-XXXXXXXXXX" },
                    { icon: "📍", label: "Based in", value: "India — national & overseas supply" },
                  ].map((item) => (
                    <div key={item.label} className="cil-item">
                      <span>{item.icon}</span>
                      <div>
                        <div className="cil-label">{item.label}</div>
                        <div className="cil-value">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay="d1">
              <form className="contact-form">
                <p className="cf-title">Send a business inquiry</p>
                <div className="form-row">
                  <div className="fg">
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" placeholder="Full name" />
                  </div>
                  <div className="fg">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" placeholder="Business name" />
                  </div>
                </div>
                <div className="fg">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="fg">
                  <label htmlFor="buyer">Buyer type</label>
                  <select id="buyer" defaultValue="">
                    <option value="" disabled>Select buyer category</option>
                    <option>Mall / retail chain</option>
                    <option>Wholesale buyer</option>
                    <option>Institutional buyer</option>
                    <option>Overseas importer</option>
                    <option>Other business buyer</option>
                  </select>
                </div>
                <div className="fg">
                  <label htmlFor="msg">Produce requirements</label>
                  <textarea id="msg" rows={4} placeholder="Categories, volumes, delivery frequency..." />
                </div>
                <button type="button" className="btn btn-green" style={{ width: "100%" }}>
                  Send Business Inquiry
                </button>
              </form>
            </Reveal>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Samman Enterprises</span>
          <span style={{ color: "var(--muted)" }}>B2B Fruits & Vegetables Supply · India</span>
        </div>
      </footer>
    </>
  );
}