import { fetchPageBySlug, fetchSettings } from "@/lib/api";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { ALL_PAGE_SLUGS_QUERY } from "@/lib/queries";
import SectionRenderer from "@/components/SectionRenderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSettingValue } from "@/lib/utils";

export const revalidate = 30;

interface UnifiedPageProps {
  params: Promise<{ slug: string[] }>;
}

// Catch-all route for every `page` document distinguished by slug:
// services hub/detail, industries hub/detail, about, why-us, team hub,
// contact (client-support), faq, careers, and the legal pages.
// Pre-build all published page slugs at deploy time when Sanity is configured.
export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs: Array<{ slug: string }> = await sanityClient
    .fetch(ALL_PAGE_SLUGS_QUERY)
    .catch(() => []);
  return slugs
    .filter((s) => s.slug && s.slug !== "/" && s.slug !== "")
    .map((s) => ({ slug: s.slug.split("/") }));
}

export async function generateMetadata({ params }: UnifiedPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const settings = await fetchSettings().catch(() => []);

  try {
    const response = await fetchPageBySlug(slugPath);
    if (!response?.success || !response.data) {
      return { title: "Page Not Found" };
    }

    const pageData = response.data;
    const title = pageData.metaTitle || pageData.title || "Aerievo";
    const description =
      pageData.metaDescription ||
      getSettingValue(settings, "default_page_description", "Aerievo - Software Development Company");
    const canonical = `https://aerievo.com/${slugPath}`;

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
        type: "website",
      },
      twitter: { card: "summary_large_image", title, description },
    };
  } catch {
    return { title: "Aerievo" };
  }
}

export default async function UnifiedPage({ params }: UnifiedPageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  let pageData: PageResponse | undefined;

  try {
    const response = await fetchPageBySlug(slugPath);
    if (!response?.success || !response.data) notFound();
    pageData = response.data;
  } catch {
    notFound();
  }

  const sortedSections = pageData!.sections.sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main className="min-h-screen">
      {pageData?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: pageData.schemaMarkup.replace(/<\/?script[^>]*>/gi, ""),
          }}
        />
      )}
      <SectionRenderer sections={sortedSections} />
    </main>
  );
}
