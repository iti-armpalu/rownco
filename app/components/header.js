"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import HamburgerButton from "./ui/buttons/hamburger-button";

const navLinks = [
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Team", section: "team" },
  { label: "Contact", section: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const onScrollTo = (id) => {
    const cleanId = id.replace("#", "");
    const section = document.getElementById(cleanId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <motion.header className={styles.header} {...fadeInViewProps}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/rownco-logo.svg"
                alt="Logo"
                width={100}
                height={45}
                className={styles.logoImage}
              />
            </Link>
          </div>

          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <button
                key={link.section}
                className={styles.navLink}
                onClick={() => onScrollTo(link.section)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </motion.header>
        <HamburgerButton
          isOpen={menuOpen}
          toggleMenu={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Slide-in mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link, index) => (
          <motion.button
            key={index}
            className={styles.mobileNavLink}
            {...fadeInViewProps}
            transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            onClick={() => {
              onScrollTo(link.section);
              setMenuOpen(false);
            }}
          >
            {link.label}
          </motion.button>
        ))}
      </div>

      {/* Optional overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
