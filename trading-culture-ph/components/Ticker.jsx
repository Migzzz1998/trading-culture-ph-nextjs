import { siteConfig } from "@/lib/config";

export default function Ticker() {
  const loop = [...siteConfig.ticker, ...siteConfig.ticker];
  return (
    <div className="bg-base border-b border-edge overflow-hidden whitespace-nowrap">
      <div className="inline-block pl-full animate-ticker">
        {loop.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-7 py-2.5 font-[family-name:var(--font-mono-ui)] text-xs text-muted-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
