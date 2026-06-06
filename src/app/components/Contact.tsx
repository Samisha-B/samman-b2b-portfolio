export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: "rgba(255,255,255,0.45)" }}>
      <div className="container">
        <div className="contact-layout">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Ready to start a business supply conversation.
            </h2>
            <p className="body-text" style={{ marginTop: "1rem", maxWidth: "52ch" }}>
              Whether you are a mall procurement head, a wholesale buyer, or an
              overseas importer, we want to hear from you. Tell us your category
              needs and we will respond with the right supply proposal.
            </p>

            <div className="contact-info-cards" style={{ marginTop: "2rem" }}>
              {[
                { label: "Business email", value: "business@sammanenterprises.com", icon: "✉️" },
                { label: "Phone / WhatsApp", value: "+91-XXXXXXXXXX", icon: "📞" },
                { label: "Location", value: "India — open to national & overseas supply", icon: "📍" },
              ].map((item) => (
                <div key={item.label} className="contact-info-card">
                  <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "0.3rem" }}>{item.label}</div>
                    <div style={{ fontWeight: 600, color: "#1f241f" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", marginBottom: "1.5rem", color: "#1f241f" }}>
              Send a business inquiry
            </h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" placeholder="Full name" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company name</label>
                <input id="company" type="text" placeholder="Business name" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Business email</label>
              <input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div className="form-group">
              <label htmlFor="buyertype">Buyer type</label>
              <select id="buyertype">
                <option value="">Select buyer category</option>
                <option>Mall / retail chain</option>
                <option>Wholesale buyer</option>
                <option>Institutional buyer</option>
                <option>Overseas importer / distributor</option>
                <option>Other business buyer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Produce requirements</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Describe the categories, volumes, or frequency you need..."
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send business inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}