import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { initAnimations } from "./anime";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  initAnimations();

  const outroHeader = document.querySelector(".outro h3");
  let outroSplit = null;

  if (outroHeader) {
    outroSplit = SplitText.create(outroHeader, {
      type: "words",
      wordsClass: "outro-word",
    });

    gsap.set(outroSplit.words, { opacity: 0 });
  }

  const outroStrips = document.querySelectorAll(".outro-strip");
  const stripSpeeds = [0.3, 0.4, 0.25, 0.35, 0.2, 0.25];

  if (outroSplit) {
    ScrollTrigger.create({
      trigger: ".outro",
      start: "top top",
      end: `+=${window.innerHeight * 1}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress >= 0.25 && progress <= 0.75) {
          const textProgress = (progress - 0.25) / 0.5;
          const totalWords = outroSplit.words.length;

          outroSplit.words.forEach((word, index) => {
            const wordRevealProgress = index / totalWords;
            gsap.set(word, {
              opacity: textProgress >= wordRevealProgress ? 1 : 0,
            });
          });
        } else if (progress < 0.25) {
          gsap.set(outroSplit.words, { opacity: 0 });
        } else {
          gsap.set(outroSplit.words, { opacity: 1 });
        }
      },
    });
  }

  if (outroStrips.length > 0) {
    ScrollTrigger.create({
      trigger: ".outro",
      start: "top bottom",
      end: `+=${window.innerHeight * 6}px`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        outroStrips.forEach((strip, index) => {
          if (stripSpeeds[index] === undefined) {
            return;
          }

          const movement = progress * 100 * stripSpeeds[index];

          gsap.set(strip, {
            x: `${movement}%`,
          });
        });
      },
    });
  }
});
