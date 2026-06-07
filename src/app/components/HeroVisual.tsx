export default function HeroVisual() {
  const produceCards = [
    {
      emoji: "🍅",
      title: "Fresh Vegetables",
      meta: "Tomato · Onion · Chilli",
      badge: "In Season",
    },
    {
      emoji: "🍊",
      title: "Fruit Programs",
      meta: "Banana · Citrus · Grapes",
      badge: "Export Grade",
    },
    {
      emoji: "🥬",
      title: "Bulk Sourcing",
      meta: "Hotels · Retail · Processors",
      badge: "Volume Ready",
    },
    {
      emoji: "🌿",
      title: "Seasonal Lines",
      meta: "Region-specific windows",
      badge: "Live Stock",
    },
  ];

  const pipelineSteps = [
    { label: "Farm", done: true },
    { label: "Graded", done: true },
    { label: "Packed", done: true },
    { label: "Dispatch", done: false },
    { label: "Delivered", done: false },
  ];

  const summaryPoints = [
    "Farm Fresh Daily",
    "Export Grade Quality",
    "Bulk Supply Available",
  ];

  return (
    <div className="hero-visual" aria-label="Produce sourcing operations dashboard">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="hv-produce-grid">
        {produceCards.map((card) => (
          <div key={card.title} className="hv-produce-card">
            <span className="hv-produce-emoji" aria-hidden="true">
              {card.emoji}
            </span>
            <div className="hv-produce-body">
              <strong>{card.title}</strong>
              <span>{card.meta}</span>
            </div>
            <span className="hv-produce-badge">{card.badge}</span>
          </div>
        ))}
      </div>

      <div className="hv-pipeline" role="list" aria-label="Supply pipeline">
        {pipelineSteps.map((step, i) => (
          <div
            key={step.label}
            className={`hv-pipeline-step ${step.done ? "done" : ""}`}
            role="listitem"
          >
            {i < pipelineSteps.length - 1 && (
              <div
                className={`hv-step-line ${step.done ? "done" : ""}`}
                aria-hidden="true"
              />
            )}

            <div className="hv-step-dot" aria-hidden="true">
              {step.done ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M2 5l2.2 2.2L8 3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </div>

            <span className="hv-step-label">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="hv-summary-card" aria-label="Supply highlights">
        {summaryPoints.map((point) => (
          <div key={point} className="hv-summary-row">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M5 8l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}