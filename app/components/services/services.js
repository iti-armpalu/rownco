"use client";

import { useRef, useState } from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

export default function Services({ services }) {
  const servicesRef = useRef();

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section ref={servicesRef} id="services" className={styles.servicesSection}>
      <div className={styles.heading}>
        <motion.h2 {...fadeInViewProps}>Project Expertise</motion.h2>
        <motion.p {...fadeInViewProps}>
          16 years of experience have allowed us to craft a service approach
          tailored to the scale, ambition, and complexity of every project we
          undertake.
        </motion.p>
      </div>

      <div className={styles.accordion}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.item}
            {...fadeInViewProps}
            transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
          >
            <div className={styles.toggleBtn} onClick={() => toggle(index)}>
              <h3>{service.title}</h3>
              <div
                className={`${styles.iconSurvey} ${openIndex === index ? styles.active : ""}`}
              >
                <div
                  className={`${styles.iconShape} ${openIndex === index ? styles.active : ""}`}
                ></div>
              </div>
            </div>
            {openIndex === index && (
              <div
                className={`${styles.content} ${
                  openIndex === index ? styles.open : styles.closed
                }`}
              >
                <p>{service.details}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
