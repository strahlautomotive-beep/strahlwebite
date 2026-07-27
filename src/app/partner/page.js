"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { initialContent } from "@/data/initialContent";

export default function PartnerPage() {
  const [content, setContent] = useState(initialContent.partner);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.partner) {
          setContent(data.partner);
        }
      })
      .catch((err) => console.log("Using initial partner fallback:", err));
  }, []);

  return (
    <main className="sec" style={{ position: "relative" }}>
      {/* Background Graphic Overlay & Floating Glow Elements */}
      <div className="partner-bg-overlay"></div>
      <div className="partner-glow-wrapper">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
      </div>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="sec-eyebrow">{content.header.eyebrow}</span>
        <h1 className="sec-title">{content.header.title}</h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#000000", fontWeight: "400" }}>
          {content.header.desc}
        </p>
      </div>

      {/* PARTNERSHIP PROFILES */}
      <div className="partner-grid" style={{ marginBottom: "80px" }}>
        <div className="partner-tag">
          <div className="partner-dot"></div>
          <span className="partner-text">Automotive Distributors</span>
        </div>
        <div className="partner-tag">
          <div className="partner-dot"></div>
          <span className="partner-text">Spare Parts Retailers</span>
        </div>
        <div className="partner-tag">
          <div className="partner-dot"></div>
          <span className="partner-text">Fleet System Operators</span>
        </div>
        <div className="partner-tag">
          <div className="partner-dot"></div>
          <span className="partner-text">Service Centers &amp; Bays</span>
        </div>
        <div className="partner-tag">
          <div className="partner-dot"></div>
          <span className="partner-text">Export Sourcing Partners</span>
        </div>
      </div>

      {/* PARTNER TIERS */}
      <div style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", color: "var(--text-light)", marginBottom: "16px", fontFamily: "var(--fd)", fontWeight: "700" }}>Partnership Opportunities</h2>
        <p style={{ color: "#000000", fontSize: "15.5px", maxWidth: "600px", marginBottom: "40px", fontWeight: "400" }}>
          Choose a partnership tier tailored to your logistics capability, customer base, and volume capacity.
        </p>

        <div className="partner-tiers">
          {content.tiers.map((tier) => (
            <div key={tier.tier} className="tier-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3 className="tier-title" style={{ margin: 0 }}>{tier.tier}</h3>
                {tier.tag && (
                  <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", padding: "4px 10px", borderRadius: "12px", background: "rgba(56, 189, 248, 0.12)", color: tier.tagColor || "#38BDF8", border: `1px solid ${tier.tagColor || "#38BDF8"}` }}>
                    {tier.tag}
                  </span>
                )}
              </div>
              <ul className="tier-benefits">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ONBOARDING PROCESS */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", color: "var(--text-light)", marginBottom: "16px", fontFamily: "var(--fd)", fontWeight: "700" }}>Dealer Onboarding Process</h2>
        <p style={{ color: "#000000", fontSize: "15.5px", maxWidth: "600px", marginBottom: "40px", fontWeight: "400" }}>
          Our application and setup process is designed to be streamlined, getting parts into your regional warehouses quickly.
        </p>

        <div className="partner-onboarding-grid">
          {content.onboardingSteps.map((step) => (
            <div key={step.step} className="testing-card">
              <span className="testing-badge">Step {step.step}</span>
              <h3 className="testing-title" style={{ marginTop: "10px" }}>{step.title}</h3>
              <p className="testing-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ENHANCED DARK CTA SECTION */}
      <section style={{ margin: "60px 0 0 0" }}>
        <div 
          style={{ 
            background: "linear-gradient(135deg, #0B1128 0%, #111A3E 100%)", 
            border: "1px solid rgba(37, 99, 235, 0.22)", 
            borderRadius: "28px", 
            padding: "60px 40px",
            boxShadow: "0 20px 50px rgba(11, 17, 40, 0.25)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px" }}>Commercial desk</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", color: "#fff", fontWeight: "700", fontFamily: "var(--fd)", marginBottom: "0" }}>
            Start Your Application Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15.5px", maxWidth: "680px", margin: "0 auto", fontWeight: "400", lineHeight: "1.7" }}>
            Ready to partner with STRAHL™? Contact our dealer support desk to submit your initial application details.
          </p>
          <div style={{ marginTop: "10px" }}>
            <Link href="/contact?mode=partner" className="btn-p">
              Apply For Dealership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
