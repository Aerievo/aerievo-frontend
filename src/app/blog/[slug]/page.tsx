import { fetchBlogBySlug, fetchBlogPosts } from "@/lib/api";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { ALL_BLOG_SLUGS_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";

export const revalidate = 30;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs: Array<{ slug: string }> = await sanityClient.fetch(ALL_BLOG_SLUGS_QUERY).catch(() => []);
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await fetchBlogBySlug(slug);
    if (response?.success && response.data) {
      const post = response.data;
      const title = post.metaTitle || post.title;
      const description = post.metaDescription || post.excerpt || "";
      const canonical = `https://aerievo.com/blog/${slug}`;

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
    console.error("Error generating metadata for blog post:", e);
  }
  return { title: "Blog | Aerievo" };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post: BlogPost | null = null;
  let otherPosts: BlogPost[] = [];

  try {
    const [postRes, postsRes] = await Promise.all([
      fetchBlogBySlug(slug),
      fetchBlogPosts().catch(() => ({ success: false, data: [] as BlogPost[] })),
    ]);

    if (postRes?.success && postRes.data) post = postRes.data;

    if (postsRes?.success && Array.isArray(postsRes.data)) {
      otherPosts = postsRes.data.filter((p) => p.slug !== slug && p.status === "published").slice(0, 3);
    }
  } catch (error) {
    console.error("Error loading blog post detail:", error);
  }

  if (!post) notFound();

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          {post.categories && post.categories.length > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[color:var(--primary)]/20 text-white border border-[color:var(--primary)]/30 uppercase mb-4">
              {post.categories[0].name}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <Calendar className="h-4 w-4 text-[color:var(--primary)]" />
            <span>{formatDate(post.publishedAt)}</span>
            {post.authorName && <span>· {post.authorName}</span>}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {post.content && Array.isArray(post.content) && (
            <div className="prose prose-slate max-w-none">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>
          )}

          {otherPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6">More From the Blog</h2>
              <div className="flex flex-col gap-5">
                {otherPosts.map((p) => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="group flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[color:var(--primary)] transition-colors">
                      {p.title}
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[color:var(--primary)] transition-colors" />
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 mt-8 text-sm font-bold text-[color:var(--primary)] hover:underline"
              >
                View All Posts
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
