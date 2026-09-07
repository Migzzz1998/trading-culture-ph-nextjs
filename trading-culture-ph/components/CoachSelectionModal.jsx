"use client";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config";

export default function CoachSelectionModal({ isOpen, onClose }) {
  const [selectedCoach, setSelectedCoach] = useState("");
  const [showLink, setShowLink] = useState(false);
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCoachSelect = (e) => {
    const coachName = e.target.value;
    setSelectedCoach(coachName);
    if (coachName) {
      setShowLink(true);
    } else {
      setShowLink(false);
    }
  };

  const handleContinue = () => {
    if (selectedCoach) {
      const coach = siteConfig.coaches.find((c) => c.name === selectedCoach);
      if (coach && coach.registrationUrl) {
        console.log("Opening URL:", coach.registrationUrl);
        window.location.href = coach.registrationUrl;
      }
    }
  };

  if (!isOpen) return null;

  const selectedCoachData = siteConfig.coaches.find((c) => c.name === selectedCoach);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative bg-surface border border-edge rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-ink text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-lg hover:bg-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="mb-6">
          <h2
            id="modal-title"
            className="font-[family-name:var(--font-display)] font-semibold text-2xl text-ink mb-2"
          >
            Welcome to {siteConfig.communityName}!
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            To ensure you get the right support, please select the coach who invited you to this community.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="coach-select" className="block text-sm font-medium text-ink mb-2">
            Select Your Coach
          </label>
          <select
            id="coach-select"
            value={selectedCoach}
            onChange={handleCoachSelect}
            className="w-full px-4 py-3 bg-base border border-edge rounded-lg text-ink font-medium focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
          >
            <option value="">— Choose a coach —</option>
            {siteConfig.coaches.map((coach) => (
              <option key={coach.name} value={coach.name}>
                {coach.name}
              </option>
            ))}
          </select>
        </div>

        {showLink && selectedCoachData && (
          <div className="mb-6 p-4 bg-positive/10 border border-positive/30 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 mt-0.5 rounded-full bg-positive/20 border border-positive text-positive inline-flex items-center justify-center text-xs shrink-0">
                ✓
              </span>
              <div>
                <p className="text-sm text-ink font-medium mb-1">
                  Great! You&apos;ll be working with {selectedCoachData.name}.
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  Click &quot;Continue to Registration&quot; below to open your personalized KVB registration link.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3 rounded-lg font-semibold text-sm border border-edge text-muted hover:text-ink hover:bg-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedCoach}
            className="flex-1 px-5 py-3 rounded-lg font-semibold text-sm bg-brand text-ink hover:bg-brand-hover transition disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Continue to Registration →
          </button>
        </div>

        <div className="mt-5 pt-4 border-t border-edge text-center">
          <p className="text-xs text-muted">
            Brand new to trading or don&apos;t have a coach yet?{" "}
            <a
              href={siteConfig.beginnerGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-positive hover:underline font-medium inline-flex items-center gap-1"
            >
              Read our Free Telegram Guide first →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
