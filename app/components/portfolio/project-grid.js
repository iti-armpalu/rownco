"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./project-grid.module.css";
import { fadeInViewProps } from "@/lib/animations";
import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage";

export default function ProjectGrid({ projects, type }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <motion.div
          key={project._id}
          className={styles.card}
          {...fadeInViewProps}
        >
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
          <Link href={`/portfolio/${type}/${project.slug.current}`} className={styles.link}>
            Visit project page
          </Link>
          {project.images?.[0]?.asset?.url && (
            <Image
              src={project.images[0].asset.url}
              alt={project.title}
              width={800}
              height={500}
              className={styles.image}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
