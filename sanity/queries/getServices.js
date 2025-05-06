import { client } from "@/sanity/client";

export const getServices = async () => {
  return await client.fetch(`*[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    details
  }`);
};
