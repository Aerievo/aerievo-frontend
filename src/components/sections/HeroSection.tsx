import Link from "next/link";

interface HeroSectionProps {
  data: PageSection["content"];
}

export default function HeroSection({ data }: HeroSectionProps) {
  const image = data.image?.fileUrl ? data.image : null;

  return (
    <section className="relative overflow-hidden bg-white min-h-[300px] md:min-h-[420px] lg:min-h-[475px] flex items-end">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.fileUrl}
          alt={image.altText || ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {image && <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />}

      <div className="container relative z-10 mx-auto px-6 max-w-7xl py-16 md:py-20">
        <div className="max-w-2xl text-left">
          {data.title && (
            <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-[60px] font-semibold text-heading tracking-[-1px] leading-[1.1] mb-5">
              {data.title}
            </h1>
          )}
          {data.subtitle && (
            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl mb-8">
              {data.subtitle}
            </p>
          )}

          {data.cards && data.cards.length > 0 && (
            <div className="grid gap-6 mb-8 max-w-xl grid-cols-1 sm:grid-cols-3">
              {data.cards.map((card, i) => (
                <div key={i} className="rounded bg-white p-5 text-left shadow-(--shadow-card)">
                  <h3 className="text-heading font-semibold mb-1">{card.title}</h3>
                  {card.description && <p className="text-sm text-secondary">{card.description}</p>}
                </div>
              ))}
            </div>
          )}

          {(data.primaryCta?.label || data.secondaryCta?.label) && (
            <div className="flex flex-wrap items-center gap-6">
              {data.primaryCta?.label && (
                <Link
                  href={data.primaryCta.href || data.primaryCta.link || "#"}
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
                >
                  {data.primaryCta.label}
                </Link>
              )}
              {data.secondaryCta?.label && (
                <Link
                  href={data.secondaryCta.href || data.secondaryCta.link || "#"}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-heading transition-colors duration-200 hover:text-primary"
                >
                  {data.secondaryCta.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
