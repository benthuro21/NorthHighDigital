"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MeetTheFounders() {
  const founders = [
    {
      name: "Benjamin Thuroczy",
      title: "Co-Founder & CEO",
      image: "/images/founders/Thuroczy.1 (1 of 1)-X3.jpg",
      bio: "Software engineer with experience at JPMorgan Chase, where he worked as a Software Engineer and Business Analyst developing AI-powered solutions for risk management. Previously held roles at GE Aerospace managing supply chain operations and Swagelok as a Process Engineer. Combines technical expertise with data-driven strategy to build scalable solutions.",
    },
    {
      name: "Ardi Ahmed",
      title: "Co-Founder & CTO",
      image: "/images/founders/ardi.png",
      bio: "Software engineer with experience building production systems at high-growth startups. Designed and engineered a production chatbot and admin panel with Next.js and Ruby on Rails, implementing dynamic conversation flows and RESTful API integrations. Engineered backend pipelines for data storage and retrieval using PostgreSQL, with expertise in CI/CD deployment and Git workflows. Specializes in full-stack development, creating scalable solutions from database architecture to responsive UI.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
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
            Meet the Team
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-body">
            Built by engineers with real-world experience at top companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-96 h-96 rounded-full overflow-hidden mb-6 border-4 border-accent/30 shadow-lg">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={384}
                    height={384}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-accent font-semibold mb-6">{founder.title}</p>
                <p className="text-white/70 font-body leading-relaxed">
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
