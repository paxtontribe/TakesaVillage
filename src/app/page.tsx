"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import { Hero } from "@/src/components/sections/Hero";
import { Problem } from "@/src/components/sections/Problem";
import { Solution } from "@/src/components/sections/Solution";
import { HowItWorks } from "@/src/components/sections/HowItWorks";
import { ForFunders } from "@/src/components/sections/ForFunders";
import { Footer } from "@/src/components/sections/Footer";

const sectionAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <m.div {...sectionAnimation}>
          <Hero />
        </m.div>
        <m.div {...sectionAnimation}>
          <Problem />
        </m.div>
        <m.div {...sectionAnimation}>
          <Solution />
        </m.div>
        <m.div {...sectionAnimation}>
          <HowItWorks />
        </m.div>
        <m.div {...sectionAnimation}>
          <ForFunders />
        </m.div>
        <m.div {...sectionAnimation}>
          <Footer />
        </m.div>
      </main>
    </LazyMotion>
  );
}
