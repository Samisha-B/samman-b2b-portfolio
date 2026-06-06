export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="split-grid reveal">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>
              A trusted B2B produce business built on dependability.
            </h2>
          </div>

          <div>
            <p>
              Samman Enterprises is a dedicated B2B supplier of fresh fruits and
              vegetables, serving malls, retail chains, wholesalers, and
              institutional buyers who need consistent sourcing and professional
              supply relationships.
            </p>

            <p style={{ marginTop: "1rem" }}>
              We work directly with business procurement teams and buying managers
              to ensure predictable availability, category breadth, and the kind
              of communication that keeps commercial supply chains running smoothly.
              Our vision extends beyond domestic supply, and we are actively
              building the foundations to serve overseas business buyers.
            </p>

            <div className="panel-tags" style={{ marginTop: "1.5rem" }}>
              {[
                "Mall supply programs",
                "Retail chains",
                "Wholesale buyers",
                "Institutional procurement",
                "Export partnerships",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="intro-band reveal" style={{ marginTop: "2rem", ["--reveal-delay" as any]: "80ms" }}>
          {[
            {
              value: "Retail-ready",
              label: "Structured supply support for malls and organized chains",
            },
            {
              value: "Bulk capable",
              label: "Mixed and high-volume category coordination for business buyers",
            },
            {
              value: "Export vision",
              label: "Building long-term overseas trade readiness and partnerships",
            },
          ].map((item) => (
            <article key={item.value} className="metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}