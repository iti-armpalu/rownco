import Slider from "../ui/slider";
import styles from "./team.module.css";
import Image from "next/image";
import team from "@/lib/team";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.header}>
        <motion.h2 {...fadeInViewProps}>Meet our Team</motion.h2>
        <motion.p {...fadeInViewProps}>
          Discover the driving force behind our creativity – a diverse team of
          passionate architects, each contributing a unique perspective to shape
          the future of design.
        </motion.p>
      </div>
      <motion.div {...fadeInViewProps}>
        <Slider>
          {team.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamMemberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
                {/* <a
                href={member.cvLink}
                className={styles.cvButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a> */}
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
