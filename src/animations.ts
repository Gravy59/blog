import type { TransitionAnimationPair, TransitionDirectionalAnimations } from "astro";

const slideUpAnim: TransitionAnimationPair = {
  old: {
    name: "slideOut",
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    fillMode: "forwards",
  },
  new: {
    name: "slideIn",
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    fillMode: "backwards",
  },
};

export const slideUp: TransitionDirectionalAnimations = {
  forwards: slideUpAnim,
  backwards: slideUpAnim,
};
