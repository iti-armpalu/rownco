"use client";

import { useRef } from "react";
import MoodImageOverlay from "../ui/mood-image";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { urlFor } from "@/sanity/sanityImage";

export default function About({ about }) {
  const aboutRef = useRef();

  return (
    <section ref={aboutRef} id="about" data-theme="light" className={styles.aboutSection}>
      {about.map((about, index) => (
        <motion.div key={index} className={styles.aboutElement}>
          <div
            className={`${styles.textContainer} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.title}>
              {about.title.map((word, wordIndex) => (
                <motion.h2
                  key={wordIndex}
                  className={`${styles.subtitle} ${
                    styles[`subtitle${wordIndex + 1}`]
                  }`}
                  {...fadeInViewProps}
                >
                  {word}
                </motion.h2>
              ))}
            </div>
            <motion.p
              className={styles.description}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: 0.4 }}
            >
              {about.description}
            </motion.p>
          </div>

          <motion.div
            className={`${styles.imageContainer} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            {...fadeInViewProps}
            transition={{ ...fadeInViewProps.transition, delay: 0.6 }}
          >
            <MoodImageOverlay
              src={urlFor(about.image).url()}
              className={styles.image}
              overlayOpacity={0.1}
              priority
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
