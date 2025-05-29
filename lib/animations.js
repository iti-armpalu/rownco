export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInOnLoadProps = {
  initial: "hidden",
  animate: "visible",
  variants: fadeInUp,
  transition: { duration: 0.8 },
};

export const fadeInViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  variants: fadeInUp,
  transition: { duration: 0.8 },
};

export const topBorderProps = {
  initial: "initial",
  animate: "animate",
  variants: {
    initial: { width: 0 },
    animate: { width: "100%" },
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut", // or "linear" for a more pixel-like load
  },
};
