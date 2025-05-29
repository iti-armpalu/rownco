"use client";

import styles from "./hero.module.css";
import { urlFor } from "@/sanity/sanityImage";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInOnLoadProps } from "@/lib/animations";

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
            <motion.h1 {...fadeInOnLoadProps}>{hero.title}</motion.h1>
            <motion.p
              {...fadeInOnLoadProps}
              transition={{ ...fadeInOnLoadProps.transition, delay: 0.6 }}
            >
              {hero.subtitle}
            </motion.p>
          </div>
        </div>
      ))}
    </section>
  );
}
