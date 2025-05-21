'use client';

import Image from 'next/image';
import styles from "./mood-image.module.css";

// const MoodImageOverlay = ({
//   imageUrl,
//   overlayOpacity = 0.5,
//   width = "100%",
//   height = "auto",
//   className = "",
// }) => {
//   return (
//     <div
//       className={`${styles.moodImage} ${className}`}
//       style={{ backgroundImage: `url(${imageUrl})`, width, height }}
//     >
//       <div className={styles.overlay} style={{ opacity: overlayOpacity }}></div>
//     </div>
//   );
// };

// export default MoodImageOverlay;

export default function MoodImageOverlay({ src, alt = '', className = '', priority = false, overlayOpacity = 0.5 }) {
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
      <div className={styles.overlay} style={{ backgroundColor: `rgba(83, 90, 72, ${overlayOpacity})` }}
      />
    </div>
  );
}
