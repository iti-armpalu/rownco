import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } }; // 24 hours in seconds

export const getAbout = async () => {
  return await client.fetch(
    `*[_type == "about"] | order(_createdAt asc) {
    _id,
    title,
    description,
    image,
    altText
  }`,
    {},
    options
  );
};
