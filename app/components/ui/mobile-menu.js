"use client";

import styles from "./mobile-menu.module.css";
import NavLinks from "./nav-links";

export default function MobileMenu({
  menuOpen,
  navLinks,
  handleScrollTo,
  setMenuOpen,
  fadeInOnLoadProps,
}) {
  return (
    <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
      <NavLinks
        navLinks={navLinks}
        fadeInOnLoadProps={fadeInOnLoadProps}
        handleScrollTo={handleScrollTo}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}
