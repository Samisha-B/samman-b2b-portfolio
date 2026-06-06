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
    <section className="section surface-band" id="process">
      <div className="container">
        <div className="process-layout">
          <div className="section-head narrow reveal">
            <span className="eyebrow">How it works</span>
            <h2>Simple, clear B2B procurement flow.</h2>
            <p>
              A professional sourcing relationship depends on clarity, consistency,
              and predictable operational communication.
            </p>
          </div>

          <div className="process-list">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="process-card reveal"
                style={{ ["--reveal-delay" as any]: `${index * 90}ms` }}
              >
                <div className="step">{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}