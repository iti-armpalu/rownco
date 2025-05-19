import { client } from "@/sanity/client";

const options = { next: { revalidate: 86400 } }; // 24 hours in seconds

export const getLogos = async () => {
  return await client.fetch(
    `*[_type == "logo"] | order(name asc) {
    _id,
    name,
    logo,
    website
  }`,
    {},
    options
  );
};
