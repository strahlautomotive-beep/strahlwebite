import Link from "next/link";

export const metadata = {
  title: "About STRAHL™ — Driven by Engineering Excellence",
  description: "Learn about STRAHL™, our commitment to engineering excellence, OE replacement solutions for European vehicles, and our core mission.",
};

export default function AboutPage() {
  const whyCards = [
    {
      num: "01",
      title: "Precision Engineering",
      desc: "Components engineered to deliver reliable fitment, durability, and consistent performance.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Advanced Manufacturing",
      desc: "Produced using modern manufacturing technologies and stringent process controls.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      num: "03",
      title: "OE Replacement Standards",
      desc: "Manufactured to stringent OE specifications using premium-grade materials and quality control.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Technical Innovation",
      desc: "Continuous improvement driven by evolving automotive technologies and engineering expertise.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      num: "05",
      title: "Quality Assurance",
      desc: "Manufactured under internationally recognized quality management systems (ISO/IATF standards).",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    },
    {
      num: "06",
      title: "Reliable Performance",
      desc: "Built to meet the demanding expectations of the global automotive aftermarket.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 15l-3-3h6l-3 3z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="sec">
      {/* HEADER BANNER WITH CRISP DARK SUBTEXT */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px", fontWeight: "700" }}>ABOUT THE BRAND</span>
        <h1 className="sec-title" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: "800", color: "#0F172A", marginBottom: "16px" }}>
          Driven by Engineering Excellence
        </h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#0F172A", fontWeight: "600", fontSize: "17px", maxWidth: "780px", lineHeight: "1.6" }}>
          STRAHL is driven by engineering excellence, advanced technologies, and an uncompromising commitment to quality.
        </p>
      </div>

      {/* WHO WE ARE SECTION */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 70px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px" }}>WHO WE ARE</span>
          <h2 style={{ fontSize: "28px", color: "#0F172A", fontWeight: "800" }}>
            Premium OE Replacement Solutions
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "16px", lineHeight: "1.75", color: "#334155", fontWeight: "400" }}>
          <p>
            STRAHL is a premium automotive aftermarket brand dedicated to delivering high-quality OE replacement solutions for European vehicles. Built on a foundation of precision engineering and advanced manufacturing technologies, we are committed to providing components that meet the highest standards of fitment, durability, and dependable performance.
          </p>
          <p>
            Every STRAHL product reflects our focus on technical innovation, rigorous quality assurance, and continuous improvement. By working with qualified manufacturing partners operating under internationally recognized quality management systems, we ensure every component is produced with consistency, precision, and reliability.
          </p>
          <p>
            Designed for the demands of modern automotive repair and maintenance, STRAHL supports distributors, professional workshops, and automotive specialists with products they can trust—combining engineering excellence with long-term value.
          </p>
        </div>
      </div>

      {/* WHY STRAHL — STUNNING 6-CARD GRID LAYOUT */}
      <div style={{ marginBottom: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px" }}>WHY STRAHL</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#0F172A", fontWeight: "800" }}>
            Six Reasons Distributors & Workshops Trust STRAHL
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {whyCards.map((card) => (
            <div 
              key={card.num}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                borderRadius: "20px",
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "24px", fontWeight: "800", color: "#38BDF8" }}>{card.num}</span>
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.1)", color: "#38BDF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {card.icon}
                </div>
              </div>
              <h3 style={{ fontSize: "18px", color: "#0F172A", fontWeight: "700", margin: "6px 0 0 0" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.65", margin: 0, fontWeight: "400" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR MISSION SECTION */}
      <div className="vm-grid" style={{ marginBottom: "40px" }}>
        <div className="vm-card vm-v">
          <div className="vm-header">
            <div className="vm-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div>
              <div className="vm-lbl">Our Vision</div>
              <h3 className="vm-title">Recognized. Trusted. Relied Upon.</h3>
            </div>
          </div>
          <p className="vm-body">
            To establish STRAHL™ as the leading benchmark for replacement components in the global automotive aftermarket, consistently supplying parts that represent the peak of durability and reliability, creating long-term value for automotive professionals and distribution networks.
          </p>
        </div>

        <div className="vm-card vm-m">
          <div className="vm-header">
            <div className="vm-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div>
              <div className="vm-lbl">Our Mission</div>
              <h3 className="vm-title">Expanding Global Capabilities</h3>
            </div>
          </div>
          <p className="vm-body">
            To continuously expand our capabilities, product portfolio, and technical expertise to meet the evolving needs of the global automotive aftermarket.
          </p>
        </div>
      </div>
    </main>
  );
}
