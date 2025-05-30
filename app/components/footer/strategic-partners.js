"use client";

import styles from "./strategic-partners.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import SectionIntro from "../ui/section-intro";

export default function StrategicPartners() {
  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.content}>

          <SectionIntro
            title="Our Strategic Partners"
            description="We proudly collaborate with world-class partners to bring
              unmatched value to our projects. These relationships are built on
              shared vision, mutual trust, and exceptional execution."
            layout="centered"
            theme="dark"
          />

          <div className={styles.right}>
            <motion.a
              href="https://lombokcapitalventures.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageLink}
              {...fadeInViewProps}
            >
              <div className={styles.textOverlay}>
                <motion.h3
                  className={styles.overlayTitle}
                  {...fadeInViewProps}
                  transition={{ ...fadeInViewProps.transition, delay: 0.2 }}
                >
                  Lombok Capital Ventures
                </motion.h3>
                <motion.p
                  className={styles.overlayDescription}
                  {...fadeInViewProps}
                  transition={{ ...fadeInViewProps.transition, delay: 0.4 }}
                >
                  Delivering strategic developments across Lombok, driven by
                  international expertise, environmental consciousness, and
                  long-term investor value.
                </motion.p>
              </div>
            </motion.a>

            <motion.a
              href="https://kidsdeservemore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageLink}
              {...fadeInViewProps}
            >
              <div className={styles.textOverlay}>
                <motion.h3
                  className={styles.overlayTitle}
                  {...fadeInViewProps}
                  transition={{ ...fadeInViewProps.transition, delay: 0.2 }}
                >
                  Kids Deserve More
                </motion.h3>
                <motion.p
                  className={styles.overlayDescription}
                  {...fadeInViewProps}
                  transition={{ ...fadeInViewProps.transition, delay: 0.4 }}
                >
                  Our initiative to give back to the community by supporting
                  underprivileged children through education, healthcare, and
                  mentorship. We believe every child deserves equal
                  opportunities to thrive, dream, and succeed—regardless of
                  their background.
                </motion.p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
