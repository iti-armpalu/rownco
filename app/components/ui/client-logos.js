import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage"; // your helper function
import { client } from "@/sanity/client"; // make sure you import your Sanity client
import styles from "./client-logos.module.css";

const LOGOS_QUERY = `*[_type == "logo"] | order(name asc) {
  _id,
  name,
  logo,
  website
}`;

export default async function ClientLogos() {
  // const clients = await client.fetch(LOGOS_QUERY);

  return (
    <div className="container">
      <section className={styles.client}>
        {/* <h2>Our clients</h2>
        <div className={styles.clientLogos}>
          {clients.map((client) => (
            <Image
              key={client._id}
              src={urlFor(client.logo).url()}
              alt={client.name}
              className={styles.clientLogo}
              width={100}
              height={100}
            />
          ))}
        </div> */}
      </section>
    </div>
  );
}
