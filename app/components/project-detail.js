"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./project-detail.module.css";
import { getProjectData } from "@/lib/projects";

export default function ProjectDetail({ slug }) {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const data = await getProjectData(slug);

        if (!data) {
          setError("Project not found");
        } else {
          setProject(data);
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
        setError("Error fetching project details");
      }
    };

    fetchProjectData();
  }, [slug]);

  if (error) {
    return (
      <div className={styles.container}>
        <p>{error}</p>
      </div>
    );
  }
  if (!project) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.metaGrid}>
        <div className={styles.metaItem}>
          <p className={styles.label}>Location</p>
          <p className={styles.value}>{project.location}</p>
        </div>
        <div className={styles.metaItem}>
          <p className={styles.label}>Description</p>
          <p className={styles.value}>{project.description}</p>
        </div>
        <div className={styles.metaItem}>
          <p className={styles.label}>Involvement</p>
          <p className={styles.value}>{project.involvement}</p>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}
