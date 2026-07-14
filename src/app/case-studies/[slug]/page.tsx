import { fetchCaseStudyBySlug, fetchCaseStudies } from "@/lib/api";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { ALL_SUCCESS_STORY_SLUGS_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

export const revalidate = 30;

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs: Array<{ slug: string }> = await sanityClient
    .fetch(ALL_SUCCESS_STORY_SLUGS_QUERY)
    .catch(() => []);
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await fetchCaseStudyBySlug(slug);
    if (response?.success && response.data) {
      const story = response.data;
      const title = story.metaTitle || `${story.name} - Case Study | Aerievo`;
      const description =
        story.metaDescription || story.sortDescription || `Read the ${story.name} case study from Aerievo.`;
      const canonical = `https://aerievo.com/case-studies/${slug}`;

      return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
          title,
          description,
          url: canonical,
          siteName: "Aerievo",
          locale: "en_US",
          type: "article",
        },
        twitter: { card: "summary_large_image", title, description },
      };
    }
  } catch (e) {
    console.error("Error generating metadata for case study:", e);
  }
  return { title: "Case Study | Aerievo" };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  let story: SuccessStory | null = null;
  let otherStories: SuccessStory[] = [];

  try {
    const [storyRes, storiesRes] = await Promise.all([
      fetchCaseStudyBySlug(slug),
      fetchCaseStudies().catch(() => ({ success: false, data: [] as SuccessStory[] })),
    ]);

    if (storyRes?.success && storyRes.data) story = storyRes.data;

    if (storiesRes?.success && Array.isArray(storiesRes.data)) {
      otherStories = storiesRes.data.filter((s) => s.status === 1 && s.slug !== slug).slice(0, 3);
    }
  } catch (error) {
    console.error("Error loading case study detail:", error);
  }

  if (!story || story.status !== 1) notFound();

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isPortableText = Array.isArray(story.content);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          {story.industry && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[color:var(--secondary)]/20 text-white border border-[color:var(--secondary)]/30 uppercase mb-4">
              {story.industry}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {story.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="h-4 w-4 text-[color:var(--primary)]" />
            <span>{formatDate(story.createdAt)}</span>
            {story.client && <span>· Client: {story.client}</span>}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {isPortableText ? (
            <div className="prose prose-slate max-w-none">
              <PortableText value={story.content as object[]} components={portableTextComponents} />
            </div>
          ) : (
            <p className="text-slate-500 italic">No case study details available.</p>
          )}

          {otherStories.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6">More Case Studies</h2>
              <div className="flex flex-col gap-5">
                {otherStories.map((s) => (
                  <Link
                    key={s.id}
                    href={`/case-studies/${s.slug}`}
                    className="group flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[color:var(--primary)] transition-colors">
                      {s.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[color:var(--primary)] transition-colors" />
                  </Link>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1 mt-8 text-sm font-bold text-[color:var(--primary)] hover:underline"
              >
                View All Case Studies
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
