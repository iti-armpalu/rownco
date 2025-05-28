'use client';

import Image from 'next/image';
import styles from "./mood-image.module.css";

export default function MoodImageOverlay({
  src,
  alt = '',
  className = '',
  priority = false,
  overlayOpacity = 0.5,
  overlayType = 'solid', // 'solid' or 'gradient'
}) {
  const isGradient = overlayType === 'gradient';

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={styles.image}
        priority={priority}
      />
      <div
        className={`${styles.overlay} ${isGradient ? styles.gradientOverlay : ''}`}
        style={
          !isGradient
            ? { backgroundColor: `rgba(55, 59, 47, ${overlayOpacity})` }
            : undefined
        }
      />
    </div>
  );
}
