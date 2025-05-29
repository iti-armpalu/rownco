import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./nav-links.module.css";

const NavLinks = ({ navLinks, fadeInOnLoadProps, handleScrollTo, setMenuOpen }) => {
  return (
    <>
      {navLinks.map((link, index) => {
        const { label, href, section } = link;
        const isLast = index === navLinks.length - 1;
        const linkClass = `${styles.navLink} ${isLast ? styles.lastNavLink : ""}`;

        if (href) {
          return (
            <motion.div
              key={index}
              {...fadeInOnLoadProps}
              transition={{
                ...fadeInOnLoadProps.transition,
                delay: index * 0.1,
              }}
            >
              <Link
                href={href}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          );
        } else if (section) {
          return (
            <motion.button
              key={index}
              className={linkClass}
              {...fadeInOnLoadProps}
              transition={{
                ...fadeInOnLoadProps.transition,
                delay: index * 0.2,
              }}
              onClick={() => {
                handleScrollTo(section);
                setMenuOpen(false);
              }}
            >
              {label}
            </motion.button>
          );
        }

        return null;
      })}
    </>
  );
};

export default NavLinks;
