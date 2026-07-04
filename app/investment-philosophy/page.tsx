import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Philosophy",
  description:
    "How Blade Enterprises thinks about capital deployment, acquisitions, and building long-term value across its portfolio.",
};

const principles = [
  {
    number: "01",
    title: "Businesses, not bets",
    body:
      "We do not speculate. Every dollar we deploy is backed by operational analysis, not narrative. We look for businesses with real customers, real cash flow, and real management.",
  },
  {
    number: "02",
    title: "Control positions only",
    body:
      "We take majority or full control of the businesses we acquire. We are not interested in minority stakes where we have no ability to influence outcomes.",
  },
  {
    number: "03",
    title: "Operational value creation",
    body:
      "We don&apos;t engineer financial returns. We build them by improving operations, extending customer relationships, investing in the right people, and expanding addressable markets.",
  },
  {
    number: "04",
    title: "No artificial timelines",
    body:
      "We are not managing against a fund cycle. When we buy a business, we hold it as long as it continues to grow. We are under no pressure to exit for the sake of a return calculation.",
  },
  {
    number: "05",
    title: "Selective by design",
    body:
      "We review a significant number of opportunities each year and close a small number of them. Being selective is not a constraint. It is our edge.",
  },
  {
    number: "06",
    title: "Sector conviction over diversification",
    body:
      "We invest in six sectors because we understand them deeply, not because we have assembled a balanced portfolio. Depth of expertise outperforms breadth of exposure.",
  },
];

export default function InvestmentPhilosophy() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-8">Investment Philosophy</p>
          <h1 className="display-heading max-w-4xl">
            Conviction over consensus.
          </h1>
        </div>
      </section>

      {/* Opening statement */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="body-large mb-6">
              Most capital is patient in name only. It moves with the market, chases trends, and exits on a schedule. Ours doesn&apos;t.
            </p>
            <p className="body-copy">
              We deploy capital into businesses we understand at an operational level. We acquire with the intent to operate and improve, and we hold with a horizon measured in decades, not deal cycles. That structural patience is a genuine competitive advantage when we sit across from a founder or seller.
            </p>
          </div>
          <div>
            <p className="body-copy mb-6">
              Our sectors are not chosen for balance. They are chosen because we have firsthand experience building in them. We know how manufacturing floors run, how construction projects fail, what separates good software from great software, and how logistics networks break down and get fixed.
            </p>
            <p className="body-copy">
              That knowledge shapes every decision we make, from which opportunities we pursue to how we support leadership teams after close.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">Our Principles</p>
          <div className="space-y-0">
            {principles.map(({ number, title, body }, i) => (
              <div
                key={number}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-10 ${i < principles.length - 1 ? "border-b border-blade-graphite" : ""}`}
              >
                <div className="md:col-span-1">
                  <span className="text-blade-steel text-sm font-mono">{number}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-blade-white font-display text-xl">{title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="body-copy" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-24 px-6 lg:px-12 bg-blade-charcoal border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-12">What We Don&apos;t Do</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Venture or early-stage bets",
              "Minority stakes without governance rights",
              "Public market speculation",
              "Trophy assets without operating merit",
              "Turnarounds requiring fundamental restructuring",
              "Industries we don&apos;t understand",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="text-blade-steel mt-1">&#8212;</span>
                <p className="text-blade-silver text-sm" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="section-label mb-4">Exploring a Sale</p>
            <h2 className="sub-heading text-2xl">
              Understand our acquisition criteria.
            </h2>
          </div>
          <Link href="/acquisitions" className="cta-primary">
            View Criteria
          </Link>
        </div>
      </section>
    </>
  );
}
