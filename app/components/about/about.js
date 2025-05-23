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

export default function About({ about }) {
  const aboutRef = useRef();

  return (
    <section
      ref={aboutRef}
      id="about"
      data-theme="light"
      className={styles.aboutSection}
    >
      <div className={styles.heading}>
        <motion.h2 {...fadeInViewProps}>About Row & Co</motion.h2>
        <motion.p {...fadeInViewProps}>
          Row&Co is a boutique architectural and development consultancy based
          in Dubai, dedicated to delivering innovative, sustainable, and
          contextually intelligent design solutions across the Middle East. With
          a holistic approach that bridges architecture, planning, and project
          development, we partner with clients to shape environments that are
          not only functional and beautiful—but also economically and culturally
          impactful. From private villas and residential communities to
          hospitality and mixed-use developments, our work is defined by a sharp
          eye for detail, a passion for placemaking, and a commitment to
          excellence throughout every phase of a project’s lifecycle.
        </motion.p>
      </div>

      <div className={`${styles.mainAbout} ${styles.left}`}>
        <div className={`${styles.textContainer} ${styles.right} `}>
          <div className={styles.title}>
            {mainAbout.map((item, wordIndex) => (
              <motion.h2
                key={wordIndex}
                className={`${styles.subtitle} ${styles[`subtitle${wordIndex + 1}`]}`}
                {...fadeInViewProps}
              >
                {item.title}
              </motion.h2>
            ))}
          </div>
          <div className={styles.buttons}>
             <motion.button
              // className={styles.mobileNavLink}
              {...fadeInViewProps}
              // onClick={() => {
              //   onScrollTo(section)
              // }}
            >
              Explore our expertise
            </motion.button>
             <motion.button
              // className={styles.mobileNavLink}
              {...fadeInViewProps}
              // onClick={() => {
              //   onScrollTo(section)
              // }}
            >
              Explore our portfolio
            </motion.button>
             <motion.button
              // className={styles.mobileNavLink}
              {...fadeInViewProps}
              // onClick={() => {
              //   onScrollTo(section)
              // }}
            >
              Meet our team
            </motion.button>
          </div>
        </div>
        <motion.div
          className={`${styles.imageContainer} ${styles.right}`}
          {...fadeInViewProps}
          transition={{ ...fadeInViewProps.transition, delay: 0.6 }}
        >
          <MoodImageOverlay
            // src={urlFor(about.image).url()}
            src="/images/pexels-yentl-jacobs-43020-157811.jpg"
            className={styles.image}
            overlayOpacity={0.1}
            priority
          />
        </motion.div>
      </div>

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
