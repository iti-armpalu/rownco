import Link from "next/link";
import styles from "./page.module.css";

export default async function ProjectsByType({ params }) {
  const { type } = await params;

  const res = await fetch(`http://localhost:3000/api/projects?type=${type}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Failed to load projects.</p>;
  }

  const projects = await res.json();

  if (!projects.length) {
    return <p>No {type} projects found.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{type} Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${type}/${project.slug}`}
            className={styles.card}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
