import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acquisitions",
  description:
    "Blade Enterprises acquisition criteria, process, and what sellers can expect. We move with speed and certainty.",
};

const criteria = [
  {
    label: "Revenue Range",
    value: "$2M &mdash; $30M",
    detail: "Annual revenue. We can move above this range for the right business.",
  },
  {
    label: "EBITDA",
    value: "Positive",
    detail: "We require profitable businesses. We are not in the turnaround business.",
  },
  {
    label: "Geography",
    value: "Canada",
    detail: "Primary focus on Canadian businesses, with selective US exposure.",
  },
  {
    label: "Sectors",
    value: "6 Core",
    detail:
      "Manufacturing, construction, software, AI, logistics, and real estate.",
  },
  {
    label: "Ownership",
    value: "Majority Control",
    detail: "We seek majority or full ownership. No minority positions.",
  },
  {
    label: "Transaction Type",
    value: "Flexible",
    detail:
      "Full acquisitions, partial buyouts, or structured succession arrangements.",
  },
];

const steps = [
  {
    label: "Initial Conversation",
    body:
      "We keep the first call focused and efficient. We want to understand the business, the owner&apos;s goals, and the timeline. No NDAs required at this stage.",
  },
  {
    label: "Preliminary Review",
    body:
      "We&apos;ll request a summary overview. No lengthy CIM required. If we&apos;re interested, we move fast.",
  },
  {
    label: "Term Sheet",
    body:
      "If there&apos;s a fit, we issue a non-binding term sheet within two weeks of receiving financials. We don&apos;t take months to form a view.",
  },
  {
    label: "Due Diligence",
    body:
      "We run a focused, non-invasive diligence process. We respect your time and your team&apos;s attention.",
  },
  {
    label: "Close",
    body:
      "We close what we agree to. We don&apos;t retrade. We have capital ready to deploy without third-party financing approval cycles.",
  },
];

export default function Acquisitions() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-8">Acquisitions</p>
          <h1 className="display-heading max-w-3xl">
            We close what we say we&apos;ll close.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="body-large mb-6">
              If you have built something real and are thinking about what comes next, we are worth a conversation.
            </p>
            <p className="body-copy">
              We work directly with founders and owners. No intermediaries required. We understand what it means to have built a business over years or decades, and we approach every conversation with that in mind.
            </p>
          </div>
          <div>
            <p className="body-copy mb-6">
              Our process is straightforward. We move quickly when there&apos;s a fit, we are transparent about our thinking, and we do not manufacture urgency or complexity to gain leverage.
            </p>
            <p className="body-copy">
              We have capital available without committee approvals, fund timelines, or co-investor alignment requirements. When we say we&apos;re interested, we mean it.
            </p>
          </div>
        </div>
      </section>

      {/* Criteria grid */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">Acquisition Criteria</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {criteria.map(({ label, value, detail }, i) => (
              <div
                key={label}
                className={`p-10 border-blade-graphite ${i % 3 !== 2 ? "md:border-r" : ""} ${i < 3 ? "border-b" : ""}`}
              >
                <p className="section-label mb-4">{label}</p>
                <p
                  className="font-display text-2xl text-blade-white mb-4"
                  dangerouslySetInnerHTML={{ __html: value }}
                />
                <p className="text-blade-steel text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">Our Process</p>
          <div className="space-y-0">
            {steps.map(({ label, body }, i) => (
              <div
                key={label}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-10 ${i < steps.length - 1 ? "border-b border-blade-graphite" : ""}`}
              >
                <div className="md:col-span-1">
                  <span className="text-blade-steel text-sm font-mono">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-blade-white font-medium tracking-wide">{label}</h3>
                </div>
                <div className="md:col-span-7">
                  <p
                    className="body-copy"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-blade-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label mb-8">Ready to Talk</p>
          <h2 className="sub-heading mb-10 max-w-2xl mx-auto">
            The first conversation is short, direct, and confidential.
          </h2>
          <Link href="/contact" className="cta-primary">
            Reach Out
          </Link>
        </div>
      </section>
    </>
  );
}
