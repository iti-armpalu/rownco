import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } }; // 24 hours in seconds

export const getLogos = async () => {
  return await client.fetch(
    `*[_type == "logo"] | order(name asc) {
      _id,
      name,
      logo {
        asset->{
          _id,
          url
        }
      },
      website
    }`,
    {},
    options
  );
};
