"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./project-detail.module.css";
import { urlFor } from "@/sanity/sanityImage";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import Link from "next/link";

export default function ProjectDetail({
  project,
  type,
  previousProject,
  nextProject,
}) {
  const {
    title,
    officialWebsite,
    longDescription,
    involvement,
    features,
    location,
    images,
  } = project;

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (!images?.length) return;
    setSelectedIndex((i) => (i + 1) % images.length);
  }, [images]);

  const goPrev = useCallback(() => {
    if (!images?.length) return;
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);
  }, [images]);

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

  function formatProjectType(type) {
    return type
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace("And", "&");
  }

  return (
    <div className={styles.container}>
      <Link href={`/portfolio/${type}`} className={styles.backButton}>
        ← Back to {formatProjectType(type)} Projects
      </Link>

      <div className={styles.header}>
        <motion.h1 className={styles.title} {...fadeInViewProps}>
          {title}
        </motion.h1>
      </div>

      {features?.length > 0 && (
        <div className={styles.featureTags}>
          {features.map((feature, index) => (
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
          <p className={styles.value}>{location}</p>
        </motion.div>
        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Description:</p>
          <p className={styles.value}>{longDescription}</p>
        </motion.div>

        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}>Expertise:</p>
          <div className={styles.expertiseList}>
            {Array.isArray(involvement) && involvement.length > 0 ? (
              involvement.map((service) => (
                <p
                  key={service._id}
                  className={`${styles.value} ${styles.expertise}`}
                >
                  {service.title}
                </p>
              ))
            ) : (
              <p className={styles.value}>No expertise listed</p>
            )}
          </div>
        </motion.div>

        <motion.div className={styles.metaItem} {...fadeInViewProps}>
          <p className={styles.label}></p>
          <motion.a
            href={officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            {...fadeInViewProps}
          >
            Visit official project website
          </motion.a>
        </motion.div>
      </div>

      <div className={styles.imageWrapper}>
        {images?.map((img, index) => (
          <motion.div
            key={index}
            {...fadeInViewProps}
            transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
          >
            {img?.asset && (
              <Image
                src={img.asset.url}
                alt={title}
                width={800}
                height={500}
                className={styles.image}
                onClick={() => openLightbox(index)}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className={styles.projectNav}>
        {previousProject && (
          <Link
            href={`/portfolio/${type}/${previousProject.slug.current}`}
            className={styles.projectNavButton}
          >
            ← Previous project: {previousProject.title}
          </Link>
        )}

        {nextProject && (
          <Link
            href={`/portfolio/${type}/${nextProject.slug.current}`}
            className={styles.projectNavButton}
          >
            Next project: {nextProject.title} →
          </Link>
        )}
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
            src={urlFor(images[selectedIndex].asset).url()}
            alt=""
            width={800}
            height={500}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          {selectedIndex !== null && images?.length > 0 && (
            <div className={styles.lightboxCaption}>
              <p>
                {selectedIndex + 1} / {images.length}
              </p>
              {images[selectedIndex].caption && (
                <p className={styles.captionText}>
                  {images[selectedIndex].caption}
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
