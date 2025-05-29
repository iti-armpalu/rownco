"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { fadeInOnLoadProps } from "@/lib/animations";
import HamburgerButton from "../ui/buttons/hamburger-button";
import MobileMenu from "../ui/mobile-menu";
import NavLinks from "../ui/nav-links";

export default function Header({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const cleanId = id.replace("#", "");
      const section = document.getElementById(cleanId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <motion.div className={styles.logo} {...fadeInOnLoadProps}>
            <Link href="/">
              <Image
                src="/images/rownco-logo.svg"
                alt="Logo"
                width={100}
                height={44}
                className={styles.logoImage}
              />
            </Link>
          </motion.div>

          <nav className={styles.navLinks}>
          
            <NavLinks
              navLinks={navLinks}
              fadeInOnLoadProps={fadeInOnLoadProps}
              handleScrollTo={handleScrollTo}
              setMenuOpen={setMenuOpen}
            />
          </nav>
        </header>

        <HamburgerButton
          isOpen={menuOpen}
          toggleMenu={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <MobileMenu
        menuOpen={menuOpen}
        navLinks={navLinks}
        handleScrollTo={handleScrollTo}
        setMenuOpen={setMenuOpen}
        fadeInOnLoadProps={fadeInOnLoadProps}
      />

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
