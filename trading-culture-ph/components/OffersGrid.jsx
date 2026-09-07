import { siteConfig } from "@/lib/config";

export default function OffersGrid() {
  return (
    <section id="offers" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-positive font-medium">
            What You Get, At No Cost
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(28px,3.6vw,38px)] my-3.5">
            Our community offers trading services 100% free.
          </h2>
          <p className="text-muted leading-relaxed">
            Everything below is included when you join — no subscriptions, no paywalls, no upsells.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-edge border border-edge">
          {siteConfig.offers.map((o) => (
            <div key={o.n} className="bg-base p-8">
              <div className="font-[family-name:var(--font-mono-ui)] text-xs text-positive mb-3.5">{o.n}</div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[19px] mb-2.5">{o.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
