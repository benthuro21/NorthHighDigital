"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold font-heading">
                North High Digital
              </div>
            </Link>

            <p className="text-background/70 font-body leading-relaxed mb-6 max-w-md">
              We ship fast, clean software for founders & brands. Design, build,
              and iterate from idea to v1 to scale.
            </p>

            {/* Founders Section */}
            <div className="mb-6">
              <p className="text-sm text-background/60 mb-3">Founded by</p>
              <div className="flex flex-col sm:flex-row gap-6">
                {siteConfig.company.founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="flex flex-col sm:flex-row items-center gap-4 bg-background/5 rounded-xl p-4 border border-border/30 hover:border-border/60 transition-colors min-w-[260px]"
                  >
                    {/* Founder Image */}
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    {/* Founder Info */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-background font-semibold text-lg">
                        {founder.name}
                      </span>
                      <span className="text-background/70 text-sm">
                        {founder.title}
                      </span>

                      <div className="flex gap-3 mt-2">
                        {/* LinkedIn */}
                        <motion.a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-background/10 rounded-md flex items-center justify-center hover:bg-background/20 transition-colors"
                          aria-label={`${founder.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-background" />
                        </motion.a>

                        {/* Email */}
                        <motion.a
                          href={`mailto:${founder.email}`}
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-background/10 rounded-md flex items-center justify-center hover:bg-background/20 transition-colors"
                          aria-label={`${founder.name} Email`}
                        >
                          <Mail className="w-4 h-4 text-background" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-heading mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors font-body"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold font-heading mb-6">Contact</h3>
            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${siteConfig.company.contact.email}`}
                  className="text-background/70 hover:text-background transition-colors font-body"
                >
                  {siteConfig.company.contact.email}
                </a>
              </div>
              <div className="pt-4">
                <motion.a
                  href={siteConfig.company.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-2 bg-accent text-[#0B1120] font-semibold rounded-lg hover:bg-lighterblue transition-colors text-sm shadow-lg shadow-accent/20"
                >
                  Book a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-background/60 font-body text-sm">
            © {new Date().getFullYear()} North High Digital. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy-policy"
              className="text-background/60 hover:text-background transition-colors font-body text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
