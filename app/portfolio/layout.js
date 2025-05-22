"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import ClientLogos from "../components/ui/client-logos";
import Contact from "../components/contact/contact";
import { motion } from "framer-motion";
import { fadeInViewProps } from "@/lib/animations";
import HamburgerButton from "../components/ui/buttons/hamburger-button";
import MobileMenu from "../components/ui/mobile-menu";

const navLinks = [{ href: "/", label: "Home" }];

export default function PortfolioLayout({ children }) {
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
    <>
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
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                </Link>
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
      {children}
    </>
  );
}
