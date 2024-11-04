const DURATIONS = {
  VeryFast: 0.4,
  Fast: 0.7,
  Normal: 1.8,
  Slow: 0.9,
  VerySlow: 1.8,
}
const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const fadeInUpSlowerX = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Normal,
      ease: easing,
    },
  },
}
const fadeInUpSlowerY = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Normal,
      ease: easing,
    },
  },
}

export {
  DURATIONS,
  easing,
  fadeInUp,
  fadeInUpSlowerY,
  fadeInUpSlowerX,

  // avatarAnimation,
}
