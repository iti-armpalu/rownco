"use client";

import Image from "next/image";
import styles from "./client-logos.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import SectionIntro from "../ui/section-intro";

export default function ClientLogos({ logos }) {
  return (
    <div className="container">
      <section className={styles.section} data-theme="dark">

        <SectionIntro
          title="Our clients"
          description=""
          layout="default"
          theme="dark"
        />

        <div className={styles.clientLogos}>
          {logos.map((logo, index) => (
            <motion.div
              className={styles.clientLogoContainer}
              key={logo._id}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              <Image
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
