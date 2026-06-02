export const GALLERY_SECTIONS = [
  {slug: 'london', label: 'MathsWorld London'},
  {slug: 'leeds', label: 'MathsCity Leeds'},
  {slug: 'city-of-maths', label: 'City of Maths'},
  {slug: 'big-bang-fair', label: 'Big Bang Fair'},
] as const;

export type GallerySection = (typeof GALLERY_SECTIONS)[number];
export type GallerySlug = GallerySection['slug'];

export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY_NAV_LINKS = GALLERY_SECTIONS.map((section) => ({
  href: `/gallery/${section.slug}`,
  label: section.label,
}));

export const getGallerySection = (slug: string) =>
  GALLERY_SECTIONS.find((section) => section.slug === slug);
