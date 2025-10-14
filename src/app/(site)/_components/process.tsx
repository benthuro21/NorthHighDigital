"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      id: "Step 01",
      title: "Product Architecture",
      subtitle:
        "Build a scalable, high-performing foundation for your digital product.",
      color: "from-emerald-600 to-green-500",
      results: [
        "Fast, maintainable codebase",
        "Modern stack setup (Next.js, TypeScript)",
        "Pixel-perfect UI/UX",
      ],
    },
    {
      id: "Step 02",
      title: "Core Engineering",
      subtitle:
        "Bring your product to life through clean code and integrated systems.",
      color: "from-violet-700 to-purple-500",
      results: [
        "API & database integration",
        "Robust feature implementation",
        "Automated testing & CI/CD",
      ],
    },
    {
      id: "Step 03",
      title: "Optimization Engine",
      subtitle:
        "Deploy, analyze, and refine your product for growth and performance.",
      color: "from-sky-700 to-blue-500",
      results: [
        "Speed & SEO optimization",
        "Scalable infrastructure",
        "Continuous improvements",
      ],
    },
    {
      id: "Step 04",
      title: "Continuous Partnership",
      subtitle:
        "Ongoing improvements, updates, and scaling as your goals evolve.",
      color: "from-indigo-700 to-indigo-500",
      results: [
        "Monthly maintenance & support",
        "Feature expansion & new releases",
        "Growth analytics & insights",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            Your product and our process.
          </h2>
          <p className="text-xl text-accent font-medium italic">
            The perfect build.
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4 font-body">
            Our proven 4-step development model — from architecture to growth —
            ensures your software performs, scales, and evolves with your goals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl p-8 text-background bg-gradient-to-br ${step.color} shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold bg-background/20 px-3 py-1 rounded-full">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-background/90 text-sm mb-6">
                  {step.subtitle}
                </p>

                <div className="space-y-2 text-background/90">
                  {step.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-lg">•</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                href={siteConfig.company.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-background/80 font-semibold mt-8"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-muted/50 rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold font-heading mb-4">
              Ready to start building?
            </h3>
            <p className="text-foreground/70 mb-6 font-body">
              Let’s discuss your vision and see how our process can bring it to
              life — from strategy to launch.
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
