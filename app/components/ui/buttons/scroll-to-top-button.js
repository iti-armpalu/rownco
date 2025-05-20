"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-to-top-button.module.css";

// export default function ScrollToTopButton() {
//   const [visible, setVisible] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY;
//       setScrollY(y);
//       setVisible(y > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`${styles.scrollButton} ${visible ? styles.visible : ""}`}
//       style={{ bottom: `calc(2rem + ${Math.min(scrollY * 0.05, 50)}px)` }}
//     >
//       ↑ Top
//     </button>
//   );
// }

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const themeAttr = entry.target.getAttribute("data-theme");
            if (themeAttr) setTheme(themeAttr);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollButton} ${visible ? styles.visible : ""} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      style={{ bottom: `calc(2rem + ${Math.min(scrollY * 0.05, 50)}px)` }}
    >
      <span className={styles.icon}>↑</span>
      <span className={styles.label}>Top</span>
    </button>
  );
}
