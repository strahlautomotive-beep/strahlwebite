import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#050B18", borderTop: "1px solid rgba(255, 255, 255, 0.08)", color: "#ffffff", paddingTop: "36px", paddingBottom: "18px" }}>
      <div className="footer-inner">
        {/* COLUMN 1: BRAND SUMMARY & FOLLOW STRAHL */}
        <div className="footer-col" style={{ gap: "10px" }}>
          <div className="footer-logo">
            <div style={{ marginBottom: "16px", display: "inline-flex" }}>
              <Image
                src="/images/footer white.png"
                alt="STRAHL Logo"
                width={100}
                height={100}
                style={{ height: "auto", width: "85px", objectFit: "contain" }}
              />
            </div>
          </div>

          <div>
            <p style={{ fontSize: "14px", fontWeight: "700", color: "#38BDF8", margin: "0" }}>
              “Where Engineering Meets Reliability”
            </p>
            <div style={{ width: "28px", height: "2px", background: "#38BDF8", margin: "6px 0 10px 0" }} />
            <p style={{ fontSize: "12.5px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.65)", margin: 0 }}>
              STRAHL™ represents a commitment to precision engineering, advanced technology, and uncompromising quality. Every solution is developed to meet the highest standards of performance, durability, and reliability.
            </p>
          </div>

          {/* MOVED: FOLLOW STRAHL SECTION INSIDE COLUMN 1 UNDER TEXT */}
          <div style={{ marginTop: "8px", paddingTop: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <h4 style={{ fontSize: "11.5px", textTransform: "uppercase", letterSpacing: "2px", color: "#38BDF8", margin: "0 0 4px 0", fontWeight: "700" }}>
              FOLLOW STRAHL
            </h4>
            <div style={{ width: "20px", height: "2px", background: "#38BDF8", marginBottom: "8px" }} />
            <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px 0" }}>
              Stay connected for new product launches, technical updates, and distributor news.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
              <a 
                href="/" 
                aria-label="Facebook" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#38BDF8", 
                  textDecoration: "none", 
                  fontSize: "11.5px", 
                  fontWeight: "500",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
                Facebook
              </a>

              <a 
                href="/" 
                aria-label="Instagram" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#38BDF8", 
                  textDecoration: "none", 
                  fontSize: "11.5px", 
                  fontWeight: "500",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>

              <a 
                href="/" 
                aria-label="LinkedIn" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#38BDF8", 
                  textDecoration: "none", 
                  fontSize: "11.5px", 
                  fontWeight: "500",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
              </a>

              <a 
                href="/" 
                aria-label="YouTube" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "5px", 
                  color: "#38BDF8", 
                  textDecoration: "none", 
                  fontSize: "11.5px", 
                  fontWeight: "500",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* COLUMN 2: NAVIGATION WITH SVG ICONS */}
        <div className="footer-col">
          <h4 style={{ margin: 0, fontSize: "12.5px", textTransform: "uppercase", letterSpacing: "2px", color: "#38BDF8", fontWeight: "700" }}>NAVIGATION</h4>
          <div style={{ width: "20px", height: "2px", background: "#38BDF8", margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Home
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/about" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="15" y1="6" x2="15.01" y2="6"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/><line x1="9" y1="14" x2="9.01" y2="14"/><line x1="15" y1="14" x2="15.01" y2="14"/></svg>
                About STRAHL
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/products" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                Products
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/quality" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                Quality
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/partner" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Dealership
              </Link>
            </li>
            <li style={{ padding: "6px 0" }}>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Enquiry
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: PRODUCT CATEGORIES WITH SVG ICONS */}
        <div className="footer-col">
          <h4 style={{ margin: 0, fontSize: "12.5px", textTransform: "uppercase", letterSpacing: "2px", color: "#38BDF8", fontWeight: "700" }}>PRODUCT CATEGORIES</h4>
          <div style={{ width: "20px", height: "2px", background: "#38BDF8", margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/products" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4"/><path d="M14 12h4"/></svg>
                Air Suspension System
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/products" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h3m12 0h3M12 3v3m0 12v3"/></svg>
                Suspension Components
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6px 0" }}>
              <Link href="/products" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="9.5" y1="9.5" x2="4.5" y2="4.5"/><line x1="14.5" y1="9.5" x2="19.5" y2="4.5"/></svg>
                Steering Components
              </Link>
            </li>
            <li style={{ padding: "6px 0" }}>
              <Link href="/products" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/></svg>
                Climate Control components
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: ENQUIRY SUPPORT */}
        <div className="footer-col">
          <h4 style={{ margin: 0, fontSize: "12.5px", textTransform: "uppercase", letterSpacing: "2px", color: "#38BDF8", fontWeight: "700" }}>ENQUIRY SUPPORT</h4>
          <div style={{ width: "20px", height: "2px", background: "#38BDF8", margin: "6px 0 12px 0" }} />
          <p style={{ fontSize: "12.5px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.65)", margin: "0 0 10px 0" }}>
            Contact our sales team for product enquiries, distributor opportunities, technical assistance, and catalogue requests.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", background: "rgba(56, 189, 248, 0.06)", padding: "8px 12px", borderRadius: "8px", border: "1px solid rgba(56, 189, 248, 0.15)" }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              Email: <a href="mailto:sales@strahl.com" style={{ color: "#38BDF8", fontWeight: "600", textDecoration: "none" }}>sales@strahl.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM LEGAL & TAGLINE BAR (MATCHING IMAGE 3) */}
      <div 
        className="footer-bottom-bar"
        style={{ 
          maxWidth: "1200px", 
          margin: "24px auto 0 auto", 
          paddingTop: "14px", 
          borderTop: "1px solid rgba(255, 255, 255, 0.08)", 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "12px",
          fontSize: "12.5px",
          color: "rgba(255, 255, 255, 0.6)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
          <span>Built on Precision. Driven by Innovation. Trusted Worldwide.</span>
        </div>
        <div>
          <span>© 2026 STRAHL™. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
