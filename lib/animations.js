export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  variants: fadeInUp,
  transition: { duration: 0.8 },
};
