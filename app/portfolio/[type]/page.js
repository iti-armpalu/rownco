import styles from "./page.module.css";
import { client } from "@/sanity/client";
import ProjectGrid from "@/app/components/portfolio/project-grid";

const PROJECTS_QUERY = `*[
  _type == "project" && type == $type && defined(slug.current)
] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  shortDescription,
  longDescription,
  location,
  involvement,
  type,
  images[]{asset->{url}}
}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsByType({ params }) {
  const { type } = await params;

  const projects = await client.fetch(PROJECTS_QUERY, { type }, options);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{type} Projects</h1>
      <ProjectGrid projects={projects} type={type} />
    </div>
  );
}
