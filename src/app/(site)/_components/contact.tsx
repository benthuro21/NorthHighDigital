"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,255,0,0.08),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-sm text-accent mb-10 font-semibold">
            Serious inquiries only.
          </p>

          <motion.a
            href={siteConfig.company.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2 px-10 py-5
               bg-accent hover:bg-lighterblue 
               text-[#0B1120] font-bold rounded-xl text-lg
               shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
