"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-to-top-button.module.css";

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
      <span className={styles.icon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 4V20M12 4L18 10M12 4L6 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </span>
      <span className={styles.label}>Top</span>
    </button>
  );
}
