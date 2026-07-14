import Image from "next/image";

interface LogoStripSectionProps {
  data: PageSection["content"];
}

export default function LogoStripSection({ data }: LogoStripSectionProps) {
  const logos = (data.logos as Array<{ name?: string; image?: string }>) || [];

  return (
    <section className="py-14 md:py-20 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        {(data.subtitle || data.title) && (
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
            {data.subtitle}
          </p>
        )}
        {data.title && (
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-heading tracking-tight mb-10">
            {data.title}
          </h2>
        )}
        {logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {logos.map((logo, i) =>
              logo.image ? (
                <Image
                  key={i}
                  src={logo.image}
                  alt={logo.name || ""}
                  width={140}
                  height={70}
                  className="h-14 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              ) : (
                <span key={i} className="text-lg font-bold text-slate-300 tracking-tight select-none">
                  {logo.name}
                </span>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
