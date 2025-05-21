"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";

export default function Services({ services }) {
  const servicesRef = useRef();

  const [openIndex, setOpenIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    const section = document.getElementById("services");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      ref={servicesRef}
      id="services"
      data-theme="dark"
      className={`${styles.section} ${isDark ? styles.darkBackground : ""}`}
    >
      <div className={styles.services}>
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
              className={`${styles.item}
              ${isDark ? styles.lightBorder : ''}`}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              <div className={styles.toggleBtn} onClick={() => toggle(index)}>
                <h4>{service.title}</h4>
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
                  {service.image && (
                    <MoodImageOverlay
                      src={urlFor(service.image).url()}
                      alt={service.imageAlt || "Service image"}
                      className={styles.image}
                      overlayOpacity={0.2}
                      priority
                    />
                  )}
                  <p>{service.details}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
