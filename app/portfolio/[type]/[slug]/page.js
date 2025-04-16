import ProjectDetail from "@/app/components/project-detail";
import { client } from "@/sanity/client";
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
  const { slug } = await params;

  const project = await client.fetch(PROJECT_QUERY, { slug }, options);
  const mainImage = project?.images?.[0]?.asset;

  return <ProjectDetail project={project} />;
}
