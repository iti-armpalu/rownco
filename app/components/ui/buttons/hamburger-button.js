// HamburgerButton.tsx
import styles from './hamburger-button.module.css';


export default function HamburgerButton({ isOpen, toggleMenu }) {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
