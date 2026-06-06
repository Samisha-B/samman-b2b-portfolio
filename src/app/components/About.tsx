export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-split">
          <div className="section-left">
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title">
              A trusted B2B produce business built on dependability.
            </h2>
          </div>
          <div className="section-right">
            <p className="body-lead">
              Samman Enterprises is a dedicated B2B supplier of fresh fruits and
              vegetables, serving malls, retail chains, wholesalers, and
              institutional buyers who need consistent sourcing and professional
              supply relationships.
            </p>
            <p className="body-text" style={{ marginTop: "1rem" }}>
              We work directly with business procurement teams and buying managers
              to ensure predictable availability, category breadth, and the kind
              of communication that keeps commercial supply chains running smoothly.
              Our vision extends beyond domestic supply, and we are actively
              building the foundations to serve overseas business buyers.
            </p>
            <div className="about-chips">
              {[
                "Mall supply programs",
                "Retail chains",
                "Wholesale buyers",
                "Institutional procurement",
                "Export partnerships",
              ].map((tag) => (
                <span key={tag} className="about-chip">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-cards">
          {[
            { emoji: "🏬", title: "Mall & retail supply", body: "We serve organized retail buyers who need fruits and vegetables supplied reliably across store locations and procurement calendars." },
            { emoji: "📦", title: "Bulk order capability", body: "From mixed category orders to high-volume single-category supply, we handle bulk procurement with professional coordination." },
            { emoji: "🌍", title: "Overseas expansion", body: "Samman Enterprises is building toward trade partnerships with international buyers, importers, and distributors." },
          ].map((card) => (
            <div key={card.title} className="about-card">
              <div className="about-card-icon">{card.emoji}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}