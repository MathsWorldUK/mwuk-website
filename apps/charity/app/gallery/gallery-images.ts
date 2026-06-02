import {access, readdir} from 'node:fs/promises';
import path from 'node:path';
import type {GalleryImage, GallerySlug} from './gallery-constants';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

const GALLERY_BASE_DIRS = [
  path.join(process.cwd(), 'public', 'images', 'gallery'),
  path.join(process.cwd(), 'apps', 'charity', 'public', 'images', 'gallery'),
];

const normalizeImageAlt = (fileName: string) => {
  const withoutExtension = path.parse(fileName).name;
  const normalized = withoutExtension.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  return normalized || 'Gallery image';
};

const resolveGalleryDirectory = async (slug: GallerySlug) => {
  for (const baseDir of GALLERY_BASE_DIRS) {
    const sectionDir = path.join(baseDir, slug);

    try {
      await access(sectionDir);
      return sectionDir;
    } catch {
      // Check the next possible base directory.
    }
  }

  return null;
};

export async function getGalleryImages(slug: GallerySlug): Promise<GalleryImage[]> {
  const galleryDir = await resolveGalleryDirectory(slug);
  if (!galleryDir) return [];

  const entries = await readdir(galleryDir, {withFileTypes: true});

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, {numeric: true, sensitivity: 'base'}))
    .map((fileName) => ({
      src: `/images/gallery/${slug}/${encodeURIComponent(fileName)}`,
      alt: normalizeImageAlt(fileName),
    }));
}
