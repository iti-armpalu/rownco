import styles from "./hero.module.css";
import { urlFor } from "@/sanity/sanityImage";
import Image from "next/image";

export default function Hero({ hero }) {
  return (
    <section className={styles.section}>
      {hero.map((hero) => (
        <div key={hero._id} className={styles.wrapper}>
          <Image
            src={urlFor(hero.image).url()}
            alt="text"
            className={styles.image}
            width={800}
            height={800}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
