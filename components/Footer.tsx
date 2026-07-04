import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blade-graphite bg-blade-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl tracking-widest text-blade-white mb-4">
              BLADE
            </p>
            <p className="body-copy max-w-xs">
              Private holdings, investment, and operating company. Toronto, Canada.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                ["About", "/about"],
                ["Investment Philosophy", "/investment-philosophy"],
                ["Acquisitions", "/acquisitions"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-blade-silver hover:text-blade-white text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Headquarters</p>
            <address className="not-italic body-copy leading-loose">
              Toronto, Ontario<br />
              Canada<br />
              <a
                href="mailto:info@bladeenterprises.com"
                className="hover:text-blade-white transition-colors duration-200"
              >
                info@bladeenterprises.com
              </a>
            </address>
          </div>
        </div>

        <div className="rule pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-blade-steel text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Blade Enterprises Inc. All rights reserved.
          </p>
          <p className="text-blade-steel text-xs tracking-wide">
            Toronto &bull; Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
