export default function HeroVisual() {
  const produceItems = [
    { emoji: "🥭", name: "Alphonso Mango", meta: "Maharashtra origin", badge: "Export Grade", type: "green" },
    { emoji: "🍅", name: "Hybrid Tomato", meta: "Nashik sourced", badge: "Retail Ready", type: "gold" },
    { emoji: "🫑", name: "Capsicum", meta: "Pune belt", badge: "Export Grade", type: "green" },
    { emoji: "🧅", name: "Premium Onion", meta: "Lasalgaon grade", badge: "Bulk Ready", type: "gold" },
  ];

  const pipeline = [
    { icon: "🌾", label: "Farm", active: true },
    { icon: "✓", label: "Graded", active: true },
    { icon: "📦", label: "Packed", active: true },
    { icon: "🚚", label: "Dispatch", active: false },
    { icon: "🏪", label: "Delivered", active: false },
  ];

  return (
    <div className="hero-visual-wrap">
      <div className="hero-visual">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="showcase-header">
          <span className="showcase-label">Live Sourcing Dashboard</span>
          <span className="showcase-dot" aria-hidden="true" />
        </div>

        <div className="produce-card-grid">
          {produceItems.map((item) => (
            <div className="produce-card" key={item.name}>
              <span className="produce-card-emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="produce-card-info">
                <span className="produce-card-name">{item.name}</span>
                <span className="produce-card-meta">{item.meta}</span>
              </div>
              <span className={`produce-card-badge badge-${item.type}`}>
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="sourcing-pipeline" role="list" aria-label="Sourcing pipeline">
          {pipeline.map((step) => (
            <div className="pipeline-step" key={step.label} role="listitem">
              <div className={`pipeline-icon${step.active ? " active" : ""}`} aria-hidden="true">
                {step.active ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span style={{ fontSize: "0.75rem" }}>{step.icon}</span>
                )}
              </div>
              <span className="pipeline-label">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-mini-row">
        <div className="glass-card">
          <span className="glass-card-icon" aria-hidden="true">
            🌿
          </span>
          <strong>Fresh Produce</strong>
          <span>Daily movement · farm fresh</span>
        </div>

        <div className="glass-card">
          <span className="glass-card-icon" aria-hidden="true">
            📋
          </span>
          <strong>Quality Assured</strong>
          <span>Grade A · export standard</span>
        </div>
      </div>
    </div>
  );
}