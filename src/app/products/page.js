"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Detailed B2B Product Catalog
const PRODUCTS_DATA = [
  {
    id: "air-suspension-strut",
    name: "Airmatic Shock Absorber",
    cat: "Air Suspension System",
    image: "/images/product_1.jpg",
    isBestSeller: true,
    description: "Designed to restore original ride comfort and suspension performance, the STRAHL Airmatic Shock Absorber integrates an advanced air spring with precision damping technology. Built as a direct OEM replacement, it delivers exceptional stability, automatic ride height adjustment, and long-lasting durability.",
    usps: [
      "Custom-cured reinforced multi-ply rubber sleeve for maximum flexing longevity.",
      "Individually dyno-tested to ensure match with OEM damping curves.",
      "High-strength steel crimping rings ensure leak-free seal up to 2.0 MPa.",
      "Fully compatible with original electronic damping valves."
    ],
    specs: {
      "Placement": "Front Left / Front Right",
      "Material": "Reinforced Rubber & Steel Alloy",
      "Fitment Type": "Direct OEM Replacement",
      "Operating Pressure": "Up to 2.0 MPa",
      "Certification": "IATF 16949 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "air-suspension-compressor",
    name: "Airmatic Compressor",
    cat: "Air Suspension System",
    image: "/images/product_2.jpg",
    description: "Reliable air pressure is essential for the performance of any air suspension system. STRAHL Airmatic Compressors are precision-engineered to provide rapid pressure build-up, quiet operation, and dependable performance, ensuring consistent vehicle ride height and comfort.",
    usps: [
      "Heavy-duty internal motor with integrated thermal overload protection.",
      "Precision piston ring compound prevents premature wear and pressure drop.",
      "Integrated air dryer ensures moisture-free delivery to air bellows.",
      "Pre-assembled plug-and-play wiring harness and brackets included."
    ],
    specs: {
      "Motor Type": "12V DC heavy-duty motor",
      "Max Pressure": "1.8 MPa",
      "Housing Material": "Die-cast Aluminum",
      "Cooling": "Integrated heatsink",
      "Certification": "ISO 9001 / IATF Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "valve-block",
    name: "Airmatic Valve Block",
    cat: "Air Suspension System",
    image: "/images/product_3.jpg",
    description: "Precise airflow management is critical to the efficiency of electronically controlled air suspension systems. The STRAHL Airmatic Valve Block accurately distributes compressed air between the compressor, reservoir, and air springs, ensuring smooth height adjustment and dependable system operation.",
    usps: [
      "High-precision solenoid valves prevent system leakages and vehicle sag.",
      "Corrosion-resistant anodized aluminum block body.",
      "Heavy-duty internal O-rings prevent cross-port air migration.",
      "Direct plug match with factory vehicle leveling systems."
    ],
    specs: {
      "Port Count": "6-Port Air Line Connections",
      "Solenoid Voltage": "12V DC Solenoids",
      "Block Material": "Anodized Aluminum Alloy",
      "Max Temp Limit": "-40°C to +120°C",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "upper-control-arm",
    name: "Upper Control Arm",
    cat: "Suspension Components",
    image: "/images/product_4.jpg",
    description: "Accurate wheel alignment and suspension articulation depend on a high-quality upper control arm. Manufactured to OEM specifications, STRAHL Upper Control Arms provide excellent durability, smooth handling, and enhanced steering precision.",
    usps: [
      "Forged steel or aluminum body matches factory structural stiffness.",
      "Natural rubber bushings isolate Noise, Vibration, and Harshness (NVH).",
      "Premium ball joint with induction-hardened ball pins for smooth articulation.",
      "Durable anti-corrosion black electrophoretic coating."
    ],
    specs: {
      "Position": "Front Upper Left / Right",
      "Body Material": "Forged Carbon Steel / Aluminum",
      "Bushing Material": "High-density Natural Rubber",
      "Salt Spray Rating": "240 hours minimum",
      "Certification": "IATF 16949 Certified",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "lower-control-arm",
    name: "Lower Control Arm",
    cat: "Suspension Components",
    image: "/images/product_5.jpg",
    description: "Engineered for strength and precision, the STRAHL Lower Control Arm maintains correct suspension geometry while improving steering stability and ride comfort. Premium bushings and precision ball joints help reduce vibration and ensure reliable performance over extended service life.",
    usps: [
      "Heavy-wall structural steel tubing or forged alloy composition.",
      "Hydraulic bushings pre-installed for superior driving comfort.",
      "Ball joint boot made of high-grade chloroprene rubber for grease containment.",
      "High fatigue strength under rough road conditions."
    ],
    specs: {
      "Position": "Front Lower Left / Right",
      "Body Material": "Structural Alloy Steel",
      "Bushing Type": "Hydraulic / Solid Rubber",
      "Boot Material": "Chloroprene Rubber",
      "Certification": "IATF 16949 Certified",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "stabilizer-link",
    name: "Stabilizer Link",
    cat: "Suspension Components",
    image: "/images/product_6.jpg",
    description: "Vehicle stability during cornering relies on the effective transfer of force between the suspension and anti-roll bar. STRAHL Stabilizer Links are engineered with high-strength materials and precision ball joints to reduce body roll while enhancing handling and driving confidence.",
    usps: [
      "Optimized rod diameter resists high torsional sway forces.",
      "Spherical joint inserts designed with low-friction POM bearings.",
      "Dual dust-seals keep road grime and salt spray out of ball socket.",
      "Threaded studs match original clamping specifications."
    ],
    specs: {
      "Position": "Front / Rear Sway Bar Link",
      "Rod Material": "Reinforced Steel Rod",
      "Joint Bearing": "Low-friction POM",
      "Thread Type": "Metric Coarse Thread",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "tie-rod-end",
    name: "Tie Rod End",
    cat: "Steering Components",
    image: "/images/product_7.jpg",
    description: "Smooth and responsive steering begins with precise steering linkage components. STRAHL Tie Rod Ends are manufactured to deliver accurate steering input, improved directional stability, and long-lasting reliability under demanding driving conditions.",
    usps: [
      "Induction-hardened ball pins provide smooth steering and long wear life.",
      "Internal high-performance synthetic grease reduces friction.",
      "Coated threads resist seizing, allowing ease of wheel alignment.",
      "Thick housing walls prevent steering play under impact loads."
    ],
    specs: {
      "Connection Type": "Threaded steering joint",
      "Housing Material": "Forged Carbon Steel",
      "Ball Stud Grade": "40Cr Steel alloy",
      "Grease Type": "Synthetic chassis lubricant",
      "Certification": "IATF 16949 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "steering-rack-pinion",
    name: "Steering Rack",
    cat: "Steering Components",
    image: "/images/product_14.png",
    description: "Built for smooth articulation and dependable steering performance, STRAHL Steering Rack units maintain accurate suspension movement while minimising wear. Precision-machined components and durable sealing ensure extended service life and reliable operation.",
    usps: [
      "Precision-machined helical pinion gear provides smooth, responsive steering.",
      "Premium internal seals prevent hydraulic power steering fluid leakage.",
      "Hardened steel guide bar and rack teeth resist heavy road impact.",
      "Pre-installed premium rubber bellows protect internal rack gears."
    ],
    specs: {
      "Steering Type": "Hydraulic Power Steering Rack",
      "Housing Material": "Die-cast Aluminum Alloy",
      "Input Shaft Style": "Splined Shaft",
      "Rack Stroke": "145 mm total travel",
      "Certification": "IATF 16949 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "ac-compressor",
    name: "AC Compressor",
    cat: "Climate Control Components",
    image: "/images/product_8.jpg",
    description: "Efficient refrigerant compression is essential for consistent cabin comfort. STRAHL AC Compressors are manufactured with precision-engineered internal components to deliver quiet operation, excellent cooling performance, and reliable durability across varying operating conditions.",
    usps: [
      "Precision swashplate design delivers variable displacement smooth cooling.",
      "Built-in pressure relief valve and thermal control switches.",
      "Pre-filled with correct volume of synthetic PAG oil.",
      "High-grade electromagnetic clutch coil prevents slipping."
    ],
    specs: {
      "Displacement": "Variable / Fixed Displacement",
      "Refrigerant Type": "R134a / R1234yf",
      "Oil Type": "PAG 46 / PAG 100",
      "Clutch Type": "Electromagnetic Multi-groove",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "ac-condenser",
    name: "AC Condenser",
    cat: "Climate Control Components",
    image: "/images/product_9.jpg",
    description: "Optimized heat dissipation is the key to efficient air conditioning performance. STRAHL AC Condensers are constructed from corrosion-resistant aluminum and engineered to maximize thermal efficiency, ensuring dependable cooling even under demanding conditions.",
    usps: [
      "Micro-channel aluminum tubes maximize heat rejection rates.",
      "Integrated receiver drier cartridge prevents moisture damage.",
      "Fins feature salt-spray resistant anti-corrosion coating.",
      "Mounting brackets align perfectly with vehicle radiator shroud."
    ],
    specs: {
      "Material": "Full Aluminum Brazed Core",
      "Core Thickness": "16mm / 12mm optimized",
      "Receiver Drier": "Integrated cartridge",
      "Leak Tested": "100% helium leak test",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "cooling-coil-evaporator",
    name: "Cooling Coil / Evaporator",
    cat: "Climate Control Components",
    image: "/images/product_10.jpg",
    description: "Effective cabin cooling begins with efficient heat absorption. STRAHL Evaporators feature precision-engineered aluminum cores that maximize thermal efficiency while providing rapid cooling and improved humidity control for enhanced passenger comfort.",
    usps: [
      "Highly efficient plate-fin core provides rapid cabin cooling.",
      "Anti-bacterial coating prevents mold formation and odor.",
      "Leak tested to strict high-pressure standards.",
      "Engineered for direct fit in standard HVAC cases."
    ],
    specs: {
      "Core Style": "Plate-Fin Aluminum Evaporator",
      "Core Depth": "38mm / 44mm direct fit",
      "Coating": "Hydrophilic and anti-microbial",
      "Inlet/Outlet": "O-ring block connections",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
  {
    id: "expansion-valve",
    name: "Expansion Valve",
    cat: "Climate Control Components",
    image: "/images/product_11.jpg",
    description: "Accurate refrigerant flow control plays a vital role in air conditioning efficiency. STRAHL Expansion Valves precisely regulate refrigerant entering the evaporator, maintaining optimal pressure and temperature for reliable and consistent cooling performance.",
    usps: [
      "Precision thermal charge element guarantees accurate flow control.",
      "Spring-loaded internal metering valve maintains steady superheat levels.",
      "Solid brass or aluminum body resists high operating pressures.",
      "High reliability prevents evaporator freezing."
    ],
    specs: {
      "Valve Style": "Block Type Expansion Valve",
      "Material": "High-grade Extruded Aluminum",
      "Superheat Setting": "OEM calibrated",
      "Fitting Type": "O-ring flange mounting",
      "Certification": "ISO 9001 Sourced",
      "Warranty": "1 Year B2B Sourcing"
    }
  },
];

// Reusable Modal Component using HTMLDialogElement & Fallbacks
function ProductDetailModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: ""
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      // Open dialog modal natively
      dialog.showModal();

      // Fallback for click outside the dialog content box (light dismiss)
      const handleLightDismiss = (event) => {
        if (event.target !== dialog) return;

        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );

        if (!isDialogContent) {
          dialog.close();
        }
      };

      dialog.addEventListener("click", handleLightDismiss);

      // Listen for the native close event (e.g., when Esc is pressed)
      const handleNativeClose = () => {
        onClose();
      };
      dialog.addEventListener("close", handleNativeClose);

      return () => {
        dialog.removeEventListener("click", handleLightDismiss);
        dialog.removeEventListener("close", handleNativeClose);
      };
    }
  }, [product, onClose]);

  const handleClose = () => {
    dialogRef.current?.close();
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const { name, phone, company, email } = formData;

    // 1. Save to admin leads panel
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        country: "",
        message: `Product Enquiry: ${product.name}`,
      }),
    }).catch(() => {});

    // 2. Open user's email client with product name pre-filled
    const subject = encodeURIComponent(`Product Enquiry: ${product.name}`);
    const body = encodeURIComponent(
      `Hi STRAHL Team,\n\nI am enquiring about the ${product.name}.\n\nMy contact details:\n- Name: ${name}\n- Phone: ${phone}\n- Company: ${company}\n- Email: ${email}\n\nPlease send me more information.\n\nThank you.`
    );
    window.location.href = `mailto:info@strahl.com?subject=${subject}&body=${body}`;
    handleClose();
  };

  return (
    <dialog ref={dialogRef} className="product-modal" closedby="any" aria-labelledby="dialogTitle">
      <div className="modal-header">
        <h2 id="dialogTitle" className="modal-title">
          {showForm ? `Enquire: ${product.name}` : product.name}
        </h2>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close details">
          <svg viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="modal-body">
        {showForm ? (
          /* ── ENQUIRY FORM ── */
          <form onSubmit={handleEnquirySubmit} className="modal-form">
            <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "0 0 20px 0", lineHeight: "1.65" }}>
              Enquiring about <strong style={{ color: "var(--accent-blue)" }}>{product.name}</strong>. Fill in your details — your email will open pre-filled and your enquiry will be saved for our team.
            </p>

            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "Your Full Name" },
              { label: "Email Address", key: "email", type: "email", placeholder: "your.email@company.com" },
              { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
              { label: "Company Name", key: "company", type: "text", placeholder: "Your Company Name" },
            ].map(({ label, key, type, placeholder }) => (
              <div className="modal-form-group" key={key}>
                <label className="modal-form-label">{label}</label>
                <input
                  type={type}
                  required
                  className="modal-form-input"
                  placeholder={placeholder}
                  value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                />
              </div>
            ))}

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <button type="submit" className="modal-cta-btn" style={{ flex: 1, padding: "14px 24px" }}>
                ✉&nbsp; Send Enquiry via Email
              </button>
              <button
                type="button"
                className="filter-btn"
                onClick={() => setShowForm(false)}
                style={{ padding: "14px 20px", borderRadius: "30px", border: "1px solid var(--border-light)" }}
              >
                Back
              </button>
            </div>
          </form>
        ) : (
          /* ── PRODUCT VIEW: Image + Description + CTA only ── */
          <div className="modal-grid">
            <div className="modal-img-wrap">
              <Image src={product.image} alt={product.name} width={350} height={350} style={{ objectFit: "cover" }} />
            </div>
            <div className="modal-info" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
              {product.description ? (
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--text-muted)", margin: 0 }}>
                  {product.description}
                </p>
              ) : (
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--text-muted)", margin: 0 }}>
                  Premium OE replacement component engineered for reliability and direct-fit installation.
                </p>
              )}
              <button
                onClick={() => setShowForm(true)}
                className="modal-cta-btn"
                style={{ width: "100%", border: "none", padding: "16px 24px", fontSize: "15px", fontWeight: "700", marginTop: "8px" }}
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}

import { initialContent } from "@/data/initialContent";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Use the full hardcoded PRODUCTS_DATA as default; API can override with admin-edited content
  const [productsList, setProductsList] = useState(PRODUCTS_DATA);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.products) && data.products.length > 0) {
          // Normalize API specs: convert array format [{label,value}] to plain object
          const normalized = data.products.map((p) => ({
            ...p,
            specs: Array.isArray(p.specs)
              ? p.specs.reduce((acc, { label, value }) => ({ ...acc, [label]: value }), {})
              : p.specs,
          }));
          setProductsList(normalized);
        }
      })
      .catch((err) => console.log("Using PRODUCTS_DATA fallback:", err));
  }, []);

  const categories = ["All", "Air Suspension System", "Suspension Components", "Steering Components", "Climate Control Components"];

  const filteredProducts = activeCategory === "All"
    ? productsList
    : productsList.filter((p) => p.cat === activeCategory || p.cat.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <main className="sec">
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span className="sec-eyebrow">PRODUCT CATALOG</span>
        <h1 className="sec-title">Built for Every Mile</h1>
        <p className="sec-sub" style={{ margin: "0 auto", color: "#000000", fontWeight: "400" }}>
          A comprehensive range of automotive components designed to meet the evolving demands of today&apos;s aftermarket.
        </p>
      </div>

      {/* FILTERS */}
      <div className="product-filters" style={{ justifyContent: "center" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="prod-grid">
        {filteredProducts.map((prod) => (
          <div 
            key={prod.id} 
            className="prod-card"
            onClick={() => setSelectedProduct(prod)}
          >
            <div className="prod-card-img-wrap">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="prod-card-img"
              />
            </div>
            <div className="prod-card-body">
              <div className="prod-card-cat">{prod.cat}</div>
              <h3 className="prod-card-name">{prod.name}</h3>
              <div className="prod-card-view-btn">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DIALOG MODAL FOR PRODUCT DETAILS */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
