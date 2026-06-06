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
        <div className="section-head reveal">
          <span className="eyebrow">Our produce range</span>
          <h2>All fruits and vegetables for business buyers.</h2>
          <p>
            A broad category offering lets buyers consolidate procurement with one
            reliable supply partner rather than managing multiple vendors.
          </p>
        </div>

        <div className="category-grid">
          {[
            {
              label: "Fresh Fruits",
              items: fruits,
              icon: (
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M34 14c-3-6 2-11 9-12-1 6-4 10-9 12Z" />
                  <path d="M22 23c0-7 5-12 12-12s12 5 12 12c0 4-2 8-5 11-3 3-5 7-7 14-2-7-4-11-7-14-3-3-5-7-5-11Z" />
                  <path d="M25 19c4 1 8 1 13 0" />
                </svg>
              ),
            },
            {
              label: "Vegetables",
              items: vegetables,
              icon: (
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M28 22c-8 1-14 7-14 15 0 10 8 17 18 17 11 0 18-8 18-18 0-7-4-13-10-15" />
                  <path d="M32 22V10" />
                  <path d="M32 10c0-4 3-7 7-7" />
                  <path d="M26 30c3 2 9 2 12 0" />
                </svg>
              ),
            },
            {
              label: "Seasonal Specials",
              items: seasonal,
              icon: (
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M32 52c-9-7-14-15-14-24 0-8 6-14 14-14s14 6 14 14c0 9-5 17-14 24Z" />
                  <path d="M32 14c-1-5 2-10 8-12-1 6-4 10-8 12Z" />
                  <path d="M24 30c6-2 10-2 16 0" />
                </svg>
              ),
            },
          ].map((cat, index) => (
            <article
              key={cat.label}
              className="category-card reveal"
              style={{ ["--reveal-delay" as any]: `${index * 90}ms` }}
            >
              <div className="category-icon">{cat.icon}</div>
              <div className="category-copy">
                <span>{cat.label}</span>
                <h3>{cat.label}</h3>
                <p>Reliable category support for recurring business procurement.</p>
              </div>

              <div className="panel-tags">
                {cat.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}