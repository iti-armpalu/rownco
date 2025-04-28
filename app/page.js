import About from "./components/about/about";
import Header from "./components/header";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Team from "./components/team/team";
import styles from "./page.module.css";
// import { useEffect, useState } from "react";
// import { useSectionScroll } from "./hooks/useSectionScroll";
import ClientLogos from "./components/ui/client-logos";
import Contact from "./components/contact/contact";
import { getLogos } from "@/sanity/queries/getLogos";

export default async function Home() {
  const logos = await getLogos();

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <div className={styles.darkBackground}>
          <ClientLogos logos={logos} />
          <Contact />
        </div>
      </div>
    </>
  );
}
