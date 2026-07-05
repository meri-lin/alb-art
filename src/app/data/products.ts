// src/app/data/products.ts

export type BookmatchVariant = {
  label: string; // p.sh. "A-B / A-B"
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  collection: string; // p.sh. "Neolith"
  image: string; // foto kryesore e tekstures (njëjta që përdoret te Categories)

  // Foto detaji nga afër (lokale, opsionale) - 1 ose 2 imazhe
  // p.sh. ["/images/products/statuario-bianco1.webp", "/images/products/statuario-bianco2.webp"]
  detailImages?: string[];

  // Specifikime teknike - opsionale derisa t'i plotësosh për çdo produkt
  size?: string; // p.sh. '63"x127" in (1620x3240 mm)'
  thicknesses?: string[]; // p.sh. ['1/2" (12 mm)', '3/4" (20 mm)', '1/4" (6.5 mm)']
  finishes?: string[]; // p.sh. ['Luçiduar / Polished', 'Mat / Matt']

  // Imazhet bookmatch (4 variantet si në katalog) - opsionale
  bookmatchImages?: BookmatchVariant[];

  // Foto e ambientit (render banjë/kuzhinë) - opsionale
  ambientImage?: string;
};

// Default-et e përdorura kur një produkt s'i ka ende specifikimet e veta.
// Kur plotëson specifikimet reale të një produkti, thjesht shton fushat
// (size, thicknesses, finishes, bookmatchImages, ambientImage) te objekti i tij më poshtë —
// faqja e detajit i lexon automatikisht, pa nevojë të prekësh kodin.
export const DEFAULT_SIZE = '63"x127" in (1620x3240 mm)';
export const DEFAULT_THICKNESSES = [
  '1/2" (12 mm)',
  '3/4" (20 mm)',
  '1/4" (6.5 mm)',
];
export const DEFAULT_FINISHES = ['Luçiduar / Polished', 'Mat / Matt'];

export const products: Product[] = [
  {
    slug: 'statuario-bianco',
    name: 'Statuario Bianco',
    collection: 'Neolith',
    image: '/images/main/statuario_bianco.webp',
    detailImages: [
      '/images/products/statuario-bianco1.webp',
      '/images/products/statuario-bianco2.webp',
    ],
    size: DEFAULT_SIZE,
    thicknesses: DEFAULT_THICKNESSES,
    finishes: DEFAULT_FINISHES,
    bookmatchImages: [
      // TODO: zëvendëso me URL-të reale kur i ngarkon imazhet (Cloudinary etj)
      // { label: 'A-B / A-B', image: 'https://...' },
      // { label: 'B-A / B-A', image: 'https://...' },
    ],
    // ambientImage: 'https://...', // foto e render-it të banjës nga katalogu
  },
  {
    slug: 'calacatta-oro',
    name: 'Calacatta Oro',
    collection: 'Neolith',
    image: '/images/main/calacatta_oro.webp',
    detailImages: [
      '/images/products/calacatta-oro1.webp',
      '/images/products/calacatta-oro2.webp',
    ],
  },
  {
    slug: 'onice-crema',
    name: 'Onice Crema',
    collection: 'Neolith',
    image: '/images/main/onice_crema.webp',
    detailImages: [
      '/images/products/onice-crema1.webp',
      '/images/products/onice-crema2.webp',
    ],
  },
  {
    slug: 'calacatta-venato',
    name: 'Calacatta Venato',
    collection: 'Neolith',
    image: '/images/main/calacatta_venato.webp',
    detailImages: [
      '/images/products/calacatta-venato1.webp',
      '/images/products/calacatta-venato2.webp',
    ],
  },
  {
    slug: 'calacatta-white',
    name: 'Calacatta White',
    collection: 'Neolith',
    image: '/images/main/calaccata_white.webp',
    detailImages: [
      '/images/products/calacatta_white1.webp',
      '/images/products/calacatta_white2.webp',
    ],
  },
  {
    slug: 'statuario-venato',
    name: 'Statuario Venato',
    collection: 'Neolith',
    image: '/images/main/statuario_venato.webp',
    detailImages: [
      '/images/products/statuario-venato1.webp',
      '/images/products/statuario-venato2.webp',
    ],
  },
  {
    slug: 'solid-white',
    name: 'Solid White',
    collection: 'Neolith',
    image: '/images/main/solid_white.webp',
    // S'ka detailImage - sipërfaqe e bardhë solide, pa pattern dukshëm i ndryshëm nga foto kryesore
  },
  {
    slug: 'cement-white',
    name: 'Cement White',
    collection: 'Neolith',
    image: '/images/main/cement_white.webp',
    detailImages: ['/images/products/cement-white1.webp'],
  },
  {
    slug: 'cement-grey',
    name: 'Cement Grey',
    collection: 'Neolith',
    image: '/images/main/cement_grey.webp',
    detailImages: ['/images/products/cement-grey1.webp'],
  },
  {
    slug: 'cement-black',
    name: 'Cement Black',
    collection: 'Neolith',
    image: '/images/main/cement_black.webp',
    detailImages: ['/images/products/cement-black1.webp'],
  },
  {
    slug: 'statuario',
    name: 'Statuario',
    collection: 'Neolith',
    image: '/images/main/statuario.webp',
    detailImages: [
      '/images/products/statuario1.webp',
      '/images/products/statuario2.webp',
    ],
  },
  {
    slug: 'travertino-silver',
    name: 'Travertino Silver',
    collection: 'Neolith',
    image: '/images/main/travertino_silver.webp',
    detailImages: [
      '/images/products/travertino-silver1.webp',
      '/images/products/travertino-silver2.webp',
    ],
  },
  {
    slug: 'panda-white',
    name: 'Panda White',
    collection: 'Neolith',
    image: '/images/main/panda_white.webp',
    detailImages: [
      '/images/products/panda-white1.webp',
      '/images/products/panda-white2.webp',
    ],
  },
  {
    slug: 'statuario-light',
    name: 'Statuario Light',
    collection: 'Neolith',
    image: '/images/main/statuario_light.webp',
    detailImages: [
      '/images/products/statuario-light1.webp',
      '/images/products/statuario-light2.webp',
    ],
  },
  {
    slug: 'onice-perla',
    name: 'Onice Perla',
    collection: 'Neolith',
    image: '/images/main/onice_perla.webp',
    detailImages: [
      '/images/products/onice-perla1.webp',
      '/images/products/onice-perla2.webp',
    ],
  },
  {
    slug: 'nero-marquinia',
    name: 'Nero Marquinia',
    collection: 'Neolith',
    image: '/images/main/nero_marquinia.webp',
    detailImages: [
      '/images/products/nero-marquinia1.webp',
      '/images/products/nero-marquinia2.webp',
    ],
  },
  {
    slug: 'pietra-grigia',
    name: 'Pietra Grigia',
    collection: 'Neolith',
    image: '/images/main/pietra_grigia.webp',
    detailImages: [
      '/images/products/pietra-grigia1.webp',
      '/images/products/pietra-grigia2.webp',
    ],
  },
  {
    slug: 'invisible-white',
    name: 'Invisible White',
    collection: 'Neolith',
    image: '/images/main/invisible_white.webp',
    detailImages: [
      '/images/products/invisible-white1.webp',
      '/images/products/invisible-white2.webp',
    ],
  },
  {
    slug: 'cementine',
    name: 'Cementine',
    collection: 'Neolith',
    image: '/images/main/cementine.webp',
    detailImages: [
      '/images/products/cementine1.webp',
      '/images/products/cementine2.webp',
    ],
  },
  {
    slug: 'maioliche',
    name: 'Maioliche',
    collection: 'Neolith',
    image: '/images/main/maioliche.webp',
    detailImages: [
      '/images/products/maioliche1.webp',
      '/images/products/maioliche2.webp',
    ],
  },
  {
    slug: 'arabescato-oro',
    name: 'Arabescato Oro',
    collection: 'Neolith',
    image: '/images/main/arabescato_oro.webp',
    detailImages: [
      '/images/products/arabescato-oro1.webp',
      '/images/products/arabescato-oro2.webp',
    ],
  },
  {
    slug: 'purple-emma',
    name: 'Purple Emma',
    collection: 'Neolith',
    image: '/images/main/purple_emma.webp',
    detailImages: [
      '/images/products/purple-emma1.webp',
      '/images/products/purple-emma2.webp',
    ],
  },
  {
    slug: 'super-white',
    name: 'Super White',
    collection: 'Neolith',
    image: '/images/main/super_white.webp',
    detailImages: [
      '/images/products/super-white1.webp',
      '/images/products/super-white2.webp',
    ],
  },
  {
    slug: 'grey-shadow',
    name: 'Grey Shadow',
    collection: 'Neolith',
    image: '/images/main/grey_shadow.webp',
    detailImages: [
      '/images/products/grey-shadow1.webp',
      '/images/products/grey-shadow2.webp',
    ],
  },
  {
    slug: 'green-sofia',
    name: 'Green Sofia',
    collection: 'Neolith',
    image: '/images/main/green_sofia.webp',
    detailImages: [
      '/images/products/green-sofia1.webp',
      '/images/products/green-sofia2.webp',
    ],
  },
  {
    slug: 'pure-white',
    name: 'Pure White',
    collection: 'Neolith',
    image: '/images/main/pure_white.webp',
    detailImages: [
      '/images/products/pure-white1.webp',
      '/images/products/pure-white2.webp',
    ],
  },
  {
    slug: 'dolominte',
    name: 'Dolominte',
    collection: 'Neolith',
    image: '/images/main/dolominte.webp',
    detailImages: [
      '/images/products/dolominte1.webp',
      '/images/products/dolominte2.webp',
    ],
  },
  {
    slug: 'crystal-white',
    name: 'Crystal White',
    collection: 'Neolith',
    image: '/images/main/crystal_white.webp',
    detailImages: [
      '/images/products/crystal-white1.webp',
      '/images/products/crystal-white2.webp',
    ],
  },
  {
    slug: 'precious-marble',
    name: 'Precious Marble',
    collection: 'Neolith',
    image: '/images/main/precious_marble.webp',
    detailImages: [
      '/images/products/precious-marble1.webp',
      '/images/products/precious-marble2.webp',
    ],
  },
  {
    slug: 'taj-mahal-white',
    name: 'Taj Mahal White',
    collection: 'Neolith',
    image: '/images/main/taj_mahal_white.webp',
    detailImages: [
      '/images/products/taj-mahal-white1.webp',
      '/images/products/taj-mahal-white2.webp',
    ],
  },
  {
    slug: 'onice-bianco',
    name: 'Onice Bianco',
    collection: 'Neolith',
    image: '/images/main/onice_bianco.webp',
    detailImages: [
      '/images/products/onice-bianco1.webp',
      '/images/products/onice-bianco2.webp',
    ],
  },
  {
    slug: 'regia-onyx',
    name: 'Regia Onyx',
    collection: 'Neolith',
    image: '/images/main/regia_onyx.webp',
    detailImages: [
      '/images/products/regia-onyx1.webp',
      '/images/products/regia-onyx2.webp',
    ],
  },
  {
    slug: 'onice-nero',
    name: 'Onice Nero',
    collection: 'Neolith',
    image: '/images/main/onice_nero.webp',
    detailImages: [
      '/images/products/onice-nero1.webp',
      '/images/products/onice-nero2.webp',
    ],
  },
  {
    slug: 'onice-extra-bianco',
    name: 'Onice Extra Bianco',
    collection: 'Neolith',
    image: '/images/main/onice_extra_bianco.webp',
    detailImages: ['/images/products/onice-extra-bianco1.webp'],
  },
  {
    slug: 'pietra-silver',
    name: 'Pietra Silver',
    collection: 'Neolith',
    image: '/images/main/pietra_silver.webp',
    detailImages: [
      '/images/products/pietra-silver1.webp',
      '/images/products/pietra-silver2.webp',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
