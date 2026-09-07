const rows = [
  ["Direction", "Long / Buy"],
  ["Entry Zone", "[XX.XX – XX.XX]"],
  ["Stop Loss", "[XX.XX]"],
  ["Take Profit", "[XX.XX]"],
  ["Risk Level", "Moderate"],
];

export default function SignalPanel() {
  return (
    <div className="bg-surface border border-edge rounded-xl p-6 shadow-2xl">
      <div className="flex justify-between items-center mb-4.5 pb-3.5 border-b border-edge">
        <span className="font-[family-name:var(--font-mono-ui)] text-sm text-ink">XAUUSD · 1H</span>
        <span className="font-[family-name:var(--font-mono-ui)] text-[11px] text-positive flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-positive shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
          SIGNAL ACTIVE
        </span>
      </div>
      {rows.map(([label, val]) => (
        <div key={label} className="flex justify-between py-2.5 border-b border-dashed border-edge/50 text-sm last:border-none">
          <span className="text-muted">{label}</span>
          <span className="font-[family-name:var(--font-mono-ui)] text-ink">{val}</span>
        </div>
      ))}
      <p className="mt-4.5 text-[11.5px] text-muted leading-relaxed">
        Sample signal format for illustration only. Educational content, not financial advice.
      </p>
    </div>
  );
}
