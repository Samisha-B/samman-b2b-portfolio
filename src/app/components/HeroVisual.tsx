export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Produce sourcing illustration with floating supply cards">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="floating-card card-a">
        <strong>Export ready</strong>
        <span>Pack discipline and buyer clarity</span>
      </div>
      <div className="floating-card card-b">
        <strong>Fresh arrival</strong>
        <span>Daily category movement visibility</span>
      </div>
      <div className="floating-card card-c">
        <strong>Bulk orders</strong>
        <span>Built for wholesale cadence</span>
      </div>

      <div className="floating-chip chip-a"><span>Sourced in India</span></div>
      <div className="floating-chip chip-b"><span>Retail chains</span></div>
      <div className="floating-chip chip-c"><span>Seasonal produce</span></div>

      <div className="produce-stage">
        <div className="produce-crate" aria-hidden="true">
          <div className="crate-edge" />
          <div className="crate-body" />

          <div className="produce-item tomato">
            <svg viewBox="0 0 96 96">
              <circle cx="48" cy="52" r="24" fill="#d84f3f" />
              <circle cx="39" cy="44" r="8" fill="rgba(255,255,255,0.14)" />
              <path d="M48 25c4-7 10-10 18-10" stroke="#4f7e43" strokeWidth="4" strokeLinecap="round" />
              <path d="M49 27l8 7-9 3-8-4 8-6Z" fill="#5f8c42" />
            </svg>
          </div>

          <div className="produce-item orange">
            <svg viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="25" fill="#ef9335" />
              <circle cx="39" cy="40" r="7" fill="rgba(255,255,255,0.15)" />
              <path d="M48 22c2-7 7-10 13-11" stroke="#5f8c42" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="59" cy="24" rx="8" ry="4.5" fill="#6b9449" transform="rotate(-18 59 24)" />
            </svg>
          </div>

          <div className="produce-item banana">
            <svg viewBox="0 0 150 110">
              <path d="M28 74c26 24 74 12 92-17 7-11 9-22 6-30-20 8-36 14-56 17-21 4-33 11-42 30Z" fill="#f2c94c" />
              <path d="M32 72c25 20 65 9 82-15" stroke="#d9a91b" strokeWidth="4" strokeLinecap="round" />
              <path d="M118 41c5-1 10-4 12-9" stroke="#6d5a25" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="produce-item chilli">
            <svg viewBox="0 0 120 96">
              <path d="M25 64c10 20 45 23 61 7 14-14 12-34-8-39-11-3-16 4-17 12-5-8-14-11-22-7-13 7-19 16-14 27Z" fill="#2a8c59" />
              <path d="M67 30c2-8 7-13 16-15" stroke="#5b7c3c" strokeWidth="4" strokeLinecap="round" />
              <path d="M38 69c13 12 36 13 49 0" stroke="rgba(255,255,255,0.16)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="produce-item onion">
            <svg viewBox="0 0 96 96">
              <path d="M48 23c3 7 11 12 11 27 0 15-10 26-23 26-12 0-21-10-21-24 0-17 14-22 20-29 5-6 8-10 13-14Z" fill="#cfb08d" />
              <path d="M48 23c2 11-4 20-4 31 0 12 6 17 10 22" stroke="#b18d69" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M49 21c2-8 7-13 14-15" stroke="#668f46" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="produce-item leafy">
            <svg viewBox="0 0 130 110">
              <path d="M65 89c-27 0-46-18-46-41 0-13 7-24 18-30 6 13 17 18 28 20-4-11-3-22 6-31 12 8 20 20 20 35 10-5 19-4 28 1-2 24-24 46-54 46Z" fill="#6d9a4b" />
              <path d="M66 84c0-18 4-36 14-52" stroke="#486734" strokeWidth="4" strokeLinecap="round" />
              <path d="M63 58c-10-5-18-12-24-21" stroke="#486734" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}