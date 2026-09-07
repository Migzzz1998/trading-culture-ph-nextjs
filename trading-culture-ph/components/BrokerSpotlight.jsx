import { siteConfig } from "@/lib/config";
import Image from "next/image";

// Isolated on purpose: remove the <BrokerSpotlight /> import/usage from app/page.js
// to hide or swap this section without touching anything else.
export default function BrokerSpotlight() {
  const { broker, registrationUrl } = siteConfig;

  return (
    <section id="broker" className="py-24 bg-surface">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-positive font-medium">
            Our Broker Partner
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(28px,3.6vw,38px)] my-3.5">
            Who you&apos;ll be trading with.
          </h2>
          <p className="text-muted leading-relaxed">
            We only recommend a broker we&apos;d use ourselves.{" "}
            <span className="font-medium text-ink">Regulated by: {broker.regulator}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-9 items-center bg-surface border border-edge p-10 rounded-2xl">
          <div className="bg-base rounded-xl p-7 flex items-center justify-center aspect-[1.6/1] relative">
            <Image
              src={broker.logoUrl}
              alt={`${broker.name} logo`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 220px"
            />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-2xl mb-2">{broker.name}</h3>
            <p className="text-sm text-muted leading-relaxed">{broker.description}</p>
            <ul className="grid gap-2.5 mt-4.5">
              <Benefit text="Offers a variety of CFD products, including forex, precious metals, commodities, and indices." />
              <Benefit text={`Leverage of up to ${broker.leverage}.`} />
              <Benefit text={`Minimum lot sizes as low as ${broker.minLotSize} lots.`} />
              <Benefit text="Competitive spreads." />
            </ul>
            <a
              href={registrationUrl}
              className="inline-block mt-5.5 px-6 py-3.5 rounded-lg font-semibold text-sm border border-edge text-ink hover:bg-surface hover:text-ink transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Register with {broker.name} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ text }) {
  return (
    <li className="flex gap-2.5 text-[14.5px] items-start">
      <span className="w-4 h-4 mt-0.5 rounded-full bg-positive/10 border border-positive text-positive inline-flex items-center justify-center text-[10px] shrink-0">
        ✓
      </span>
      {text}
    </li>
  );
}
