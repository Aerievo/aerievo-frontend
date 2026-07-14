"use client";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LucideIconName = keyof typeof LucideIcons.icons;

interface BenefitsGridSectionProps {
  data: PageSection["content"];
}

function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return LucideIcons.Gift;
  const formattedName = iconName
    .toLowerCase()
    .replace(/-./g, (x) => x[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase()) as LucideIconName;
  return LucideIcons.icons[formattedName] ?? LucideIcons.Gift;
}

export default function BenefitsGridSection({ data }: BenefitsGridSectionProps) {
  const benefits = (data.benefits as IconTextItem[]) || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {data.title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
              {data.title}
            </h2>
          )}
          {data.subtitle && <p className="text-secondary leading-relaxed">{data.subtitle}</p>}
        </div>

        {data.videoUrl && (
          <div className="mb-12 max-w-3xl mx-auto rounded bg-slate-900 aspect-video flex items-center justify-center text-slate-400 text-sm">
            Video: {data.videoUrl}
          </div>
        )}

        {benefits.length > 0 && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => {
              const Icon = getIcon(benefit.icon);
              return (
                <div key={i} className="rounded bg-white p-6 shadow-(--shadow-card)">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--secondary)]/10 text-[color:var(--secondary)]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-heading mb-1.5">{benefit.title}</h3>
                  {benefit.description && (
                    <p className="text-sm text-secondary leading-relaxed">{benefit.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
