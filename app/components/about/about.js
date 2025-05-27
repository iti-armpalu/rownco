"use client";

import { useRef } from "react";
import MoodImageOverlay from "../ui/mood-image";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { urlFor } from "@/sanity/sanityImage";

const mainAbout = [
  { title: "architecture" },
  { title: "development" },
  { title: "strategy" },
];

const navLinks = [
  { label: "Our expertise", section: "services" },
  { label: "Explore our portfolio", section: "portfolio" },
  { label: "Meet our Team", section: "team" },
];

export default function About({ mainAbout, about }) {
  const aboutRef = useRef();

  const onScrollTo = (id) => {
    // Use a timeout to scroll after menu is closed
    setTimeout(() => {
      const cleanId = id.replace("#", "");
      const section = document.getElementById(cleanId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay slightly to let scroll lock reset
  };

  return (
    <section
      ref={aboutRef}
      id="about"
      data-theme="light"
      className={styles.aboutSection}
    >
      {mainAbout.map((about, index) => (
        <div key={index}>
          <div className={styles.heading}>
            <motion.h2 {...fadeInViewProps}>About Row & Co</motion.h2>
            <motion.p {...fadeInViewProps}>{about.description}</motion.p>
          </div>

          <div className={`${styles.mainAbout} ${styles.left}`}>
            <div className={`${styles.textContainer} ${styles.right} `}>
              <div className={styles.title}>
                {about.title.map((word, wordIndex) => (
                  <motion.h2
                    key={wordIndex}
                    className={`${styles.subtitle} ${styles[`subtitle${wordIndex + 1}`]}`}
                    {...fadeInViewProps}
                  >
                    {word}
                  </motion.h2>
                ))}
              </div>
              <div className={styles.buttons}>
                {navLinks.map((link) => (
                  <motion.button
                    {...fadeInViewProps}
                    key={link.section}
                    // className={styles.navLink}
                    onClick={() => onScrollTo(link.section)}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.div
              className={`${styles.imageContainer} ${styles.right}`}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: 0.6 }}
            >
              <MoodImageOverlay
                src={urlFor(about.image).url()}
                // src="/images/pexels-yentl-jacobs-43020-157811.jpg"
                className={styles.image}
                overlayOpacity={0.1}
                priority
              />
            </motion.div>
          </div>
        </div>
      ))}

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
