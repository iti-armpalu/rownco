"use client";

import styles from "./portfolio-type-page-title.module.css";
import { motion } from "framer-motion";
import { fadeInOnLoadProps } from "@/lib/animations";
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
      <motion.h1 className={styles.heading} {...fadeInOnLoadProps}>
        {formatProjectType(type)} Projects
      </motion.h1>

      <div className={styles.viewAlso}>
        <motion.span className={styles.viewAlsoLabel} {...fadeInOnLoadProps}>
          View also:
        </motion.span>
        <div className={styles.linkRow}>
          {otherTypes.map((t, index) => (
            <motion.div
              key={t._id}
              {...fadeInOnLoadProps}
              transition={{
                ...fadeInOnLoadProps.transition,
                delay: index * 0.2,
              }}
            >
              <Link href={`/portfolio/${t.type}`} className={styles.link}>
                {t.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
