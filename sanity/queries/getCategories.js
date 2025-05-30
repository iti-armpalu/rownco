import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } }; // 24 hours in seconds

export const getCategories = async () => {
  return await client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id,
      type,
      title,
      description,
      order,
      image,
      altText
    }`,
    {},
    options
  );
};
