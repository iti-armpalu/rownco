import { client } from "@/sanity/client";

export const getLogos = async () => {
  return await client.fetch(`*[_type == "logo"] | order(name asc) {
    _id,
    name,
    logo,
    website
  }`);
};