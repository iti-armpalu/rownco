import Image from "next/image"; // Import Next.js Image component
import styles from "./category-card.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { urlFor } from "@/sanity/sanityImage";

export default function CategoryCard({ type, image, title, description }) {
  return (
    <motion.div className={styles.category} {...fadeInViewProps}>
      <div className={styles.imageContainer}>
        <Image
          src={urlFor(image).url()}
          alt={title}
          className={styles.image}
          width={600}
          height={300}
          priority
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link
          href={`/portfolio/${type}`}

          className={styles.learnMore}
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
