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
      className="py-24 bg-[#0B1120] relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,255,0,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Preheading */}
          <p className="text-sm uppercase tracking-widest text-accent mb-3 mt-5 font-semibold">
            What We Do
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-5xl font-bold font-heading mb-9 text-white">
            From Website to <span className="text-accent">Growth Engine</span>.
          </h2>

          {/* Subheading */}
          <p className="text-xl text-accent font-medium italic">
            Build. Automate. Scale.
          </p>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-10 font-body">
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
                scale: 1.02,
                y: -8,
              }}
              className="relative rounded-2xl h-[535px] p-8 bg-[#1A1A1A] border border-white/10 hover:border-accent/50 shadow-lg hover:shadow-accent/20 flex flex-col justify-between transition-all duration-300"
            >
              {/* Accent glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 pointer-events-none"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {step.subtitle}
                </p>

                <div className="space-y-3 text-white/80">
                  {step.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1 text-sm">●</span>
                      <span className="text-sm leading-relaxed">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                href={siteConfig.company.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-accent hover:text-lighterblue font-semibold mt-8 relative z-10 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-3 text-white">
            Let's Transform Your Business
          </h2>
          <p className="text-lg text-white/70 mb-4 font-body">
            See what's possible for your business - schedule a free strategy
            call.
          </p>

          <motion.a
            href={siteConfig.company.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 px-8 py-4 
              bg-accent hover:bg-lighterblue 
              text-[#0B1120] font-bold rounded-xl text-base
              shadow-md shadow-accent/30 hover:shadow-accent/40 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
