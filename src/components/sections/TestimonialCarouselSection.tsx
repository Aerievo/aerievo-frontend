"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialCarouselSectionProps {
  data: PageSection["content"];
}

export default function TestimonialCarouselSection({ data }: TestimonialCarouselSectionProps) {
  const testimonials = (data.testimonials as Testimonial[]) || [];
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {data.title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight text-center mb-12">
            {data.title}
          </h2>
        )}

        <div className="relative rounded bg-white p-8 md:p-12 shadow-(--shadow-card) text-center">
          <Quote className="mx-auto h-8 w-8 text-primary/30 mb-6" />
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            &ldquo;{current.description}&rdquo;
          </p>
          <div className="font-semibold text-heading">{current.title}</div>
          {(current.designation || current.companyName) && (
            <div className="text-sm text-secondary mt-1">
              {current.designation}
              {current.designation && current.companyName ? ", " : ""}
              {current.companyName}
            </div>
          )}

          {testimonials.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary transition-colors hover:border-primary hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-[color:var(--primary)]" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary transition-colors hover:border-primary hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
