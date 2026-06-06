const fruits = [
  "Apples", "Bananas", "Mangoes", "Grapes",
  "Oranges", "Pomegranates", "Papayas", "Guavas",
  "Watermelons", "Pineapples", "Strawberries", "Pears",
];

const vegetables = [
  "Potatoes", "Onions", "Tomatoes", "Spinach",
  "Carrots", "Cauliflower", "Capsicum", "Broccoli",
  "Beans", "Peas", "Cabbage", "Bitter Gourd",
];

const seasonal = [
  "Litchi", "Custard Apple", "Jamun", "Raw Mango",
  "Sweet Corn", "Ridge Gourd", "Drumstick", "Taro Root",
];

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="eyebrow">Our produce range</span>
          <h2 className="section-title" style={{ maxWidth: "12ch", margin: "1rem auto 0" }}>
            All fruits and vegetables for business buyers.
          </h2>
          <p className="body-text" style={{ maxWidth: "56ch", margin: "1rem auto 0" }}>
            A broad category offering lets buyers consolidate procurement with one
            reliable supply partner rather than managing multiple vendors.
          </p>
        </div>

        <div className="products-grid">
          {[
            { label: "Fresh Fruits", emoji: "🍎", color: "#fef3e2", border: "rgba(216,155,53,0.18)", items: fruits },
            { label: "Vegetables", emoji: "🥦", color: "#ecf4ec", border: "rgba(31,90,80,0.14)", items: vegetables },
            { label: "Seasonal Specials", emoji: "🌿", color: "#f3eef8", border: "rgba(31,36,31,0.1)", items: seasonal },
          ].map((cat) => (
            <div key={cat.label} className="product-card" style={{ background: cat.color, borderColor: cat.border }}>
              <div className="product-card-head">
                <span style={{ fontSize: "1.8rem" }}>{cat.emoji}</span>
                <h3>{cat.label}</h3>
              </div>
              <ul className="product-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="product-note">+bulk & mixed orders available</div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>Need a custom category breakdown or bulk order quote?</p>
          <a href="#contact" className="btn-primary">Request full produce catalogue</a>
        </div>
      </div>
    </section>
  );
}