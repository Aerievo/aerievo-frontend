import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

interface NarrativeSplitSectionProps {
  data: PageSection["content"];
}

export default function NarrativeSplitSection({ data }: NarrativeSplitSectionProps) {
  const columns = Array.isArray(data.columns) ? (data.columns as NarrativeColumn[]) : [];

  const gridClass =
    columns.length === 1
      ? "grid-cols-1 max-w-3xl mx-auto"
      : columns.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-3";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {data.sectionTitle && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight text-center mb-12 max-w-3xl mx-auto">
            {data.sectionTitle}
          </h2>
        )}

        <div className={`grid gap-10 ${gridClass}`}>
          {columns.map((col, i) => (
            <div key={i}>
              {col.title && (
                <h3 className="font-bold text-primary mb-3 uppercase tracking-wide text-sm">
                  {col.title}
                </h3>
              )}
              {Array.isArray(col.content) && col.content.length > 0 && (
                <div className="prose prose-slate max-w-none text-secondary">
                  <PortableText value={col.content} components={portableTextComponents} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
