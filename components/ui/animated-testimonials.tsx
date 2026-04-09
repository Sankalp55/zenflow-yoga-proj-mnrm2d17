import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

export function AnimatedTestimonials({
  testimonials,
  className,
}: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials.map((t, idx) => (
        <figure key={idx}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <div>{t.name}</div>
            {t.title ? <div>{t.title}</div> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
