import { fetchBlogPosts } from "@/lib/api";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blog | Aerievo",
  description:
    "Insights on software development, mobile apps, and technology strategy from the Aerievo engineering team.",
  alternates: { canonical: "https://aerievo.com/blog" },
  openGraph: {
    title: "Blog | Aerievo",
    description: "Insights on software development, mobile apps, and technology strategy from Aerievo.",
    url: "https://aerievo.com/blog",
    siteName: "Aerievo",
    locale: "en_US",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  let posts: BlogPost[] = [];

  try {
    const response = await fetchBlogPosts();
    if (response?.success && Array.isArray(response.data)) {
      posts = response.data.filter((p) => p.status === "published");
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
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
            Blog
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Insights on software development, mobile apps, and technology strategy from the Aerievo
            engineering team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] w-full bg-gradient-to-br from-[color:var(--primary)]/10 to-[color:var(--secondary)]/10" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-[color:var(--primary)]" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <h2 className="text-base font-bold text-slate-900 mb-2.5 line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[color:var(--primary)] transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--primary)] uppercase tracking-wider mt-auto"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 font-medium">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
