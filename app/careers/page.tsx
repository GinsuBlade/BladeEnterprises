import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Blade Enterprises. We hire operators, not passengers. Explore open roles across our holding company and portfolio.",
};

const openings = [
  {
    title: "Director of Operations",
    type: "Full-Time",
    location: "Toronto, ON",
    description:
      "We are looking for a senior operator to oversee cross-portfolio performance. You have run a P&L, you are data-driven, and you have no interest in managing by PowerPoint.",
  },
  {
    title: "Corporate Development Analyst",
    type: "Full-Time",
    location: "Toronto, ON",
    description:
      "Support our acquisition pipeline from sourcing through close. You can model, you can read a room, and you understand that relationships matter more than spreadsheets.",
  },
  {
    title: "Software Product Lead",
    type: "Full-Time",
    location: "Remote / Toronto",
    description:
      "Own the roadmap for software products within our portfolio. You have shipped product in complex environments and you know the difference between features and outcomes.",
  },
];

export default function Careers() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-8">Careers</p>
          <h1 className="display-heading max-w-3xl">
            We hire operators, not passengers.
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="body-large mb-6">
              Working at Blade means being close to real decisions. There are no layers between you and the work.
            </p>
            <p className="body-copy">
              We are a small team that operates across multiple businesses. That means the people here carry genuine responsibility and the autonomy that goes with it. If you want structure and a clear ceiling, we are probably not the right fit.
            </p>
          </div>
          <div>
            <p className="body-copy mb-6">
              If you want to work on real problems, have visibility into strategy, and be compensated in line with performance, we want to hear from you.
            </p>
            <p className="body-copy">
              We value operational experience over credentials. Show us what you have built or fixed, and we will take the conversation seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 px-6 lg:px-12 border-b border-blade-graphite">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-16">Open Roles</p>
          <div className="space-y-0">
            {openings.map(({ title, type, location, description }, i) => (
              <div
                key={title}
                className={`py-10 ${i < openings.length - 1 ? "border-b border-blade-graphite" : ""}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl text-blade-white">
                      {title}
                    </h3>
                  </div>
                  <div className="md:col-span-6 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
                    <span className="text-xs tracking-widest uppercase text-blade-silver border border-blade-graphite px-4 py-1.5 w-fit">
                      {type}
                    </span>
                    <span className="text-xs text-blade-steel tracking-wide">
                      {location}
                    </span>
                  </div>
                </div>
                <p className="body-copy max-w-3xl mb-6">{description}</p>
                <Link
                  href={`/contact?role=${encodeURIComponent(title)}`}
                  className="cta-secondary text-xs"
                >
                  Express Interest
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative */}
      <section className="py-24 px-6 lg:px-12 bg-blade-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="section-label mb-4">Don&apos;t See Your Role</p>
            <h2 className="sub-heading text-2xl">
              Strong operators are always welcome here.
            </h2>
          </div>
          <Link href="/contact" className="cta-primary whitespace-nowrap">
            Send a Speculative CV
          </Link>
        </div>
      </section>
    </>
  );
}
