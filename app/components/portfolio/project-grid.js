"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./project-grid.module.css";
import { fadeInViewProps } from "@/lib/animations";
import Image from "next/image";
import { Masonry } from "react-plock";

export default function ProjectGrid({ projects, type }) {
  return (
    <Masonry
      items={projects}
      config={{
        columns: [1, 2],
        gap: [24, 32],
        media: [640, 1024],
      }}
      render={(item) => (
        <motion.div key={item._id} className={styles.cardWrapper} {...fadeInViewProps}>
          <div className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.shortDescription}</p>
            <Link
              href={`/portfolio/${type}/${item.slug.current}`}
              className={styles.link}
            >
              View project details
            </Link>
            {item.images?.[0]?.asset?.url && (
              <Image
                src={item.images[0].asset.url}
                alt={item.title}
                width={800}
                height={500}
                className={styles.image}
              />
            )}
          </div>
        </motion.div>
      )}
    />
  );
}
