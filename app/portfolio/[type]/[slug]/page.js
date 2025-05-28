import Footer from "@/app/components/footer/footer";
import styles from "./page.module.css";
import ProjectDetail from "@/app/components/portfolio/project-detail";
import { getProjectBySlug } from "@/sanity/queries/getProjectBySlug";
import { getProjects } from "@/sanity/queries/getProjects";
import { getLogos } from "@/sanity/queries/getLogos";

export default async function ProjectPage({ params }) {
  const { slug, type } = await params;
    const logos = await getLogos();

  const project = await getProjectBySlug(slug);
  const [allProjects] = await Promise.all([getProjects(type)]);

  const currentIndex = allProjects.findIndex((p) => p.slug.current === slug);

  const totalProjects = allProjects.length;

  const previousProject =
    allProjects[(currentIndex - 1 + totalProjects) % totalProjects];

  const nextProject = allProjects[(currentIndex + 1) % totalProjects];

  return (
    <div className={styles.page}>
      <ProjectDetail
        project={project}
        type={type}
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <Footer logos={logos} />
    </div>
  );
}
