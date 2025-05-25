'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './button.module.css'

export default function Button({
  as = 'button', // 'button' or 'link'
  href = '', // only used if `as` === 'link'
  label,
  onClick,
  styleType = 'primary', // 'primary', 'secondary', 'ghost' etc.
  fadeInViewProps = {},
  index = 0, // used for delay calculation
  customClass = '',
}) {
  const baseProps = {
    ...fadeInViewProps,
    transition: {
      ...fadeInViewProps.transition,
      delay: fadeInViewProps.transition?.delay ?? index * 0.1,
    },
    className: `${styles.button} ${styles[styleType]} ${customClass}`,
  }

  if (as === 'link') {
    return (
      <Link href={href} scroll={false}>
        <motion.a {...baseProps}>{label}</motion.a>
      </Link>
    )
  }

  return (
    <motion.button {...baseProps} onClick={onClick}>
      {label}
    </motion.button>
  )
}
