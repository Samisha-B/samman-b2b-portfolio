export default function Contact() {
  return (
    <section className="section surface-band" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Ready to start a business supply conversation.</h2>
            <p>
              Whether you are a mall procurement head, a wholesale buyer, or an
              overseas importer, we want to hear from you. Tell us your category
              needs and we will respond with the right supply proposal.
            </p>

            <div className="contact-details">
              <div>
                <span>Business email</span>
                <a href="mailto:business@sammanenterprises.com">
                  business@sammanenterprises.com
                </a>
              </div>
              <div>
                <span>Phone / WhatsApp</span>
                <a href="tel:+910000000000">+91-XXXXXXXXXX</a>
              </div>
              <div>
                <span>Location</span>
                <p>India — open to national and overseas supply</p>
              </div>
            </div>
          </div>

          <div className="form-card reveal" style={{ ["--reveal-delay" as any]: "90ms" }}>
            <form className="inquiry-form">
              <div className="section-head" style={{ marginBottom: "0.5rem" }}>
                <span className="eyebrow">Business inquiry</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
                  Send a sourcing request
                </h3>
              </div>

              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input type="text" placeholder="Full name" />
                </label>

                <label>
                  <span>Company name</span>
                  <input type="text" placeholder="Business name" />
                </label>
              </div>

              <div className="form-row single">
                <label>
                  <span>Business email</span>
                  <input type="email" placeholder="you@company.com" />
                </label>
              </div>

              <div className="form-row single">
                <label>
                  <span>Buyer type</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select buyer category
                    </option>
                    <option>Mall / retail chain</option>
                    <option>Wholesale buyer</option>
                    <option>Institutional buyer</option>
                    <option>Overseas importer / distributor</option>
                    <option>Other business buyer</option>
                  </select>
                </label>
              </div>

              <div className="form-row single">
                <label>
                  <span>Produce requirements</span>
                  <textarea
                    rows={5}
                    placeholder="Describe categories, volumes, delivery frequency, or sourcing needs..."
                  />
                </label>
              </div>

              <button type="submit" className="btn btn-primary full">
                Send business inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}