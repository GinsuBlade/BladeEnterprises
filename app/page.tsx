import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blade Enterprises | Private Holdings & Capital",
  description:
    "Toronto-based private holding, investment, and operating company. Manufacturing, construction, software, AI, logistics, and real estate.",
};

const sectors = [
  { label: "Manufacturing" },
  { label: "Construction" },
  { label: "Software & AI" },
  { label: "Logistics" },
  { label: "Real Estate" },
];

const pillars = [
  {
    title: "We Operate",
    body:
      "We don't take passive positions. We roll up our sleeves and run the businesses we own. Operational discipline is where returns are made.",
  },
  {
    title: "We Build",
    body:
      "When the right business doesn't exist, we create it. Our operating expertise lets us build from scratch with the confidence of a proven framework.",
  },
  {
    title: "We Acquire",
    body:
      "We seek businesses with strong fundamentals and clear paths to growth. We move with speed, certainty, and a long investment horizon.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #8C8C8C 0px, #8C8C8C 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #8C8C8C 0px, #8C8C8C 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="max-w-5xl">
            <p className="section-label mb-8 fade-up">
              Blade Enterprises &mdash; Toronto, Canada
            </p>
            <h1 className="display-heading mb-10 fade-up-delay-1">
              Capital with conviction.
              <br />
              <span className="text-blade-silver">Operations that deliver.</span>
            </h1>
            <p className="body-large max-w-2xl mb-14 fade-up-delay-2">
              We are a private holding and operating company. We acquire, build, and scale businesses across manufacturing, construction, software, AI, logistics, and real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up-delay-3">
              <Link href="/acquisitions" className="cta-primary text-center">
                Acquisition Criteria
              </Link>
              <Link href="/about" className="cta-secondary text-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Sector ticker at bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-blade-graphite">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-12 overflow-x-auto scrollbar-none">
            {sectors.map(({ label }) => (
              <span
                key={label}
                className="text-blade-steel text-xs tracking-ultra uppercase whitespace-nowrap flex items-center gap-4"
              >
                <span className="w-1 h-1 rounded-full bg-blade-accent inline-block" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="rule" />

      {/* Three pillars */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">How We Work</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {pillars.map(({ title, body }, i) => (
              <div
                key={title}
                className={`py-12 pr-12 ${i < pillars.length - 1 ? "md:border-r border-blade-graphite" : ""} ${i > 0 ? "md:pl-12" : ""}`}
              >
                <div className="accent-line mb-8" />
                <h3 className="sub-heading text-2xl mb-6">{title}</h3>
                <p className="body-copy">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rule */}
      <div className="rule" />

      {/* Statement */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="section-label mb-12">Our Standard</p>
            <blockquote className="font-display text-3xl md:text-5xl leading-tight text-blade-white">
              We don&apos;t manage portfolios. We run businesses. There&apos;s a meaningful difference in how that shows up for founders, teams, and outcomes.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Rule */}
      <div className="rule" />

      {/* CTA Banner */}
      <section className="py-24 px-6 lg:px-12 bg-blade-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="section-label mb-4">Considering a Sale or Partnership</p>
            <h2 className="sub-heading">
              We move with speed and certainty.
            </h2>
          </div>
          <Link href="/contact" className="cta-primary whitespace-nowrap">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
