"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import HamburgerButton from "../ui/buttons/hamburger-button";
import MobileMenu from "../ui/mobile-menu";

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
          <motion.div className={styles.logo} {...fadeInViewProps}>
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
            {navLinks.map((link, index) => {
              const { label, href, section } = link;
              const isLast = index === navLinks.length - 1;
              const linkClass = `${styles.navLink} ${isLast ? styles.lastNavLink : ""}`;

              if (href) {
                return (
                  <motion.div
                    key={index}
                    {...fadeInViewProps}
                    transition={{
                      ...fadeInViewProps.transition,
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
                // 🔵 For scroll targets
                return (
                  <motion.button
                    key={index}
                    className={linkClass}
                    {...fadeInViewProps}
                    transition={{
                      ...fadeInViewProps.transition,
                      delay: index * 0.1,
                    }}
                    onClick={() => {
                      handleScrollTo(link.section);
                      setMenuOpen(false);
                    }}
                  >
                    {label}
                  </motion.button>
                );
              }

              return null;
            })}
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
        onScrollTo={handleScrollTo}
        setMenuOpen={setMenuOpen}
        fadeInViewProps={fadeInViewProps}
      />

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
}
