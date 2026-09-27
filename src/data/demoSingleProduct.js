import { rand } from "../lib/utils";

export const DEMO_SINGLE_PRODUCT = {
  id: rand(),

  item: {
    brand: "Omega",
    collectionName: "Speedmaster",
    gender: "Mens",
    code: "310.30.42.50.01.001",
    boxType: "Original Box",
    watchLabel: "Swiss Made",
    movement: "Hand Wind",
    engine: "Omega Calibre 3861",
    powerReserve: "50 Hours",
  },

  description: {
    excerpt:
      "Silver-tone stainless steel case and bracelet. Fixed silver-tone stainless steel with an inlaid black aluminium ring bezel. Black dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers.",
    full: "Silver-tone stainless steel case and bracelet. Fixed silver-tone stainless steel with an inlaid black aluminium ring bezel. Black dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Chronograph — three sub-dials displaying: 60 second, 30 minute and 12 hour. Hand wind movement. Scratch resistant hesalite crystal. Pull / push crown. Solid case back. Round case shape. Case size: 42 mm. Case thickness: 13.58 mm. Band width: 20 mm. Deployment clasp. Water resistant at 50 meters / 165 feet. Functions: chronograph, hour, minute, second. Dive watch style. Watch label: Swiss Made. Omega Speedmaster Chronograph Hand Wind Silver Dial Men's Watch 310.30.42.50.01.001.",
  },

  info: {
    title: "Speedmaster Chronograph Hand Wind Black Dial Men's Watch",
    retail: "$7,800.00",
    price: "$6,750.00",
    authenticity: "Authenticity Guaranteed",
    warranty: "4 Year Warranty",
    returns: "30 Day Return Policy",
    inStock: true,
    off: "13%",
    brandNew: true,
    extraCosts: "incl. VAT / Free Shipping",
    message: "⚡ Limited quantity left at this price",
    totalReviews: 124,
  },

  images: [
    {
      id: rand(),
      src: "./images/products/omega-speedmaster-1.jpg",
      alt: "Omega Speedmaster front view",
    },
    {
      id: rand(),

      src: "./images/products/omega-speedmaster-2.jpg",
      alt: "Omega Speedmaster side view",
    },
    {
      id: rand(),

      src: "./images/products/omega-speedmaster-1.jpg",
      alt: "Omega Speedmaster case back",
    },
    {
      id: rand(),

      src: "./images/products/omega-speedmaster-2.jpg",
      alt: "Omega Speedmaster on wrist",
    },
    {
      id: rand(),
      src: "./images/products/omega-speedmaster-1.jpg",
      alt: "Omega Speedmaster dial close-up",
    },
  ],

  case: {
    diameter: "42 mm",
    thickness: "13.58 mm",
    material: "Stainless Steel",
    shape: "Round",
    back: "Solid",
  },

  band: {
    material: "Stainless Steel",
    type: "Bracelet",
    color: "Silver-tone",
    shape: "Round",
    clasp: "Deployment",
  },

  dial: {
    color: "Black",
    type: "Analog",
    crystal: "Hesalite crystal",
    hands: "Silver-tone",
    markers: "Index",
    secondMarkers: "Minute Markers around the outer rim",
    subDials: "Three - 60 Second, 30 Minute and 12 Hour",
    luminescence: "Hands and Markers",
    bezel: "Fixed",
    bezelColor: "Silver-tone",
    bezelMaterial: "Stainless Steel with an inlaid Black Aluminium Ring",
    crown: "Pull / Push",
  },

  features: {
    waterResistance: "50 meters / 165 feet",
    functions: "Chronograph, Hour, Minute, Second",
    watchFeatures: "Analog, Stainless Steel, Chronograph",
  },

  additionalInfo: {
    watchStyle: "Dive",
    warranty: "4 Year Watchvelle Warranty",
    watchFeatures: "Analog, Stainless Steel, Chronograph",
    upcEan: "7612586306747",
  },
};

export const DEMO_SINGLE_PRODUCT_CUSTOMER_FEEDBACKS = [
  {
    id: rand(),
    initials: "HL",
    name: "Henry Lewis",
    rating: 5,
    date: "1 Aug 2026",
    text: "Very impressed with the entire experience. The ordering process was straightforward, delivery was surprisingly quick, and the watch itself feels fantastic on the wrist. Exactly the kind of piece I was looking for.",
  },
  {
    id: rand(),
    initials: "LE",
    name: "Logan Edwards",
    rating: 5,
    date: "11 Aug 2026",
    text: "Very happy with the purchase. Clean design, comfortable fit, and the finishing is excellent.",
  },
  {
    id: rand(),
    initials: "HL",
    name: "Henry Lewis",
    rating: 5,
    date: "1 Aug 2026",
    text: "Very impressed with the entire experience. The ordering process was straightforward, delivery was surprisingly quick, and the watch itself feels fantastic on the wrist. Exactly the kind of piece I was looking for.",
  },
  {
    id: rand(),
    initials: "LE",
    name: "Logan Edwards",
    rating: 5,
    date: "11 Aug 2026",
    text: "Very happy with the purchase. Clean design, comfortable fit, and the finishing is excellent.",
  },
];
