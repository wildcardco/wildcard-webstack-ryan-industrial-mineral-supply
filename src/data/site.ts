/** Live facts for Industrial Mineral Supply. Photo files are local copies of the shop's own images. */

export const business = {
  name: "Industrial Mineral Supply",
  phone: "(708) 895-6070",
  phoneHref: "tel:+17088956070",
  email: "kevinjr@imsblasting.com",
  emailHref: "mailto:kevinjr@imsblasting.com",
  address: "1944 N. Griffith Blvd. Suite C, Griffith, IN 46319",
  street: "1944 N. Griffith Blvd. Suite C",
  city: "Griffith",
  region: "IN",
  postal: "46319",
  hours: "Mon–Fri 8:00 am–4:00 pm; Sat–Sun closed",
  tagline: "Superior quality. Unbeatable service.",
  facebook: "https://www.facebook.com/profile.php?id=100064210662665",
  tiktok: "https://www.tiktok.com/@industrialmineralsupply",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-87.4389%2C41.5491%2C-87.4189%2C41.5651&layer=mapnik&marker=41.5571088%2C-87.4289420",
  mapLink:
    "https://www.openstreetmap.org/?mlat=41.5571088&mlon=-87.4289420#map=17/41.5571088/-87.4289420",
  // Coordinates from Nominatim for 1944 North Griffith Boulevard, Griffith, IN 46319.
};

export interface SizeOption {
  label: string;
  price?: string;
}

export interface Product {
  slug: string;
  name: string;
  price: string;
  priceValue: string;
  category: string;
  categoryId: string;
  image: string;
  /** Original Wix product photo. Shown locally; kept for schema only. */
  imageSource: string;
  note?: string;
  paragraphs: string[];
  chips: string[];
  sizes: SizeOption[];
  sizeLabel: string;
}

export const products: Product[] = [
  {
    slug: "tru-abrasives-crushed-glass-blast-media-10-lbs-1",
    name: "Tru Abrasives Crushed Glass Blast Media - 10 lbs.",
    price: "$24.99",
    priceValue: "24.99",
    category: "Crushed glass",
    categoryId: "crushed-glass",
    image: "/img/crushed-glass.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_be07c47afca6412fb994b4dc861d0fc5~mv2.jpg",
    paragraphs: [
      "100% recycled glass. Non-reactive and inert.",
      "Fine profile is 0.5–1.5 mils. Medium profile is 1.0–2.5 mils.",
      "White post-blast finish with translucent dust.",
    ],
    chips: [
      "No beryllium on the SDS",
      "QPL approved at select plants",
      "CARB approved at select plants",
      "SSPC AB-1 Class A",
      "MIL-A-22262B(SH)",
    ],
    sizes: [{ label: "40/70" }, { label: "70/100" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "tru-abrasives-crushed-glass-blast-media-10-lbs",
    name: "Tru Abrasives Crushed Glass Blast Media - 40 lbs.",
    price: "$49.99",
    priceValue: "49.99",
    category: "Crushed glass",
    categoryId: "crushed-glass",
    image: "/img/crushed-glass.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_be07c47afca6412fb994b4dc861d0fc5~mv2.jpg",
    paragraphs: [
      "100% recycled glass. Non-reactive and inert.",
      "Fine profile is 0.5–1.5 mils.",
      "White post-blast finish with translucent dust.",
    ],
    chips: [
      "No beryllium on the SDS",
      "QPL approved at select plants",
      "CARB approved at select plants",
      "SSPC AB-1 Class A",
      "MIL-A-22262B(SH)",
    ],
    sizes: [{ label: "40/70" }, { label: "70/100" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "urea-plastic-blast-media-5-lbs-1",
    name: "Urea Plastic Blast Media - 5 lbs.",
    price: "$35.99",
    priceValue: "35.99",
    category: "Urea plastic",
    categoryId: "urea-plastic",
    image: "/img/urea-plastic.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_24dfab61390d45d385dc8c7d6b791d51~mv2.jpeg",
    paragraphs: [
      "Plastic abrasive for stripping paint from vehicles, aircraft, and steel.",
      "Made from 100% recycled material. Light-weight and long-lasting.",
      "Mil-Spec MIL-P-85891A. Also used as filler and anti-slip aggregate.",
    ],
    chips: ["Cars and trucks", "Aircraft", "Steel", "100% recycled"],
    sizes: [{ label: "12/16" }, { label: "20/30" }, { label: "40/60" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "urea-plastic-blast-media-5-lbs",
    name: "Urea Plastic Blast Media - 20 lbs.",
    price: "$124.99",
    priceValue: "124.99",
    category: "Urea plastic",
    categoryId: "urea-plastic",
    image: "/img/urea-plastic.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_24dfab61390d45d385dc8c7d6b791d51~mv2.jpeg",
    paragraphs: [
      "Plastic abrasive for stripping paint from vehicles, aircraft, and steel.",
      "The 20 lb listing names a 20/30 medium grade, plus the sizes below.",
      "Mil-Spec MIL-P-85891A. Made from 100% recycled material.",
    ],
    chips: ["Cars and trucks", "Aircraft", "Steel", "Filler and anti-slip"],
    sizes: [{ label: "12/16" }, { label: "20/30" }, { label: "40/60" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "aluminum-oxide-8-lbs-box",
    name: "Aluminum Oxide - 8 lbs. BOX",
    price: "$25.99",
    priceValue: "25.99",
    category: "Aluminum oxide",
    categoryId: "aluminum-oxide",
    image: "/img/aluminum-oxide-box.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_047d7bdc030f4150836fdf3dafd9d2a5~mv2.jpg",
    paragraphs: ["Aluminum oxide blast media in an 8 lb box."],
    chips: [],
    sizes: [
      "#16",
      "#24",
      "#36",
      "#46",
      "#60",
      "#80",
      "#100",
      "#120",
      "#150",
      "#180",
      "#220",
      "#240",
      "#320",
    ].map((label) => ({ label })),
    sizeLabel: "Grit sizes",
  },
  {
    slug: "aluminum-oxide-blast-media-12-lbs",
    name: "Aluminum Oxide Blast Media - 12 lbs.",
    price: "$34.99",
    priceValue: "34.99",
    category: "Aluminum oxide",
    categoryId: "aluminum-oxide",
    image: "/img/aluminum-oxide.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_b1edb47082d04da1b7bb69c2e6a3bac1~mv2.jpg",
    note: "#320 grit is $38.99",
    paragraphs: [
      "Virgin fused brown aluminum oxide. Mohs hardness 9.",
      "Cleans glass, granite, marble, ceramic, and steel.",
      "Reusable, no free silica, and packaged in the USA.",
      "Used wet or dry in rooms, cabinets, and open air.",
    ],
    chips: ["Surface prep", "Profiling", "Cleaning metal", "Engraving", "Rust removal", "Matte finish"],
    sizes: [
      ...["#16", "#24", "#36", "#46", "#60", "#80", "#100", "#120", "#150", "#180", "#220", "#240"].map(
        (label) => ({ label, price: "$34.99" }),
      ),
      { label: "#320", price: "$38.99" },
    ],
    sizeLabel: "Grit sizes",
  },
  {
    slug: "aluminum-oxide-50-lbs",
    name: "Aluminum Oxide Blast Media - 50 lbs.",
    price: "$114.99",
    priceValue: "114.99",
    category: "Aluminum oxide",
    categoryId: "aluminum-oxide",
    image: "/img/aluminum-oxide.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_b1edb47082d04da1b7bb69c2e6a3bac1~mv2.jpg",
    paragraphs: [
      "Virgin fused brown aluminum oxide. Mohs hardness 9.",
      "Cleans glass, granite, marble, ceramic, and steel.",
      "Reusable, no free silica, and packaged in the USA.",
      "Used wet or dry in rooms, cabinets, and open air.",
    ],
    chips: ["Surface prep", "Profiling", "Cleaning metal", "Engraving", "Rust removal", "Matte finish"],
    sizes: ["#16", "#24", "#36", "#46", "#60", "#80", "#100", "#120", "#150", "#180", "#220", "#240"].map(
      (label) => ({ label }),
    ),
    sizeLabel: "Grit sizes",
  },
  {
    slug: "glass-beads-blast-media-10-lbs",
    name: "Glass Beads Blast Media - 10 lbs.",
    price: "$30.99",
    priceValue: "30.99",
    category: "Glass beads",
    categoryId: "glass-beads",
    image: "/img/glass-beads.png",
    imageSource:
      "https://static.wixstatic.com/media/85c608_4a74a602ea874099b8c1478919601f4b~mv2.png",
    paragraphs: [
      "Recycles across multiple impacts and is chemically inert.",
      "Leaves a clean finish on metal without heavy metal removal.",
    ],
    chips: ["No ferrous residue", "Controlled finish"],
    sizes: [{ label: "#4" }, { label: "#6" }, { label: "#8" }, { label: "#10" }, { label: "#12" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "glass-beads-blast-media-40-lbs",
    name: "Glass Beads Blast Media - 40 lbs.",
    price: "$79.99",
    priceValue: "79.99",
    category: "Glass beads",
    categoryId: "glass-beads",
    image: "/img/glass-beads.png",
    imageSource:
      "https://static.wixstatic.com/media/85c608_4a74a602ea874099b8c1478919601f4b~mv2.png",
    paragraphs: [
      "Recycles across multiple impacts and is chemically inert.",
      "Leaves a clean finish on metal without heavy metal removal.",
    ],
    chips: ["No ferrous residue", "Controlled finish"],
    sizes: [{ label: "#4" }, { label: "#6" }, { label: "#8" }, { label: "#10" }, { label: "#12" }],
    sizeLabel: "Sizes",
  },
  {
    slug: "walnut-shells-blast-media-5-lbs",
    name: "Walnut Shells Blast Media - 15 lbs.",
    price: "$49.99",
    priceValue: "49.99",
    category: "Walnut shells",
    categoryId: "walnut-shells",
    image: "/img/walnut-shells.jpg",
    imageSource:
      "https://static.wixstatic.com/media/85c608_00abea0a1b9c4cb3b2096f16535cbe20~mv2.jpg",
    paragraphs: [
      "California English walnut shells, screened and packaged at the Griffith shop.",
      "Soft abrasive for carbon, paint, and finishes when the part should stay intact.",
      "100% walnut, non-toxic, and reusable for many cycles.",
      "The product notes also list 35/60, 40/100, and 5 lb jars.",
    ],
    chips: ["Intake valves", "Aluminum and brass", "Wood and fiberglass", "Brass tumbling"],
    sizes: [{ label: "12/20" }, { label: "18/40" }],
    sizeLabel: "Sizes",
  },
];

export const categories = [
  {
    id: "crushed-glass",
    name: "Crushed glass",
    range: "$24.99–$49.99",
    image: "/img/crushed-glass.jpg",
    alt: "Crushed glass blast media",
    blurb: "100% recycled glass for a white post-blast finish.",
  },
  {
    id: "glass-beads",
    name: "Glass beads",
    range: "$30.99–$79.99",
    image: "/img/glass-beads.png",
    alt: "Glass bead blast media",
    blurb: "Inert beads for a clean finish on metal.",
  },
  {
    id: "aluminum-oxide",
    name: "Aluminum oxide",
    range: "$25.99–$114.99",
    image: "/img/aluminum-oxide.jpg",
    alt: "Brown aluminum oxide blast media",
    blurb: "Virgin fused brown aluminum oxide.",
  },
  {
    id: "urea-plastic",
    name: "Urea plastic",
    range: "$35.99–$124.99",
    image: "/img/urea-plastic.jpg",
    alt: "Urea plastic blast media",
    blurb: "Plastic media for stripping paint.",
  },
  {
    id: "walnut-shells",
    name: "Walnut shells",
    range: "$49.99",
    image: "/img/walnut-shells.jpg",
    alt: "Crushed walnut shell blast media",
    blurb: "California walnut shells, packed in Griffith.",
  },
];

export const services = [
  {
    id: "sandblasting",
    title: "Sandblasting",
    copy: "Paint, rust, and oxidation come off with media blasting.",
    image: "/img/hopper.jpg",
    alt: "Blasted metal hopper on the shop floor",
    icon: "wind" as const,
  },
  {
    id: "glass-bead",
    title: "Glass bead",
    copy: "Glass bead: satin finish for stainless.",
    image: "/img/weld.jpg",
    alt: "Stainless panel, welded on one side and blasted on the other",
    icon: "bead" as const,
  },
  {
    id: "plastic",
    title: "Plastic media",
    copy: "Plastic media for aviation parts, with no surface deformation.",
    image: "/img/tank.jpg",
    alt: "Vertical tank, dark on one side and blasted on the other",
    icon: "plane" as const,
  },
  {
    id: "painting",
    title: "Industrial painting",
    copy: "Zinc primers and epoxy on pipes, pumps, and frames.",
    image: "/img/hood.jpg",
    alt: "Metal hood, rusted on one side and primed on the other",
    icon: "paint" as const,
  },
];

export const jobs = [
  {
    src: "/img/tank.jpg",
    alt: "Vertical tank, dark on one side and blasted on the other",
    caption: "Tank, blasted on one side",
  },
  {
    src: "/img/hood.jpg",
    alt: "Metal hood, rusted on one side and primed on the other",
    caption: "Hood, rust beside primer",
  },
  {
    src: "/img/weld.jpg",
    alt: "Stainless panel, welded on one side and blasted on the other",
    caption: "Stainless, weld beside blast",
  },
  {
    src: "/img/hopper.jpg",
    alt: "Blasted metal hopper on the shop floor",
    caption: "Blasted hopper",
  },
];

export const faqs = [
  {
    q: "Shipping cost?",
    a: [
      "Free U.S. shipping (continental).",
      "AK, HI, and international may cost extra.",
    ],
  },
  {
    q: "Sales tax?",
    a: ["Prices exclude sales tax."],
  },
  {
    q: "Returns?",
    a: [
      "Because of the nature of our products, and for safety and contamination concerns, all sales are final.",
      "Please be confident in your selections before finalizing your purchase.",
      "If there are errors on our part, we'll make it right at no additional charge to you.",
      "Email kevinjr@imsblasting.com with any issues concerning your order.",
    ],
  },
  {
    q: "Hours?",
    a: ["Mon–Fri 8:00 am–4:00 pm.", "Sat–Sun closed."],
  },
];

export const policyChips = [
  "Free continental U.S. shipping",
  "AK, HI, and international may cost extra",
  "Prices exclude sales tax",
  "All sales final",
];

export function productPath(slug: string) {
  return `/product-page/${slug}`;
}

export function relatedProducts(slug: string) {
  const current = products.find((item) => item.slug === slug);
  if (!current) return [];
  const same = products.filter((item) => item.categoryId === current.categoryId && item.slug !== slug);
  if (same.length) return same;
  return products.filter((item) => item.slug !== slug).slice(0, 3);
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: "+1-708-895-6070",
    email: business.email,
    image: "https://static.wixstatic.com/media/86cebe_c66255e8f25a4292a0f18b44bd30a3f2~mv2.png",
    url: "http://www.imsblasting.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postal,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    areaServed: ["Chicagoland", "Northwest Indiana"],
    sameAs: [business.facebook, business.tiktok],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `http://www.imsblasting.com${item.path}`,
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.imageSource,
    description: product.paragraphs[0],
    brand: { "@type": "Brand", name: business.name },
    offers: {
      "@type": "Offer",
      url: `http://www.imsblasting.com${productPath(product.slug)}`,
      priceCurrency: "USD",
      price: product.priceValue,
    },
  };
}
