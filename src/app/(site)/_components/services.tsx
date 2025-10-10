"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

const iconMap = {
  design: "🎨",
  mobile: "📱",
  ai: "🤖",
  analytics: "📊",
  growth: "🚀",
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            We provide end-to-end solutions that help your business grow and
            scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-xl font-semibold font-heading">
                  {service.title}
                </h3>
              </div>

              <p className="text-foreground/70 font-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional service card for the 5th service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 mt-8 max-w-md mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
              {iconMap[siteConfig.services[4].icon as keyof typeof iconMap]}
            </div>
            <h3 className="text-xl font-semibold font-heading">
              {siteConfig.services[4].title}
            </h3>
          </div>

          <p className="text-foreground/70 font-body leading-relaxed">
            {siteConfig.services[4].description}
          </p>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </section>
  );
}
