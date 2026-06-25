const products = [
  {
    id: 1,
    name: "Solid Maroon",
    price: "PKR 13,500/-",
    originalPrice: "PKR 15,000/-",
    image: "content/IMG-20251024-WA0018 (1).jpg",
    images: [
      "content/IMG-20251024-WA0019 (1).jpg",
      "content/IMG-20251024-WA0020 (1).jpg",
      "content/IMG-20251024-WA0018 (1).jpg",
    ],
    shortDescription:
      "korean silk shirt, trousers and dupatta with hand work of stones and sequence on shirt. Organza lace on dupatta.",
    description:
      "Korean raw silk for shirt and trousers, silk dupatta, hand work of stones and sequence on shirt. Organza lace on dupatta. Stitched 3-piece. Availabke in any customizable size.",
    inStock: 1,
    sizeChartImage: "content/IMG-20251024-WA0018 (1).jpg",
  },

  {
    id: 5,
    name: "Lailac chicken Kari",
    price: "PKR 9,450/-",
    originalPrice: "PKR 9,800/-",
    image: "content/IMG-20260413-WA0053.jpg",

    images: [
      "content/IMG-20260413-WA0052.jpg",
      "content/IMG-20260413-WA0053.jpg",
      "content/IMG-20260413-WA0054.jpg",
      "content/VID-20260413-WA0047.webm",
      "content/VID-20260413-WA0044.webm",
      "content/VID-20260413-WA0042.webm",
      "content/VID-20260413-WA0041.webm",

    ],
    shortDescription:
      "Chicken kari summer collection",
    description:
      "chicken kari shirt summer cotton trousers(breathable fabric) Lawn embroidred dupatta with organza border embroided patch work on sleeves and backside of shirt. tassels also attached, u can add on a silk or chifoon gupattra. Available in any customizable size.",
    inStock: 1,
  },
  {
    id: 6,
    name: "White Rose",
    price: "PKR 35,000/-",
    // originalPrice: "PKR 40,000/-",
    image: "content/IMG-20260413-WA0040.jpg",

    images: [
      "content/IMG-20260413-WA0040.jpg",
      "content/IMG-20260413-WA0037.jpg",
      "content/IMG-20260413-WA0043.jpg",
      "content/VID-20260413-WA0032.webm",
      "content/VID-20260413-WA0031.webm",
      "content/VID-20260413-WA0031.webm",
      "content/VID-20260413-WA0039.webm",
      "content/VID-20260413-WA0038.webm",
      "content/VID-20260413-WA0036.webm",
      "content/VID-20260413-WA0035.webm",
      "content/VID-20260413-WA0034.webm",
      "content/IMG-20260413-WA0082.jpg",
    ],
    shortDescription:
      "Peach colored shirt with matching shalwar.",
    description:
      "Tailor stitched 2 piece outfir. Premium lawn for shirt, summer collection with farshi shalwar, milky lace and pearl tassels. available in any customizable size.",
    inStock: 1,
  },
  {
    id: 7,
    name: "Solid Navy Blue",
    price: "PKR 6,300/-",
    originalPrice: "PKR 6,850/-",
    image: "content/IMG-20260413-WA0080.jpg",
    images: [
      "content/IMG-20260413-WA0080.jpg",
      "content/IMG-20260413-WA0079.jpg",
      "content/IMG-20260413-WA0078.jpg",
      "content/IMG-20260413-WA0063.jpg",
      "content/IMG-20260413-WA0064.jpg",
      "content/VID-20260413-WA0048.webm",
      "content/VID-20260413-WA0067.webm",
    ],
    shortDescription:
      "Solid navy blue shirt with matching shalwar and dupatta.",
    description:
      "Tailor stitched 3 piece Solid Cotton navy blue shirt with matching shalwar and Shifoon dupatta. Available in any customizable size.",
    inStock: 1,
  },
  {
    id: 8,
    name: "Peach Pink Chicken Kari",
    price: "PKR 9,350/-",
    originalPrice: "PKR 9,800/-",
    image: "content/IMG-20260413-WA0069.jpg",
    images: [
      "content/IMG-20260413-WA0069.jpg",
      "content/IMG-20260413-WA0068.jpg",
      "content/IMG-20260413-WA0066.jpg",
      "content/IMG-20260413-WA0077.jpg",
      "content/IMG-20260413-WA0076.jpg",
      "content/VID-20260413-WA0090.webm",
      "content/VID-20260413-WA0089.webm",
      "content/VID-20260413-WA0065.webm",
      "content/VID-20260413-WA0062.webm",
      "content/VID-20260413-WA0062.webm",

    ],
    shortDescription:
      "Peach colored shirt with matching shalwar.",
    description:
      "Tailor stitched 2 piece outfir. Premium lawn for shirt, summer collection with farshi shalwar, milky lace and pearl tassels. available in any customizable size.",
    inStock: 1,
  },
  {
    id: 9,
    name: "Off white chicken kari",
    price: "PKR 9,350/-",
    originalPrice: "PKR 9,800/-",
    image: "content/IMG-20260413-WA0061.jpg",
    images: [
      "content/IMG-20260413-WA0061.jpg",
      "content/IMG-20260413-WA0056.jpg",
      "content/VID-20260413-WA0070.webm",
      "content/VID-20260413-WA0050.webm",
      "content/VID-20260413-WA0049.webm",
    ],
    shortDescription:
      "Off white Shirt with dupatta and trousers",
    description:
      "Off white printed shirt with chicken kari. Lihgt suit for comfortable summer wear. Cotton shirt and trousers. Double shade silk dupatta. You can also add a shifoon dupatta. 3 piece Tailor stitched Suit",
    inStock: 1,
  },
  // {
  //   id: 10,
  //   name: "Sage Green",
  //   price: "PKR 6,950/-",
  //   originalPrice: "PKR 7,850/-",
  //   image: "content/IMG-20260413-WA0071.jpg",
  //   images: [
  //     "content/IMG-20260413-WA0071.jpg",
  //     "content/IMG-20260413-WA0073.jpg",
  //     "content/IMG-20260413-WA0074.jpg",
  //     "content/VID-20260413-WA0085.webm",
  //     "content/VID-20260413-WA0084.webm",
  //     "content/VID-20260413-WA0083.webm",
  //     "content/VID-20260413-WA0072.webm",
  //     "content/VID-20260413-WA0051.webm",
  //   ],
  //   shortDescription:
  //     "Sage green shirt with matching shalwar and dupatta.",
  //   description:
  //     "Summer friedly Cotton Shirt and trousers. Double shaded Shifon dupatta. Organza embroided patch on shirt and trousers. Tailor Stitched 3 piece outfit. Available in any customizable size.",
  //   inStock: 0,
  // },
  {
    id: 2,
    name: "Mustard Shirt with Shalwar.",
    price: "PKR 3,250/-",
    originalPrice: "PKR 3,900/-",
    image: "content/IMG-20251024-WA0040 (1).jpg",
    images: [
      "content/VID-20260413-WA0067.webm",
      "content/IMG-20251024-WA0041 (1).jpg",
      "content/IMG-20251024-WA0043 (1).jpg",
      "content/IMG-20251024-WA0044 (1).jpg",
    ],
    shortDescription:
      "Mustard colored shirt with matching shalwar and dupatta.",
    description:
      "Tailor Stitched 2 piece outfit, Premium Lawn for shirt and self print cotton for shalwar. Sequence on necklace. Available in any customizable size.",
    inStock: 1,
  },
  {
    id: 3,
    name: "Garden Green",
    price: "PKR 3,950/-",
    originalPrice: "PKR 4,600/-",
    image: "content/IMG-20251024-WA0031 (1).jpg",
    images: [
      "content/IMG-20251024-WA0024 (1).jpg",
      "content/IMG-20251024-WA0027 (1).jpg",
      "content/IMG-20251024-WA0025 (1).jpg",
    ],
    shortDescription:
      " Lawn Shirt with trouser and dupatta.",
    description:
      "Tailor stitched 2 piece outfir. Premium lawn shirt and trousers. Milky lace on hem and sleeves. Available in any customizable size.",
    inStock: 1,
  },

  {
    id: 4,
    name: "peach shirt with shalwar",
    price: "PKR 3,500/-",
    originalPrice: "PKR 3,900/-",
    image: "content/IMG-20251024-WA0038 (1).jpg",
    images: [
      "content/IMG-20251024-WA0038 (1).jpg",
      "content/IMG-20251024-WA0039 (1).jpg",
      "content/IMG-20251024-WA0037 (1).jpg",
    ],
    shortDescription:
      "Peach colored shirt with matching shalwar.",
    description:
      "Tailor stitched 2 piece outfir. Premium lawn for shirt, summer collection with farshi shalwar, milky lace and pearl tassels. available in any customizable size.",
    inStock: 1,
  },
  {
    id: 11,
    name: "Chandani",
    price: "PKR 10,500/-",
    originalPrice: "PKR 11,000/-",
    image: "content/38NEW.jpeg",
    images: [
      "content/28NEW.jpeg",
      "content/29NEW.jpeg",
      "content/30NEW.jpeg",
      "content/38NEW.jpeg",
    ],
    shortDescription:
      "Chandani shirt with matching shalwar and dupatta.",
    description:
      "Fabric: Raw Silk, Medium Silk Dupatta. Stone work on neckline, hem and sleeves. 4 side lace on dupatta. Can be customised in any colour and size.",
    inStock: 1,
  },
  {
    id: 12,
    name: "Bottle Green Silk",
    price: "PKR 12,500/-",
    originalPrice: "PKR 13,0000/-",
    image: "content/2NEW.jpeg",
    images: [
      "content/2NEW.jpeg",
      "content/1NEW.jpeg",
      "content/3NEW.jpeg",
      "content/22NEW.mp4",



    ],
    shortDescription:
      "fabric sheesha silk medium silk dupatta with organza border Available in all sizes",
    description:
      "fabric sheesha silk medium silk dupatta with organza border Available in all sizes", inStock: 1,
  },
  {
    id: 13,
    name: "Anarkali Frock",
    price: "PKR 9,800/-",
    originalPrice: "PKR 10,000/-",
    image: "content/31NEW.jpeg",
    images: [
      "content/34NEW.jpeg",
      "content/1NEW0.mp4",
      "content/32NEW.jpeg",
      "content/33NEW.jpeg",
      "content/34NEW.jpeg",
      "content/2NEW0.jpeg",
      "content/4NEWT.mp4",
      "content/5NEW0.mp4",

    ],
    shortDescription:
      "Anarkali Frock with matching dupatta.",
    description:
      "Stitched 2piece Anarkali Frock with dyed shifoon dupatta long length frock ap lawn ka dupatta bhi add krwa sakti hain", inStock: 1,
  },
  {
    id: 14,
    name: "Pink Anarkali Frock",
    price: "PKR 9,500/-",
    originalPrice: "PKR 9,800/-",
    image: "content/35NEW.jpeg",
    images: [
      "content/35NEW.jpeg",
      "content/36NEW.jpeg",
      "content/20NEW.mp4",
      "content/21NEW.mp4",

    ],
    shortDescription:
      "Anarkali Frock with matching dupatta.",
    description:
      "Stitched 2piece Anarkali Frock with dyed shifoon dupatta long length frock ap lawn ka dupatta bhi add krwa sakti hain", inStock: 1,
  },
  {
    id: 15,
    name: "Gul Bahar",
    price: "PKR 6,350/-",
    originalPrice: "PKR 6,850/-",
    image: "content/27NEW.png",
    images: [
      "content/27NEW.png",
      "content/26NEW.jpeg",
      "content/25NEW.jpeg",
      "content/12NEW.mp4",
      "content/13NEW.mp4",
      "content/14NEW.mp4",
      "content/15NEW.mp4",

    ],
    shortDescription:
      "3 piece stitched outfit Farshi shalwar with short shirt and double shade duppata ",
    description:
      "3 piece stitched outfit Farshi shalwar with short shirt and double shade duppata Available in any customizable size.",
    inStock: 1,
  },
  {
    id: 16,
    name: "Red Formal",
    price: "PKR 6,850/-",
    originalPrice: "PKR 7,250/-",
    image: "content/10NEW.jpeg",
    images: [
      "content/10NEW.jpeg",
      "content/9NEW.jpeg",
      "content/16NEW.mp4",
      "content/17NEW.mp4",
      "content/19NEW.mp4",
    ],
    shortDescription:
      "Summer shirt with matching shalwar and dupatta.",
    description:
      "Fabric summer cotton lawn Dupatta Organza optional Block printed farshi shalwaar Available in all sizes ",
    inStock: 1,
  },
  {
    id: 17,
    name: "Block Printed Black",
    price: "PKR 5,950/-",
    originalPrice: "PKR 6,300/-",
    image: "content/7NEW.jpeg",
    images: [
      "content/7NEW.jpeg",
      "content/8NEW.jpeg",
      "content/4NEW.mp4",
      "content/5NEW.mp4",
      "content/6NEW.mp4",

    ],
    shortDescription:
      "Sage green shirt with matching shalwar and dupatta.",
    description:
      "Summer friedly Cotton Shirt and trousers. Double shaded Shifon dupatta. Organza embroided patch on shirt and trousers. Tailor Stitched 3 piece outfit. Available in any customizable size.",
    inStock: 1,
  },
  {
    id: 18,
    name: "Lawn Printed Sharara",
    price: "PKR 9,750/-",
    originalPrice: "PKR 10,500/-",
    image: "content/54N.jpeg",
    images: [
      "content/54N.jpeg",
      "content/50N.mp4",
      "content/51N.jpeg",
      "content/52N.jpeg",

    ],
    shortDescription:
      "Lawn Sharara With shirt and dupatta.",
    description:
      "Lawn sharara with shirt with organza dupatta. embroided tilla border on shirt and sharara. Available in any customizable size.",
    inStock: 1,
  },

];
