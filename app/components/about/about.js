import MoodImageOverlay from "../ui/mood-image";
import styles from "./about.module.css";
import about from "@/lib/about";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { forwardRef } from "react";

const About = forwardRef(function About(_, ref) {
  return (
    <section ref={ref} className={styles.aboutSection}>
      {about.map((section, index) => (
        <motion.div key={index} className={styles.aboutElement}>
          <div
            className={`${styles.textContainer} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.title}>
              {section.title.map((word, wordIndex) => (
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
              {section.description}
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
              imageUrl={section.image}
              overlayOpacity={0.5}
              width={section.width}
              height={section.height}
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
});

export default About;