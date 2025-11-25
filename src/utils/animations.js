export const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const revealDelayed = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay }
  }
});

export const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
