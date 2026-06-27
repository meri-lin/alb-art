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
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP2-Statuario_bianco-scaled.jpg',
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
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP3-Calacatta_oro.jpg',
  },
  {
    slug: 'onice-crema',
    name: 'Onice Crema',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP4-Onice_crema-scaled.jpg',
  },
  {
    slug: 'calacatta-venato',
    name: 'Calacatta Venato',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP5-Calacatta_venato-scaled.jpg',
  },
  {
    slug: 'statuario-venato',
    name: 'Statuario Venato',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP6-Statuario_venato-scaled.jpg',
  },
  {
    slug: 'solid-white',
    name: 'Solid White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP8-Solid_white.jpg',
  },
  {
    slug: 'cement-white',
    name: 'Cement White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP10-Cement_white-scaled.jpg',
  },
  {
    slug: 'cement-grey',
    name: 'Cement Grey',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP11-Cement_grey-scaled.jpg',
  },
  {
    slug: 'cement-black',
    name: 'Cement Black',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP12-Cement_black-scaled.jpg',
  },
  {
    slug: 'statuario',
    name: 'Statuario',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP13-Statuario-scaled.jpg',
  },
  {
    slug: 'travertino-silver',
    name: 'Travertino Silver',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP16-Travertino_Silver-scaled.jpg',
  },
  {
    slug: 'panda-white',
    name: 'Panda White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP15-Panda_white.jpg',
  },
  {
    slug: 'statuario-light',
    name: 'Statuario Light',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP18_Statuario_light-scaled.jpg',
  },
  {
    slug: 'onice-perla',
    name: 'Onice Perla',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP19-Onice_perla-scaled.jpg',
  },
  {
    slug: 'nero-marquinia',
    name: 'Nero Marquinia',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP21-Nero_marquinia-scaled.jpg',
  },
  {
    slug: 'pietra-grigia',
    name: 'Pietra Grigia',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP23-Pietra_grigia-scaled.jpg',
  },
  {
    slug: 'invisible-white',
    name: 'Invisible White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP35-Invisible_white-scaled.jpg',
  },
  {
    slug: 'cementine',
    name: 'Cementine',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP29-Cementine-scaled.jpg',
  },
  {
    slug: 'maioliche',
    name: 'Maioliche',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP30-Maioliche-scaled.jpg',
  },
  {
    slug: 'arabescato-oro',
    name: 'Arabescato Oro',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP31-Arabescato_oro-scaled.jpg',
  },
  {
    slug: 'purple-emma',
    name: 'Purple Emma',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP40-Purple_emma-scaled.jpg',
  },
  {
    slug: 'super-white',
    name: 'Super White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP36-Super-white-scaled.jpg',
  },
  {
    slug: 'grey-shadow',
    name: 'Grey Shadow',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP37-Grey_shadow-scaled.jpg',
  },
  {
    slug: 'green-sofia',
    name: 'Green Sofia',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP41-Green_sofia-scaled.jpg',
  },
  {
    slug: 'pure-white',
    name: 'Pure White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP24-Pure_white-scaled.jpg',
  },
  {
    slug: 'dolominte',
    name: 'Dolominte',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP25-Dolominte-scaled.jpg',
  },
  {
    slug: 'crystal-white',
    name: 'Crystal White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP26-Crystal-white-scaled.jpg',
  },
  {
    slug: 'precious-marble',
    name: 'Precious Marble',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP27-Precious_Marble.jpg',
  },
  {
    slug: 'taj-mahal-white',
    name: 'Taj Mahal White',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP47-Taj_mahal_white-scaled.jpg',
  },
  {
    slug: 'onice-bianco',
    name: 'Onice Bianco',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP44-Onice_bianco-scaled.jpg',
  },
  {
    slug: 'regia-onyx',
    name: 'Regia Onyx',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP1919-REGIA_ONYX-scaled.jpg',
  },
  {
    slug: 'onice-nero',
    name: 'Onice Nero',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP45_Onice_nero_2.jpg',
  },
  {
    slug: 'onice-extra-bianco',
    name: 'Onice Extra Bianco',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP46_Onice_extra_Bianco.jpg',
  },
  {
    slug: 'pietra-silver',
    name: 'Pietra Silver',
    collection: 'Neolith',
    image:
      'https://art-tradite.com/wp-content/uploads/2025/01/TOP43-Pietra_silver-scaled.jpg',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
