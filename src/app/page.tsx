import { fetchPageSections, fetchSettings } from "@/lib/api";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";
import { getSettingValue } from "@/lib/utils";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = "https://aerievo.com/";
  const settings = await fetchSettings().catch(() => []);

  try {
    const pageData = await fetchPageSections("home");

    const title = pageData?.metaTitle || "Aerievo - Top Software, Mobile and Web App Development Company";
    const description =
      pageData?.metaDescription ||
      getSettingValue(
        settings,
        "default_page_description",
        "Aerievo designs and builds custom software, web, and mobile applications for ambitious companies.",
      );

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
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    return {
      title: "Aerievo - Top Software, Mobile and Web App Development Company",
      description: "Aerievo designs and builds custom software, web, and mobile applications.",
    };
  }
}

export default async function Home() {
  let pageData: PageResponse;

  try {
    pageData = await fetchPageSections("home");
  } catch (error) {
    console.error("Error loading home page:", error);
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">Unable to load page</h1>
          <p className="text-gray-600">Please check your Sanity configuration and try again.</p>
        </div>
      </main>
    );
  }

  const sortedSections = pageData.sections.sort((a, b) => a.sortOrder - b.sortOrder);

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
