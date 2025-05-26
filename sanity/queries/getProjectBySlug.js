import { client } from "@/sanity/client";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
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
  features,
  location,
  type,
  images[]{asset->{url}}
}`;

const options = { next: { revalidate: 30 } };

export const getProjectBySlug = (slug) =>
  client.fetch(PROJECT_QUERY, { slug }, options);
