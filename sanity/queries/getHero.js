import { client } from "@/sanity/client";

const options = { next: { revalidate: 86400 } }; // 24 hours in seconds

export const getHero = async () => {
  return await client.fetch(
    `*[_type == "hero"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    image,
    altText
  }`,
    {},
    options
  );
};
