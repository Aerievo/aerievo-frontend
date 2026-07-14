"use client";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LucideIconName = keyof typeof LucideIcons.icons;

interface IconListPairSectionProps {
  data: PageSection["content"];
}

function getIcon(iconName?: string): LucideIcon {
  if (!iconName) return LucideIcons.CircleCheck;
  const formattedName = iconName
    .toLowerCase()
    .replace(/-./g, (x) => x[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase()) as LucideIconName;
  return LucideIcons.icons[formattedName] ?? LucideIcons.CircleCheck;
}

export default function IconListPairSection({ data }: IconListPairSectionProps) {
  const lists = (data.lists as IconListGroup[]) || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {data.sectionTitle && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight text-center mb-12 max-w-3xl mx-auto">
            {data.sectionTitle}
          </h2>
        )}

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {lists.map((list, i) => (
            <div key={i} className="rounded bg-white p-8 shadow-(--shadow-card)">
              {list.title && (
                <h3 className="text-lg font-bold text-heading mb-6">{list.title}</h3>
              )}
              <div className="space-y-5">
                {(list.items || []).map((item, j) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <div key={j} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--primary)]/10 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-heading mb-1">{item.title}</h4>
                        {item.description && (
                          <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
