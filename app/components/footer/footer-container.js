import React from "react";
import styles from "./footer-container.module.css";
import ClientLogos from "../ui/client-logos";
import Contact from "../contact/contact";

const logos = [
  { name: "Client 1", url: "/images/logos/logoipsum-364.svg" },
  { name: "Client 2", url: "/images/logos/logoipsum-364.svg" },
  { name: "Client 3", url: "/images/logos/logoipsum-364.svg" },
];

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

const FooterContainer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* <ClientLogos logos={logos} /> */}
      <Contact />
      <div className={styles.footerContent}>
        {/* <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div> */}
        <div className={styles.footerLinks}>
          <p>hello@rownco.com</p>
          <p>
            &copy; {new Date().getFullYear()} Row & Co. All rights reserved.
          </p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
