import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Build-safe fallback implementation.
 * Renders a simple list so pages compile even if the fancy animation isn't present.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      <div className="grid gap-6">
        {testimonials.map((t, idx) => (
          <figure key={idx} className="rounded-xl border border-neutral-200/20 p-6">
            <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-4 text-sm font-medium">
              {t.name}
              {t.designation ? (
                <span className="ml-2 text-neutral-500">{t.designation}</span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTestimonials;
