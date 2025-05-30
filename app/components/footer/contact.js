"use client";

import { useRef } from "react";
import styles from "./contact.module.css";
import ContactForm from "../ui/contact-form";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { submitForm } from "@/actions";

const Contact = () => {
  const contactRef = useRef();

  return (
    <section
      ref={contactRef}
      id="contact"
      className={styles.contact}
      data-theme="dark"
    >
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
};

export default Contact;
