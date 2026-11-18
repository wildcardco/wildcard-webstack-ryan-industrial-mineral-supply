export const businessName = 'Industrial Mineral Supply';

export const phoneDisplay = '(708) 895-6070';
export const phoneTel = 'tel:+17088956070';
export const email = 'kevinjr@imsblasting.com';
export const address = '1944 N. Griffith Blvd. Suite C, Griffith, IN 46319';
export const hoursSummary = 'Hours: Mon–Fri 8:00 am–4:00 pm; Sat–Sun closed';
export const tagline = 'Superior quality. Unbeatable service.';
export const experienceLine = 'over 17 years of experience in sandblast supply and service';
export const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=1944+N.+Griffith+Blvd.+Suite+C%2C+Griffith%2C+IN+46319';

export const facebookUrl = 'https://www.facebook.com/profile.php?id=100064210662665';
export const tiktokUrl = 'https://www.tiktok.com/@industrialmineralsupply';

export const previewNotice =
  'Preview notice: sample site. No orders, payments, or messages are processed. Ordering, payment, login, and messaging are not active.';

export const shippingNote =
  'Free shipping to the continental U.S. Alaska, Hawaii, and international orders may be subject to additional shipping charges.';

export const shippingNoteSource =
  'Published on imsblasting.com/shop as “Alaska, Hawaii and international orders may be subject to additional shipping charges,” and on each product page as “Free Shipping.”';

export const returnPolicy = [
  'Because of the nature of our products, and for safety and contamination concerns, all sales are final.',
  'Please be confident in your selections before finalizing your purchase. If there are errors on our part, we\'ll make it right at no additional charge to you.',
  'Please send us an email at kevinjr@imsblasting.com with any issues concerning your order.',
];

export const nav = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'BUY ABRASIVES', href: '/shop' },
] as const;

export const hours = [
  { day: 'Monday', hours: '8:00 am–4:00 pm' },
  { day: 'Tuesday', hours: '8:00 am–4:00 pm' },
  { day: 'Wednesday', hours: '8:00 am–4:00 pm' },
  { day: 'Thursday', hours: '8:00 am–4:00 pm' },
  { day: 'Friday', hours: '8:00 am–4:00 pm' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
] as const;

export const logo = {
  src: '/img/logo-wordmark.png',
  alt: 'Industrial Mineral Supply',
  sourceUrl: 'https://static.wixstatic.com/media/86cebe_c66255e8f25a4292a0f18b44bd30a3f2~mv2.png',
  sourceFile: 'FFF__industrial_mineral_01.png',
  note: 'Confirmed as the live header image on imsblasting.com. The separate mark file is the favicon only.',
};

export const favicon = {
  src: '/img/favicon.png',
  sourceUrl: 'https://static.wixstatic.com/media/85c608_03b66576faf14c5c999e91cb3ff76edd~mv2.png',
  note: 'Mark-only file used at favicon size on the current site. Not the header wordmark.',
};

export const photos = {
  blastRoom: {
    src: '/img/blast-room.jpg',
    alt: 'Blue blast room with an OPEN sign and a red blast pot',
    caption:
      'Blast room at the Griffith shop: a blue enclosure with an OPEN sign, and a red blast pot in front of it.',
    sourceUrl:
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdXLXhoWW6ufzkWzqeo1Tj99Pwekk7UvPbT-LTM9KNZmNP_NNc8w2mkmDtQC2JMKzslwLcjHOnfk5HnqSqD-QkfUU-zznOhLsCAAFWvx60AWdWTQ2YutrLGszIIcBIic1-zf',
    source: 'Google Business Profile photo, viewed before placement',
  },
  paintBooth: {
    src: '/img/paint-booth.jpg',
    alt: 'Open paint booth with green filter panels and a yellow drum',
    caption:
      'Paint booth with the doors open, green filter panels inside, and a yellow drum beside the booth.',
    sourceUrl:
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdL0xOHEnYo6BE-jDO8EIyGRGCg4QevUcMthpuYCYjIpKrV2S0Z_MskSH-E8eP9qfVYW44-NFWWiBpMHdUFufAauHKr-fTkSG8pJL6kxzHcQvYt3Vv4-wiJ3rzL2g9O_A9or',
    source: 'Google Business Profile photo, viewed before placement',
  },
  truck: {
    src: '/img/work-truck.jpg',
    alt: 'White Ford stake-bed truck parked at the Griffith shop',
    caption:
      'White Ford stake-bed truck used for pickup and delivery, parked at 1944 N. Griffith Blvd. The door carries the IMS blaster mark used on the truck. The number printed on the door is covered here and is not the contact number. Call (708) 895-6070.',
    sourceUrl:
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf32gegf7FD04J-uNMLucw52CF6Y9Z2qq12H-s8ipbcYRuQhXaxzjNa64Cv8lxmPh1I3HX9Lvi-Zp7NrSxUxFyETnyE5pS6BGCjwFYkgGbNNh3Zc7pduEKUigfXF71Rc7fC-',
    source: 'Google Business Profile photo, viewed before placement. Door number pixelated on the local file.',
  },
} as const;

export const galleryPhotos = [photos.blastRoom, photos.paintBooth, photos.truck];

export type InfoPanel = {
  title: string;
  paragraphs: string[];
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  newArrival: boolean;
  image: string;
  imageAlt: string;
  imageSourceUrl: string;
  pageSourceUrl: string;
  summary: string;
  panels: InfoPanel[];
};

const sharedPanels = {
  shipping: {
    title: 'Shipping',
    paragraphs: [
      shippingNote,
      'Excluding sales tax, as printed on the product page.',
      'This preview does not take orders or payments.',
    ],
  } satisfies InfoPanel,
  returns: {
    title: 'All sales are final',
    paragraphs: returnPolicy,
  } satisfies InfoPanel,
};

const glassNote =
  'Published product description. Approvals named here belong to this product listing. They are not credentials of Industrial Mineral Supply.';

const ureaNote =
  'Published product description. It describes the media. It does not say Industrial Mineral Supply manufactures this product.';

const oxideCopy =
  "Virgin fused brown aluminum oxide abrasives provide a strong, high-density media for blasting your toughest applications. Aluminum Oxide will clean & etch on all types of surfaces including glass, granite, marble, ceramic and steel leaving a beautiful metal finishing. Aluminum Oxide has high density angular shapes making it one of the most versatile blasting medias available. It can be used we or dry. Used for: Surface preparation prior to painting or bonding, Profiling, Cleaning Metal, Engraving, Sand Blasting, Rust or Scale Removal, and Generation of Matte Finishes. Perfect for: Blasting Rooms, Blasting Cabinets and Open-air Blasting. Brown fused aluminum oxide is a tough, hard material (Mohs hardness 9) with high strength, excellent wear and corrosion resistance and good thermal conductivity. It's highly efficient, highly reusable, a non-reactive abrasive, won't interfere with your coatings during surface prep, there's no free silica, lasts 10 times longer than silica, aggressive, coarse grade, high density, packaged in the USA, and is environmentally friendly";

const beadCopy =
  'Glass Bead Media: Are consumed at a slow rate and can survive multiple impacts, allowing for continuous recycling of the media. Are chemically inert and will not leave ferrous or other undesirable residues on the surface of the workpiece. Impart a controlled, clean finish on a variety of metals. Clean quickly without significant metal removal.';

export const products: Product[] = [
  {
    slug: 'tru-abrasives-crushed-glass-blast-media-10-lbs-1',
    name: 'Tru Abrasives Crushed Glass Blast Media - 10 lbs.',
    price: '$24.99',
    newArrival: true,
    image: '/img/product-crushed-glass.jpg',
    imageAlt: 'Pile of crushed glass blast media from the Tru Abrasives product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_be07c47afca6412fb994b4dc861d0fc5~mv2.jpg',
    pageSourceUrl:
      'https://www.imsblasting.com/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs-1',
    summary: '10 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      {
        title: 'Description',
        paragraphs: [
          glassNote,
          '100% recycled glass Non-reactive, inert, Fine leaves 0.5 - 1.5 mils profile, Medium leaves 1.0 - 2.5 mils profile Beryllium is not listed on our SDS, White post-blast finish, Translucent white dust for increased visibility, QPL approved (select plants), CARB approved (select plants), SSPC AB-1 Class A, MIL-A-22262B(SH) approved',
        ],
      },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'urea-plastic-blast-media-5-lbs-1',
    name: 'Urea Plastic Blast Media - 5 lbs.',
    price: '$35.99',
    newArrival: true,
    image: '/img/product-urea-plastic.jpg',
    imageAlt: 'Pile of multicolored urea plastic blast media from the urea product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_24dfab61390d45d385dc8c7d6b791d51~mv2.jpeg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/urea-plastic-blast-media-5-lbs-1',
    summary: '5 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      {
        title: 'Description',
        paragraphs: [
          ureaNote,
          'Urea Plastic Blast Media is the most versatile plastic abrasive for stripping paint and removing coatings from cars, aircraft, trucks, trailers, trains, vans, buses and steel. For over 30 years, this company has custom manufactured plastic media abrasives from 100% recycled raw materials for low-cost, environmentally safe paint removal with quick cutting action. Urea plastic blast media is available in multiple mesh sizes. When blasting, optimal blast parameters (psi and nozzle distance) ensure best results. Mil-Spec MIL-P-85891A approved. Urea abrasives also offer excellent solutions for filler applications in a wide variety of industries. Urea media is durable, long-lasting, light-weight and made from 100% recycled materials. Filler applications include paint additives, texturing, thickening and anti-slip aggregates.',
        ],
      },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'aluminum-oxide-8-lbs-box',
    name: 'Aluminum Oxide - 8 lbs. BOX',
    price: '$25.99',
    newArrival: true,
    image: '/img/product-aluminum-oxide.jpg',
    imageAlt: 'Dark aluminum oxide grit with a penny for scale, from the 8 lb box product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_047d7bdc030f4150836fdf3dafd9d2a5~mv2.jpg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/aluminum-oxide-8-lbs-box',
    summary: '8 lb box. Stock unverified. No description is published. Price as listed on imsblasting.com.',
    panels: [sharedPanels.shipping, sharedPanels.returns],
  },
  {
    slug: 'glass-beads-blast-media-40-lbs',
    name: 'Glass Beads Blast Media - 40 lbs.',
    price: '$79.99',
    newArrival: true,
    image: '/img/product-glass-beads.png',
    imageAlt: 'Fine light-gray glass bead blast media with a penny for scale, from the glass bead product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_4a74a602ea874099b8c1478919601f4b~mv2.png',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/glass-beads-blast-media-40-lbs',
    summary: '40 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      { title: 'Description', paragraphs: [beadCopy] },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'aluminum-oxide-50-lbs',
    name: 'Aluminum Oxide Blast Media - 50 lbs.',
    price: '$114.99',
    newArrival: true,
    image: '/img/product-aluminum-oxide-brown.jpg',
    imageAlt: 'Brown aluminum oxide grit with a penny for scale, from the brown aluminum oxide product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_b1edb47082d04da1b7bb69c2e6a3bac1~mv2.jpg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/aluminum-oxide-50-lbs',
    summary: '50 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      { title: 'Description', paragraphs: [oxideCopy] },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'tru-abrasives-crushed-glass-blast-media-10-lbs',
    name: 'Tru Abrasives Crushed Glass Blast Media - 40 lbs.',
    price: '$49.99',
    newArrival: false,
    image: '/img/product-crushed-glass.jpg',
    imageAlt: 'Pile of crushed glass blast media from the Tru Abrasives product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_be07c47afca6412fb994b4dc861d0fc5~mv2.jpg',
    pageSourceUrl:
      'https://www.imsblasting.com/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs',
    summary: '40 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      {
        title: 'Description',
        paragraphs: [
          glassNote,
          '100% recycled glass Non-reactive, inert, Fine leaves 0.5 - 1.5 mils profile, Beryllium is not listed on our SDS, White post-blast finish, Translucent white dust for increased visibility, QPL approved (select plants), CARB approved (select plants), SSPC AB-1 Class A, MIL-A-22262B(SH) approved',
        ],
      },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'walnut-shells-blast-media-5-lbs',
    name: 'Walnut Shells Blast Media - 15 lbs.',
    price: '$49.99',
    newArrival: false,
    image: '/img/product-walnut-shells.jpg',
    imageAlt: 'Crushed walnut shell blast media with a penny for scale, from the walnut shell product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_00abea0a1b9c4cb3b2096f16535cbe20~mv2.jpg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/walnut-shells-blast-media-5-lbs',
    summary: '15 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      {
        title: 'Description',
        paragraphs: [
          "Industrial Mineral Supply crushed walnut shell media is a natural, soft abrasive made from California English walnut shells, screened to size and packaged at our shop in Griffith, Indiana. We've run a commercial blasting and coating operation for years and this is the same walnut we use on our own jobs. Walnut shell is the standard choice when you need to clean without damaging: carbon buildup on intake valves and pistons, paint and grime on aluminum and brass, old finishes on wood and fiberglass, and case cleaning for reloaders who want bright brass without the mess of wet tumbling. It is 100% crushed walnut shell with no plastics or additives, non-toxic, and can be reused many cycles before it breaks down into dust. Choosing a grit: 12/20 Coarse cuts fastest — use it for cabinet blasting, walnut blaster machines and heavy carbon. 18/40 Medium is the all-purpose size for brass tumbling, deburring and light blasting. 35/60 Fine is for polish cycles, rock tumblers and jewelry. 40/100 Extra Fine gives a final dry polish and works as a dense craft filler. Available in 5 lb (4.5 lb for fine grits) resealable jars and 15 lb bulk boxes. If you're not sure which grit fits your job, message us — you'll get an answer from someone who blasts for a living.",
        ],
      },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'urea-plastic-blast-media-5-lbs',
    name: 'Urea Plastic Blast Media - 20 lbs.',
    price: '$124.99',
    newArrival: false,
    image: '/img/product-urea-plastic.jpg',
    imageAlt: 'Pile of multicolored urea plastic blast media from the urea product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_24dfab61390d45d385dc8c7d6b791d51~mv2.jpeg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/urea-plastic-blast-media-5-lbs',
    summary: '20 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      {
        title: 'Description',
        paragraphs: [
          ureaNote,
          'Urea Plastic Blast Media is the most versatile plastic abrasive for stripping paint and removing coatings from cars, aircraft, trucks, trailers, trains, vans, buses and steel. For over 30 years, this company has custom manufactured plastic media abrasives from 100% recycled raw materials for low-cost, environmentally safe paint removal with quick cutting action. Urea plastic blast media is available in a 20/30 mesh size which is a medium grade. When blasting, optimal blast parameters (psi and nozzle distance) ensure best results. Mil-Spec MIL-P-85891A approved. Urea abrasives also offer excellent solutions for filler applications in a wide variety of industries. Urea media is durable, long-lasting, light-weight and made from 100% recycled materials. Filler applications include paint additives, texturing, thickening and anti-slip aggregates.',
        ],
      },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'glass-beads-blast-media-10-lbs',
    name: 'Glass Beads Blast Media - 10 lbs.',
    price: '$30.99',
    newArrival: false,
    image: '/img/product-glass-beads.png',
    imageAlt: 'Fine light-gray glass bead blast media with a penny for scale, from the glass bead product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_4a74a602ea874099b8c1478919601f4b~mv2.png',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/glass-beads-blast-media-10-lbs',
    summary: '10 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      { title: 'Description', paragraphs: [beadCopy] },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
  {
    slug: 'aluminum-oxide-blast-media-12-lbs',
    name: 'Aluminum Oxide Blast Media - 12 lbs.',
    price: '$34.99',
    newArrival: false,
    image: '/img/product-aluminum-oxide-brown.jpg',
    imageAlt: 'Brown aluminum oxide grit with a penny for scale, from the brown aluminum oxide product page',
    imageSourceUrl:
      'https://static.wixstatic.com/media/85c608_b1edb47082d04da1b7bb69c2e6a3bac1~mv2.jpg',
    pageSourceUrl: 'https://www.imsblasting.com/product-page/aluminum-oxide-blast-media-12-lbs',
    summary: '12 lb listing. Stock unverified. Price as listed on imsblasting.com.',
    panels: [
      { title: 'Description', paragraphs: [oxideCopy] },
      sharedPanels.shipping,
      sharedPanels.returns,
    ],
  },
];

export const serviceCards = [
  {
    title: 'Media blasting',
    text: 'Removes paint, rust, and residue from oxidation.',
    href: '/services?tab=blasting',
    badge: '',
  },
  {
    title: 'Glass bead',
    text: 'Less aggressive than sandblasting. Leaves a uniform satin finish on stainless steel.',
    href: '/services?tab=glass',
    badge: '',
  },
  {
    title: 'Plastic media',
    text: 'A preferred method for aviation. Leaves no surface deformation.',
    href: '/services?tab=plastic',
    badge: '',
  },
  {
    title: 'Industrial painting',
    text: 'Newly added. Zinc primers and epoxy paints on pipes, pumps, and frames.',
    href: '/services?tab=painting',
    badge: 'Newly added',
  },
] as const;
