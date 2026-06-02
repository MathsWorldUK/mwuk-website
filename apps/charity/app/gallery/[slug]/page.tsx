import {notFound} from 'next/navigation';
import {GalleryGrid} from '../gallery-grid';
import {GALLERY_SECTIONS, getGallerySection} from '../gallery-constants';
import {getGalleryImages} from '../gallery-images';

interface GallerySectionPageProps {
  params: Promise<{slug: string}>;
}

export const revalidate = 3600; // 1 hour
export const dynamicParams = false;

export function generateStaticParams() {
  return GALLERY_SECTIONS.map((section) => ({slug: section.slug}));
}

export default async function GallerySectionPage({params}: GallerySectionPageProps) {
  const {slug} = await params;
  const section = getGallerySection(slug);
  if (!section) notFound();

  const images = await getGalleryImages(section.slug);

  return <GalleryGrid images={images} title={section.label} />;
}
