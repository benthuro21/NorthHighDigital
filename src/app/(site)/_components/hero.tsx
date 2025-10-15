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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--background)_0%,var(--muted)_40%,var(--accent)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />

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
            {/* Intro Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base sm:text-lg tracking-wide text-foreground/80 font-body uppercase"
            >
              Welcome to{" "}
              <span className="font-semibold">{siteConfig.company.name}</span>
            </motion.p>
            {/* Main Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight"
            >
              We build{" "}
              <TypingText
                words={[
                  "presences that breathe.",
                  "dreams from ideas.",
                  "unforgettable experiences.",
                ]}
                highlightColor="var(--accent)"
                textColor="var(--foreground)"
              />
            </motion.h1>
          </div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto font-body"
          >
            {siteConfig.company.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              asChild
              variant="accent"
              size="lg"
              className="group font-medium"
            >
              <Link href={siteConfig.company.calendlyLink} target="_blank">
                Book a discovery call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild variant="shaded" size="lg" className="font-medium">
              <Link href="#work">See our case studies</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-foreground/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
