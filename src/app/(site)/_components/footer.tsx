"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
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
              <div className="text-2xl font-bold font-heading">AT Studios</div>
            </Link>

            <p className="text-background/70 font-body leading-relaxed mb-6 max-w-md">
              We ship fast, clean software for founders & brands. Design, build,
              and iterate — from idea to v1 to scale.
            </p>

            <div className="mb-6">
              <p className="text-sm text-background/60 mb-2">Founded by</p>
              <div className="flex flex-wrap gap-4">
                {siteConfig.company.founders.map((founder) => (
                  <span
                    key={founder.name}
                    className="text-background/80 font-medium"
                  >
                    {founder.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </motion.a>

              <motion.a
                href={`mailto:${siteConfig.contact.email}`}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-background" />
              </motion.a>
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
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-background/70 hover:text-background transition-colors font-body"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-background/70 hover:text-background transition-colors font-body"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="pt-4">
                <motion.a
                  href={siteConfig.company.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-2 bg-accent text-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm"
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
            © {new Date().getFullYear()} AT Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-background/60 hover:text-background transition-colors font-body text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-background/60 hover:text-background transition-colors font-body text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
