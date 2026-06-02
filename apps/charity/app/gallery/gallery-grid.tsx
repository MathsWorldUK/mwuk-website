'use client';

import {useCallback, useEffect, useState} from 'react';
import Image from 'next/image';
import type {GalleryImage} from './gallery-constants';
import styles from './gallery-grid.module.css';

interface GalleryGridProps {
  images: GalleryImage[];
  title: string;
}

const wrapIndex = (index: number, length: number) => ((index % length) + length) % length;

export function GalleryGrid({images, title}: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return wrapIndex(current - 1, images.length);
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return wrapIndex(current + 1, images.length);
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  if (images.length === 0) {
    return <p className={styles.empty}>No photos available yet for this gallery.</p>;
  }

  const selectedImage = activeIndex === null ? null : images[activeIndex] ?? null;

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type={'button'}
            className={styles.thumbButton}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${title} image ${index + 1} of ${images.length}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.thumbImage}
              sizes={'(max-width: 640px) 46vw, (max-width: 900px) 30vw, 180px'}
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.lightbox}
          role={'dialog'}
          aria-modal={'true'}
          aria-label={`${title} image preview`}
          onClick={closeLightbox}>
          <button
            type={'button'}
            className={`${styles.lightboxButton} ${styles.closeButton}`}
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label={'Close preview'}>
            ×
          </button>

          <button
            type={'button'}
            className={`${styles.lightboxButton} ${styles.prevButton}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={'Previous image'}>
            {'<'}
          </button>

          <div className={styles.previewWrap} onClick={(event) => event.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              className={styles.previewImage}
              sizes={'95vw'}
            />
          </div>

          <button
            type={'button'}
            className={`${styles.lightboxButton} ${styles.nextButton}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={'Next image'}>
            {'>'}
          </button>

          <div className={styles.caption} onClick={(event) => event.stopPropagation()}>
            <span>{selectedImage.alt}</span>
            <span className={styles.counter}>
              {activeIndex !== null ? activeIndex + 1 : 0} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
