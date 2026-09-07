import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-base text-muted pt-14 pb-7 border-t border-edge">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="bg-surface border border-edge rounded-xl p-5 text-xs leading-relaxed mb-6">
          <strong className="text-muted-light">Risk warning:</strong> Trading CFDs and other leveraged
          products carries a high level of risk and may not be suitable for all investors. You could
          lose some or all of your invested capital. Past performance and signal results are not
          indicative of future outcomes. Only trade with money you can afford to lose, and seek
          independent financial advice if you are unsure.
        </div>

        <div className="flex justify-between flex-wrap gap-8 mb-9">
          <div className="max-w-[340px]">
            <a href="#" className="font-[family-name:var(--font-display)] font-semibold text-xl text-ink block mb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm">
              {siteConfig.communityName}
              <span className="text-brand">.</span>
            </a>
            <p className="text-[13.5px] leading-relaxed">
              A free trading community helping beginners learn the markets with signals, courses,
              mentoring, and support.
            </p>
          </div>

          <div className="flex gap-14 flex-wrap">
            <FooterCol
              title="Community"
              links={[
                { href: "#offers", label: "Free Services" },
                { href: "#how-it-works", label: "How It Works" },
                { href: siteConfig.beginnerGuideUrl, label: "Beginner's Guide (Telegram)", isExternal: true },
                { href: "#faq", label: "FAQ" },
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                { href: siteConfig.legal.privacyPolicyUrl, label: "Privacy Policy" },
                { href: siteConfig.legal.termsUrl, label: "Terms & Conditions" },
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                { href: siteConfig.socials.instagram, label: "Instagram" },
                { href: siteConfig.beginnerGuideUrl, label: "Telegram Channel", isExternal: true },
                { href: siteConfig.socials.youtube, label: "YouTube" },
              ]}
            />
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-3 text-xs pt-5.5 border-t border-edge">
          <span>© {new Date().getFullYear()} {siteConfig.communityName}. All rights reserved.</span>
          <span>Not investment advice. Trading involves risk.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wide text-ink mb-3.5 font-semibold">{title}</h3>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.isExternal ? "_blank" : undefined}
          rel={l.isExternal ? "noopener noreferrer" : undefined}
          className="block text-[13.5px] text-muted hover:text-ink mb-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
