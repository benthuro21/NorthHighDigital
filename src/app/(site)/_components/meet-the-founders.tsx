"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "lucide-react";

export function MeetTheFounders() {
  const founders = [
    {
      name: "Benjamin Thuroczy",
      title: "Co-Founder & CEO",
      image: "/images/founders/ben.jpg",
      bio: "Software engineer with experience at JPMorgan Chase, where he worked as a Software Engineer and Business Analyst developing AI-powered solutions for risk management. Previously held roles at GE Aerospace managing supply chain operations and Swagelok as a Process Engineer. Combines technical expertise with data-driven strategy to build scalable solutions.",
    },
    {
      name: "Ardi Ahmed",
      title: "Co-Founder & CTO",
      image: "/images/founders/ardi.png",
      bio: "Software engineer with experience building production systems at high-growth startups. Master of designing and engineering production chat interfaces and admin panels with Next.js and Ruby on Rails, in order to implement dynamic conversation flows and RESTful API integrations. Expertise in initializing backend pipelines for data storage and retrieval using PostgreSQL, with a knack for CI/CD deployment and Git workflows. An esteemed full-stack development, creating scalable solutions from database architecture to responsive UI.",
    },
  ];

  return (
    <section
      id="founders"
      className="pt-10 pb-10 bg-[#0B1120] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(195,255,0,0.05),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6 text-white">
            Meet the Team
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-body">
            Built by engineers with real-world experience at top companies.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-14 justify-items-center">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 w-full max-w-[420px]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-accent/30 shadow-lg">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-accent font-semibold mb-5 text-sm">
                  {founder.title}
                </p>
                <p className="text-white/70 font-body leading-relaxed text-sm sm:text-base">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
