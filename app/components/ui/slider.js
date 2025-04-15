"use client";

import { useState } from "react";
import styles from "./slider.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Slider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.motionSlide}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.prevButton}>
          <svg
            width="100"
            height="24"
            viewBox="0 0 100 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 18L20 12L30 6"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="20"
              y1="12"
              x2="100"
              y2="12"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={styles.slideIndicator}>
          {currentIndex + 1} / {children.length}
        </span>
        <button onClick={nextSlide} className={styles.nextButton}>
          <svg
            width="100"
            height="24"
            viewBox="0 0 100 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 18L80 12L70 6"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="0"
              y1="12"
              x2="80"
              y2="12"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
