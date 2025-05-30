import { client } from "@/sanity/client";

const PROJECTS_QUERY = `*[
  _type == "project" && type == $type && defined(slug.current)
] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  officialWebsite,
  shortDescription,
  longDescription,
  involvement[]->{
    _id,
    title
  },
  location,
  type,
  images[]{asset->{url}}
}`;

const options = { next: { revalidate: 30 } };

export const getProjects = (type) =>
  client.fetch(PROJECTS_QUERY, { type }, options);
