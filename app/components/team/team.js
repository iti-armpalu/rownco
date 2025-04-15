import Slider from "../ui/slider";
import styles from "./team.module.css";
import Image from "next/image";
import team from "@/lib/team";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.header}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Meet our Team
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Discover the driving force behind our creativity – a diverse team of
          passionate architects, each contributing a unique perspective to shape
          the future of design.
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
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
