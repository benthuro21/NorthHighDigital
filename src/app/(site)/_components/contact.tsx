"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Button } from "./ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Budget: ${formData.budget}

Message:
${formData.message}`;

    const mailtoLink = `mailto:${
      siteConfig.contact.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            Ready to turn your idea into reality? Get in touch and let&apos;s
            discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-semibold font-heading mb-6">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $10k">Under $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                  <option value="$50k - $100k">$50k - $100k</option>
                  <option value="Over $100k">Over $100k</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full font-medium"
              >
                Send Message (email, consider removing this section entirely and
                just routing to calendly link) (insert mail logo)
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold font-heading mb-6">
                Get in Touch
              </h3>
              <p className="text-foreground/70 font-body leading-relaxed mb-8">
                Prefer to talk directly? We&apos;re always happy to discuss your
                project and answer any questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-bold">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold font-heading mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold font-heading mb-1">Phone</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-bold">📅</span>
                </div>
                <div>
                  <h4 className="font-semibold font-heading mb-1">
                    Schedule a Call
                  </h4>
                  <a
                    href={siteConfig.company.calendlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Book a discovery call
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold font-heading mb-3">Response Time</h4>
              <p className="text-foreground/70 font-body text-sm">
                We typically respond to all inquiries within 24 hours. For
                urgent projects, feel free to call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
