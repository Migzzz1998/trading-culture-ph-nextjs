import { siteConfig } from "@/lib/config";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="pb-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-0.5 bg-edge border border-edge rounded-2xl overflow-hidden">
          <div className="bg-surface text-ink p-11">
            <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-brand-soft font-medium block mb-3.5">
              Our Mission
            </span>
            <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed">
              {siteConfig.missionVision.mission}
            </p>
          </div>
          <div className="bg-surface text-ink p-11">
            <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-brand-soft font-medium block mb-3.5">
              Our Vision
            </span>
            <p className="font-[family-name:var(--font-display)] text-xl leading-relaxed">
              {siteConfig.missionVision.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
