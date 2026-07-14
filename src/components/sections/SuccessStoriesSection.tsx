import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

interface SuccessStoriesSectionProps {
  data: PageSection["content"];
}

export default function SuccessStoriesSection({ data }: SuccessStoriesSectionProps) {
  const stories = data.stories || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {(data.title || data.subtitle) && (
          <div className="mb-12 max-w-3xl">
            {data.subtitle && (
              <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                {data.subtitle}
              </p>
            )}
            {data.title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight leading-tight">
                {data.title}
              </h2>
            )}
          </div>
        )}

        {stories.length > 0 && (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/case-studies/${story.slug}`}
                className="group flex flex-col rounded bg-white shadow-(--shadow-card) overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {story.image && (
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-black">
                    <Image src={story.image} alt={story.title} fill className="object-contain p-8" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-heading mb-2">{story.title}</h3>
                  {story.description && (
                    <p className="text-sm text-secondary leading-relaxed mb-4">{story.description}</p>
                  )}
                  {story.stats && story.stats.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {story.stats.map((stat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
