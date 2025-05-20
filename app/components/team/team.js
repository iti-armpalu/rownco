"use client";

import { useRef } from "react";
import Slider from "../ui/slider";
import styles from "./team.module.css";
// import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import MoodImageOverlay from "../ui/mood-image";
import { urlFor } from "@/sanity/sanityImage";

export default function Team({ team }) {
  const teamRef = useRef();

  return (
    <section ref={teamRef} id="team" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 {...fadeInViewProps}>Meet our Team</motion.h2>
        <motion.p {...fadeInViewProps}>
          Discover the driving force behind our creativity. A diverse team of
          passionate architects, each contributing a unique perspective to shape
          the future of design.
        </motion.p>
      </div>
      <motion.div {...fadeInViewProps}>
        <Slider>
          {team.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              {/* <div className={styles.teamMemberImage}> */}
                <MoodImageOverlay
                  src={urlFor(member.image).url()}
                  alt={member.imageAlt}
                  // overlayOpacity={0.2}
                  // width={300}
                  // height={300}
                  className={styles.teamImage}
                  overlayOpacity={0.25}
                  priority
                />
              {/* </div> */}
              <div className={styles.teamMemberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>

                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
