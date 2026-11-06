import { siteConfig, yearsInBusiness } from './siteData';

export type Locale = 'es' | 'en' | 'zh';
export const locales: Locale[] = ['es', 'en', 'zh'];

export interface TranslatedProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  density: string;
  features: string[];
}

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    quote: string;
    language: string;
    brandSubtitle: string;
  };
  hero: {
    originBadge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    exploreBtn: string;
    aboutBtn: string;
    stats: {
      value: string;
      label: string;
      sublabel: string;
    }[];
  };
  about: {
    badge: string;
    title: string;
    authorRole: string;
    foundedLabel: string;
    p1: string;
    p2: string;
    plantTitle: string;
    address: string;
    viewMaps: string;
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    viewDetail: string;
    detailTitle: string;
    customBadge: string;
    customTitle: string;
    customDesc: string;
    customBtn: string;
    items: TranslatedProduct[];
  };
  footer: {
    desc: string;
    omkaPartner: string;
    quickNav: string;
    linesTitle: string;
    lines: string[];
    rights: string;
    originFooter: string;
  };
  whatsapp: {
    message: string;
    tooltip: string;
  };
}

const commonImages = {
  boutique: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355182/bolsas-boutique_mb7a5o.webp",
  chillonas: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766361211/bolsa-chillona_ustw6h_cridy8.jpg",
  conAsa: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766361060/bolsa-con-asa_ilp8ag.jpg",
  aseo: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766360746/bolsa-para-aseo_x5aimp_qqs5ds.jpg",
  empaques: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764375989/bolsa-para-empaque_gzrz8a.webp",
  multiusos: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766893398/bolsa-multiuso_l6rht2.webp",
  papelera: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766360648/bolsa-para-papelera_bzcsjg_fynrtl.jpg",
  cesta: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764531601/bolsa-para-cesta_xmzcx7.webp",
  hielo: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355403/bolsa-para-hielo_t0mgsj.webp",
  pan: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1763759436/bolsas-para-pan_mkdkx1.jpg",
  pulpa: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764531621/bolsa-para-frutas_xw0gwj.webp",
  tipoCono: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355650/bolsa-tipo-cono_wllzqi.webp",
};

export const translations: Record<Locale, TranslationSchema> = {
  es: {
    meta: {
      title: siteConfig.title,
      description: `Expertos en fabricar empaques y bolsas plásticas de alta y baja densidad en Venezuela. Más de ${yearsInBusiness} años de trayectoria desde la zona industrial de Ureña, Estado Táchira.`,
    },
    nav: {
      home: "Inicio",
      about: "¿Quiénes somos?",
      products: "Productos",
      quote: "Solicitar Cotización",
      language: "Idioma",
      brandSubtitle: "C.A. • Fábrica de Bolsas",
    },
    hero: {
      originBadge: "Zona Industrial de Ureña, Estado Táchira • Venezuela",
      titlePart1: "Americana del Plástico",
      titlePart2: "Fábrica de bolsas plásticas",
      subtitle: `Con más de ${yearsInBusiness} años de experiencia en la fabricación de empaques de alta y baja densidad.`,
      exploreBtn: "Explorar Productos",
      aboutBtn: "¿Quiénes somos?",
      stats: [
        {
          value: `+${yearsInBusiness}`,
          label: "Años de Trayectoria",
          sublabel: "Forjando calidad industrial desde 2017",
        },
        {
          value: "100%",
          label: "Producción Nacional",
          sublabel: "Desde la Zona Industrial de Ureña, Táchira",
        },
        {
          value: "AD / BD",
          label: "Alta y Baja Densidad",
          sublabel: "Múltiples soluciones para cada rubro",
        },
        {
          value: "Nacional",
          label: "Cobertura Logística",
          sublabel: "Distribución en Caracas y todo el país",
        },
      ],
    },
    about: {
      badge: "Identidad e Historia",
      title: "¿Quiénes somos?",
      authorRole: "Fábrica de Bolsas plásticas con calidad y tradición venezolana",
      foundedLabel: "Fundada en Junio 2017 • Ureña, Estado Táchira",
      p1: "Sabemos que la creación de productos plásticos es un proceso que exige precisión, innovación y compromiso. En Venezuela transformamos la materia prima en bolsas plásticas que cumplen con los más altos estándares de calidad, respaldados por más de ocho años de experiencia continua en el mercado nacional.",
      p2: "Además somos conscientes de que la bolsa plástica forma parte de nuestra cultura cotidiana: nos acompaña en la compra en el mercado, protege nuestros alimentos en los viajes y se reutiliza en los hogares como símbolo de ingenio y ahorro. Así, cada producto refleja no solo técnica y resistencia mecánica, sino también las costumbres y la practicidad que caracterizan al consumidor venezolano.",
      plantTitle: "Nuestra Planta",
      address: siteConfig.address,
      viewMaps: "Ver en Google Maps",
    },
    products: {
      badge: "Catálogo Especializado",
      title: "Nuestros Productos",
      subtitle: "Soluciones en polietileno de alta y baja densidad adaptadas a cada sector: alimentos, panadería, aseo, comercio y refrigeración industrial.",
      viewDetail: "Ver detalle",
      detailTitle: "Detalle del Producto",
      customBadge: "Fabricación a la Medida",
      customTitle: "¿Buscás calibres, medidas o colores personalizados?",
      customDesc: "En Americana del Plástico fabricamos sobre especificación para distribuidoras, franquicias y comercios en todo el país.",
      customBtn: "Hablar con un Asesor Técnico",
      items: [
        {
          id: "bolsas-boutique",
          name: "Bolsas Boutique",
          category: "Multiuso",
          tagline: "Elegancia, distinción y presencia de marca",
          description: "Bolsas elegantes y resistentes con diseño exclusivo. Ideales para tiendas y negocios de alta gama que buscan distinción, disponibles con impresión personalizada y acabados especiales (tratadas).",
          image: commonImages.boutique,
          density: "Baja Densidad (LDPE)",
          features: ["Acabado brillante y tacto suave", "Asa troquelada reforzada", "Ideal para tiendas y boutiques", "Disponible con impresión personalizada"],
        },
        {
          id: "bolsas-chillonas",
          name: "Bolsas Chillonas",
          category: "Alimentos",
          tagline: "Solución económica para despacho masivo",
          description: "Fabricadas con polietileno de Alta Densidad (A/D), caracterizadas por su rigidez, opacidad y el sonido distintivo que les da su nombre. La solución más eficiente para panaderías, abastos y comercios.",
          image: commonImages.chillonas,
          density: "Alta Densidad (HDPE)",
          features: ["Alta resistencia y rigidez", "Presentación plana y con fuelle", "Ideal para panaderías y abastos", "Disponibles en múltiples calibres"],
        },
        {
          id: "bolsas-con-asa",
          name: "Bolsas Con Asa",
          category: "Alta Densidad",
          tagline: "Resistencia y practicidad para el comercio diario",
          description: "Fabricadas con polietileno de Alta Densidad (A/D) para garantizar resistencia y durabilidad en el transporte de mercancía. Ideales para mercados, abastos y comercios en general.",
          image: commonImages.conAsa,
          density: "Alta Densidad (HDPE)",
          features: ["Asa integrada de alta resistencia", "Ideal para mercados y abastos", "Múltiples tamaños disponibles", "Alta capacidad de carga"],
        },
        {
          id: "bolsas-de-aseo",
          name: "Bolsas de Aseo",
          category: "Limpieza",
          tagline: "Resistencia flexible para uso doméstico e industrial",
          description: "Fabricadas con polietileno de Baja Densidad (B/D), ofreciendo una combinación de resistencia y flexibilidad ideal para el manejo de desechos domésticos e industriales.",
          image: commonImages.aseo,
          density: "Baja Densidad (LDPE)",
          features: ["Alta resistencia al desgarro", "Flexibilidad para fácil manipulación", "Ideal para uso doméstico e industrial", "Disponibles en varios tamaños"],
        },
        {
          id: "bolsas-empaques-especiales",
          name: "Bolsas para Empaques",
          category: "Especial",
          tagline: "Transparencia y versatilidad para empaques industriales",
          description: "Fabricadas con polietileno de Baja Densidad original. Transparentes, flexibles y de alta resistencia, ideales para empacar una amplia variedad de productos en entornos industriales y comerciales.",
          image: commonImages.empaques,
          density: "Baja Densidad (LDPE)",
          features: ["Transparencia cristalina", "Alta flexibilidad y resistencia", "Uso industrial y comercial", "Variedad de calibres disponibles"],
        },
        {
          id: "bolsas-multiusos",
          name: "Bolsas Multiusos",
          category: "Multiuso",
          tagline: "Versatilidad máxima para cualquier rubro",
          description: "Diseño funcional que permite adaptarse a múltiples usos en el comercio, la industria y el hogar. Fabricadas con materiales de primera calidad para garantizar resistencia en cada aplicación.",
          image: commonImages.multiusos,
          density: "Alta Densidad (HDPE)",
          features: ["Adaptable a múltiples usos", "Resistencia mecánica comprobada", "Comercio, industria y hogar", "Amplia gama de medidas"],
        },
        {
          id: "bolsas-papelera",
          name: "Bolsas para Papelera",
          category: "Limpieza",
          tagline: "Higiene y contención para oficinas y hogares",
          description: "Fabricadas con polietileno de Alta Densidad (A/D), diseñadas para ajustarse perfectamente a papeleras y cestos de residuos en hogares, oficinas y espacios comerciales.",
          image: commonImages.papelera,
          density: "Alta Densidad (HDPE)",
          features: ["Ajuste perfecto a papeleras estándar", "Resistencia al desgarro", "Ideal para oficinas y hogares", "Presentación limpia y discreta"],
        },
        {
          id: "bolsas-para-cesta",
          name: "Bolsas para Cestas",
          category: "Multiuso",
          tagline: "Cobertura y protección para cestas de mercado",
          description: "Fabricadas con polietileno de Baja Densidad original, diseñadas para cubrir y proteger cestas del mercado. Alta resistencia y transparencia que permite visualizar el contenido.",
          image: commonImages.cesta,
          density: "Baja Densidad (LDPE)",
          features: ["Ajuste exacto a cestas de mercado", "Transparencia para visualizar contenido", "Alta resistencia a la carga", "Reutilizable y durable"],
        },
        {
          id: "bolsas-para-hielo",
          name: "Bolsas Para Hielo",
          category: "Alimentos",
          tagline: "Resistencia extrema a temperaturas bajo cero",
          description: "Fabricadas con polietileno de Baja Densidad (B/D) de alta calidad, resistentes a impactos, temperaturas criogénicas y manipulación ruda durante congelación y transporte.",
          image: commonImages.hielo,
          density: "Baja Densidad (LDPE)",
          features: ["Tolerancia criogénica sin cristalizarse", "Alta resistencia al punzonamiento", "Sellos de fondo ultra reforzados", "Disponibles en 2kg, 3kg y 5kg"],
        },
        {
          id: "bolsas-para-pan",
          name: "Bolsas Para Pan",
          category: "Alimentos",
          tagline: "Microperforación técnica para conservar corteza y aroma",
          description: "Bolsas de Baja Densidad (B/D) para pan y bollería. Permiten el escape controlado del vapor, conservando la textura crujiente y el aroma del pan recién horneado sin condensación.",
          image: commonImages.pan,
          density: "Baja Densidad (LDPE)",
          features: ["Microperforaciones respirables", "Aptas para contacto directo con alimentos", "Evita el ablandamiento de la corteza", "Gran versatilidad de tamaños"],
        },
        {
          id: "bolsas-para-pulpa",
          name: "Bolsas para Pulpa",
          category: "Alimentos",
          tagline: "Conservación óptima de frutas frescas y congeladas",
          description: "Medida perfecta para mantener fruta fresca y/o congelada. Fabricadas para preservar la pulpa en condiciones óptimas de higiene y frescura para su distribución y comercialización.",
          image: commonImages.pulpa,
          density: "Baja Densidad (LDPE)",
          features: ["Ideal para frutas frescas y congeladas", "Cierre seguro", "Apta para contacto con alimentos", "Conserva frescura y sabor"],
        },
        {
          id: "bolsas-tipo-cono",
          name: "Bolsas Tipo Cono",
          category: "Alimentos",
          tagline: "Máxima transparencia y frescura garantizada",
          description: "Fabricadas con polietileno de Baja Densidad original. Diseño cónico especializado para productos de confitería, dulces, granos y snacks, garantizando frescura hermética y atractiva visibilidad.",
          image: commonImages.tipoCono,
          density: "Baja Densidad (LDPE)",
          features: ["Sellado cónico de alta precisión", "Transparencia cristalina", "Barrera contra la humedad exterior", "Presentación atractiva para venta"],
        },
      ],
    },
    footer: {
      desc: "Fábrica especializada en la producción de bolsas y empaques plásticos en alta y baja densidad desde Ureña, Estado Táchira para toda Venezuela.",
      omkaPartner: "Unidad de producción aliada al grupo OMKA",
      quickNav: "Navegación Rápida",
      linesTitle: "Líneas de Fabricación",
      lines: [
        "Bolsas Boutique (Comercio & Retail)",
        "Bolsas tipo Cono (Snacks & Confitería)",
        "Bolsas Microperforadas para Pan",
        "Bolsas para Hielo de Alta Densidad",
        "Empaques para Aseo y Uso General",
      ],
      rights: "Americana del Plástico C.A. Todos los derechos reservados.",
      originFooter: "Zona Industrial de Ureña, Táchira • Hecho en Venezuela",
    },
    whatsapp: {
      message: "¡Hola! Me comunico desde la web de Americana del Plástico para consultar por cotizaciones y pedidos al mayor.",
      tooltip: "¡Escribinos por WhatsApp!",
    },
  },

  en: {
    meta: {
      title: "Americana del Plástico | Plastic Bag & Packaging Factory in Venezuela",
      description: `Industrial manufacturers of high and low-density polyethylene packaging in Venezuela. Over ${yearsInBusiness} years of expertise from Ureña Industrial Zone, Táchira State.`,
    },
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      quote: "Request Quote",
      language: "Language",
      brandSubtitle: "C.A. • Plastic Bag Factory",
    },
    hero: {
      originBadge: "Ureña Industrial Zone, Táchira State • Venezuela",
      titlePart1: "Americana del Plástico",
      titlePart2: "Plastic Bag Manufacturer",
      subtitle: `Over ${yearsInBusiness} years of industrial experience manufacturing high and low-density packaging.`,
      exploreBtn: "Explore Products",
      aboutBtn: "About Us",
      stats: [
        {
          value: `+${yearsInBusiness}`,
          label: "Years of Experience",
          sublabel: "Forging industrial quality since 2017",
        },
        {
          value: "100%",
          label: "Domestic Production",
          sublabel: "From Ureña Industrial Zone, Táchira",
        },
        {
          value: "HD / LD",
          label: "High & Low Density",
          sublabel: "Multiple solutions for every industry",
        },
        {
          value: "National",
          label: "Logistics Reach",
          sublabel: "Direct distribution across Venezuela",
        },
      ],
    },
    about: {
      badge: "Identity & Heritage",
      title: "About Us",
      authorRole: "Plastic bag manufacturing with Venezuelan quality and industrial dedication",
      foundedLabel: "Founded in June 2017 • Ureña, Táchira State",
      p1: "We understand that plastic manufacturing is a rigorous process demanding precision, continuous innovation, and technical commitment. In Venezuela, we transform prime polymers into plastic bags meeting demanding industrial benchmarks, backed by extensive experience across domestic commercial sectors.",
      p2: "Plastic packaging plays a vital role in everyday commerce and households: safeguarding food, securing goods in transit, and delivering durability. Every product we produce embodies high tensile resistance, flawless thermal sealing, and daily practicality tailored to demanding commercial applications.",
      plantTitle: "Manufacturing Facility",
      address: siteConfig.address,
      viewMaps: "View on Google Maps",
    },
    products: {
      badge: "Specialized Catalog",
      title: "Our Products",
      subtitle: "High and low-density polyethylene solutions engineered for food, bakery, sanitation, retail, and industrial cold chain logistics.",
      viewDetail: "View details",
      detailTitle: "Product Specifications",
      customBadge: "Custom Manufacturing",
      customTitle: "Looking for custom gauges, dimensions, or custom colors?",
      customDesc: "At Americana del Plástico we engineer to exact client specifications for distributors, supermarket chains, and commercial networks nationwide.",
      customBtn: "Speak with a Technical Advisor",
      items: [
        {
          id: "bolsas-boutique",
          name: "Boutique Bags",
          category: "Retail & General",
          tagline: "Elegance, distinction, and corporate branding",
          description: "Premium high-gloss bags featuring exceptional tensile strength and reinforced die-cut handles. Ideal for apparel, cosmetics, and luxury retail stores.",
          image: commonImages.boutique,
          density: "Low Density (LDPE)",
          features: ["Glossy finish with smooth tactile feel", "Reinforced die-cut handles", "Ideal for fashion retail and boutiques", "Custom flexographic printing available"],
        },
        {
          id: "bolsas-chillonas",
          name: "Crinkle Bags (Chillonas)",
          category: "Food Packaging",
          tagline: "Cost-effective high-yield mass dispensing",
          description: "Manufactured from rigid High-Density Polyethylene (HDPE), recognized for its crisp acoustic texture and puncture resistance. Designed for bakeries, markets, and grocery counters.",
          image: commonImages.chillonas,
          density: "High Density (HDPE)",
          features: ["Superior tensile rigidity", "Flat and gusseted formats available", "Ideal for bakery and dry foods", "Offered in calibrated weight sizes"],
        },
        {
          id: "bolsas-con-asa",
          name: "T-Shirt Handle Bags",
          category: "High Density",
          tagline: "Heavy-duty carrying bags for daily retail",
          description: "Engineered with high-tensile HDPE resin to ensure tear-resistant transport for markets, supermarkets, and wholesale businesses.",
          image: commonImages.conAsa,
          density: "High Density (HDPE)",
          features: ["Integrated high-strength handles", "Optimized for supermarkets & grocery", "Wide variety of sizes", "High load-bearing capacity"],
        },
        {
          id: "bolsas-de-aseo",
          name: "Heavy-Duty Trash Bags",
          category: "Sanitation",
          tagline: "Puncture-resistant flexibility for commercial hygiene",
          description: "Formulated with flexible Low-Density Polyethylene (LDPE) for superior tear containment in residential, municipal, and industrial waste collection.",
          image: commonImages.aseo,
          density: "Low Density (LDPE)",
          features: ["High tear and puncture resistance", "Elastic flexibility for easy tying", "Ideal for industrial and domestic waste", "Offered in heavy-duty calibers"],
        },
        {
          id: "bolsas-empaques-especiales",
          name: "Industrial Packaging Bags",
          category: "Specialty",
          tagline: "Crystal clarity and versatile protective wrapping",
          description: "Produced with virgin LDPE polymers. High transparency, moisture barrier, and flexibility suitable for packaging parts, garments, and commercial merchandise.",
          image: commonImages.empaques,
          density: "Low Density (LDPE)",
          features: ["Crystal-clear clarity", "Superior flexibility and sealing", "Commercial and manufacturing utility", "Wide spectrum of calibers"],
        },
        {
          id: "bolsas-multiusos",
          name: "Multi-Utility Bags",
          category: "Multi-purpose",
          tagline: "Maximum versatility across all business sectors",
          description: "Functional packaging engineered to adapt seamlessly across retail, hardware, agriculture, and home applications with dependable seal strength.",
          image: commonImages.multiusos,
          density: "High Density (HDPE)",
          features: ["Adaptable to diverse industrial tasks", "Proven mechanical durability", "Retail, logistics, and household use", "Extensive size portfolio"],
        },
        {
          id: "bolsas-papelera",
          name: "Wastebasket Liners",
          category: "Sanitation",
          tagline: "Discreet hygiene liners for offices and institutions",
          description: "High-Density Polyethylene liners specifically dimensioned for wastebaskets and small bins in corporate offices, clinics, and hospitality rooms.",
          image: commonImages.papelera,
          density: "High Density (HDPE)",
          features: ["Tailored fit for standard wastebaskets", "Dependable tear resistance", "Clean and discreet presentation", "Efficient rolled dispensing"],
        },
        {
          id: "bolsas-para-cesta",
          name: "Harvest Crate Liner Bags",
          category: "Multi-purpose",
          tagline: "Heavy-duty protective lining for agricultural crates",
          description: "Manufactured from virgin LDPE resin to fit commercial plastic crates. Prevents contamination, retains freshness, and allows quick visual inspection.",
          image: commonImages.cesta,
          density: "Low Density (LDPE)",
          features: ["Custom dimensioned for market crates", "Transparent for rapid goods inspection", "Heavy load tolerance", "Resistant and durable"],
        },
        {
          id: "bolsas-para-hielo",
          name: "Ice Packaging Bags",
          category: "Food Packaging",
          tagline: "Cryogenic resistance engineered for sub-zero storage",
          description: "Formulated specifically for frozen storage without brittle crystallization. Reinforced bottom seals withstand heavy ice drops and aggressive transit handling.",
          image: commonImages.hielo,
          density: "Low Density (LDPE)",
          features: ["Cryogenic tolerance without cracking", "High puncture resistance against sharp ice", "Ultra-reinforced bottom seal", "Available in 2kg, 3kg, and 5kg formats"],
        },
        {
          id: "bolsas-para-pan",
          name: "Microperforated Bread Bags",
          category: "Food Packaging",
          tagline: "Engineered micro-vents to preserve crustiness and aroma",
          description: "Microperforated breathable LDPE bags that allow controlled release of steam, preventing condensation and preserving crisp crusts and fresh aroma.",
          image: commonImages.pan,
          density: "Low Density (LDPE)",
          features: ["Breathable microperforations", "Certified for direct food contact", "Prevents crust softening and humidity", "Versatile bag dimensions"],
        },
        {
          id: "bolsas-para-pulpa",
          name: "Fruit Pulp Packaging Bags",
          category: "Food Packaging",
          tagline: "Optimal preservation for fresh and frozen fruit pulp",
          description: "Engineered with tight barrier seals to package, store, and freeze natural fruit pulps and juices in sanitary, leak-proof conditions.",
          image: commonImages.pulpa,
          density: "Low Density (LDPE)",
          features: ["Optimized for liquid and frozen pulp", "Leak-proof hermetic seals", "FDA-compliant food contact safety", "Locks in freshness and natural flavor"],
        },
        {
          id: "bolsas-tipo-cono",
          name: "Cone Bags for Confectionery",
          category: "Food Packaging",
          tagline: "High-transparency display for sweets and snacks",
          description: "Specialized triangular packaging for candies, nuts, spices, and snacks. Combines clear aesthetic merchandising with an airtight humidity barrier.",
          image: commonImages.tipoCono,
          density: "Low Density (LDPE)",
          features: ["Precision triangular seal", "Glass-like transparency", "Exterior moisture barrier", "Appealing point-of-sale display"],
        },
      ],
    },
    footer: {
      desc: "Industrial manufacturing plant specialized in high and low-density plastic packaging operating from Ureña, Táchira State for Venezuela and international commerce.",
      omkaPartner: "Production unit allied with OMKA Group",
      quickNav: "Quick Navigation",
      linesTitle: "Manufacturing Lines",
      lines: [
        "Boutique Bags (Commercial & Retail)",
        "Cone Bags (Snacks & Confectionery)",
        "Microperforated Bread Packaging",
        "Heavy-Duty Ice Bags",
        "Sanitation & Industrial Liners",
      ],
      rights: "Americana del Plástico C.A. All rights reserved.",
      originFooter: "Ureña Industrial Zone, Táchira • Made in Venezuela",
    },
    whatsapp: {
      message: "Hello! I am contacting you from Americana del Plástico website to inquire about wholesale packaging orders and international quotes.",
      tooltip: "Message us on WhatsApp!",
    },
  },

  zh: {
    meta: {
      title: "Americana del Plástico | 委内瑞拉专业塑料袋与软包装制造工厂",
      description: `委内瑞拉专业高密度（HDPE）与低密度（LDPE）塑料包装制造厂商。扎根塔奇拉州乌雷尼亚工业区，拥有超过${yearsInBusiness}年工业生产经验。`,
    },
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品中心",
      quote: "获取报价",
      language: "语言选择",
      brandSubtitle: "C.A. • 塑料袋制造工厂",
    },
    hero: {
      originBadge: "委内瑞拉塔奇拉州乌雷尼亚工业区",
      titlePart1: "Americana del Plástico",
      titlePart2: "塑料袋专业制造工厂",
      subtitle: `拥有超过${yearsInBusiness}年高密度与低密度塑料包装材料的研发与工业化生产经验。`,
      exploreBtn: "浏览产品系列",
      aboutBtn: "关于我们",
      stats: [
        {
          value: `+${yearsInBusiness}`,
          label: "年行业底蕴",
          sublabel: "自2017年铸就专业工业品质",
        },
        {
          value: "100%",
          label: "本土制造能力",
          sublabel: "源自乌雷尼亚高标准工业生产基地",
        },
        {
          value: "高密/低密",
          label: "HDPE与LDPE技术",
          sublabel: "满足多元商业与工业包装需求",
        },
        {
          value: "全国直配",
          label: "物流供应网络",
          sublabel: "覆盖首都加拉加斯及全国各大商业中心",
        },
      ],
    },
    about: {
      badge: "品牌背景与历程",
      title: "关于我们",
      authorRole: "融合委内瑞拉卓越制造传统与严格工业标准的塑料包装工厂",
      foundedLabel: "创立于2017年6月 • 塔奇拉州乌雷尼亚",
      p1: "我们深知塑料包装制造是一门融合原料把控、精密挤出与严密热封的工程体系。在委内瑞拉，我们将纯正聚合树脂转化为符合高安全标准的工业级塑料袋，依托扎实的生产工艺和多年持续深耕市场的丰富经验。",
      p2: "塑料包装是现代商业流通与日常生活不可或缺的基础保障：从日常超市零售、烘焙食品保温，到重型商用废弃物处理。我们出厂的每一款袋体，均经过严格的抗撕裂与拉伸性能检验，以极具竞争力的品质服务广大企业客户。",
      plantTitle: "工厂生产基地",
      address: siteConfig.address,
      viewMaps: "在谷歌地图中查看厂址",
    },
    products: {
      badge: "核心产品目录",
      title: "我们的产品",
      subtitle: "专为食品烘焙、零售贸易、保洁卫生及工业冷链行业量身打造的高低密度聚乙烯包装方案。",
      viewDetail: "查看详情",
      detailTitle: "产品技术参数",
      customBadge: "非标定制生产",
      customTitle: "需要特殊规格、定制厚度或专属印字？",
      customDesc: "Americana del Plástico为全国批发商、连锁品牌及企业提供全方位按需定制生产服务。",
      customBtn: "联系技术顾问",
      items: [
        {
          id: "bolsas-boutique",
          name: "高档手提精品袋 (Boutique)",
          category: "商超零售",
          tagline: "典雅外观，提升企业品牌形象",
          description: "采用优质低密度聚乙烯（LDPE）精制而成，具备高光泽质感与加固冲孔把手。专为服装服饰、奢侈品及品牌门店打造。",
          image: commonImages.boutique,
          density: "低密度聚乙烯 (LDPE)",
          features: ["光滑亮面质感与柔韧触感", "冲孔把手受力加固处理", "适用于服装、精品及零售专柜", "支持客户专属图文柔版印刷"],
        },
        {
          id: "bolsas-chillonas",
          name: "高密度平口袋/折边袋 (Chillonas)",
          category: "食品零售",
          tagline: "经济实用的大宗批发理想包装",
          description: "采用高密度聚乙烯（HDPE）吹塑，具备特征性的挺度与清脆质感。是烘焙坊、蔬果店及食品杂货批量出货的最佳解决方案。",
          image: commonImages.chillonas,
          density: "高密度聚乙烯 (HDPE)",
          features: ["优异的抗拉强度与挺度", "提供平口与侧折边（风琴式）", "非常适合烘焙和干燥食品包装", "提供多重标准承重规格"],
        },
        {
          id: "bolsas-con-asa",
          name: "背心式马甲袋 (Con Asa)",
          category: "高密度系列",
          tagline: "商用日用品日常提携的高承重袋",
          description: "高密度配方打造，提手韧性极佳，广泛适用于各类超市、便利店、批发集市与零售商铺日常大宗打包。",
          image: commonImages.conAsa,
          density: "高密度聚乙烯 (HDPE)",
          features: ["一体化高强度手提设计", "大型商超与批发市场首选", "规格齐全，支持大批量现货供应", "出色的承重与抗穿刺性能"],
        },
        {
          id: "bolsas-de-aseo",
          name: "重型工业垃圾袋 (Bolsas de Aseo)",
          category: "清洁卫生",
          tagline: "兼具柔韧弹性与防穿刺承载力",
          description: "低密度配方制成，袋体延展性好，有效防止硬物刮刺破裂，广泛适用于家庭生活、酒店物业及工业厂房保洁废弃物清理。",
          image: commonImages.aseo,
          density: "低密度聚乙烯 (LDPE)",
          features: ["优良的抗撕裂与抗穿刺能力", "韧性极佳，便于封口与搬运", "适用于工商业及生活垃圾收纳", "多种加厚厚度规格可选"],
        },
        {
          id: "bolsas-empaques-especiales",
          name: "工业通用包装透明袋",
          category: "特种包装",
          tagline: "高透亮度和全方位保护性防尘软包装",
          description: "使用全新纯净低密度树脂生产，具备卓越的透明度与密封性，适用于五金配件、纺织品与各种商业产品的外层防护包装。",
          image: commonImages.empaques,
          density: "低密度聚乙烯 (LDPE)",
          features: ["透明清晰，利于内件展示", "柔韧性好，封口紧密不漏气", "满足工业生产与仓储多用途", "多种壁厚规格按需供应"],
        },
        {
          id: "bolsas-multiusos",
          name: "多用途工业综合袋",
          category: "通用多功能",
          tagline: "适用于多行业的标准化通用型包装",
          description: "结构均衡的功能性设计，能快速适应零售分装、仓储周转、农产品收纳及家庭使用等各类实际场景。",
          image: commonImages.multiusos,
          density: "高密度聚乙烯 (HDPE)",
          features: ["广泛适用于多行业包装流程", "经过实际严苛力学测试", "商贸、物流与日常生活兼备", "尺寸丰富，灵活配套"],
        },
        {
          id: "bolsas-papelera",
          name: "室内纸篓与小型垃圾分类袋",
          category: "清洁卫生",
          tagline: "办公场所与室内空间的卫生解决方案",
          description: "专为标准办公纸篓、写字楼卫生间及酒店客房垃圾桶量身设计，边缘贴合严整，抽取便利，保持环境干净整洁。",
          image: commonImages.papelera,
          density: "高密度聚乙烯 (HDPE)",
          features: ["精准贴合各类标准规格纸篓", "耐撕裂材质，防渗漏底封", "整洁小巧，收纳美观", "轻便经济，更换快捷"],
        },
        {
          id: "bolsas-para-cesta",
          name: "果蔬周转筐专用内衬袋",
          category: "通用多功能",
          tagline: "保护农产品与果蔬生鲜的筐装内衬",
          description: "精准匹配农贸批发塑料周转箱尺寸，有效防止果蔬碰撞擦伤及外界灰尘污染，透光性好方便快速核点货品。",
          image: commonImages.cesta,
          density: "低密度聚乙烯 (LDPE)",
          features: ["完美匹配主流市场周转筐", "透明可视，便于质检与清点", "承重耐磨，耐受长途物流颠簸", "可多次循环利用，持久结实"],
        },
        {
          id: "bolsas-para-hielo",
          name: "耐低温专业冰块包装袋",
          category: "冷链食品",
          tagline: "低温冷冻专用防脆化高强度配方",
          description: "针对零下深冷环境调配专用改性配方，在极寒条件下保持柔韧不脆裂，底部加强密封结构能抵御尖锐冰角冲击与搬运撞击。",
          image: commonImages.hielo,
          density: "低密度聚乙烯 (LDPE)",
          features: ["耐低温冷冻，不硬化不脆裂", "高抗穿刺，防止尖锐碎冰刺穿", "超加强底封，防跌落爆底", "现货提供2公斤、3公斤与5公斤容量"],
        },
        {
          id: "bolsas-para-pan",
          name: "微孔透气面包烘焙袋",
          category: "冷链食品",
          tagline: "科学微孔透气设计，长久锁住面包酥脆风味",
          description: "专为热面包设计的微孔低密度袋，能科学散逸多余湿热水汽，杜绝包装内部产生冷凝水，保持面包外皮酥脆与原有烘焙香气。",
          image: commonImages.pan,
          density: "低密度聚乙烯 (LDPE)",
          features: ["均匀透气微孔，科学控湿", "食品接触级原料，安全卫生", "防止表皮回软，延长酥脆期", "规格丰富，满足长棍及切片面包"],
        },
        {
          id: "bolsas-para-pulpa",
          name: "天然鲜果浆与果汁冷冻袋",
          category: "冷链食品",
          tagline: "严密阻隔，锁住天然原浆的新鲜风味",
          description: "适合天然鲜果肉原浆的卫生灌装、冷藏及冷冻运输。封口致密可靠，有效隔绝外界杂质与异味串味。",
          image: commonImages.pulpa,
          density: "低密度聚乙烯 (LDPE)",
          features: ["专为流体果浆与冷冻果泥设计", "气密性极佳，防止液体渗漏", "符合食品级卫生标准", "持久保鲜，锁住果香与养分"],
        },
        {
          id: "bolsas-tipo-cono",
          name: "锥形糖果与零食展示袋",
          category: "冷链食品",
          tagline: "高透明三角锥形设计，打造吸睛陈列效果",
          description: "独特的三角形锥形外观，常用于高档糖果、坚果、爆米花和调味零食。将高透光陈列美感与防潮防尘功能完美结合。",
          image: commonImages.tipoCono,
          density: "低密度聚乙烯 (LDPE)",
          features: ["高精度三角形立体热封工艺", "玻璃般通透视觉效果", "优良防潮阻隔，保持食物爽脆", "终端货架极具吸引力的包装造型"],
        },
      ],
    },
    footer: {
      desc: "专业高低密度塑料软包装生产制造基地，坐落于委内瑞拉塔奇拉州乌雷尼亚工业区，服务委内瑞拉全国及拉美商贸市场。",
      omkaPartner: "OMKA包装集团核心制造生产联盟单位",
      quickNav: "快速导航",
      linesTitle: "主要生产系列",
      lines: [
        "精品手提袋 (商超及零售专柜)",
        "锥形袋 (糖果与休闲小食包装)",
        "微孔透气专用面包包装袋",
        "高强度耐低温专业冰块袋",
        "市政清洁及工商业垃圾袋",
      ],
      rights: "Americana del Plástico C.A. 保留所有权利。",
      originFooter: "塔奇拉州乌雷尼亚工业区 • 委内瑞拉本土制造",
    },
    whatsapp: {
      message: "您好！我正在浏览Americana del Plástico官方网站，希望咨询大宗产品批发订单与出口报价。",
      tooltip: "在WhatsApp上与我们交谈！",
    },
  },
};

export function getTranslations(lang?: string): TranslationSchema {
  const normalized = (lang || 'es').toLowerCase();
  if (normalized.startsWith('zh')) return translations.zh;
  if (normalized.startsWith('en')) return translations.en;
  return translations.es;
}

export function getLocalePath(locale: Locale): string {
  if (locale === 'es') return '/';
  return `/${locale}`;
}
