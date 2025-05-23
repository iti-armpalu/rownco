"use client";

import styles from "./portfolio.module.css";
import CategoryCard from "./category-card";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { useRef } from "react";

export default function Portfolio({ categories }) {
  const portfolioRef = useRef();

  return (
    <div className="container">
      <section
        ref={portfolioRef}
        id="portfolio"
        data-theme="light"
        className={styles.portfolio}
      >
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
}
