"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-positive font-medium">
            Questions
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(28px,3.6vw,38px)] my-3.5">
            Before you join.
          </h2>
          <p className="text-muted leading-relaxed">Straightforward answers — no jargon.</p>
        </div>

        <div className="max-w-[760px]">
          {siteConfig.faqs.map((item, i) => {
            const open = openIndex === i;
            const contentId = `faq-answer-${i}`;
            const headerId = `faq-question-${i}`;
            return (
              <div key={item.q} className="border-b border-edge">
                <button
                  id={headerId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="w-full text-left bg-none border-none cursor-pointer py-5.5 flex justify-between items-center gap-5 font-[family-name:var(--font-display)] text-[17px] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand text-ink hover:text-brand transition-colors"
                  aria-expanded={open}
                  aria-controls={contentId}
                >
                  {item.q}
                  <span className={`shrink-0 text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                </button>
                {open && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pb-5.5 text-muted text-[15px] leading-relaxed max-w-[70ch] animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
