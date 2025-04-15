'use client'

import { useState } from "react";
import styles from "./slider.module.css";

export default function Slider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        {children[currentIndex]}
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.prevButton}>
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 18L20 12L30 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="20" y1="12" x2="100" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className={styles.slideIndicator}>
          {currentIndex + 1} / {children.length}
        </span>
        <button onClick={nextSlide} className={styles.nextButton}>
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 18L80 12L70 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="0" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}