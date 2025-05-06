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
import { getServices } from "@/sanity/queries/getServices";
import { getTeam } from "@/sanity/queries/getTeam";
import { getCategories } from "@/sanity/queries/getCategories";

export default async function Home() {
  const logos = await getLogos();
  const services = await getServices();
  const team = await getTeam();
  const categories = await getCategories();

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Hero />
        <About />
        <Services services={services} />
        <Portfolio categories={categories} />
        <Team team={team} />
        <div className={styles.darkBackground}>
          <ClientLogos logos={logos} />
          <Contact />
        </div>
      </div>
    </>
  );
}
