import Link from "next/link";
import styles from "./page.module.css";

import { client } from "@/sanity/client";

const PROJECTS_QUERY = `*[
  _type == "project" && defined(slug.current)
] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  description,
  location,
  involvement,
  type,
  images[]{asset->{url}}
}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsByType({ params }) {
  const { type } = await params;

  // const res = await fetch(`http://localhost:3000/api/projects?type=${type}`, {
  //   cache: "no-store",
  // });

  // if (!res.ok) {
  //   return <p>Failed to load projects.</p>;
  // }

  // const projects = await res.json();

  // if (!projects.length) {
  //   return <p>No {type} projects found.</p>;
  // }

  const projects = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{type} Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link
              href={`/portfolio/${type}/${project.slug.current}`}
              className={styles.card}
            >Visit project page</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
