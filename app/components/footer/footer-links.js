"use client";

import styles from "./footer-links.module.css";


const FooterLinks = () => {
  return (
    <div className={styles.links}>
      <a href="https://www.instagram.com/rownco_/">Instagram</a>
      <p>hello@rownco.com</p>
      <p>&copy; {new Date().getFullYear()} Row & Co. All rights reserved.</p>
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
    </div>
  );
};

export default FooterLinks;
