import { Star } from 'lucide-react';
import type { Review } from '../data/reviews';

export function ReviewTile({ review }: { review: Review }) {
  return (
    <figure className="bento p-6 lg:p-7 flex flex-col h-full">
      <div className="flex items-center gap-1 text-brand mb-4">
        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand" />)}
      </div>
      <blockquote className="font-display text-[1.2rem] leading-[1.45] text-stone-ink mb-5 flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-4 border-t border-stone-line">
        <div className="w-10 h-10 rounded-full bg-cream-2 text-stone-ink font-bold flex items-center justify-center text-sm">
          {review.name.charAt(0)}
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-sm text-stone-ink">{review.name}</div>
          <div className="text-stone-mute text-xs">{review.city}</div>
        </div>
      </figcaption>
    </figure>
  );
}
