import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-8">404</p>
        <h1 className="display-heading mb-8">
          Page not found.
        </h1>
        <p className="body-large mb-12 max-w-lg">
          This page doesn&apos;t exist. Let&apos;s get you back to something that does.
        </p>
        <Link href="/" className="cta-primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}
