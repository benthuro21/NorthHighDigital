"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      id: "Step 01",
      title: "Digital Foundation",
      subtitle:
        "Design and develop a high-converting website that turns visitors into paying clients.",
      color: "from-emerald-600 to-green-500",
      results: [
        "Mobile-responsive and SEO-optimized design",
        "Modern architecture (Next.js + TypeScript)",
        "Built-in booking and CRM integrations",
      ],
    },
    {
      id: "Step 02",
      title: "Automation & Bookings Engine",
      subtitle:
        "Automate scheduling, payments, and client communication to save time and increase conversions.",
      color: "from-violet-700 to-purple-500",
      results: [
        "Integrated booking systems (Calendly, custom, etc.)",
        "Automated confirmations and reminders",
        "Payment collection and CRM syncing",
      ],
    },
    {
      id: "Step 03",
      title: "AI-Powered Growth Engine",
      subtitle:
        "Leverage automation and AI to personalize the customer journey, drive retention, and unlock scale.",
      color: "from-sky-700 to-blue-500",
      results: [
        "Chatbots and voice AI for 24/7 lead capture",
        "Automated follow-ups and data insights",
        "Continuous optimization and performance tracking",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-foreground from-foreground to-foreground/20"
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
          {/* Preheading */}
          <p className="text-sm uppercase tracking-widest text-border mb-3 mt-5">
            What We Do
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-5xl font-bold font-heading mb-9 text-border">
            From Website to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
              Growth Engine
            </span>
            .
          </h2>

          {/* Subheading */}
          <p className="text-xl text-lighterblue font-medium italic">
            Build. Automate. Scale.
          </p>

          {/* Description */}
          <p className="text-lg text-border/90 max-w-2xl mx-auto mt-10 font-body">
            Our 3-phase process turns your digital presence into an automated
            client machine — powered by smart design, seamless automation, and
            AI.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05, // ← You can increase/decrease this for more/less grow
                boxShadow:
                  "0 0 30px rgba(255,255,255,0.15), 0 0 50px rgba(0,255,100,0.1)",
              }}
              className={`relative rounded-2xl h-[535px] p-8 text-background bg-gradient-to-br ${step.color} shadow-lg flex flex-col justify-between transition-all duration-300`}
            >
              {/* Radiate Glow (subtle pulse effect) */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 pointer-events-none"
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.15 }}
              />

              <div className="relative z-10">
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
                className="inline-flex items-center gap-2 text-background/80 font-semibold mt-8 relative z-10"
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-18"
        >
          <h3 className="text-3xl font-bold text-border mb-3">
            Ready to build the system your business deserves?
          </h3>
          <p className="text-border/70 mb-8 font-body">
            Get a free strategy session and see how automation, AI, and design
            can unlock new clients for your business.
          </p>

          <motion.a
            href={siteConfig.company.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 px-8 py-3 
               bg-gradient-to-r from-blue-500 to-sky-500 
               text-background font-semibold rounded-full 
               shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
