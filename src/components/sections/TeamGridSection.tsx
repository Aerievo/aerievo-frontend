import Link from "next/link";
import { User } from "lucide-react";

interface TeamGridSectionProps {
  data: PageSection["content"];
}

export default function TeamGridSection({ data }: TeamGridSectionProps) {
  const members = (data.members as TeamGridMember[]) || [];
  const isLeadership = data.variant === "leadership";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          {data.title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
              {data.title}
            </h2>
          )}
          {data.subtitle && <p className="text-secondary leading-relaxed">{data.subtitle}</p>}
        </div>

        <div
          className={`grid gap-8 ${
            isLeadership
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {members.map((member, i) => {
            const card = (
              <div className="flex flex-col items-center text-center rounded bg-white p-6 shadow-(--shadow-card) transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <User className="h-9 w-9" strokeWidth={1.25} />
                </div>
                <h3 className="font-semibold text-heading">{member.name}</h3>
                <p className="text-sm text-secondary mt-1">{member.role}</p>
              </div>
            );

            return member.slug ? (
              <Link key={i} href={`/team/${member.slug}`} className="block">
                {card}
              </Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
