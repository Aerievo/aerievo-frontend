import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ContentWithImageSectionProps {
  data: PageSection["content"];
}

export default function ContentWithImageSection({ data }: ContentWithImageSectionProps) {
  const isReversed = data.imagePosition === "left";
  const categories = (data.categories as CategoryGroup[]) || [];
  const isDark = data.variant === "dark";

  return (
    <section className={`py-16 md:py-24 ${isDark ? "bg-[#1a1c1e] text-white" : ""}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={cn("flex flex-col lg:flex-row items-center gap-14 lg:gap-20", isReversed ? "lg:flex-row-reverse" : "")}>
          {/* Content side */}
          <div className="w-full lg:w-1/2">
            {data.subtitle && (
              <div className="inline-flex items-center gap-2 mb-4">
                <span className={`w-4 h-[2px] rounded-full ${isDark ? "bg-accent-tint" : "bg-[color:var(--primary)]"}`} />
                <span className={`font-bold text-xs uppercase tracking-[0.25em] ${isDark ? "text-accent-tint" : "text-primary"}`}>
                  {data.subtitle}
                </span>
              </div>
            )}
            {data.title && (
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight leading-[1.15] ${isDark ? "text-white" : "text-heading"}`}>
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className={`leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-secondary"}`}>{data.description}</p>
            )}

            {data.points && data.points.length > 0 && (
              <ul className="space-y-3 mb-6">
                {data.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-slate-700"}`}>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {categories.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mb-6">
                {categories.map((cat, i) => (
                  <div key={i}>
                    <h4 className={`text-sm font-bold mb-2 ${isDark ? "text-white" : "text-heading"}`}>{cat.title}</h4>
                    <ul className="space-y-1">
                      {(cat.items || []).map((item, j) => (
                        <li key={j} className={`text-sm ${isDark ? "text-gray-300" : "text-secondary"}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {data.primaryCta?.label && (
              <Link
                href={data.primaryCta.href || data.primaryCta.link || "#"}
                className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--primary-dark)]"
              >
                {data.primaryCta.label}
              </Link>
            )}
          </div>

          {/* Visual side — decorative panel (no real photography without Sanity images) */}
          <div className="w-full lg:w-1/2">
            <div className={`relative aspect-[4/3] w-full rounded flex items-center justify-center overflow-hidden ${isDark ? "bg-white/5 border border-white/10" : "bg-gradient-to-br from-primary/10 via-slate-50 to-secondary/10 shadow-(--shadow-card)"}`}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[color:var(--primary)]/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[color:var(--secondary)]/10 blur-2xl" />
              <span className={`relative z-10 rounded-lg px-6 py-3 text-sm font-semibold ${isDark ? "bg-white/10 text-white" : "text-slate-400"}`}>
                {isDark ? "Your IT Challenges" : data.title || "Aerievo"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
