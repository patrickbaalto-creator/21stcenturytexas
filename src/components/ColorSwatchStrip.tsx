const swatches = [
  { hex: '#1C1917', name: 'Iron Gray' },
  { hex: '#44403C', name: 'Stone' },
  { hex: '#92400E', name: 'Sienna' },
  { hex: '#B45309', name: 'Burnt Sun' },
  { hex: '#D97706', name: 'Amber' },
  { hex: '#FED7AA', name: 'Pale Clay' },
  { hex: '#FFFBEB', name: 'Cream' },
];

export function ColorSwatchStrip() {
  return (
    <div className="flex gap-2 lg:gap-3">
      {swatches.map(s => (
        <div key={s.hex} className="swatch shadow-sm border border-stone-line/40" style={{ background: s.hex }}>
          <span style={s.hex === '#FFFBEB' || s.hex === '#FED7AA' ? { color: 'rgba(28,25,23,0.7)' } : undefined}>{s.name}</span>
        </div>
      ))}
    </div>
  );
}
