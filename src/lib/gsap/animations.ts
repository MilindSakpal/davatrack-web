import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely in browser context
export const initGSAP = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};

// Check if reduced motion is preferred
export const isReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Fade up animation helper
export const fadeUp = (
  element: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    trigger?: gsap.DOMTarget;
    start?: string;
    stagger?: number;
  } = {}
) => {
  if (isReducedMotion()) {
    return gsap.set(element, { opacity: 1, y: 0 });
  }

  const {
    delay = 0,
    duration = 0.8,
    distance = 30,
    trigger,
    start = "top 85%",
    stagger = 0,
  } = options;

  if (trigger) {
    return gsap.fromTo(
      element,
      { opacity: 0, y: distance },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: "play none none none",
        },
      }
    );
  }

  return gsap.fromTo(
    element,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
    }
  );
};

// Stagger cards reveal on scroll
export const staggerCards = (
  cards: gsap.DOMTarget,
  containerTrigger: gsap.DOMTarget,
  staggerAmount: number = 0.12
) => {
  if (isReducedMotion()) {
    return gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
  }

  return gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 40,
      scale: 0.98,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      stagger: staggerAmount,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerTrigger,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

// Line draw animation on scroll
export const drawLine = (
  lineElement: gsap.DOMTarget,
  triggerElement: gsap.DOMTarget
) => {
  if (isReducedMotion()) {
    return gsap.set(lineElement, { scaleX: 1, transformOrigin: "left center" });
  }

  return gsap.fromTo(
    lineElement,
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    }
  );
};

export { gsap, ScrollTrigger };
