'use client';

import { fadeInViewProps } from "@/lib/animations";
import styles from "./portfolio-type-page-title.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioTypePageTitle({ type, allTypes }) {

  function formatProjectType(type) {
    return type
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace("And", "&");
  }

   const otherTypes = allTypes.filter((t) => t.type !== type);

  return (
    <div className={styles.wrapper}>
      <motion.h1 className={styles.heading} {...fadeInViewProps}>
        {formatProjectType(type)} Projects
      </motion.h1>

      <div className={styles.viewAlso}>
        <span className={styles.viewAlsoLabel}>View also:</span>
        <div className={styles.linkRow}>
          {otherTypes.map((t) => (
            <Link key={t.slug} href={`/portfolio/${t.slug}`} className={styles.link}>
              {/* {formatProjectType(t.slug)} */}
              {t.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
