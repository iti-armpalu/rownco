import styles from "./portfolio.module.css";
import categories from "@/lib/categories";
import CategoryCard from "./category-card";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

export default function Portfolio() {
  return (
    <div className="container">
      <section id="portfolio" className={styles.portfolio}>
        <motion.h2 {...fadeInViewProps} className={styles.heading}>
          Portfolio
        </motion.h2>
        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard key={category.type} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};
