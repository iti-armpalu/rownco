'use client';

import Image from "next/image";
import { urlFor } from "@/sanity/sanityImage"; // your helper function
import styles from "./client-logos.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

export default function ClientLogos({ logos }) {
  return (
    <div className="container">
      <section className={styles.client} data-theme="dark">
        <h2>Our clients</h2>
        <div className={styles.clientLogos}>
          {logos.map((logo, index) => (
            <motion.div
              className={styles.clientLogoContainer}
              key={logo._id}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              <Image
                // src={urlFor(logo.logo).url()}
                src={logo.logo.asset.url}
                alt={logo.name}
                className={styles.clientLogo}
                width={100}
                height={100}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
