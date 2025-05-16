import { client } from "@/sanity/client";

export const getHero = async () => {
  return await client.fetch(`*[_type == "hero"] | order(_createdAt asc) {
    _id,
    title,
    subtitle
  }`);

};
