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
      badge: "Vol. Ready",
    },
    {
      emoji: "🌿",
      title: "Seasonal Lines",
      meta: "Region-specific windows",
      badge: "Live Stock",
    },
  ];

  const pipelineSteps = [
    { label: "Farm",      done: true  },
    { label: "Graded",    done: true  },
    { label: "Packed",    done: true  },
    { label: "Dispatch",  done: false },
    { label: "Delivered", done: false },
  ];

  const summaryPoints = [
    "Farm Fresh — Harvested Daily",
    "Export Grade Quality Assured",
    "Bulk Supply, All India Reach",
  ];

  return (
    <div
      className="hero-visual"
      aria-label="Produce sourcing operations dashboard"
    >
      {/* Warm ambient glow */}
      <div className="hero-glow" aria-hidden="true" />
      {/* Film grain */}
      <div className="hero-noise" aria-hidden="true" />

      {/* ── Produce Cards 2×2 ── */}
      <div className="hv-produce-grid">
        {produceCards.map((card) => (
          <div key={card.title} className="hv-produce-card">
            {/* Top row: emoji left, badge right */}
            <div className="hv-card-top">
              <span className="hv-produce-emoji" aria-hidden="true" role="img">
                {card.emoji}
              </span>
              <span className="hv-produce-badge" aria-label={card.badge}>
                {card.badge}
              </span>
            </div>
            {/* Bottom: title + meta stacked */}
            <div className="hv-produce-body">
              <strong>{card.title}</strong>
              <span>{card.meta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Supply Pipeline ── */}
      <div
        className="hv-pipeline"
        role="list"
        aria-label="Supply chain pipeline"
      >
        {pipelineSteps.map((step, i) => (
          <div
            key={step.label}
            className={`hv-pipeline-step${step.done ? " done" : ""}`}
            role="listitem"
            aria-label={`${step.label}${step.done ? " — completed" : " — pending"}`}
          >
            {/* Connector line to next step */}
            {i < pipelineSteps.length - 1 && (
              <div
                className={`hv-step-line${step.done ? " done" : ""}`}
                aria-hidden="true"
              />
            )}

            {/* Step dot */}
            <div className="hv-step-dot" aria-hidden="true">
              {step.done ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M2 5l2.2 2.2L8 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true">
                  <circle cx="3" cy="3" r="2" fill="currentColor" opacity="0.30" />
                </svg>
              )}
            </div>

            <span className="hv-step-label">{step.label}</span>
          </div>
        ))}
      </div>

      {/* ── Summary Card ── */}
      <div className="hv-summary-card" aria-label="Supply highlights">
        {summaryPoints.map((point) => (
          <div key={point} className="hv-summary-row">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="8.5" cy="8.5" r="7.25" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M5.5 8.5l2.2 2.2 3.8-4"
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