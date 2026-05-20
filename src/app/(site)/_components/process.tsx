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
      gradient: "from-emerald-500/10 via-emerald-400/5 to-emerald-600/10",
      glow: "emerald-500",
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
      gradient: "from-rose-500/10 via-rose-400/5 to-rose-600/10",
      glow: "rose-500",
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
      gradient: "from-violet-500/10 via-violet-400/5 to-violet-600/10",
      glow: "violet-500",
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
          <p className="text-sm uppercase tracking-widest text-accent mb-3 mt-5 font-semibold">
            What We Do
          </p>
          <h2 className="text-5xl sm:text-5xl font-bold font-heading mb-9 text-white">
            From Website to <span className="text-accent">Growth Engine</span>.
          </h2>
          <p className="text-xl text-accent font-medium italic">
            Build. Automate. Scale.
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mt-10 font-body">
            Our 3-phase process turns your digital presence into an automated
            client machine powered by smart design, seamless automation, and
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
                scale: 1.03,
                y: -8,
              }}
              className={`relative rounded-2xl h-[535px] p-8 border border-white/10 shadow-lg hover:shadow-${step.glow}/30 flex flex-col justify-between transition-all duration-300 bg-gradient-to-br ${step.gradient}`}
            >
              {/* Soft Glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${step.glow}/10 to-transparent opacity-0 pointer-events-none`}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-bold bg-${step.glow}/10 text-accent px-3 py-1 rounded-full border border-${step.glow}/20`}
                  >
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
                      <span className={`text-${step.glow} mt-1 text-sm`}>
                        ●
                      </span>
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
                className={`inline-flex items-center gap-2 text-accent hover:text-white font-semibold mt-8 relative z-10 transition-colors`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
