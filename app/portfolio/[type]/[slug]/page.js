import ProjectDetail from "@/app/components/portfolio/project-detail";
import { client } from "@/sanity/client";
import { getProjects } from "@/sanity/queries/getProjects";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "next-sanity"; // optional if you use rich text

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({ params }) {
  const { slug, type } = await params;

  const project = await client.fetch(PROJECT_QUERY, { slug }, options);
  const [allProjects] = await Promise.all([getProjects(type)]);

  const currentIndex = allProjects.findIndex((p) => p.slug.current === slug);

  const previousProject = allProjects[currentIndex - 1] || null;
  const nextProject = allProjects[currentIndex + 1] || null;

  // const mainImage = project?.images?.[0]?.asset;

  return (
    <ProjectDetail
      project={project}
      type={type}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
