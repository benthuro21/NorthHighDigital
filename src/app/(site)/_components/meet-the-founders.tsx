"use client";

import { siteConfig } from "@/site.config";
import { motion } from "framer-motion";

import Image from "next/image";

export function MeetTheFounders() {
    return (
        <div>
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
                      key={founder.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border border-border shadow-sm">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h4 className="font-semibold font-heading">{founder.name}</h4>
                      <p className="text-sm text-foreground/70">{founder.title}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground/70 mt-6 font-body max-w-2xl mx-auto">
                  Ben and Ardi bring years of combined experience in software
                  development, product design, and business strategy. Together, they
                  founded AT Studios with a shared belief that great software should
                  be both functional and inspiring. From early-stage startups to
                  growing brands, they’ve helped teams turn ambitious ideas into
                  elegant, scalable products that solve real problems. Their
                  approach blends technical precision with creative strategy,
                  ensuring every project not only works flawlessly but stands out in
                  an increasingly crowded digital world.
                </p>
              </div>
            </motion.div>
        </div>

    )
}
