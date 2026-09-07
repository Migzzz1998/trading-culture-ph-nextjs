"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function Testimonials() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.observationCommunityUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="observation-community" className="py-24 bg-gradient-to-b from-surface to-base">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[720px] mx-auto text-center mb-12">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-positive font-medium inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-positive animate-pulse"></span>
            Free Observation Community
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(28px,3.8vw,42px)] my-4">
            Want to observe and learn with fellow beginners first?
          </h2>
          <p className="text-muted leading-relaxed text-[15px]">
            Join our free observation community on Messenger — a space for beginner traders to share insights,
            ask questions, and interact with other members who are also learning. No signals provided here, just
            real conversations and experiences from traders at your level.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto bg-surface border border-edge rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink mb-3">
                What you&apos;ll find in this community:
              </h3>
              <ul className="space-y-3 text-[14.5px] text-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[11px] text-positive shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-ink font-semibold">Real beginner insights</strong> — see what other new traders are learning and experiencing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[11px] text-positive shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-ink font-semibold">Ask questions freely</strong> — interact with fellow members without judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[11px] text-positive shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-ink font-semibold">No pressure environment</strong> — observe, learn, and join conversations at your own pace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[11px] text-positive shrink-0">
                    ✓
                  </span>
                  <span><strong className="text-ink font-semibold">Community-driven learning</strong> — grow alongside traders who share your journey</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-brand/5 border border-brand/20 rounded-xl">
                <p className="text-xs text-muted leading-relaxed">
                  <strong className="text-ink">Note:</strong> This is an observation and discussion space only.
                  Trading signals are provided exclusively to members who have joined through our official KVB partnership.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:border-l md:border-edge md:pl-8">
              <a
                href={siteConfig.observationCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-lg font-semibold text-sm bg-[#0084FF] text-white hover:bg-[#0073E6] transition inline-flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.14 2 11.25c0 2.89 1.45 5.46 3.71 7.15V22l3.58-1.96c.95.26 1.96.41 3 .41 5.5 0 9.96-4.14 9.96-9.25C22.25 6.14 17.5 2 12 2z"/>
                </svg>
                Join Messenger Community
              </a>
              <button
                onClick={handleCopyLink}
                className="px-6 py-3 rounded-lg font-medium text-sm border border-edge text-muted hover:text-ink hover:bg-base transition inline-flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Link Copied!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted mt-8 max-w-[600px] mx-auto">
          Ready to access trade signals, courses, and full mentorship?{" "}
          <a href="#hero" className="text-positive hover:underline font-medium">
            Join our full community
          </a>{" "}
          by registering with KVB.
        </p>
      </div>
    </section>
  );
}
