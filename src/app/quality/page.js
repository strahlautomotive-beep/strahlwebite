"use client";

import { useState, useEffect } from "react";
import { initialContent } from "@/data/initialContent";

export default function QualityPage() {
  const [content, setContent] = useState(initialContent.quality);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.quality) {
          setContent(data.quality);
        }
      })
      .catch((err) => console.log("Using initial quality content fallback:", err));
  }, []);

  return (
    <main className="sec">
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="sec-eyebrow">{content.header.eyebrow}</span>
        <h1 className="sec-title">{content.header.title}</h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#000000", fontWeight: "400" }}>
          {content.header.desc}
        </p>
      </div>

      {/* CORE QUALITY COMMITMENT */}
      <div className="qual-grid" style={{ marginBottom: "80px" }}>
        {content.standardsCards.map((std, i) => (
          <div key={i} className="qual-item">
            <div className="chk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M12 7v10M7 12h10"/>
              </svg>
            </div>
            <div>
              <h3 className="chk-t">{std.title}</h3>
              <p className="chk-s">{std.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILED TESTING PIPELINE */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", color: "var(--text-light)", marginBottom: "16px", fontFamily: "var(--fd)", fontWeight: "700" }}>Testing &amp; Inspection Protocol</h2>
        <p style={{ color: "#000000", fontSize: "15.5px", maxWidth: "600px", marginBottom: "30px", fontWeight: "400" }}>
          Before batch orders are dispatched to our distribution partners, samples are subjected to the following testing procedures at qualified testing centers.
        </p>

        <div className="testing-timeline">
          {content.inspectionProtocols.map((proto) => (
            <div key={proto.step} className="testing-card">
              <span className="testing-badge">Phase {proto.step}</span>
              <h3 className="testing-title">{proto.title}</h3>
              <p className="testing-desc">{proto.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS & PRODUCTION SOURCING */}
      <section className="sec-dark" style={{ margin: "40px 0 0 0", borderTop: "4px solid var(--accent-blue)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          <h2 style={{ fontSize: "28px", color: "var(--text-light)", fontFamily: "var(--fd)", fontWeight: "700" }}>Accredited Production Sourcing</h2>
          <p style={{ color: "#000000", fontSize: "15.5px", lineHeight: "1.8", fontWeight: "400" }}>
            STRAHL™ operates under a strict manufacturer selection standard. We collaborate exclusively with production facilities whose quality management systems have achieved <strong style={{ color: "var(--accent-blue)", fontWeight: "600" }}>IATF 16949:2016</strong> accreditation (the global technical specification for automotive supply chains) and <strong style={{ color: "var(--accent-blue)", fontWeight: "600" }}>ISO 9001:2015</strong>. This ensures that traceability, corrective actions, and continuous improvement are embedded in the production of every component.
          </p>
        </div>
      </section>
    </main>
  );
}
