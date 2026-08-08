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
      {/* ── OUR STANDARDS HERO SECTION ── */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span className="sec-eyebrow">OUR STANDARDS</span>
        <h1 className="sec-title" style={{ marginBottom: "16px" }}>
          Quality Without Compromise
        </h1>
        <p className="sec-sub" style={{ margin: "0 auto", maxWidth: "680px", color: "#444", fontWeight: "400", fontSize: "15.5px", lineHeight: "1.7" }}>
          Every STRAHL component undergoes rigorous quality verification to ensure dependable fitment, consistent performance, and long-term reliability.
        </p>
      </div>

      {/* ── 4 STANDARDS CARDS ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "80px"
      }}>
        {[
          {
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            ),
            title: "Precision Fitment",
            desc: "Designed for accurate installation and dependable performance across compatible vehicle applications."
          },
          {
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            ),
            title: "Performance Verified",
            desc: "Evaluated to deliver reliable performance under demanding operating conditions."
          },
          {
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            ),
            title: "Quality Assurance",
            desc: "Each component is inspected through stringent quality processes before reaching the market."
          },
          {
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            ),
            title: "Dependable Reliability",
            desc: "Engineered and verified to support consistent performance throughout the product's service life."
          }
        ].map((card, i) => (
          <div key={i} style={{
            background: "#ffffff",
            border: "1.5px solid #dbeafe",
            borderTop: "3px solid #2563EB",
            borderRadius: "14px",
            padding: "28px 22px",
            boxShadow: "0 2px 16px rgba(37,99,235,0.07)"
          }}>
            <div style={{
              width: "48px", height: "48px",
              background: "#eff6ff",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "16px"
            }}>
              {card.icon}
            </div>
            <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", marginBottom: "8px", fontFamily: "var(--fd, sans-serif)" }}>
              {card.title}
            </h3>
            <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.65", margin: 0 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── MATERIAL VERIFICATION METHODS ── */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", color: "var(--text-light)", marginBottom: "16px", fontFamily: "var(--fd)", fontWeight: "700" }}>Quality Control & Testing</h2>
        <p style={{ color: "#000000", fontSize: "15.5px", maxWidth: "650px", marginBottom: "30px", fontWeight: "400" }}>
          Before batch orders are dispatched to our distribution partners, components are evaluated across key verification methods to ensure strict adherence to quality specifications.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {[
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
              title: "Material Verification",
              desc: "Chemical composition and material properties are verified where applicable to ensure consistency with defined specifications."
            },
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
              title: "Corrosion Resistance",
              desc: "Components intended for harsh operating environments are evaluated for corrosion resistance using recognized test methods."
            },
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
              title: "Fatigue Testing",
              desc: "Applicable suspension and steering components are assessed for durability under repeated loading conditions."
            },
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="20" height="6" rx="2"></rect><path d="M6 15v2M10 15v2M14 15v2M18 15v2"></path></svg>,
              title: "Dimensional Inspection",
              desc: "Critical dimensions are verified using precision measuring equipment to support accurate fitment."
            },
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 0 1 8 0"></path></svg>,
              title: "Elastomer Evaluation",
              desc: "Rubber components are evaluated for hardness, elasticity, and durability where applicable."
            },
            {
              icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>,
              title: "Leak Testing",
              desc: "Pressurized and sealed components undergo leak testing appropriate to their application."
            }
          ].map((item, index) => (
            <div key={index} style={{
              background: "#ffffff",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "#eff6ff",
                color: "#2563EB",
                borderRadius: "10px",
                marginBottom: "16px"
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a", marginBottom: "10px", fontFamily: "var(--fd, sans-serif)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS & PRODUCTION SOURCING */}
      <section className="sec-dark" style={{ margin: "40px 0 0 0", borderTop: "4px solid var(--accent-blue)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          <h2 style={{ fontSize: "28px", color: "var(--text-light)", fontFamily: "var(--fd)", fontWeight: "700" }}>Qualified Manufacturing Network</h2>
          <p style={{ color: "#000000", fontSize: "15.5px", lineHeight: "1.8", fontWeight: "400" }}>
            Our manufacturing partners operate certified quality management systems, including <strong style={{ color: "var(--accent-blue)", fontWeight: "600" }}>IATF 16949</strong> and <strong style={{ color: "var(--accent-blue)", fontWeight: "600" }}>ISO 9001</strong>, supporting consistent quality, traceability, and continual improvement throughout production.
          </p>
        </div>
      </section>
    </main>
  );
}
