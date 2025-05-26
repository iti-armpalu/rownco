import ProjectDetail from "@/app/components/portfolio/project-detail";
import { getProjectBySlug } from "@/sanity/queries/getProjectBySlug";

export default async function ProjectPage({ params }) {
  const { slug, type } = await params;

  const project = await getProjectBySlug(slug);
  const [allProjects] = await Promise.all([getProjects(type)]);

  const currentIndex = allProjects.findIndex((p) => p.slug.current === slug);

  const totalProjects = allProjects.length;

  const previousProject =
    allProjects[(currentIndex - 1 + totalProjects) % totalProjects];

  const nextProject = allProjects[(currentIndex + 1) % totalProjects];

  return (
    <ProjectDetail
      project={project}
      type={type}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
