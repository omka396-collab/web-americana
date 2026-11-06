const FOUNDING_YEAR = 2017;
export const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  density: 'Alta Densidad (HDPE)' | 'Baja Densidad (LDPE)' | 'Especial';
  features: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export const siteConfig = {
  name: "Americana del Plástico C.A.",
  shortName: "Americana del Plástico",
  title: "Americana del Plástico | Fábrica de bolsas plásticas y empaques en Venezuela",
  description:
    `Expertos en fabricar empaques y bolsas plásticas de alta y baja densidad en Venezuela. Más de ${yearsInBusiness} años de trayectoria desde la zona industrial de Ureña, Estado Táchira.`,
  foundingDate: "Junio 2017",
  authorDescription: "Bolsas plásticas con calidad y tradición venezolana",
  logo: "/images/factory/logo-americana.jpg",
  factoryImage: "/images/factory/americana-fabrica.webp",
  heroBg: "/encabezado.webp",
  omkaLogo: "/omka-logo.jpg",
  address: "Zona Industrial de Ureña, Municipio Pedro María Ureña, Estado Táchira, Venezuela.",
  whatsappNumber: "584140000000", // configurable
  whatsappDefaultMessage: "¡Hola! Me comunico desde la web de Americana del Plástico para consultar por cotizaciones y pedidos al mayor.",
  email: "ventas@americanadelplastico.com",
  phone: "+58 (276) 000-0000",
  socials: {
    instagram: "https://www.instagram.com/omka.tumarca/?hl=es-la",
    facebook: "https://www.facebook.com/omkatumarca",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.9617049081885!2d-72.44157473005643!3d7.927441945513271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e665b8cc062fecb%3A0x8baae573758a7788!2sAmericana%20del%20Pl%C3%A1stico!5e0!3m2!1ses!2sve!4v1758813382853!5m2!1ses!2sve",
};

export const productsData: ProductItem[] = [
  {
    id: "bolsas-boutique",
    name: "Bolsas Boutique",
    category: "Comercio y Retail",
    tagline: "Elegancia, distinción y presencia de marca",
    description:
      "Empaques elegantes de gran resistencia y excelente acabado superficial, diseñados para realzar la imagen de tu marca y comercio ante tus clientes.",
    image: "/images/products/bolsas-boutique.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Acabado brillante y tacto suave",
      "Asa troquelada reforzada",
      "Ideal para tiendas, boutiques y calzado",
      "Alta resistencia al desgarro"
    ],
  },
  {
    id: "bolsas-tipo-cono",
    name: "Bolsas tipo Cono",
    category: "Confitería y Snacks",
    tagline: "Máxima transparencia y frescura garantizada",
    description:
      "Diseño cónico especializado para productos de confitería, dulces, granos y snacks, garantizando frescura hermética y atractiva visibilidad del producto.",
    image: "/images/products/bolsa-tipo-cono.webp",
    density: "Alta Densidad (HDPE)",
    features: [
      "Sellado cónico de alta precisión",
      "Transparencia cristalina",
      "Barrera contra la humedad exterior",
      "Presentación atractiva para punto de venta"
    ],
  },
  {
    id: "bolsas-para-pan",
    name: "Bolsas para Pan",
    category: "Panadería y Alimentos",
    tagline: "Microperforación técnica para conservar corteza y aroma",
    description:
      "Bolsas microperforadas que permiten el escape controlado del vapor, conservando la textura crujiente y el aroma del pan recién horneado sin condensación.",
    image: "/images/products/bolsas-para-pan.jpg",
    density: "Alta Densidad (HDPE)",
    features: [
      "Microperforaciones respirables",
      "Aptas para contacto directo con alimentos",
      "Evita el ablandamiento de la corteza",
      "Gran versatilidad de tamaños"
    ],
  },
  {
    id: "bolsas-para-hielo",
    name: "Bolsas para Hielo",
    category: "Refrigeración y Cadena de Frío",
    tagline: "Resistencia extrema a temperaturas bajo cero",
    description:
      "Material reforzado con formulación antivaho y antipunción, resistente a impactos, temperaturas bajo cero y manipulación ruda durante congelación y transporte.",
    image: "/images/products/bolsa-para-hielo.webp",
    density: "Alta Densidad (HDPE)",
    features: [
      "Tolerancia criogénica sin cristalizarse",
      "Alta resistencia al punzonamiento",
      "Sellos de fondo ultra reforzados",
      "Disponibles en formatos de 2kg, 3kg y 5kg"
    ],
  },
];

export const metricsData: MetricItem[] = [
  {
    value: `+${yearsInBusiness}`,
    label: "Años de Trayectoria",
    sublabel: "Forjando calidad desde 2017",
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
];

export const trajectoryMilestones: MilestoneItem[] = [
  {
    year: "2017",
    title: "Fundación en Ureña, Táchira",
    description:
      "Iniciamos operaciones en la zona industrial de Ureña con el objetivo de elevar la calidad técnica de las bolsas plásticas primarias para la vida cotidiana venezolana.",
  },
  {
    year: "2019",
    title: "Consolidación Regional",
    description:
      "Modernización de líneas de extrusión y sellado. Consolidamos el liderazgo en la región andina y los estados fronterizos.",
  },
  {
    year: "2021",
    title: "Diversificación de Catálogo",
    description:
      "Incorporación de líneas especializadas: bolsas microperforadas para panadería, bolsas boutique para retail y bolsas industriales para hielo.",
  },
  {
    year: "2024 - Presente",
    title: "Expansión a Caracas y Mercado Nacional",
    description:
      "Establecimiento de alianzas estratégicas para llevar nuestros productos a la capital y múltiples estados del territorio venezolano, promoviendo la libre competitividad.",
  },
];
