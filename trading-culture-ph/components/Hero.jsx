"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import SignalPanel from "./SignalPanel";
import CoachSelectionModal from "./CoachSelectionModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="bg-gradient-to-b from-base via-surface to-surface text-ink py-22 md:py-25">
        <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-brand-soft font-medium">
              Free Trading Education &amp; Community
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(36px,5vw,56px)] leading-[1.05] my-4.5">
              You don&apos;t have to learn the markets <em className="italic text-brand-soft">alone</em>.
            </h1>
            <p className="text-lg leading-relaxed text-muted-light max-w-[52ch] mb-8">
              {siteConfig.communityName} is a free, supportive community for people who are brand new
              to trading. Get signals, courses, live sessions, and real mentors — then open an account
              with our regulated broker partner when you&apos;re ready.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-9">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-7 py-4 rounded-lg font-semibold text-sm bg-brand text-ink hover:bg-brand-hover hover:-translate-y-0.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
              >
                Join Our Community →
              </button>
              <a
                href={siteConfig.beginnerGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-lg font-semibold text-sm border border-positive/50 text-positive hover:border-positive hover:bg-positive/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-positive flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Beginner&apos;s Trading Guide
              </a>
            </div>
            <div className="flex gap-5 flex-wrap text-[13px] text-muted items-center">
              <span className="flex items-center gap-2">
                <CheckBadge /> Regulated broker partner
              </span>
              <span className="flex items-center gap-2">
                <CheckBadge /> Community since {siteConfig.communitySinceYear}
              </span>
              <span className="flex items-center gap-2">
                <CheckBadge /> 100% free education, always
              </span>
            </div>
          </div>
          <SignalPanel />
        </div>
      </section>
      <CoachSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function CheckBadge() {
  return (
    <span className="w-4 h-4 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[10px] text-positive shrink-0">
      ✓
    </span>
  );
}
