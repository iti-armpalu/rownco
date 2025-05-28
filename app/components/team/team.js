"use client";

import { useRef } from "react";
import Slider from "../ui/slider";
import styles from "./team.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import { urlFor } from "@/sanity/sanityImage";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";

export default function Team({ team }) {
  const teamRef = useRef();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const members = team.map((member) => (
    <motion.div
      key={member._id}
      className={styles.teamMember}
      {...fadeInViewProps}
    >
      <Image
        src={urlFor(member.image).url()}
        alt="text"
        className={styles.teamImage}
        width={300}
        height={300}
      />
      <div className={styles.teamMemberInfo}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberPosition}>{member.position}</p>
        <p className={styles.memberDescription}>{member.description}</p>
      </div>
    </motion.div>
  ));

  return (
    <section
      ref={teamRef}
      id="team"
      className={styles.section}
      data-theme="light"
    >
      <div className={styles.header}>
        <motion.h2 {...fadeInViewProps}>Meet our Team</motion.h2>
        <motion.p {...fadeInViewProps}>
          Discover the driving force behind our creativity. A diverse team of
          passionate architects, each contributing a unique perspective to shape
          the future of design.
        </motion.p>
      </div>

      <div>
        {isMobile ? (
          <div className={styles.mobileTeamLayout}>{members}</div>
        ) : (
          <Slider>{members}</Slider>
        )}
      </div>
    </section>
  );
}
