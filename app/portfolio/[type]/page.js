import styles from "./page.module.css";
// import { client } from "@/sanity/client";
import ProjectGrid from "@/app/components/portfolio/project-grid";
import PortfolioTypePageTitle from "@/app/components/ui/portfolio-type-page-title";
import { getProjects } from "@/sanity/queries/getProjects";

export default async function ProjectsByType({ params }) {
  const { type } = await params;

  const projects = await getProjects(type);

  return (
    <div className={styles.container}>
      <PortfolioTypePageTitle type={type} />
      <ProjectGrid projects={projects} type={type} />
    </div>
  );
}
