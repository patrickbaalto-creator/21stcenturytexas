import { useRef, useState, useCallback, useEffect } from 'react';
import { img } from '../utils/unsplash';

export function BeforeAfterSlider({ before, after, alt = 'Before and after' }: { before: string; after: string; alt?: string }) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => { if (drag.current) setFromX(e.clientX); };
    const onUp = () => { drag.current = false; };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [setFromX]);

  return (
    <div ref={wrap}
      className="ba-wrap aspect-[16/10] lg:aspect-[16/9] bg-stone-ink"
      onPointerDown={(e) => { drag.current = true; setFromX(e.clientX); }}>
      <img src={img(before, 1600)} alt={`${alt} — before`} className="ba-img" draggable={false} />
      <img src={img(after, 1600)} alt={`${alt} — after`} className="ba-img" draggable={false}
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />
      <div className="ba-tag before">Before</div>
      <div className="ba-tag after">After</div>
      <div className="ba-handle" style={{ left: `${pos}%` }} />
      <div className="ba-knob" style={{ left: `${pos}%` }} aria-hidden="true">⇆</div>
    </div>
  );
}
