import styles from "./hero.module.css";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";

export default function Hero({ hero }) {
  return (
    <section className={styles.section}>
      {hero.map((hero) => (
        <div key={hero._id}>
          <MoodImageOverlay
            src={urlFor(hero.image).url()}
            className={styles.image}
            overlayType="gradient"
            priority
          />

          <div className={styles.content}>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
