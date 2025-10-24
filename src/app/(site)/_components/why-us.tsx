"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export function WhyUs() {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,255,0,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6 text-white">
            Why Choose <span className="text-accent">North High Digital?</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-body">
            We&apos;re not just another agency. We&apos;re your technical
            partners in growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1A1A1A] rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              {/* Value highlight */}
              <div className="mb-6">
                <div className="text-4xl font-bold font-heading text-accent mb-2">
                  {item.value}
                </div>
                <h3 className="text-2xl font-semibold font-heading text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/70 font-body leading-relaxed">
                {item.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
