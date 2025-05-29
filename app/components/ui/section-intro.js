"use client";

import styles from "./section-intro.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

const SectionIntro = ({
  title,
  description,
  layout = "default", // e.g., 'centered', 'left', etc.
  theme = "light", // 'light' or 'dark'
  className = "",
}) => {
  const layoutClass = styles[`layout__${layout}`] || "";
  const themeClass = styles[`theme__${theme}`] || "";

  const combinedClassName =
    `${styles.intro} ${layoutClass} ${themeClass} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      <motion.h2 {...fadeInViewProps}>{title}</motion.h2>
      <motion.p {...fadeInViewProps}>{description}</motion.p>
    </div>
  );
};

export default SectionIntro;
