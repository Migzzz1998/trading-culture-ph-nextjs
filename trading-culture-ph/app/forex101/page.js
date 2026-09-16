import Link from "next/link";

export default function Forex101Page() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="mb-6 text-3xl font-bold text-center">
          Forex 101 – Introduction to Trading
        </h1>

        {/* Back to Home link */}
        <div className="mb-4 text-right">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-light hover:text-ink transition"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="relative w-full">
          <div className="relative w-full h-0 pt-[56.25%] bg-gray-200">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              title="Forex 101 Introduction Video"
              src="https://www.youtube.com/embed/5iEHsRja8u0?si=2b0I_cCqHynNOCz4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mt-6 text-center text-muted">
          Watch this short video to learn the basics of forex trading,
          how the market works, and what you need to get started.
        </p>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Forex 101 – Trading Culture PH",
  description:
    "Beginner’s introduction to forex trading – watch our free video and learn the basics.",
};