"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const modeParam = searchParams.get("mode");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: modeParam === "partner" ? "partner" : "sourcing",
    productInterest: productParam || "none",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Save lead to admin database
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.error("Error submitting inquiry:", err);
    }

    // 2. Open user's email client pre-filled with enquiry details
    const subject = encodeURIComponent(`Commercial Enquiry: ${formData.inquiryType.toUpperCase()} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi STRAHL Team,\n\nI would like to submit a commercial enquiry.\n\nDetails:\n- Name: ${formData.name}\n- Company: ${formData.company}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Inquiry Type: ${formData.inquiryType}\n- Product Segment: ${formData.productInterest}\n\nMessage:\n${formData.message}\n\nThank you.`
    );
    window.location.href = `mailto:sales@strahl.in?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div className="contact-form-wrap">
      {submitted ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div className="chk" style={{ margin: "0 auto 20px auto", width: "48px", height: "48px" }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "10px" }}>Enquiry Received</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6" }}>
            Thank you for reaching out. A STRAHL™ commercial representative will review your request and get back to your business within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="contact-form-title">Send Commercial Enquiry</h3>
          
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Contact Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="e.g. John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                required 
                placeholder="e.g. Auto Parts Dist. Ltd"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="e.g. purchasing@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="e.g. +91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiryType">Inquiry Type</label>
              <select 
                id="inquiryType" 
                name="inquiryType" 
                value={formData.inquiryType} 
                onChange={handleChange}
              >
                <option value="sourcing">Volume Sourcing Quote</option>
                <option value="partner">Dealership / Distributor Application</option>
                <option value="fleet">Fleet &amp; Service Program</option>
                <option value="general">General Support / Custom Specs</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="productInterest">Product Segment</label>
              <select 
                id="productInterest" 
                name="productInterest" 
                value={formData.productInterest} 
                onChange={handleChange}
              >
                <option value="none">General Sourcing Portfolio</option>
                <option value="Air Suspension Strut">Air Suspension Strut</option>
                <option value="Air Suspension Compressor">Air Suspension Compressor</option>
                <option value="Valve Block">Valve Block</option>
                <option value="Upper Control Arm">Upper Control Arm</option>
                <option value="Lower Control Arm">Lower Control Arm</option>
                <option value="Stabilizer Link">Stabilizer Link</option>
                <option value="Tie Rod End">Tie Rod End</option>
                <option value="AC Compressor">AC Compressor</option>
                <option value="AC Condenser">AC Condenser</option>
                <option value="Cooling Coil / Evaporator">Cooling Coil / Evaporator</option>
                <option value="Expansion Valve">Expansion Valve</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Enquiry Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Detail your requirements, volume demands, or target vehicle coverage..."
              ></textarea>
            </div>
          </div>

          <button type="submit" className="form-submit-btn">
            ✉ Send Enquiry via Email
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="sec">
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="sec-eyebrow">Reach us</span>
        <h1 className="sec-title">Enquiry</h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#000000", fontWeight: "400" }}>
          Get in touch with our commercial desks regarding custom orders, technical specifications, and dealership accounts.
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* SUSPENSE BOUNDARY WRAPPED FORM */}
        <Suspense fallback={<div style={{ color: "var(--text-muted)" }}>Loading Inquiry Form...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </main>
  );
}
