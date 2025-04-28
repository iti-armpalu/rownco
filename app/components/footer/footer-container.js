import React from "react";
import styles from "./footer-container.module.css";
import ClientLogos from "../ui/client-logos";
import Contact from "../contact/contact";



const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
];

const FooterContainer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* <ClientLogos logos={logos} /> */}
      {/* <Contact /> */}
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
