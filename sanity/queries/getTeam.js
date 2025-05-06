import { client } from "@/sanity/client";

export const getTeam = async () => {
  return await client.fetch(`*[_type == "team"] | order(_createdAt asc) {
    _id,
    name,
    position,
    description,
    image
  }`);
};
