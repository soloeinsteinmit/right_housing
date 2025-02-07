export const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const statsContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const impactVariant = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 }
};

export const backgroundVariant = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.2, 0.3, 0.2],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }
};
