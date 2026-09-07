import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base text-ink flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-lg">
        <h1 className="font-display text-6xl md:text-7xl font-bold text-brand mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted text-base leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to trading education.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg font-semibold text-sm bg-brand text-ink hover:bg-brand-hover transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Return Home
          </Link>
          <Link
            href="/#offers"
            className="px-6 py-3 rounded-lg font-semibold text-sm border border-edge text-muted-light hover:text-ink hover:bg-surface/80 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
