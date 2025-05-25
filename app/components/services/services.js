"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./services.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";
import Image from "next/image";
// import FlowerIcon from "../../../public/flower.svg";

const iconPaths = [
  "/flower.svg",
  "/rhombus.svg",
  "/star.svg",
  "/triangle.svg",
  "/square.svg",
];

export default function Services({ services }) {
  const servicesRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleImageLoad = () => setIsLoaded(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const richPurple = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--rich-purple");
          document.body.style.backgroundColor = richPurple;
        } else {
          const softLilac = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--soft-lilac");
          document.body.style.backgroundColor = softLilac;
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
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
              ${isDark ? styles.lightBorder : ""}`}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              <div className={styles.toggleBtn} onClick={() => toggle(index)}>
                <div className={styles.serviceIcon}>
                  <Image
                    src={iconPaths[index % iconPaths.length]}
                    alt="Service Icon"
                    width={32} // optional
                    height={32} // optional
                    className={styles.icon}
                  />
                </div>

                <h4>{service.title}</h4>
                <div
                  className={`${styles.iconSurvey} ${openIndex === index ? styles.active : ""}`}
                >
                  <div
                    className={`${styles.iconShape} ${openIndex === index ? styles.active : ""}`}
                  ></div>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  // <div
                  //   className={`${styles.content} ${
                  //     openIndex === index ? styles.open : styles.closed}`}
                  // >
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
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
                    {/* </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
