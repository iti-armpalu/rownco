

import Image from "next/image";
import styles from "./client-logos.module.css";

const logos = [
  { name: "RAK Properties", url: "/images/logos/rak-properties-logo.svg" },
  { name: "Belgarde Waterfront", url: "/images/logos/belgrade-waterfront-logo.svg" },
  { name: "Callison RTKL.svg", url: "/images/logos/callisonRTKL-logo.svg" },
];

const ClientLogos = () => {
  return (
    <div className="container">
      <section className={styles.client}>
        <h2>Our clients</h2>
        <div className={styles.clientLogos}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.url}
              alt={`Client logo ${index + 1}`}
              className={styles.clientLogo}
              width={100}
              height={100}
            />
          ))}
        </div>
      </section>
    </div>
  );
};


export default ClientLogos;
