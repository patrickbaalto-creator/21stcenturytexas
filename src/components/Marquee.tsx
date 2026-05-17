export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div className="border-y border-white/5 bg-[#000000] text-white/40 py-3 overflow-hidden flex whitespace-nowrap">
      <div className="marquee-track flex gap-12 font-semibold text-[0.7rem] uppercase tracking-[0.15em]">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
