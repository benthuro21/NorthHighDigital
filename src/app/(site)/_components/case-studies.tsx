"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-[#0B1120] relative overflow-hidden">
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
            Our Work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-body">
            Real results for real businesses. Here&apos;s how we&apos;ve helped
            our clients succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[#131B2E] to-[#1A1A1A] flex items-center justify-center">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  className="object-cover w-full h-full" 
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-2 text-white group-hover:text-accent transition-colors">
                  {study.title}
                </h3>

                <p className="text-accent font-semibold mb-4">{study.result}</p>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
