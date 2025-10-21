// app/privacy-policy/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { Header } from "../(site)/_components/header";
import { Footer } from "../(site)/_components/footer";

export default function PrivacyPolicyPage() {
  const companyName = siteConfig.company.name;
  const contactEmail = siteConfig.company.contact.email;
  const contactPhone = siteConfig.company.contact.phone;

  const lastUpdated = "October 19, 2025";

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden pt-20">
        {/* Background - Match hero styling */}
        <div className="absolute inset-0 bg-[#0B1120]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#131B2E] to-[#0B1120]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(195,255,0,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(195,255,0,0.05),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-[rgba(19,27,46,0.3)] to-transparent" />

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
              className="inline-flex items-center text-white/70 hover:text-white transition-colors font-body"
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
            <h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-white/70 mt-3 font-body">Last updated: {lastUpdated}</p>
          </motion.div>

          {/* Card - Match site glassmorphism */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-10 space-y-10"
          >
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">Introduction</h2>
            <p className="text-white/80 leading-relaxed font-body">
              At {companyName}, we respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we
              look after your personal data when you visit our website and
              describes your rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">
              Information We Collect
            </h2>
            <p className="text-white/80 leading-relaxed mb-3 font-body">
              We may collect, use, store, and transfer different kinds of
              personal data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 font-body">
              <li>
                <span className="font-medium text-white">Identity Data:</span> first name,
                last name, username or similar identifier
              </li>
              <li>
                <span className="font-medium text-white">Contact Data:</span> email address
                and telephone numbers
              </li>
              <li>
                <span className="font-medium text-white">Technical Data:</span> internet
                protocol (IP) address, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform
              </li>
              <li>
                <span className="font-medium text-white">Usage Data:</span> information
                about how you use our website and services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">
              How We Use Your Information
            </h2>
            <p className="text-white/80 leading-relaxed mb-3 font-body">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 font-body">
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
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">Data Security</h2>
            <p className="text-white/80 leading-relaxed font-body">
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
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">Your Legal Rights</h2>
            <p className="text-white/80 leading-relaxed mb-3 font-body">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 font-body">
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
            <p className="text-white/80 leading-relaxed mt-3 font-body">
              If you wish to exercise any of these rights, please contact us
              using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white font-heading">Contact Us</h2>
            <p className="text-white/80 leading-relaxed mb-3 font-body">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <div className="text-white/80 leading-relaxed font-body">
              <p>
                <span className="font-medium text-white">{companyName}</span>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[var(--accent)] hover:underline transition-colors"
                >
                  {contactEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${contactPhone}`}
                  className="text-[var(--accent)] hover:underline transition-colors"
                >
                  {contactPhone}
                </a>
              </p>
            </div>
          </section>
        </motion.article>
      </div>
    </section>
    <Footer />
    </div>
  );
}
