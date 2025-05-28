"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./lightbox.module.css";

export default function Lightbox({
  images,
  selectedIndex,
  goNext,
  goPrev,
  closeLightbox,
}) {
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (selectedIndex === null) return;
  //     if (e.key === "Escape") onClose();
  //     else if (e.key === "ArrowRight") onNext();
  //     else if (e.key === "ArrowLeft") onPrev();
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => document.removeEventListener("keydown", handleKeyDown);
  // }, [selectedIndex, onClose, onNext, onPrev]);

  if (selectedIndex === null || !images?.length) return null;

  const image = images[selectedIndex];

  return (
    <div className={styles.lightboxOverlay} onClick={closeLightbox}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className={`${styles.navButton} ${styles.prevButton}`}
      >
        ‹
      </button>

      <Image
        src={image.asset.url}
        alt=""
        width={800}
        height={500}
        className={styles.lightboxImage}
        onClick={(e) => e.stopPropagation()}
      />

      <div className={styles.lightboxCaption}>
        <p>
          {selectedIndex + 1} / {images.length}
        </p>
        {image.caption && <p className={styles.captionText}>{image.caption}</p>}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className={`${styles.navButton} ${styles.nextButton}`}
      >
        ›
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          closeLightbox();
        }}
        className={styles.closeButton}
      >
        ×
      </button>
    </div>
  );
}
