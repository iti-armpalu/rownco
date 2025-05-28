import About from "./components/about/about";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Team from "./components/team/team";
import styles from "./page.module.css";
// import { useEffect, useState } from "react";
// import { useSectionScroll } from "./hooks/useSectionScroll";
import ClientLogos from "./components/footer/client-logos";
import Contact from "./components/footer/contact";
import { getLogos } from "@/sanity/queries/getLogos";
import { getServices } from "@/sanity/queries/getServices";
import { getTeam } from "@/sanity/queries/getTeam";
import { getCategories } from "@/sanity/queries/getCategories";
import { getHero } from "@/sanity/queries/getHero";
import { getAbout } from "@/sanity/queries/getAbout";
import { getMainAbout } from "@/sanity/queries/getMainAbout";
import Footer from "./components/footer/footer";


const navLinks = [
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Team", section: "team" },
  { label: "Contact", section: "contact" },
];

export default async function Home() {
  const logos = await getLogos();
  const services = await getServices();
  const team = await getTeam();
  const categories = await getCategories();
  const hero = await getHero();
  const about = await getAbout();
  const mainAbout = await getMainAbout();

  return (
    <>
    <Header navLinks={navLinks} />
      <div className={styles.page}>
        <Hero hero={hero} />
        <About mainAbout={mainAbout} about={about} />
        <Services services={services} />
        <Portfolio categories={categories} />
        <Team team={team} />
        <Footer logos={logos}/>
      </div>
    </>
  );
}
