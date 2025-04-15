"use client";

import { motion } from "framer-motion";
import ContactForm from "../ui/contact-form";
import styles from "./contact.module.css";
import { fadeInViewProps } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.h3 {...fadeInViewProps}>
        —Have a project or want to discuss an idea?
      </motion.h3>

      <motion.h2
        {...fadeInViewProps}
        transition={{ ...fadeInViewProps.transition, delay: 0.4 }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        {...fadeInViewProps}
        transition={{ ...fadeInViewProps.transition, delay: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
