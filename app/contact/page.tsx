"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Replace with your form endpoint (Formspree, Netlify Forms, etc.)
    // For now, simulate submission
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-8">Contact</p>
          <h1 className="display-heading max-w-3xl">
            Direct. Confidential. Decisive.
          </h1>
        </div>
      </section>

      {/* Contact split */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <p className="body-large mb-8">
              Whether you&apos;re exploring a sale, looking to partner, or interested in joining the team, we respond to every serious inquiry.
            </p>

            <div className="space-y-10">
              <div>
                <p className="section-label mb-3">Acquisitions & Deals</p>
                <p className="body-copy mb-2">
                  For business owners and founders exploring a sale or partnership.
                </p>
                <a
                  href="mailto:acquisitions@bladeenterprises.com"
                  className="text-blade-white text-sm hover:text-blade-accent transition-colors duration-200"
                >
                  acquisitions@bladeenterprises.com
                </a>
              </div>

              <div className="rule pt-10">
                <p className="section-label mb-3">General Inquiries</p>
                <p className="body-copy mb-2">
                  Press, partnerships, and general correspondence.
                </p>
                <a
                  href="mailto:info@bladeenterprises.com"
                  className="text-blade-white text-sm hover:text-blade-accent transition-colors duration-200"
                >
                  info@bladeenterprises.com
                </a>
              </div>

              <div className="rule pt-10">
                <p className="section-label mb-3">Careers</p>
                <p className="body-copy mb-2">
                  Speculative applications and role inquiries.
                </p>
                <a
                  href="mailto:careers@bladeenterprises.com"
                  className="text-blade-white text-sm hover:text-blade-accent transition-colors duration-200"
                >
                  careers@bladeenterprises.com
                </a>
              </div>

              <div className="rule pt-10">
                <p className="section-label mb-3">Headquarters</p>
                <address className="not-italic body-copy">
                  Toronto, Ontario<br />
                  Canada
                </address>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="border border-blade-graphite p-12 text-center">
                <div className="accent-line mx-auto mb-8" />
                <h3 className="font-display text-2xl text-blade-white mb-4">
                  Message received.
                </h3>
                <p className="body-copy">
                  We review all inquiries and respond to serious ones within two business days.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-blade-graphite text-blade-white px-4 py-3 text-sm focus:outline-none focus:border-blade-silver transition-colors duration-200 placeholder-blade-steel"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-blade-graphite text-blade-white px-4 py-3 text-sm focus:outline-none focus:border-blade-silver transition-colors duration-200 placeholder-blade-steel"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-blade-graphite text-blade-white px-4 py-3 text-sm focus:outline-none focus:border-blade-silver transition-colors duration-200 placeholder-blade-steel"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="section-label block mb-3">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-blade-charcoal border border-blade-graphite text-blade-white px-4 py-3 text-sm focus:outline-none focus:border-blade-silver transition-colors duration-200"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Acquisition Discussion">Acquisition Discussion</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career Inquiry">Career Inquiry</option>
                    <option value="Press">Press</option>
                  </select>
                </div>

                <div>
                  <label className="section-label block mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-transparent border border-blade-graphite text-blade-white px-4 py-3 text-sm focus:outline-none focus:border-blade-silver transition-colors duration-200 placeholder-blade-steel resize-none"
                    placeholder="Brief overview of why you&apos;re reaching out..."
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="cta-primary w-full text-center"
                >
                  Send Message
                </button>

                <p className="text-blade-steel text-xs text-center">
                  All inquiries are treated with strict confidentiality.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
