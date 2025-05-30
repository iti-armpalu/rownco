import { client } from "@/sanity/client";

const options = { next: { revalidate: 86400 } }; // 24 hours in seconds

export const getServices = async () => {
  return await client.fetch(
    `*[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    details,
    image,
    altText
  }`,
    {},
    options
  );
};
