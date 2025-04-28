"use client";

import About from "./components/about/about";
import Header from "./components/header";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Team from "./components/team/team";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useSectionScroll } from "./hooks/useSectionScroll";
import ClientLogos from "./components/ui/client-logos";
import Contact from "./components/contact/contact";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { refs, scrollTo } = useSectionScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setIsLoaded(true); // Trigger animation when the component mounts
  }, []);

  return (
    <>
      <Header onScrollTo={scrollTo} />
      <div className={styles.page}>
        <Hero />
        <About ref={refs.about} />
        <Services ref={refs.services} />
        <Portfolio ref={refs.portfolio} />
        <Team ref={refs.team} />
        <div className={styles.darkBackground}>
          {/* <ClientLogos /> */}
          <Contact ref={refs.contact} />
        </div>
      </div>
    </>
  );
}
