'use client';

import { fadeInViewProps } from "@/lib/animations";
import styles from "./portfolio-type-page-title.module.css";
import { motion } from "framer-motion";

export default function PortfolioTypePageTitle({ type }) {

  function formatProjectType(type) {
    return type
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace("And", "&");
  }

  return (
    <motion.h1
      className={styles.heading}
      {...fadeInViewProps}
    >
      {formatProjectType(type)} Projects
    </motion.h1>
  );
}
