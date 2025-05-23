import styles from "./page.module.css";
import ProjectGrid from "@/app/components/portfolio/project-grid";
import PortfolioTypePageTitle from "@/app/components/ui/portfolio-type-page-title";
import { getCategories } from "@/sanity/queries/getCategories";
import { getProjects } from "@/sanity/queries/getProjects";

export default async function ProjectsByType({ params }) {
  const { type } = await params;

  // const projects = await getProjects(type);

  const [projects, allTypes] = await Promise.all([
    getProjects(type),
    getCategories(),
  ]);

  return (
    <div className={styles.container}>
      <PortfolioTypePageTitle type={type} allTypes={allTypes} />
      <ProjectGrid projects={projects} type={type} />
    </div>
  );
}
