"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { initialContent } from "@/data/initialContent";

export default function AboutPage() {
  const [content, setContent] = useState(initialContent.about);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.about) {
          setContent(data.about);
        }
      })
      .catch((err) => console.log("Using initial content fallback:", err));
  }, []);

  const iconMap = {
    precision: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    manufacturing: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    innovation: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 15l-3-3h6l-3 3z"/>
      </svg>
    )
  };

  return (
    <main className="sec">
      {/* HEADER BANNER WITH CRISP DARK SUBTEXT */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px", fontWeight: "700" }}>
          {content.header.eyebrow}
        </span>
        <h1 className="sec-title" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: "800", color: "#0F172A", marginBottom: "16px" }}>
          {content.header.title}
        </h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#0F172A", fontWeight: "600", fontSize: "17px", maxWidth: "780px", lineHeight: "1.6" }}>
          {content.header.desc}
        </p>
      </div>

      {/* WHO WE ARE SECTION */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 70px auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px" }}>{content.whoWeAre.title}</span>
          <h2 style={{ fontSize: "28px", color: "#0F172A", fontWeight: "800" }}>
            {content.whoWeAre.subtitle}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "16px", lineHeight: "1.75", color: "#334155", fontWeight: "400" }}>
          {content.whoWeAre.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* WHY STRAHL — STUNNING 6-CARD GRID LAYOUT */}
      <div style={{ marginBottom: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="sec-eyebrow" style={{ color: "#38BDF8", letterSpacing: "3px" }}>{content.whyStrahlSection.eyebrow}</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#0F172A", fontWeight: "800" }}>
            {content.whyStrahlSection.title}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {content.whyCards.map((card) => (
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
                  {iconMap[card.icon] || iconMap.shield}
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

      {/* OUR MISSION & VISION SECTION */}
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
              <h3 className="vm-title">{content.visionMission.visionTitle}</h3>
            </div>
          </div>
          <p className="vm-body">
            {content.visionMission.visionDesc}
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
              <h3 className="vm-title">{content.visionMission.missionTitle}</h3>
            </div>
          </div>
          <p className="vm-body">
            {content.visionMission.missionDesc}
          </p>
        </div>
      </div>
    </main>
  );
}
