import styles from "./hero.module.css";
import MoodImageOverlay from "../ui/mood-image";

const Hero = () => {
  return (
    // <div className="container">
      <section className={styles.hero}>
        <MoodImageOverlay
          imageUrl="https://images.unsplash.com/photo-1495321308589-43affb814eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          overlayOpacity={0.5}
          // width={section.width}
          height="600px"
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            ARCHITECTURE AND INTERIOR DESIGN STUDIO
          </h1>
          <p className={styles.heroSubtitle}>
            Your trusted partner in architectural development and consulting
          </p>
        </div>
      </section>
    // </div>
  );
};

export default Hero;
