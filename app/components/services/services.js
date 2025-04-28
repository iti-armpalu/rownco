"use client";

import { useRef, useState } from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

const services = [
  {
    title: "Development Set Up & Structuring",
    details:
      "We provide end-to-end guidance in establishing project frameworks, from land acquisition strategies to partnership models and legal structuring, ensuring every development begins with a solid and scalable foundation.",
  },
  {
    title: "Real Estate Strategy and Development Consultancy",
    details:
      "We offer strategic advisory across all phases of real estate development, from market analysis and feasibility studies to concept creation and execution, aligning each project with long-term value and local market dynamics.",
  },
  {
    title: "Joint Venture Agreements",
    details:
      "We structure and negotiate joint venture agreements that align stakeholder interests, clearly define roles and responsibilities, and create frameworks for shared success across development projects.",
  },
  {
    title: "Feasibility Studies & Test Fits",
    details:
      "We conduct in-depth feasibility studies and spatial test fits to evaluate project viability, optimize site potential, and support confident decision-making from the earliest stages.",
  },
  {
    title: "Masterplan Set up, Roll Out & Phasing Strategy",
    details:
      "We develop comprehensive masterplan frameworks with clear rollout and phasing strategies, ensuring cohesive growth, efficient infrastructure planning, and adaptability to market demands over time..",
  },
  {
    title: "Design & Development Management",
    details:
      "We lead and coordinate the full design and development process, aligning creative vision with practical execution to deliver projects on time, within budget, and to the highest standards.",
  },
  {
    title: "Client Representation",
    details:
      "We act as trusted representatives for our clients, safeguarding their interests across every stage of the project, from consultant coordination to execution oversight, ensuring quality, accountability, and alignment with their vision.",
  },
  {
    title: "Project Launches",
    details:
      "We curate and manage impactful project launches, aligning marketing, branding, and stakeholder engagement to generate momentum, drive sales or leasing, and establish a strong market presence from day one.",
  },
  {
    title: "Design Services",
    details:
      "We offer tailored architectural and interior design services that blend functionality, aesthetics, and context, delivering thoughtful, high-quality environments that reflect each project's unique identity and purpose.",
  },
];
const Services = () => {
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
};

export default Services;
