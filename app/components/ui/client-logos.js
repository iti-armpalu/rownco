import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage"; // your helper function
import { client } from "@/sanity/client"; // make sure you import your Sanity client
import styles from "./client-logos.module.css";


export default async function ClientLogos({logos}) {

  return (
    <div className="container">
      <section className={styles.client}>
        <h2>Our clients</h2>
        <div className={styles.clientLogos}>
          {logos.map((logo) => (
            <Image
              key={logo._id}
              src={urlFor(logo.logo).url()}
              alt={logo.name}
              className={styles.clientLogo}
              width={100}
              height={100}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
