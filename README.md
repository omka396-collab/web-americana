# Americana del Plástico C.A. — Landing Page

Sitio web oficial y landing page de alta conversión para **Americana del Plástico C.A.**, fábrica especializada en la extrusión, sellado y confección de bolsas plásticas y empaques en alta y baja densidad (HDPE/LDPE) ubicada en la Zona Industrial de Ureña, Estado Táchira, Venezuela.

---

## 🚀 Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (v5 / modern Islands Architecture)
- **Estilos & UI:** [Tailwind CSS v4](https://tailwindcss.com/) vía `@tailwindcss/vite`
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Iconografía & Gráficos:** SVG inline optimizado (zero runtime overhead)
- **Optimización de Activos:** WebP y compresión responsiva de imágenes

---

## 📂 Estructura del Proyecto

```text
americana-del-plastico/
├── public/
│   ├── encabezado.webp                 # Fondo hero institucional
│   ├── omka-logo.jpg                   # Logo del grupo OMKA
│   ├── favicon.ico / favicon.svg       # Favicons del sitio
│   └── images/
│       ├── factory/
│       │   ├── americana-fabrica.webp  # Fachada e instalaciones en Ureña
│       │   └── logo-americana.jpg      # Logo oficial de la fábrica
│       └── products/
│           ├── bolsas-boutique.webp    # Línea Retail y Boutique
│           ├── bolsa-tipo-cono.webp    # Línea Confitería y Snacks
│           ├── bolsas-para-pan.jpg     # Línea Panadería Microperforada
│           └── bolsa-para-hielo.webp   # Línea Frigorífica y Hielo
├── src/
│   ├── components/
│   │   ├── Navbar.astro                # Encabezado fijo con menú responsive accesible
│   │   ├── Hero.astro                  # Presentación, propuesta de valor y métricas
│   │   ├── About.astro                 # Historia, identidad cultural y estándares
│   │   ├── Products.astro              # Catálogo interactivo con modal de zoom
│   │   ├── Infrastructure.astro        # Maquinaria, sede industrial y mapa satelital
│   │   ├── Trajectory.astro            # Línea de tiempo y expansión nacional
│   │   ├── Contact.astro               # Formulario de cotización y canales directos
│   │   ├── WhatsAppButton.astro        # Botón flotante accesible con feedback visual
│   │   └── Footer.astro                # Pie corporativo con enlaces y aviso legal
│   ├── data/
│   │   └── siteData.ts                 # Contenido estructurado y desacoplado
│   ├── layouts/
│   │   └── Layout.astro                # Layout principal HTML5 con OpenGraph y SEO
│   ├── pages/
│   │   └── index.astro                 # Single Page Landing Page
│   └── styles/
│       └── global.css                  # Variables de tema Tailwind v4 y estilos base
├── astro.config.mjs                    # Configuración Astro + Vite Tailwind v4
├── package.json                        # Scripts y dependencias
└── tsconfig.json                       # Configuración estricta de TypeScript
```

---

## 🛠️ Comandos de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
cd americana-del-plastico
npm run dev
```

El servidor estará disponible por defecto en:
`http://localhost:4321`

---

## 📋 Componentes y Secciones

1. **Header & Navigation (`Navbar.astro`):** Navegación fija con efecto blur, logo oficial, enlaces ancla con scroll suave y menú desplegable para dispositivos móviles.
2. **Hero Section (`Hero.astro`):** Título principal, badge de origen industrial en Táchira, propuesta de valor, accesos directos y barra de métricas clave (+8 años, 100% producción nacional, cobertura nacional).
3. **¿Quiénes somos? (`About.astro`):** Respaldo de trayectoria (desde Junio 2017), identidad cotidiana de la bolsa plástica en Venezuela y pilares de calidad.
4. **Catálogo de Productos (`Products.astro`):** Fichas técnicas (densidad, especificaciones, usos recomendados) y visor interactivo tipo Lightbox accesible para ampliación de fotos.
5. **Maquinaria y Planta (`Infrastructure.astro`):** Detalle técnico de extrusión y sellado, foto real de la planta y mapa interactivo de Google Maps embebido.
6. **Trayectoria y Expansión (`Trajectory.astro`):** Línea de tiempo desde la fundación en Ureña hasta la expansión a Caracas y red nacional de distribución.
7. **Contacto & Cotizaciones (`Contact.astro`):** Formulario dinámico para solicitud de presupuestos al mayor con validación, feedback en pantalla y enlace para continuar por WhatsApp.
8. **Botón Flotante (`WhatsAppButton.astro`):** Acceso rápido con pulso de atención y tooltip informativo.
9. **Footer (`Footer.astro`):** Enlaces rápidos, mención a la alianza con OMKA y derechos reservados.
