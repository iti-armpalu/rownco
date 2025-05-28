import React from "react";
import styles from "./footer.module.css";
import ClientLogos from "./client-logos";
import Contact from "./contact";
import FooterLinks from "./footer-links";
import StrategicPartners from "./strategic-partners";


const Footer = ({logos}) => {
  return (
    <footer className={styles.footer} data-theme="dark">
      <div className={styles.content}>
        <ClientLogos logos={logos} />
        <StrategicPartners />
        <Contact />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
