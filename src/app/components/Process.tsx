const steps = [
  {
    number: "01",
    title: "Buyer inquiry",
    body: "Malls, retailers, or wholesale buyers share required produce categories, expected volumes, and delivery frequency.",
  },
  {
    number: "02",
    title: "Category alignment",
    body: "We match requirements across fruits and vegetables with current sourcing and plan the supply schedule.",
  },
  {
    number: "03",
    title: "Supply execution",
    body: "Orders are fulfilled on agreed timelines with consistent quality and professional business communication throughout.",
  },
  {
    number: "04",
    title: "Ongoing partnership",
    body: "Repeat supply relationships grow from domestic B2B operations toward larger and overseas procurement programs.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process" style={{ background: "rgba(255,255,255,0.45)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="eyebrow">How it works</span>
          <h2 className="section-title" style={{ maxWidth: "12ch", margin: "1rem auto 0" }}>
            Simple, clear B2B procurement flow.
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}