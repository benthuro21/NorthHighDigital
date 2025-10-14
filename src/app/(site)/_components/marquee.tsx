"use client";

import { motion } from "framer-motion";

const logos = [
  "Dysipher",
  "Cribora",
  "MindlyAI",
  "Hunt Law Firm",
  "INSERT",
  "FABRICATE",
  "FABRICATE",
  "FABRICATE",
];

export function Marquee() {
  return (
    <section className="pt-12 pb-16 bg-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
            Trusted by innovative companies
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * logos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-foreground/20 hover:text-foreground/40 transition-colors"
              >
                {logo}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-foreground/20 hover:text-foreground/40 transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
