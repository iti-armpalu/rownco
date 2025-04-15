import ProjectDetail from "@/app/components/project-detail";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  return <ProjectDetail slug={slug} />;
}
