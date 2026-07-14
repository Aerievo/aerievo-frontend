import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

interface ParagraphEditorSectionProps {
  data: PageSection["content"];
}

export default function ParagraphEditorSection({ data }: ParagraphEditorSectionProps) {
  const content = data.content;
  if (!Array.isArray(content) || content.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        {data.title && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
            {data.title}
          </p>
        )}
        <div className="prose prose-slate max-w-none">
          <PortableText value={content} components={portableTextComponents} />
        </div>
      </div>
    </section>
  );
}
