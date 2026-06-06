export default function Export() {
  return (
    <section className="section" id="export">
      <div className="container">
        <div className="export-layout">
          <div className="export-copy">
            <span className="eyebrow">Global vision</span>
            <h2 className="section-title">
              Built for domestic strength, ready for overseas growth.
            </h2>
            <p className="body-lead" style={{ marginTop: "1.1rem" }}>
              Samman Enterprises is actively building toward international trade
              partnerships. Our produce range, supply discipline, and commercial
              mindset are aligned for business expansion beyond India.
            </p>

            <div className="export-points">
              {[
                { emoji: "🌏", title: "International buyers welcome", body: "We invite inquiries from importers, distributors, and overseas retail chain buyers looking to source fruits and vegetables from India." },
                { emoji: "📋", title: "Documentation ready", body: "We are preparing the business documentation, packaging standards, and communication processes required for cross-border supply." },
                { emoji: "🤝", title: "Long-term partnerships", body: "We prioritize building multi-year supply relationships over one-time transactions, for both domestic and overseas buyers." },
              ].map((pt) => (
                <div key={pt.title} className="export-point">
                  <span style={{ fontSize: "1.5rem" }}>{pt.emoji}</span>
                  <div>
                    <h4>{pt.title}</h4>
                    <p>{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
              Start an export conversation
            </a>
          </div>

          <div className="export-panel">
            <div className="export-panel-inner">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌿</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", lineHeight: 1.05, marginBottom: "1rem", color: "#1f241f" }}>
                Sourced in India.<br />Supplied for the world.
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                India is one of the world's largest producers of fruits and
                vegetables. Samman Enterprises positions itself at the intersection
                of this production strength and the growing global demand for
                reliable produce supply.
              </p>
              <div className="export-flags">
                {["🇮🇳 India HQ", "🌍 Export ready", "🤝 Trade partners welcome"].map((f) => (
                  <span key={f} className="export-flag-chip">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}