// app/privacy/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";

export default function PrivacyPolicyPage() {
  const companyName =
    (siteConfig as any)?.company?.name ||
    (siteConfig as any)?.name ||
    "North High Digital";
  const contactEmail =
    (siteConfig as any)?.contact?.email ||
    (siteConfig as any)?.email ||
    "hello@northighdigital.com";
  const contactPhone =
    (siteConfig as any)?.contact?.phone ||
    (siteConfig as any)?.phone ||
    "+1 (555) 000-0000";

  const lastUpdated = "October 19, 2025";

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--background)_0%,var(--muted)_40%,var(--accent)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center text-foreground/70 hover:text-foreground transition"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-foreground/70 mt-3">Last updated: {lastUpdated}</p>
        </motion.div>

        {/* Card */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl shadow-lg bg-background/60 ring-1 ring-foreground/10 backdrop-blur p-6 sm:p-10 space-y-10"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              At {companyName}, we respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we
              look after your personal data when you visit our website and
              describes your rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We may collect, use, store, and transfer different kinds of
              personal data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <span className="font-medium">Identity Data:</span> first name,
                last name, username or similar identifier
              </li>
              <li>
                <span className="font-medium">Contact Data:</span> email address
                and telephone numbers
              </li>
              <li>
                <span className="font-medium">Technical Data:</span> internet
                protocol (IP) address, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform
              </li>
              <li>
                <span className="font-medium">Usage Data:</span> information
                about how you use our website and services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>
                Where we need to comply with a legal or regulatory obligation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. We also limit access
              to your personal data to employees, agents, contractors, and other
              third parties who have a legitimate business need to know. They
              will only process your personal data on our instructions and are
              subject to a duty of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Legal Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>
                Withdraw consent at any time where we rely on consent to process
                your data
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-3">
              If you wish to exercise any of these rights, please contact us
              using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <div className="text-foreground/80 leading-relaxed">
              <p>
                <span className="font-medium">{companyName}</span>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-accent hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${contactPhone}`}
                  className="text-accent hover:underline"
                >
                  {contactPhone}
                </a>
              </p>
            </div>
          </section>
        </motion.article>
      </div>
    </section>
  );
}
