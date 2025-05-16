import styles from "./page.module.css";
import { client } from "@/sanity/client";
import ProjectGrid from "@/app/components/portfolio/project-grid";
import PortfolioTypePageTitle from "@/app/components/ui/portfolio-type-page-title";

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
      <PortfolioTypePageTitle type={type} />
      <ProjectGrid projects={projects} type={type} />
    </div>
  );
}
