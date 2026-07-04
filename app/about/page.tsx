import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blade Enterprises is a Toronto-based private holding and operating company. Learn about our leadership, history, and values.",
};

const values = [
  {
    label: "Ownership Mindset",
    body:
      "We hold ourselves to the same standard we hold the businesses we acquire. There are no passive participants here.",
  },
  {
    label: "Operational Depth",
    body:
      "We understand the difference between a company that looks good on paper and one that runs well. We can spot both.",
  },
  {
    label: "Long-Term Horizon",
    body:
      "We are not beholden to a fund cycle. When we acquire a business, we intend to hold and grow it on our own timeline.",
  },
  {
    label: "Speed & Certainty",
    body:
      "Founders deserve a clear process. We make fast decisions, we close what we say we'll close, and we don't retrade.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-8">About Blade</p>
          <h1 className="display-heading max-w-3xl">
            Built to last. Designed to scale.
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-10">Who We Are</p>
            <p className="body-large mb-6">
              Blade Enterprises is a Toronto-based private holding, investment, and operating company. We acquire and build businesses across sectors where operational excellence creates lasting competitive advantage.
            </p>
            <p className="body-copy mb-6">
              Our team is made up of operators, not just investors. We have built and run businesses from the ground up, which means when we step into an acquisition, we know exactly what we&apos;re looking at.
            </p>
            <p className="body-copy">
              We focus on six verticals where we have direct expertise and genuine conviction: manufacturing, construction, software, artificial intelligence, logistics, and real estate.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border border-blade-graphite p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  ["Toronto", "Headquartered"],
                  ["6", "Core Sectors"],
                  ["Long-Term", "Investment Horizon"],
                  ["Private", "Capital Structure"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl text-blade-white mb-1">{value}</p>
                    <p className="section-label">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">What We Stand For</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {values.map(({ label, body }, i) => (
              <div
                key={label}
                className={`py-10 ${i % 2 === 0 ? "md:pr-16 md:border-r border-blade-graphite" : "md:pl-16"} ${i < 2 ? "border-b border-blade-graphite" : ""}`}
              >
                <div className="accent-line mb-6" />
                <h3 className="text-blade-white font-medium text-lg mb-4 tracking-wide">
                  {label}
                </h3>
                <p className="body-copy">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="section-label mb-4">Ready to Connect</p>
            <h2 className="sub-heading text-2xl">
              We&apos;re direct. So is the process.
            </h2>
          </div>
          <Link href="/contact" className="cta-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
