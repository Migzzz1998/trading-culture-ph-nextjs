"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import CoachSelectionModal from "./CoachSelectionModal";

export default function CommunityCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="community-cta" className="bg-gradient-to-tr from-base to-surface text-ink py-22 text-center">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-brand-soft font-medium">
            {siteConfig.communityName} Community
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(30px,4.2vw,44px)] max-w-[16ch] mx-auto my-4.5">
            You&apos;re not alone in this journey.
          </h2>
          <p className="text-muted-light max-w-[56ch] mx-auto mb-8 leading-relaxed">
            We built this for traders who are serious about growth — not overnight results. Come for
            the free education, stay for the people who&apos;ll hold you accountable to doing it right.
          </p>
          <div className="flex gap-7 justify-center flex-wrap my-8">
            <Point text="Supportive trading community" />
            <Point text="Transparent, shared strategies" />
            <Point text="Focus on discipline & risk management" />
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-7 py-4 rounded-lg font-semibold text-sm bg-brand text-ink hover:bg-brand-hover transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer shadow-lg"
            >
              Join Now and Start Trading with Clarity →
            </button>
            <a
              href={siteConfig.beginnerGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-lg font-semibold text-sm border border-edge text-muted-light hover:text-ink hover:bg-surface/80 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand flex items-center gap-2"
            >
              📖 Read Beginner Guides (Telegram)
            </a>
          </div>
        </div>
      </section>
      <CoachSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function Point({ text }) {
  return (
    <span className="text-[13.5px] text-muted-light flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-positive/15 border border-positive inline-flex items-center justify-center text-[10px] text-positive shrink-0">
        ✓
      </span>
      {text}
    </span>
  );
}
