import { siteConfig } from "@/lib/config";

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Join Our Community",
      body: `Hit "Join Our Community" above. You'll land on the KVB registration page. Fill out the sign-up form (name, email, phone) — takes about 3 minutes. You'll get a welcome email with your login credentials and a link to fund your account.`,
    },
    {
      n: "02",
      title: "Verify Your Identity",
      body: `KVB needs to confirm you're a real person (regulatory requirement). Upload a photo of your valid ID (passport, driver's license, or government ID) and a recent selfie. Most verifications are approved within 24 hours, some within minutes.`,
    },
    {
      n: "03",
      title: "Fund Your Account",
      body: `Deposit at least $100 USD using bank transfer, credit/debit card, or e-wallet (GCash, PayMaya, etc.). Your funds usually appear in your trading account within 10 minutes to 2 hours depending on the method. Start small — only deposit what you can afford to lose while learning.`,
    },
    {
      n: "04",
      title: "Get Your Community Access",
      body: `Once your account is funded and verified, you'll receive an invite link to our private Telegram/Discord group via email or from the coach who referred you. Inside, you'll find: the signals channel, course library, live session schedule, and a direct line to mentors. You're officially in.`,
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="font-[family-name:var(--font-mono-ui)] text-xs tracking-[0.14em] uppercase text-positive font-medium">
            Getting Started
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(28px,3.6vw,38px)] my-3.5">
            Four steps. Just a few minutes.
          </h2>
          <p className="text-muted leading-relaxed">
            No experience required. Here&apos;s exactly what happens when you join.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="font-[family-name:var(--font-display)] font-semibold text-[44px] text-brand leading-none mb-4 opacity-90">
                {s.n}
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-[19px] mb-2.5">{s.title}</h3>
              <p className="text-[14.5px] text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Beginner Guide Fast-Track Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-surface border border-positive/30 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 font-[family-name:var(--font-mono-ui)] text-xs text-positive font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-positive animate-pulse"></span>
              Fast-Track For Brand New Beginners
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-semibold text-ink mb-2">
              Want to see the step-by-step guides first?
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We uploaded a complete walkthrough in our Telegram channel covering chart setups, lot sizing, and risk management so you can learn at your own pace before funding.
            </p>
          </div>
          <a
            href={siteConfig.beginnerGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-lg font-semibold text-sm bg-positive text-base hover:opacity-90 transition inline-flex items-center gap-2 shadow-lg"
          >
            Access Free Telegram Guide →
          </a>
        </div>
      </div>
    </section>
  );
}
