"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./project-detail.module.css";
import { urlFor } from "@/sanity/sanityImage";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import Link from "next/link";

export default function ProjectDetail({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (!project.images?.length) return;
    setSelectedIndex((i) => (i + 1) % project.images.length);
  }, [project.images]);

  const goPrev = useCallback(() => {
    if (!project.images?.length) return;
    setSelectedIndex(
      (i) => (i - 1 + project.images.length) % project.images.length
    );
  }, [project.images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "ArrowRight") {
          goNext();
        } else if (e.key === "ArrowLeft") {
          goPrev();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goNext, goPrev]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.h1 className={styles.title} {...fadeInViewProps}>
          {project.title}
        </motion.h1>
        <motion.a
          href={project.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          {...fadeInViewProps}
        >
          Visit official project website
        </motion.a>
      </div>

      {project.features?.length > 0 && (
        <div className={styles.featureTags}>
          {project.features.map((feature, index) => (
            <motion.span
              key={index}
              className={styles.featureTag}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      )}

      <div className={styles.metaGrid}>
        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Location:</p>
          <p className={styles.value}>{project.location}</p>
        </motion.div>
        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Description:</p>
          <p className={styles.value}>{project.longDescription}</p>
        </motion.div>
        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Involvement:</p>
          <p className={styles.value}>{project.involvement}</p>
        </motion.div>
        {/* <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Features:</p>
          {project.features?.length > 0 && (
            <div className={styles.featureTags}>
              {project.features.map((feature, index) => (
                <motion.span
                  key={index}
                  className={styles.featureTag}
                  {...fadeInViewProps}
                  transition={{
                    ...fadeInViewProps.transition,
                    delay: index * 0.1,
                  }}
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div> */}
      </div>

      <div className={styles.imageWrapper}>
        {project.images?.map((img, index) => (
          <motion.div
            key={index}
            {...fadeInViewProps}
            transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
          >
            <Image
              src={urlFor(img.asset).url()}
              alt={project.title}
              width={800}
              height={500}
              className={styles.image}
              onClick={() => openLightbox(index)}
            />
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
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
            src={urlFor(project.images[selectedIndex].asset).url()}
            alt=""
            width={800}
            height={500}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          {selectedIndex !== null && project.images?.length > 0 && (
            <div className={styles.lightboxCaption}>
              <p>
                {selectedIndex + 1} / {project.images.length}
              </p>
              {project.images[selectedIndex].caption && (
                <p className={styles.captionText}>
                  {project.images[selectedIndex].caption}
                </p>
              )}
            </div>
          )}

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
      )}
    </div>
  );
}
