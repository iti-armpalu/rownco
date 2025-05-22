'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './mobile-menu.module.css'

export default function MobileMenu({
  menuOpen,
  navLinks,
  onScrollTo,
  setMenuOpen,
  fadeInViewProps,
}) {
  return (
    <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
      {navLinks.map((link, index) => {
        const { label, href, section } = link

        if (href) {
          // 🟢 For pages or routes
          return (
            <motion.div
              key={index}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
            >
              <Link
                href={href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </motion.div>
          )
        } else if (section) {
          // 🔵 For scroll targets
          return (
            <motion.button
              key={index}
              className={styles.mobileNavLink}
              {...fadeInViewProps}
              transition={{ ...fadeInViewProps.transition, delay: index * 0.1 }}
              onClick={() => {
                onScrollTo(section)
                setMenuOpen(false)
              }}
            >
              {label}
            </motion.button>
          )
        }

        return null
      })}
    </div>
  )
}
