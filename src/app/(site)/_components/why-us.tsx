"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export function WhyUs() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Why Choose AT Studios?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
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
              className="group relative bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Value highlight */}
              <div className="mb-6">
                <div className="text-4xl font-bold font-heading text-accent mb-2">
                  {item.value}
                </div>
                <h3 className="text-2xl font-semibold font-heading">
                  {item.title}
                </h3>
              </div>

              <p className="text-foreground/70 font-body leading-relaxed">
                {item.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Founders section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-background rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold font-heading mb-6">
              Meet the Founders
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {siteConfig.company.founders.map((founder, index) => (
                <motion.div
                  key={founder}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-foreground">
                      {founder
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="font-semibold font-heading">{founder}</h4>
                  <p className="text-sm text-foreground/70">Co-Founder</p>
                </motion.div>
              ))}
            </div>
            <p className="text-foreground/70 mt-6 font-body max-w-2xl mx-auto">
              Ben and Ardi bring decades of combined experience in software
              development, product design, and business strategy. They founded
              AT Studios to help ambitious founders and brands build software
              that actually works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
