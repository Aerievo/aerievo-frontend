"use client";

import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LucideIconName = keyof typeof LucideIcons.icons;

interface IconFeatureGridSectionProps {
  data: PageSection["content"];
}

function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return LucideIcons.Sparkles;
  const formattedName = iconName
    .toLowerCase()
    .replace(/-./g, (x) => x[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase()) as LucideIconName;
  return LucideIcons.icons[formattedName] ?? LucideIcons.Sparkles;
}

export default function IconFeatureGridSection({ data }: IconFeatureGridSectionProps) {
  const cols = typeof data.columns === "number" ? data.columns : 4;
  const gridColsClass =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";
  const isDark = data.variant === "dark";
  const isPhoto = data.variant === "photo";

  return (
    <section className={`py-16 md:py-24 ${isDark ? "bg-[#1a1c1e]" : ""}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {(data.title || data.subtitle || data.description) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {data.subtitle && (
              <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${isDark ? "text-accent-tint" : "text-primary"}`}>
                {data.subtitle}
              </p>
            )}
            {data.title && (
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-heading"}`}>
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className={`mt-4 leading-relaxed ${isDark ? "text-gray-300" : "text-secondary"}`}>{data.description}</p>
            )}
          </div>
        )}

        {data.cards && data.cards.length > 0 && (
          <div className={`grid gap-8 grid-cols-1 ${gridColsClass}`}>
            {data.cards.map((card, index) => {
              const Icon = getIcon(card.icon);
              const content = isPhoto ? (
                <>
                  {card.image && (
                    <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                      <Image src={card.image} alt={card.title || ""} width={64} height={64} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-heading"}`}>{card.title}</h3>
                </>
              ) : (
                <>
                  {card.image ? (
                    <div className="mb-4 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Image src={card.image} alt={card.title || ""} width={40} height={40} className="h-10 w-10 object-contain" />
                    </div>
                  ) : (
                    <div className="mb-4 flex h-14 w-14 items-center justify-center text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-9 w-9" strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-1.5 text-heading">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm leading-relaxed text-secondary">{card.description}</p>
                  )}
                </>
              );

              const cardClass = isPhoto
                ? "group flex flex-col items-center text-center"
                : "group rounded bg-white p-6 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1";

              return card.link ? (
                <Link key={index} href={card.link} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={index} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
