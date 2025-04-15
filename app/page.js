"use client";

import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Team from "./components/team/team";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger animation when the component mounts
  }, []);

  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Portfolio />
      <Team />
    </div>
  );
}
