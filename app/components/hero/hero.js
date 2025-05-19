import styles from "./hero.module.css";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";

export default function Hero({ hero }) {
  return (
    <section className={styles.hero}>
      {hero.map((hero, index) => (
        <div key={index}>
          {/* <MoodImageOverlay
            imageUrl="https://images.unsplash.com/photo-1495321308589-43affb814eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // imageUrl={urlFor(hero.image).url()}
            overlayOpacity={0.5}
            // width={section.width}
            height="600px"
          /> */}

          <MoodImageOverlay
            src={urlFor(hero.image).url()}
            // overlayOpacity={0.2}
            // width={300}
            // height={300}
            className={styles.image}
            overlayOpacity={0.5}
            priority
          />


          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {/* Architecture and real estate development studio */}
              {hero.title}
            </h1>
            <p className={styles.heroSubtitle}>
              {/* Bringing creativity, elegance & timeless designs into real estate developments */}
              {hero.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
