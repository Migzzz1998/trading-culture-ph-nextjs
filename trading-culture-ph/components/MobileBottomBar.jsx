"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import CoachSelectionModal from "./CoachSelectionModal";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after user scrolls past 400px (roughly past hero on mobile)
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-md border-t border-edge p-3 md:hidden animate-in slide-in-from-bottom duration-300">
        <div className="max-w-[600px] mx-auto flex gap-2.5">
          <a
            href={siteConfig.observationCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 rounded-lg font-semibold text-xs text-center border border-edge text-muted-light hover:text-ink hover:bg-surface/80 transition inline-flex items-center justify-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.14 2 11.25c0 2.89 1.45 5.46 3.71 7.15V22l3.58-1.96c.95.26 1.96.41 3 .41 5.5 0 9.96-4.14 9.96-9.25C22.25 6.14 17.5 2 12 2z"/>
            </svg>
            Free Group
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-[1.4] px-4 py-3 rounded-lg font-semibold text-xs text-center bg-brand text-ink hover:bg-brand-hover transition shadow-lg cursor-pointer"
          >
            Join Community →
          </button>
        </div>
      </div>
      <CoachSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
