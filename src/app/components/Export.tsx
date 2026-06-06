export default function ExportSection() {
  return (
    <section className="section" id="export">
      <div className="container">
        <div className="export-grid">
          <div className="primary-panel reveal">
            <span className="eyebrow">Global vision</span>
            <h2>Built for domestic strength, ready for overseas growth.</h2>
            <p>
              Samman Enterprises is actively building toward international trade
              partnerships. Our produce range, supply discipline, and commercial
              mindset are aligned for business expansion beyond India.
            </p>

            <div className="panel-tags">
              {["India HQ", "Export ready", "Trade partners welcome"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="cta-row end">
              <a href="#contact" className="btn btn-primary">
                Start an export conversation
              </a>
            </div>
          </div>

          <div className="export-stack">
            {[
              {
                title: "International buyers welcome",
                body: "We invite inquiries from importers, distributors, and overseas retail chain buyers looking to source fruits and vegetables from India.",
              },
              {
                title: "Documentation ready",
                body: "We are preparing business documentation, packaging standards, and communication processes required for cross-border supply.",
              },
              {
                title: "Long-term partnerships",
                body: "We prioritize multi-year supply relationships over one-time transactions for both domestic and overseas buyers.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="export-panel reveal"
                style={{ ["--reveal-delay" as any]: `${index * 100}ms` }}
              >
                <span className="panel-eyebrow">Trade readiness</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}