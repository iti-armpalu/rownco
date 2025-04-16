"use client";

import styles from "./contact.module.css";
import ContactForm from "../ui/contact-form";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { submitForm } from "@/actions";

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
        <ContactForm onSubmit={submitForm} />
      </motion.div>
    </section>
  );
}
