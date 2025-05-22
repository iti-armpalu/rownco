"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import HamburgerButton from "./ui/buttons/hamburger-button";
import MobileMenu from "./ui/mobile-menu";

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
      document.documentElement.classList.add("no-scroll"); // <html>
      document.body.classList.add("no-scroll"); // <body>
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const onScrollTo = (id) => {
    // const section = document.getElementById(cleanId);
    // section?.scrollIntoView({ behavior: "smooth" });

    // Close menu
    setMenuOpen(false);

    // Use a timeout to scroll after menu is closed
    setTimeout(() => {
      const cleanId = id.replace("#", "");
      const section = document.getElementById(cleanId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay slightly to let scroll lock reset
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
                height={44}
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

      <MobileMenu
        menuOpen={menuOpen}
        navLinks={navLinks}
        onScrollTo={onScrollTo}
        setMenuOpen={setMenuOpen}
        fadeInViewProps={fadeInViewProps}
      />

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
