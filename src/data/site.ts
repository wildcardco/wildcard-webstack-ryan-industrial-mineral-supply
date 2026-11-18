/** Facts from the approved brief and the live Wix catalog. Source URLs stay in comments. */

export const business = {
  name: "Industrial Mineral Supply",
  short: "IMS Blasting",
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
  hoursSchema: "Mo-Fr 08:00-16:00",
  rating: "4.7",
  reviewCount: "6",
  facebook: "https://www.facebook.com/profile.php?id=100064210662665",
  tiktok: "https://www.tiktok.com/@industrialmineralsupply",
  // Logo: https://static.wixstatic.com/media/86cebe_c66255e8f25a4292a0f18b44bd30a3f2~mv2.png
  logo: "/img/logo.png",
  // Mark: https://static.wixstatic.com/media/85c608_03b66576faf14c5c999e91cb3ff76edd~mv2.png
  mark: "/img/mark.png",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Buy Abrasives" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const cta = { href: "/contact#quote", label: "Get a quote" } as const;

export const shipping = [
  "Free shipping to the continental U.S.",
  "Alaska, Hawaii, and international orders may cost extra.",
  "Prices exclude sales tax.",
] as const;

export const returnPolicy = [
  "All sales are final, for safety and contamination reasons.",
  "Be confident in your selections before you buy.",
  "If we make an error, we make it right at no charge.",
  "Email kevinjr@imsblasting.com with any order issue.",
] as const;

export type Product = {
  name: string;
  path: string;
  price: string;
  category: string;
  image: string;
  sizesLabel: string;
  sizes: string[];
  paragraphs: string[];
  returns: boolean;
};

export const categories = [
  { name: "Crushed glass", range: "$24.99–$49.99", note: "Recycled glass for a white finish." },
  { name: "Urea plastic", range: "$35.99–$124.99", note: "For aviation parts. Zero surface deformation." },
  { name: "Aluminum oxide", range: "$25.99–$114.99", note: "Angular media for tough surfaces." },
  { name: "Glass beads", range: "$30.99–$79.99", note: "A gentler blast and a satin finish." },
  { name: "Walnut shells", range: "$49.99", note: "Soft media, packaged in Griffith." },
] as const;

const glassFine = [
  "100% recycled glass. Non-reactive and inert.",
  "Fine leaves a 0.5 to 1.5 mil profile.",
  "White post-blast finish with translucent white dust.",
  "Beryllium is not listed on the SDS.",
  "QPL and CARB approved at select plants.",
  "SSPC AB-1 Class A and MIL-A-22262B(SH) approved.",
];

const beads = [
  "Glass bead is consumed slowly and survives multiple impacts.",
  "It can be recycled through many passes.",
  "Chemically inert, with no ferrous residue on the part.",
  "It leaves a controlled finish on many metals.",
  "It cleans quickly without much metal removal.",
];

const oxide = [
  "Virgin fused brown aluminum oxide for tough blasting.",
  "Strong, high-density, angular media.",
  "It cleans and etches glass, granite, marble, ceramic, and steel.",
  "Use it wet or dry.",
  "Mohs hardness 9. No free silica. Packaged in the USA.",
  "Lasts 10 times longer than silica.",
  "It preps surfaces, profiles metal, and removes rust or scale.",
  "For blast rooms, cabinets, and open-air blasting.",
];

export const products: Product[] = [
  {
    name: "Tru Abrasives Crushed Glass Blast Media - 10 lbs.",
    path: "/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs-1",
    price: "$24.99",
    category: "Crushed glass",
    image: "/img/products/tru-abrasives-crushed-glass-blast-media-10-lbs-1.jpg",
    sizesLabel: "Sizes",
    sizes: ["40/70", "70/100"],
    paragraphs: [
      ...glassFine.slice(0, 1),
      "Fine leaves a 0.5 to 1.5 mil profile. Medium leaves 1.0 to 2.5 mils.",
      ...glassFine.slice(2),
    ],
    returns: true,
  },
  {
    name: "Urea Plastic Blast Media - 5 lbs.",
    path: "/product-page/urea-plastic-blast-media-5-lbs-1",
    price: "$35.99",
    category: "Urea plastic",
    image: "/img/products/urea-plastic-blast-media-5-lbs-1.jpg",
    sizesLabel: "Sizes",
    sizes: ["12/16", "20/30", "40/60"],
    paragraphs: [
      "A versatile plastic abrasive for stripping paint and coatings.",
      "Used on cars, aircraft, trucks, trailers, trains, vans, buses, and steel.",
      "Made from 100% recycled raw materials.",
      "The maker has produced this media for over 30 years.",
      "Sold in multiple mesh sizes. MIL-P-85891A approved.",
      "Also used as a filler for texture, thickeners, and anti-slip.",
    ],
    returns: true,
  },
  {
    name: "Aluminum Oxide - 8 lbs. BOX",
    path: "/product-page/aluminum-oxide-8-lbs-box",
    price: "$25.99",
    category: "Aluminum oxide",
    image: "/img/products/aluminum-oxide-8-lbs-box.jpg",
    sizesLabel: "Grit Sizes",
    sizes: ["#100", "#120", "#150", "#16", "#180", "#220", "#24", "#240", "#320", "#46", "#36", "#80", "#60"],
    paragraphs: [],
    returns: false,
  },
  {
    name: "Glass Beads Blast Media - 40 lbs.",
    path: "/product-page/glass-beads-blast-media-40-lbs",
    price: "$79.99",
    category: "Glass beads",
    image: "/img/products/glass-beads-blast-media-40-lbs.jpg",
    sizesLabel: "Sizes",
    sizes: ["#4", "#6", "#8", "#10", "#12"],
    paragraphs: beads,
    returns: true,
  },
  {
    name: "Aluminum Oxide Blast Media - 50 lbs.",
    path: "/product-page/aluminum-oxide-50-lbs",
    price: "$114.99",
    category: "Aluminum oxide",
    image: "/img/products/aluminum-oxide-50-lbs.jpg",
    sizesLabel: "Grit Sizes",
    sizes: ["#100", "#150", "#16", "#180", "#220", "#24", "#240", "#36", "#46", "#60", "#80", "#120"],
    paragraphs: oxide,
    returns: true,
  },
  {
    name: "Tru Abrasives Crushed Glass Blast Media - 40 lbs.",
    path: "/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs",
    price: "$49.99",
    category: "Crushed glass",
    image: "/img/products/tru-abrasives-crushed-glass-blast-media-10-lbs.jpg",
    sizesLabel: "Sizes",
    sizes: ["40/70", "70/100"],
    paragraphs: glassFine,
    returns: true,
  },
  {
    name: "Walnut Shells Blast Media - 15 lbs.",
    path: "/product-page/walnut-shells-blast-media-5-lbs",
    price: "$49.99",
    category: "Walnut shells",
    image: "/img/products/walnut-shells-blast-media-5-lbs.jpg",
    sizesLabel: "Sizes",
    sizes: ["12/20", "18/40"],
    paragraphs: [
      "Crushed California English walnut shells, screened and packaged in Griffith, Indiana.",
      "This is the same walnut the shop uses on its own blasting jobs.",
      "It is 100% walnut shell, non-toxic, with no plastics or additives.",
      "It cleans carbon, paint, and grime, and can be reused for many cycles.",
      "12/20 is the coarse cut. 18/40 is the medium, all-purpose size.",
      "The listing also names 35/60 and 40/100 for polish work.",
      "Sold in 5 lb jars and 15 lb boxes.",
    ],
    returns: true,
  },
  {
    name: "Urea Plastic Blast Media - 20 lbs.",
    path: "/product-page/urea-plastic-blast-media-5-lbs",
    price: "$124.99",
    category: "Urea plastic",
    image: "/img/products/urea-plastic-blast-media-5-lbs.jpg",
    sizesLabel: "Sizes",
    sizes: ["12/16", "20/30", "40/60"],
    paragraphs: [
      "A versatile plastic abrasive for stripping paint and coatings.",
      "Used on cars, aircraft, trucks, trailers, trains, vans, buses, and steel.",
      "Made from 100% recycled raw materials.",
      "The maker has produced this media for over 30 years.",
      "20/30 mesh is the medium grade. MIL-P-85891A approved.",
      "Also used as a filler for texture, thickeners, and anti-slip.",
    ],
    returns: true,
  },
  {
    name: "Glass Beads Blast Media - 10 lbs.",
    path: "/product-page/glass-beads-blast-media-10-lbs",
    price: "$30.99",
    category: "Glass beads",
    image: "/img/products/glass-beads-blast-media-10-lbs.jpg",
    sizesLabel: "Sizes",
    sizes: ["#4", "#6", "#8", "#10", "#12"],
    paragraphs: beads,
    returns: true,
  },
  {
    name: "Aluminum Oxide Blast Media - 12 lbs.",
    path: "/product-page/aluminum-oxide-blast-media-12-lbs",
    price: "$34.99",
    category: "Aluminum oxide",
    image: "/img/products/aluminum-oxide-blast-media-12-lbs.jpg",
    sizesLabel: "Grit Sizes",
    sizes: ["#16", "#24", "#36", "#46", "#60", "#80", "#100", "#120", "#150", "#180", "#220", "#240", "#320"],
    paragraphs: oxide,
    returns: true,
  },
];

export const services = [
  {
    title: "Sandblasting",
    text: "Abrasive sprayed at high pressure. It strips paint, rust, and oxidation.",
    icon: "wind",
  },
  {
    title: "Glass bead",
    text: "Gentler than sandblasting. It polishes stainless to a uniform satin finish.",
    icon: "bead",
  },
  {
    title: "Plastic media",
    text: "Plastic media for aviation parts. Zero surface deformation.",
    icon: "plane",
  },
  {
    title: "Industrial painting",
    text: "Pipes, pumps, and frames. Zinc primer and epoxy finishes.",
    icon: "paint",
  },
  {
    title: "Pickup and delivery",
    text: "We cover Chicagoland and Northwest Indiana.",
    icon: "truck",
  },
] as const;

export const retailService = {
  title: "Retail blast media",
  text: "Crushed glass, urea plastic, aluminum oxide, glass beads, and walnut shells.",
} as const;

export const faqs = [
  {
    q: "Where do you pick up and deliver?",
    a: "Chicagoland and Northwest Indiana.",
  },
  {
    q: "How much can the truck haul?",
    a: "16 ft bed, 9,000 lb max load, and a 12,000 lb lift.",
  },
  {
    q: "What are your hours?",
    a: "Mon–Fri 8:00 am–4:00 pm. Sat–Sun closed.",
  },
  {
    q: "Do you ship blast media?",
    a: "Free shipping in the continental U.S. Alaska, Hawaii, and international orders may cost extra.",
  },
  {
    q: "Are prices taxed?",
    a: "Prices exclude sales tax.",
  },
  {
    q: "Can unused media be returned?",
    a: "All sales are final, for safety and contamination. If we make an error, we make it right.",
  },
] as const;

export const gallery = [
  {
    src: "/img/hopper.jpg",
    alt: "Finished metal hopper in the Griffith shop.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/img/hood.jpg",
    alt: "Vehicle hood, rusted on one side and primed on the other.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/img/part.jpg",
    alt: "Blasted metal part.",
    width: 1600,
    height: 504,
  },
  {
    src: "/img/hero-tank.jpg",
    alt: "Vertical tank, half raw steel and half primed.",
    width: 1505,
    height: 2826,
  },
  {
    src: "/img/paint-booth.jpg",
    alt: "Paint booth at the shop.",
    width: 600,
    height: 400,
  },
] as const;

export const quoteSubjects = [
  "Sandblasting / media blasting",
  "Glass bead blasting",
  "Plastic media blasting",
  "Industrial painting",
  "Pickup and delivery",
  "Blast media order",
] as const;

export function productByPath(path: string) {
  return products.find((item) => item.path === path);
}
