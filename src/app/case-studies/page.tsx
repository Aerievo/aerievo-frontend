import { fetchCaseStudies } from "@/lib/api";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Case Studies | Aerievo",
  description:
    "Read case studies of how Aerievo has helped companies transform their software, web, and mobile platforms.",
  alternates: { canonical: "https://aerievo.com/case-studies" },
  openGraph: {
    title: "Case Studies | Aerievo",
    description: "Read case studies of how Aerievo has helped companies transform their platforms.",
    url: "https://aerievo.com/case-studies",
    siteName: "Aerievo",
    locale: "en_US",
    type: "website",
  },
};

export default async function CaseStudiesIndexPage() {
  let stories: SuccessStory[] = [];

  try {
    const response = await fetchCaseStudies();
    if (response?.success && Array.isArray(response.data)) {
      stories = response.data.filter((s) => s.status === 1);
    }
  } catch (error) {
    console.error("Error fetching case studies:", error);
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-surface">
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real projects, real outcomes — see how Aerievo has helped companies across industries
            ship software that moves the metrics that matter.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] w-full bg-gradient-to-br from-[color:var(--secondary)]/10 to-[color:var(--primary)]/10" />
                  <div className="p-7 flex flex-col flex-grow">
                    {s.industry && (
                      <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[color:var(--secondary)]/10 text-[color:var(--secondary)] mb-3">
                        {s.industry}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{formatDate(s.createdAt)}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                      <Link href={`/case-studies/${s.slug}`} className="hover:text-[color:var(--primary)] transition-colors">
                        {s.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                      {s.sortDescription}
                    </p>
                    <Link
                      href={`/case-studies/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--primary)] uppercase tracking-wider mt-auto"
                    >
                      Read Case Study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 font-medium">No case studies available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
