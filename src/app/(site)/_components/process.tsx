"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Our Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            A proven methodology that delivers results, every time
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {siteConfig.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-16 h-16 bg-accent rounded-full flex items-center justify-center z-10"
                  >
                    <span className="text-foreground font-bold text-lg">
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold font-heading mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < siteConfig.process.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 text-foreground/30"
                    >
                      ↓
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold font-heading mb-4">
              Ready to get started?
            </h3>
            <p className="text-foreground/70 mb-6 font-body">
              Let&apos;s discuss your project and see how our process can help
              you succeed.
            </p>
            <motion.a
              href={siteConfig.company.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Book a Discovery Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
