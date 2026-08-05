export const initialContent = {
  home: {
    hero: {
      eyebrow: "PREMIUM AUTOMOTIVE AFTERMARKET",
      title: "OE Replacement Components",
      subtext: "For European Passenger Cars & SUVs",
      desc: "Delivering precision-engineered suspension, steering, and climate control components built to stringent original equipment specifications for distributors and workshops worldwide.",
      ctaPrimaryText: "EXPLORE PRODUCTS",
      ctaPrimaryLink: "/products",
      ctaSecondaryText: "BECOME A DISTRIBUTOR",
      ctaSecondaryLink: "/partner",
      bgImage: "/images/hero-car-bg.jpg"
    },
    heroMiniCards: [
      { num: "5+", label: "Core Categories" },
      { num: "OE", label: "Replacement Quality" },
      { num: "100%", label: "Verified Parts - Quality Assured" },
      { num: "Up to", label: "12-Month Warranty" }
    ],
    featuredProducts: {
      eyebrow: "FEATURED PRODUCTS",
      title: "Best Selling Components",
      desc: "A selection of our most popular OE replacement components trusted by distributors and workshops worldwide.",
      featuredProductIds: [1, 2, 3, 4, 5]
    },
    categoriesSection: {
      eyebrow: "PRODUCT CATEGORIES",
      title: "Core Product Categories",
      desc: "We offer a focused portfolio of premium OE replacement components for European vehicles, enabling distributors and professional workshops worldwide to source with confidence."
    },
    categoryCards: [
      {
        id: "air-suspension",
        title: "Air Suspension System",
        desc: "Air struts, air springs, valve blocks, and high-pressure compressor units.",
        items: ["Air Suspension Strut", "Air Suspension Compressor", "Valve Block", "Air Spring Bag"],
        icon: "air-suspension",
        link: "/products"
      },
      {
        id: "suspension",
        title: "Suspension Components",
        desc: "Control arms, ball joints, tie rod ends, and stabilizer link bars.",
        items: ["Upper Control Arm", "Lower Control Arm", "Control Arm Bushing", "Ball Joint"],
        icon: "suspension",
        link: "/products"
      },
      {
        id: "steering",
        title: "Steering Components",
        desc: "Precision steering racks, tie rods, power steering pumps, and column shafts.",
        items: ["Steering Rack", "Tie Rod End", "Power Steering Pump", "Axle Joint"],
        icon: "steering",
        link: "/products"
      },
      {
        id: "climate-control",
        title: "Climate Control Components",
        desc: "A/C compressors, blower motors, condensers, and expansion valves.",
        items: ["A/C Compressor", "Blower Motor", "Condenser", "Expansion Valve"],
        icon: "climate-control",
        link: "/products"
      }
    ],
    advantageSection: {
      eyebrow: "THE STRAHL ADVANTAGE",
      title: "Five Reasons Wholesale Distributors Choose STRAHL",
      desc: "Five reasons distributors and professional workshops choose STRAHL as their trusted OE replacement partner."
    },
    advantageCards: [
      {
        num: "01",
        title: "Precision Engineering",
        desc: "Components engineered to deliver reliable fitment, durability, and consistent performance."
      },
      {
        num: "02",
        title: "OE Replacement Standards",
        desc: "Manufactured to stringent OE specifications using premium-grade materials and rigorous quality control."
      },
      {
        num: "03",
        title: "Comprehensive Product Portfolio",
        desc: "A focused range of air suspension, suspension, steering, and climate control components for European vehicles."
      },
      {
        num: "04",
        title: "Technical Expertise",
        desc: "Dedicated technical support and product guidance for distributors and professional workshops."
      },
      {
        num: "05",
        title: "Global Supply Network",
        desc: "Reliable inventory management and efficient logistics to support customers worldwide."
      }
    ],
    businessEnquiries: {
      eyebrow: "BUSINESS ENQUIRIES",
      title: "Grow Your Automotive Aftermarket Business",
      desc: "Partner with STRAHL™ to access a comprehensive range of premium OE replacement components, competitive distributor pricing, and dedicated technical support for European vehicles.",
      highlights: ["Digital Product Catalogue", "Technical Support", "Up to 12-Month Warranty"],
      quote: "Trusted partner for premium OE replacement components.",
      btnPrimaryText: "Request B2B Quote",
      btnPrimaryLink: "/contact",
      btnSecondaryText: "Become a Distributor",
      btnSecondaryLink: "/partner"
    }
  },

  about: {
    header: {
      eyebrow: "ABOUT THE BRAND",
      title: "Driven by Engineering Excellence",
      desc: "STRAHL is driven by engineering excellence, advanced technologies, and an uncompromising commitment to quality."
    },
    whoWeAre: {
      title: "WHO WE ARE",
      subtitle: "Premium OE Replacement Solutions",
      paragraphs: [
        "STRAHL is a premium automotive aftermarket brand dedicated to delivering high-quality OE replacement solutions for European vehicles. Built on a foundation of precision engineering and advanced manufacturing technologies, we are committed to providing components that meet the highest standards of fitment, durability, and dependable performance.",
        "Every STRAHL product reflects our focus on technical innovation, rigorous quality assurance, and continuous improvement. By working with qualified manufacturing partners operating under internationally recognized quality management systems, we ensure every component is produced with consistency, precision, and reliability.",
        "Designed for the demands of modern automotive repair and maintenance, STRAHL supports distributors, professional workshops, and automotive specialists with products they can trust—combining engineering excellence with long-term value."
      ]
    },
    whyStrahlSection: {
      eyebrow: "WHY STRAHL",
      title: "Six Reasons Distributors & Workshops Trust STRAHL"
    },
    whyCards: [
      {
        num: "01",
        title: "Precision Engineering",
        desc: "Components engineered to deliver reliable fitment, durability, and consistent performance.",
        icon: "precision"
      },
      {
        num: "02",
        title: "Advanced Manufacturing",
        desc: "Produced using modern manufacturing technologies and stringent process controls.",
        icon: "manufacturing"
      },
      {
        num: "03",
        title: "OE Replacement Standards",
        desc: "Manufactured to stringent OE specifications using premium-grade materials and quality control.",
        icon: "shield"
      },
      {
        num: "04",
        title: "Technical Innovation",
        desc: "Continuous improvement driven by evolving automotive technologies and engineering expertise.",
        icon: "innovation"
      },
      {
        num: "05",
        title: "Quality Assurance",
        desc: "Manufactured under internationally recognized quality management systems (ISO/IATF standards).",
        icon: "quality"
      },
      {
        num: "06",
        title: "Reliable Performance",
        desc: "Built to meet the demanding expectations of the global automotive aftermarket.",
        icon: "performance"
      }
    ],
    visionMission: {
      visionTitle: "Recognized. Trusted. Relied Upon.",
      visionDesc: "To establish STRAHL™ as the leading benchmark for replacement components in the global automotive aftermarket, consistently supplying parts that represent the peak of durability and reliability, creating long-term value for automotive professionals and distribution networks.",
      missionTitle: "Expanding Global Capabilities",
      missionDesc: "To continuously expand our capabilities, product portfolio, and technical expertise to meet the evolving needs of the global automotive aftermarket."
    }
  },

  products: [
    {
      id: 1,
      name: "Airmatic Shock Absorber",
      cat: "Air Suspension System",
      sku: "ST-AS-9001",
      oeNumber: "4Z7616051A / 2203202438",
      image: "/images/product_1.jpg",
      isBestSeller: true,
      usps: ["Multi-ply rubber sleeve engineered for thermal stability (-40°C to +80°C)", "Integrated CNC-machined top mount for direct OEM fitment", "Internal hydraulic damper tuned for European ride dynamics"],
      specs: [
        { label: "Operating Pressure", value: "up to 2.0 MPa" },
        { label: "Material Specification", value: "High-grade elastomer & anodized T6 aluminum" },
        { label: "Warranty Coverage", value: "12 Months / Unlimited Mileage" }
      ]
    },
    {
      id: 2,
      name: "Airmatic Compressor",
      cat: "Air Suspension System",
      sku: "ST-AC-9002",
      oeNumber: "2113200304 / 4E0616007D",
      image: "/images/product_2.jpg",
      isBestSeller: false,
      usps: ["Heavy-duty electric motor with thermal overload protection", "Integrated dryer unit ensuring moisture-free air delivery", "Low-noise vibration dampening mountings included"],
      specs: [
        { label: "Voltage", value: "12V DC" },
        { label: "Max Amperage", value: "35A" },
        { label: "Protection Rating", value: "IP67 Dust & Water Resistant" }
      ]
    },
    {
      id: 3,
      name: "Airmatic Valve Block",
      cat: "Air Suspension System",
      sku: "ST-VB-9003",
      oeNumber: "2123200358 / 4F0616013",
      image: "/images/product_3.jpg",
      isBestSeller: false,
      usps: ["Precision solenoid valving for rapid pressure adjustment", "Corrosion-resistant manifold block construction", "Direct plug-and-play OE electrical connector"],
      specs: [
        { label: "Ports", value: "6-way pneumatic distribution" },
        { label: "Operating Temp", value: "-40°C to +105°C" },
        { label: "Response Time", value: "< 50ms solenoid actuation" }
      ]
    },
    {
      id: 4,
      name: "Upper Control Arm",
      cat: "Suspension Components",
      sku: "ST-CA-8001",
      oeNumber: "4E0407505E / 8K0407505A",
      image: "/images/product_4.jpg",
      isBestSeller: false,
      usps: ["Forged aircraft-grade aluminum alloy construction", "Pre-installed high-density rubber bushings", "E-coated ball joint housing for extreme rust resistance"],
      specs: [
        { label: "Fitting Position", value: "Front Axle, Upper Left / Right" },
        { label: "Material", value: "Forged Aluminum EN AW-6082" },
        { label: "Bushing Durometer", value: "70 Shore A HD" }
      ]
    },
    {
      id: 5,
      name: "Lower Control Arm",
      cat: "Suspension Components",
      sku: "ST-CA-8002",
      oeNumber: "31126775971 / 31126775972",
      image: "/images/product_5.jpg",
      isBestSeller: false,
      usps: ["Structural steel pressings matching OEM tensile strength", "Heavy-duty dust boot retaining ring for ball joint longevity", "Engineered for precise alignment geometry retention"],
      specs: [
        { label: "Fitting Position", value: "Front Axle Lower Rearward" },
        { label: "Coating", value: "Anti-corrosion Cataphoretic Dip Coating" },
        { label: "Torque Specs Included", value: "Yes, per OEM workshop manual" }
      ]
    },
    {
      id: 6,
      name: "Stabilizer Link",
      cat: "Suspension Components",
      sku: "ST-SL-8003",
      oeNumber: "31306767748 / 31306767749",
      image: "/images/product_6.jpg",
      isBestSeller: false,
      usps: ["Optimized rod diameter resists high torsional sway forces", "Spherical joint inserts with low-friction POM bearings", "Dual dust-seals keep road grime and salt spray out of ball socket"],
      specs: [
        { label: "Position", value: "Front / Rear Sway Bar Link" },
        { label: "Rod Material", value: "Reinforced Steel Rod" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 7,
      name: "Tie Rod End",
      cat: "Steering Components",
      sku: "ST-TR-7001",
      oeNumber: "32216777503 / 32216763557",
      image: "/images/product_7.jpg",
      isBestSeller: false,
      usps: ["Induction-hardened ball pins for smooth steering and long wear life", "Internal synthetic grease reduces friction", "Coated threads resist seizing for ease of wheel alignment"],
      specs: [
        { label: "Connection Type", value: "Threaded steering joint" },
        { label: "Housing Material", value: "Forged Carbon Steel" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 8,
      name: "Steering Ball Joint",
      cat: "Steering Components",
      sku: "ST-SR-7002",
      oeNumber: "32106799217 / 32106799218",
      image: "/images/product_14.png",
      isBestSeller: false,
      usps: ["Precision-machined helical pinion gear for smooth responsive steering", "Premium internal seals prevent hydraulic fluid leakage", "Pre-installed rubber bellows protect internal rack gears"],
      specs: [
        { label: "Steering Type", value: "Hydraulic Power Steering Rack" },
        { label: "Housing Material", value: "Die-cast Aluminum Alloy" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 9,
      name: "AC Compressor",
      cat: "Climate Control Components",
      sku: "ST-ACC-6001",
      oeNumber: "4472601831 / 64526916232",
      image: "/images/product_8.jpg",
      isBestSeller: false,
      usps: ["Precision swashplate design delivers variable displacement smooth cooling", "Pre-filled with correct volume of synthetic PAG oil", "High-grade electromagnetic clutch coil prevents slipping"],
      specs: [
        { label: "Refrigerant Type", value: "R134a / R1234yf" },
        { label: "Oil Type", value: "PAG 46 / PAG 100" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 10,
      name: "AC Condenser",
      cat: "Climate Control Components",
      sku: "ST-ACD-6002",
      oeNumber: "64536914216 / 64536918953",
      image: "/images/product_9.jpg",
      isBestSeller: false,
      usps: ["Micro-channel aluminum tubes maximize heat rejection rates", "Integrated receiver drier cartridge prevents moisture damage", "100% helium leak tested before dispatch"],
      specs: [
        { label: "Material", value: "Full Aluminum Brazed Core" },
        { label: "Receiver Drier", value: "Integrated cartridge" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 11,
      name: "Cooling Coil / Evaporator",
      cat: "Climate Control Components",
      sku: "ST-EVP-6003",
      oeNumber: "64116913533 / 64116934390",
      image: "/images/product_10.jpg",
      isBestSeller: false,
      usps: ["Highly efficient plate-fin core provides rapid cabin cooling", "Anti-bacterial coating prevents mold formation and odor", "Engineered for direct fit in standard HVAC cases"],
      specs: [
        { label: "Core Style", value: "Plate-Fin Aluminum Evaporator" },
        { label: "Coating", value: "Hydrophilic and anti-microbial" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 12,
      name: "Expansion Valve",
      cat: "Climate Control Components",
      sku: "ST-EXV-6004",
      oeNumber: "64116913477 / 64116935441",
      image: "/images/product_11.jpg",
      isBestSeller: false,
      usps: ["Precision thermal charge element guarantees accurate flow control", "Spring-loaded metering valve maintains steady superheat levels", "Solid aluminum body resists high operating pressures"],
      specs: [
        { label: "Valve Style", value: "Block Type Expansion Valve" },
        { label: "Material", value: "High-grade Extruded Aluminum" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 13,
      name: "Hydraulic Engine Mount",
      cat: "Engine Mounts",
      sku: "ST-EM-5001",
      oeNumber: "22116857091 / 22116857092",
      image: "/images/product_12.png",
      isBestSeller: false,
      usps: ["Hydraulic fluid-filled chamber dampens low-frequency engine vibrations", "Premium natural rubber compounding isolates high-frequency NVH", "Individually tested for hydraulic pressure seal integrity"],
      specs: [
        { label: "Mount Type", value: "Hydraulic (Fluid-Filled)" },
        { label: "Material", value: "Natural Rubber & Steel Alloy" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    },
    {
      id: 14,
      name: "Transmission Mount",
      cat: "Engine Mounts",
      sku: "ST-TM-5002",
      oeNumber: "22316855045 / 22316855046",
      image: "/images/product_13.png",
      isBestSeller: false,
      usps: ["Specially formulated elastomer compound maintains drivetrain alignment", "Controls engine and transmission rocking during gear shifts", "High-grade zinc plating resists corrosion under road debris impact"],
      specs: [
        { label: "Mount Type", value: "Solid Elastomer / Rubber-Metal" },
        { label: "Hardness", value: "60 Shore A Durometer" },
        { label: "Warranty", value: "1 Year B2B Sourcing" }
      ]
    }
  ],

  quality: {
    header: {
      eyebrow: "ENGINEERING STANDARDS",
      title: "Quality Management & Inspection",
      desc: "Our quality assurance system combines advanced metallurgical testing, dimensional verification, and endurance simulation to guarantee OEM compliance."
    },
    standardsCards: [
      {
        title: "IATF 16949 Certified Production",
        desc: "Manufacturing facilities comply strictly with automotive quality management standards, enforcing process controls from raw material casting to final assembly.",
        icon: "cert"
      },
      {
        title: "100% Dimensional & Leak Testing",
        desc: "Pneumatic valve blocks and air struts undergo automated 100% pressure decay testing prior to packaging to ensure zero leakage.",
        icon: "leak"
      },
      {
        title: "Metallurgical & Rubber Analysis",
        desc: "Synthetic rubber compounds are subjected to ozone aging, tensile elongation, and low-temperature flexibility tests to prevent fatigue.",
        icon: "lab"
      }
    ],
    inspectionProtocols: [
      {
        step: "01",
        title: "Raw Material Verification",
        desc: "Spectral analysis of aluminum alloys and elastomer compounds prior to forging or molding."
      },
      {
        step: "02",
        title: "In-Line CNC Machining Audits",
        desc: "CMM 3D coordinate measuring machines verify critical tolerances to within ±0.005mm."
      },
      {
        step: "03",
        title: "Endurance & Thermal Cycling",
        desc: "Simulated 500,000-cycle dynamic fatigue testing under thermal stress conditions (-40°C to 80°C)."
      },
      {
        step: "04",
        title: "Final Packaging & Serialization",
        desc: "Laser-engraved part numbers, QR code traceability, and vacuum-sealed protective packaging."
      }
    ]
  },

  partner: {
    header: {
      eyebrow: "GLOBAL TRADE NETWORK",
      title: "Distributor & Wholesale Partnership",
      desc: "Partner with STRAHL™ to access premium OE replacement components, competitive margin structures, catalog support, and reliable logistics."
    },
    tiers: [
      {
        tier: "Regional Distributor",
        tag: "High Volume",
        tagColor: "#38BDF8",
        benefits: [
          "Exclusive territory distribution rights",
          "Tier-1 B2B wholesale pricing structure",
          "Dedicated technical account manager",
          "Digital catalog integration (TecDoc compatible data)"
        ]
      },
      {
        tier: "Authorized Stockist",
        tag: "Workshop Preferred",
        tagColor: "#10B981",
        benefits: [
          "Low Minimum Order Quantity (MOQ) flex terms",
          "Fast-track warranty claim processing",
          "Marketing collateral & workshop branding support",
          "Direct factory technical support"
        ]
      }
    ],
    onboardingSteps: [
      { step: "01", title: "Submit Enquiry", desc: "Fill out the trade enquiry form with your business profile and location." },
      { step: "02", title: "Account Assessment", desc: "Our commercial team reviews territory alignment and volume requirements." },
      { step: "03", title: "Supply Agreement", desc: "Finalize wholesale pricing terms, logistics options, and warranty terms." },
      { step: "04", title: "Catalog & Dispatch", desc: "Gain full catalog access and place your initial stock order." }
    ]
  }
};
