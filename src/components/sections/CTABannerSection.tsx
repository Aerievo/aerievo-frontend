import Link from "next/link";

interface CTABannerSectionProps {
  data: PageSection["content"];
}

export default function CTABannerSection({ data }: CTABannerSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        {data.title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {data.title}
          </h2>
        )}
        {data.description && (
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">{data.description}</p>
        )}
        {(data.primaryCta?.label || data.secondaryCta?.label) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data.primaryCta?.label && (
              <Link
                href={data.primaryCta.href || data.primaryCta.link || "#"}
                className="inline-flex items-center gap-2 rounded bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:bg-heading hover:text-white"
              >
                {data.primaryCta.label}
              </Link>
            )}
            {data.secondaryCta?.label && (
              <Link
                href={data.secondaryCta.href || data.secondaryCta.link || "#"}
                className="inline-flex items-center gap-2 rounded border border-white/40 bg-transparent px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                {data.secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
