import { client } from "@/sanity/client";

const options = { next: { revalidate: 86400 } }; // 24 hours in seconds

export const getCategories = async () => {
  return await client.fetch(
    `*[_type == "category"] | order(_createdAt asc) {
      _id,
      type,
      title,
      description,
      image
    }`,
    {},
    options
  );
};
