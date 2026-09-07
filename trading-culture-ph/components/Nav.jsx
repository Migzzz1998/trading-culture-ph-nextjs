"use client";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config";
import CoachSelectionModal from "./CoachSelectionModal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const links = [
    { href: "#offers", label: "Free Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#broker", label: "Broker" },
    { href: siteConfig.beginnerGuideUrl, label: "Beginner Guide", isExternal: true },
    { href: "#faq", label: "FAQ" },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-base/92 backdrop-blur-sm border-b border-edge">
        <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between py-4">
          <a href="#" className="font-[family-name:var(--font-display)] font-semibold text-xl text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            {siteConfig.communityName}
            <span className="text-brand">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.isExternal ? "_blank" : undefined}
                rel={l.isExternal ? "noopener noreferrer" : undefined}
                className="text-muted-light hover:text-ink text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 text-[13px] font-semibold rounded-lg bg-brand text-ink hover:bg-brand-hover transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
            >
              Join Our Community
            </button>
          </nav>

          <button
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink text-2xl p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden flex flex-col gap-4 px-6 py-5 bg-base border-b border-edge"
            aria-label="Mobile Navigation"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.isExternal ? "_blank" : undefined}
                rel={l.isExternal ? "noopener noreferrer" : undefined}
                className="text-muted-light text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setIsModalOpen(true);
              }}
              className="px-5 py-2.5 text-[13px] font-semibold rounded-lg bg-brand text-ink text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
            >
              Join Our Community
            </button>
          </nav>
        )}
      </header>
      <CoachSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
