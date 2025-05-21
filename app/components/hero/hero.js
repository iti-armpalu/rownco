import styles from "./hero.module.css";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";

export default function Hero({ hero }) {
  return (
    <section className={styles.hero}>
      {hero.map((hero, index) => (

        <div key={index}>
          
          <MoodImageOverlay
            src={urlFor(hero.image).url()}
            className={styles.image}
            overlayOpacity={0.2}
            priority
          />

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
