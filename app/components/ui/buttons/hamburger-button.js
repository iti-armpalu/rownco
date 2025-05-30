// HamburgerButton.tsx
import styles from "./hamburger-button.module.css";
import { motion } from "framer-motion";
import { fadeInOnLoadProps } from "@/lib/animations";

export default function HamburgerButton({ isOpen, toggleMenu }) {
  return (
    <motion.button
      {...fadeInOnLoadProps}
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </motion.button>
  );
}
