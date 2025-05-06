import { client } from "@/sanity/client";

export const getCategories = async () => {
  return await client.fetch(`*[_type == "category"] | order(_createdAt asc) {
    _id,
    type,
    title,
    description,
    image
  }`);

};
