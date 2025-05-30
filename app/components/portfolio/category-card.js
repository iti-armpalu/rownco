import Image from "next/image"; // Import Next.js Image component
import styles from "./category-card.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { urlFor } from "@/sanity/sanityImage";

export default function CategoryCard({
  type,
  image,
  title,
  description,
  customHeight,
}) {
  const dynamicHeight =
    typeof window !== "undefined" && window.innerWidth < 768
      ? "300px"
      : `${customHeight || 400}px`;

  return (
    <motion.div className={styles.card} {...fadeInViewProps}>
      <div className={styles.imageContainer} style={{ height: dynamicHeight }}>
        <Image
          src={urlFor(image).url()}
          alt={title}
          className={styles.image}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={`/portfolio/${type}`} className={styles.learnMore}>
          View {title}
        </Link>
      </div>
    </motion.div>
  );
}
