import Image from "next/image";
import styles from "./strategic-partners.module.css";
import Link from "next/link";
import MoodImageOverlay from "../ui/mood-image";

export default function StrategicPartners() {
  return (
     <div className="container">
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>Our Strategic Partners</h2>
          <p className={styles.paragraph}>
            We proudly collaborate with world-class partners to bring unmatched
            value to our projects. These relationships are built on shared
            vision, mutual trust, and exceptional execution.
          </p>
        </div>

        <div className={styles.right}>
          

           <a
            href="https://lombokcapitalventures.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
         
              <div className={styles.textOverlay}>
                <h3 className={styles.overlayTitle}>Lombok Capital Ventures</h3>
                <p className={styles.overlayDescription}>
                  Delivering strategic developments across Lombok, driven by international expertise, environmental consciousness, and long-term investor value.
                </p>
              </div>
     
          </a>

          <a
            href="https://kidsdeservemore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
         
              <div className={styles.textOverlay}>
                <h3 className={styles.overlayTitle}>Kids Deserve More</h3>
                <p className={styles.overlayDescription}>
                  Our initiative to give back to the community by supporting
                  underprivileged children through education, healthcare, and
                  mentorship. We believe every child deserves equal
                  opportunities to thrive, dream, and succeed—regardless of
                  their background.
                </p>
              </div>
     
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
