"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { siteConfig } from "@/site.config";
import { TypingText } from "./ui/typingtext";

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Ramp Dark Hero Style with Apple Glass */}
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(195,255,0,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(195,255,0,0.05),transparent_60%)]" />
      {/* Apple liquid glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-[rgba(19,27,46,0.3)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Intro Text */}
          <div className="space-y-2">
            {" "}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base sm:text-lg tracking-wide text-white/80 font-body uppercase"
            >
              Welcome to{" "}
              <span className="font-semibold">{siteConfig.company.name}</span>
            </motion.p>
            {/* Main Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight text-white"
            >
              <span className="block">We build</span>
              <span className="block h-[1.2em]">
                <TypingText
                  words={[
                    "software that scales.",
                    "apps that inspire.",
                    "websites that convert.",
                  ]}
                  highlightColor="var(--accent)"
                  textColor="#FFFFFF"
                />
              </span>
            </motion.h1>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-28"
          >
            <Button
              asChild
              variant="accent"
              size="lg"
              className="group font-medium px-12 py-6 text-xl h-auto"
            >
              <Link href={siteConfig.company.calendlyLink} target="_blank">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* <Button asChild variant="shaded" size="lg" className="font-medium">
              <Link href="#work">See our case studies</Link>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
