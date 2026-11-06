const FOUNDING_YEAR = 2017;
export const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  density: 'Alta Densidad (HDPE)' | 'Baja Densidad (LDPE)' | 'Especial' | 'Alta y Baja Densidad';
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
    category: "Multiuso",
    tagline: "Elegancia, distinción y presencia de marca",
    description:
      "Bolsas elegantes y resistentes con diseño exclusivo. Ideales para tiendas y negocios de alta gama que buscan distinción, disponibles con impresión personalizada y acabados especiales (tratadas).",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355182/bolsas-boutique_mb7a5o.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Acabado brillante y tacto suave",
      "Asa troquelada reforzada",
      "Ideal para tiendas, boutiques y calzado",
      "Disponible con impresión personalizada",
    ],
  },
  {
    id: "bolsas-chillonas",
    name: "Bolsas Chillonas",
    category: "Alimentos",
    tagline: "Solución económica para despacho masivo",
    description:
      "Fabricadas con polietileno de Alta Densidad (A/D), caracterizadas por su rigidez, opacidad y el sonido distintivo que les da su nombre. La solución más eficiente para panaderías, abastos y comercios.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766361211/bolsa-chillona_ustw6h_cridy8.jpg",
    density: "Alta Densidad (HDPE)",
    features: [
      "Alta resistencia y rigidez",
      "Presentación plana y con fuelle",
      "Ideal para panaderías y abastos",
      "Disponibles en múltiples calibres por KG",
    ],
  },
  {
    id: "bolsas-con-asa",
    name: "Bolsas Con Asa",
    category: "Alta Densidad",
    tagline: "Resistencia y practicidad para el comercio diario",
    description:
      "Fabricadas con polietileno de Alta Densidad (A/D) para garantizar resistencia y durabilidad en el transporte de mercancía. Ideales para mercados, abastos y comercios en general.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766361060/bolsa-con-asa_ilp8ag.jpg",
    density: "Alta Densidad (HDPE)",
    features: [
      "Asa integrada de alta resistencia",
      "Ideal para mercados y abastos",
      "Múltiples tamaños disponibles",
      "Alta capacidad de carga",
    ],
  },
  {
    id: "bolsas-de-aseo",
    name: "Bolsas de Aseo",
    category: "Limpieza",
    tagline: "Resistencia flexible para uso doméstico e industrial",
    description:
      "Fabricadas con polietileno de Baja Densidad (B/D), ofreciendo una combinación de resistencia y flexibilidad ideal para el manejo de desechos domésticos e industriales.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766360746/bolsa-para-aseo_x5aimp_qqs5ds.jpg",
    density: "Baja Densidad (LDPE)",
    features: [
      "Alta resistencia al desgarro",
      "Flexibilidad para fácil manipulación",
      "Ideal para uso doméstico e industrial",
      "Disponibles en varios tamaños",
    ],
  },
  {
    id: "bolsas-empaques-especiales",
    name: "Bolsas para Empaques",
    category: "Especial",
    tagline: "Transparencia y versatilidad para empaques industriales",
    description:
      "Fabricadas con polietileno de Baja Densidad original. Transparentes, flexibles y de alta resistencia, ideales para empacar una amplia variedad de productos en entornos industriales y comerciales.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764375989/bolsa-para-empaque_gzrz8a.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Transparencia cristalina",
      "Alta flexibilidad y resistencia",
      "Uso industrial y comercial",
      "Variedad de calibres disponibles",
    ],
  },
  {
    id: "bolsas-multiusos",
    name: "Bolsas Multiusos",
    category: "Multiuso",
    tagline: "Versatilidad máxima para cualquier rubro",
    description:
      "Diseño funcional que permite adaptarse a múltiples usos en el comercio, la industria y el hogar. Fabricadas con materiales de alta calidad para garantizar resistencia en cada aplicación.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766893398/bolsa-multiuso_l6rht2.webp",
    density: "Alta Densidad (HDPE)",
    features: [
      "Adaptable a múltiples usos",
      "Resistencia mecánica comprobada",
      "Comercio, industria y hogar",
      "Amplia gama de medidas",
    ],
  },
  {
    id: "bolsas-papelera",
    name: "Bolsas para Papelera",
    category: "Limpieza",
    tagline: "Higiene y contención para oficinas y hogares",
    description:
      "Fabricadas con polietileno de Alta Densidad (A/D), diseñadas para ajustarse perfectamente a papeleras y cestos de residuos en hogares, oficinas y espacios comerciales.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1766360648/bolsa-para-papelera_bzcsjg_fynrtl.jpg",
    density: "Alta Densidad (HDPE)",
    features: [
      "Ajuste perfecto a papeleras estándar",
      "Resistencia al desgarro",
      "Ideal para oficinas y hogares",
      "Presentación limpia y discreta",
    ],
  },
  {
    id: "bolsas-para-cesta",
    name: "Bolsas para Cestas",
    category: "Multiuso",
    tagline: "Cobertura y protección para cestas de mercado",
    description:
      "Fabricadas con polietileno de Baja Densidad original, diseñadas para cubrir y proteger cestas del mercado. Alta resistencia y transparencia que permite visualizar el contenido.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764531601/bolsa-para-cesta_xmzcx7.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Ajuste exacto a cestas de mercado",
      "Transparencia para visualizar contenido",
      "Alta resistencia a la carga",
      "Reutilizable y durable",
    ],
  },
  {
    id: "bolsas-para-hielo",
    name: "Bolsas Para Hielo",
    category: "Alimentos",
    tagline: "Resistencia extrema a temperaturas bajo cero",
    description:
      "Fabricadas con polietileno de Baja Densidad (B/D) de alta calidad, resistentes a impactos, temperaturas criogénicas y manipulación ruda durante congelación y transporte.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355403/bolsa-para-hielo_t0mgsj.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Tolerancia criogénica sin cristalizarse",
      "Alta resistencia al punzonamiento",
      "Sellos de fondo ultra reforzados",
      "Disponibles en 2kg, 3kg y 5kg",
    ],
  },
  {
    id: "bolsas-para-pan",
    name: "Bolsas Para Pan",
    category: "Alimentos",
    tagline: "Microperforación técnica para conservar corteza y aroma",
    description:
      "Bolsas de Baja Densidad (B/D) para pan y bollería. Permiten el escape controlado del vapor, conservando la textura crujiente y el aroma del pan recién horneado sin condensación.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1763759436/bolsas-para-pan_mkdkx1.jpg",
    density: "Baja Densidad (LDPE)",
    features: [
      "Microperforaciones respirables",
      "Aptas para contacto directo con alimentos",
      "Evita el ablandamiento de la corteza",
      "Gran versatilidad de tamaños",
    ],
  },
  {
    id: "bolsas-para-pulpa",
    name: "Bolsas para Pulpa",
    category: "Alimentos",
    tagline: "Conservación óptima de frutas frescas y congeladas",
    description:
      "Medida perfecta para mantener fruta fresca y/o congelada. Fabricadas para preservar la pulpa en condiciones óptimas de higiene y frescura para su distribución y comercialización.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764531621/bolsa-para-frutas_xw0gwj.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Ideal para frutas frescas y congeladas",
      "Cierre hermético seguro",
      "Apta para contacto con alimentos",
      "Conserva frescura y calidad",
    ],
  },
  {
    id: "bolsas-tipo-cono",
    name: "Bolsas Tipo Cono",
    category: "Alimentos",
    tagline: "Máxima transparencia y frescura garantizada",
    description:
      "Fabricadas con polietileno de Baja Densidad original. Diseño cónico especializado para productos de confitería, dulces, granos y snacks, garantizando frescura hermética y atractiva visibilidad.",
    image: "https://res.cloudinary.com/dhenh6bqe/image/upload/v1764355650/bolsa-tipo-cono_wllzqi.webp",
    density: "Baja Densidad (LDPE)",
    features: [
      "Sellado cónico de alta precisión",
      "Transparencia cristalina",
      "Barrera contra la humedad exterior",
      "Presentación atractiva para punto de venta",
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
