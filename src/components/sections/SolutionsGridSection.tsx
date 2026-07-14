"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type LucideIconName = keyof typeof LucideIcons.icons;

interface SolutionsGridSectionProps {
  data: PageSection["content"];
}

function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return LucideIcons.Layers;
  const formattedName = iconName
    .toLowerCase()
    .replace(/-./g, (x) => x[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase()) as LucideIconName;
  return LucideIcons.icons[formattedName] ?? LucideIcons.Layers;
}

export default function SolutionsGridSection({ data }: SolutionsGridSectionProps) {
  const items = (data.items as SolutionItem[]) || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {(data.title || data.subtitle) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {data.subtitle && (
              <p className="text-[color:var(--primary)] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
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

        {items.length > 0 && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Icon = getIcon(item.icon);
              const href = item.link || (item.pageSlug ? `/${item.pageSlug}` : "#");
              return (
                <Link
                  key={index}
                  href={href}
                  className="group flex flex-col rounded bg-white p-7 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-secondary leading-relaxed mb-5 flex-grow">{item.description}</p>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                    {item.linkLabel || "Learn more"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
