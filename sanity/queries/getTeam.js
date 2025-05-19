import { client } from "@/sanity/client";

const options = { next: { revalidate: 86400 } }; // 24 hours in seconds

export const getTeam = async () => {
  return await client.fetch(
    `*[_type == "team"] | order(_createdAt asc) {
    _id,
    name,
    position,
    description,
    image
  }`,
    {},
    options
  );
};
