"use client";

import styles from "./portfolio.module.css";
import CategoryCard from "./category-card";
import { useRef } from "react";
import { Masonry } from "react-plock";
import SectionIntro from "../ui/section-intro";

export default function Portfolio({ categories }) {
  const portfolioRef = useRef();

  const heightMap = [400, 550, 600, 550];

  const categoriesWithHeights = categories.map((item, index) => ({
    ...item,
    customHeight: heightMap[index % heightMap.length],
  }));

  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      data-theme="light"
      className={styles.section}
    >
      <SectionIntro
        title="Portfolio"
        description="Our portfolio reflects a consistent ability to deliver impactful, tailored solutions across projects of varying scale, ambition, and complexity."
        layout="centered"
        theme="light"
      />

      <Masonry
        items={categoriesWithHeights}
        config={{
          columns: [1, 2],
          gap: [24, 32],
          media: [768, 1024],
        }}
        render={(card, index) => (
          <CategoryCard
            key={card._id}
            {...card}
            customHeight={card.customHeight}
          />
        )}
      />
    </section>
  );
}
