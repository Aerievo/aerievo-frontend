import { fetchTeamMember, fetchTeamMembers } from "@/lib/api";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { ALL_TEAM_MEMBER_SLUGS_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { ArrowLeft, Globe, User } from "lucide-react";
import type { Metadata } from "next";

// lucide-react v1.x dropped brand/social icons — use inline SVGs instead.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const revalidate = 30;

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

// Team member profiles are `teamMember` documents, routed at /team/[slug] —
// a dedicated route rather than the generic `page` catch-all, mirroring how
// the reference project handles /doctors/[slug].
export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];
  const slugs: Array<{ slug: string }> = await sanityClient
    .fetch(ALL_TEAM_MEMBER_SLUGS_QUERY)
    .catch(() => []);
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await fetchTeamMember(slug);
    if (response?.success && response.data) {
      const member = response.data;
      const title = member.metaTitle || `${member.name} - ${member.role} | Aerievo`;
      const description =
        member.metaDescription || `Meet ${member.name}, ${member.role} at Aerievo.`;
      const canonical = `https://aerievo.com/team/${slug}`;

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
          type: "profile",
        },
        twitter: { card: "summary_large_image", title, description },
      };
    }
  } catch (e) {
    console.error("Error generating metadata for team member:", e);
  }
  return { title: "Team Member | Aerievo" };
}

type SocialIconComponent = (props: { className?: string }) => React.JSX.Element;

const iconForPlatform: Record<string, SocialIconComponent> = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;

  let member: TeamMember | null = null;
  let otherMembers: TeamMember[] = [];

  try {
    const [memberRes, membersRes] = await Promise.all([
      fetchTeamMember(slug),
      fetchTeamMembers().catch(() => ({ success: false, data: [] as TeamMember[] })),
    ]);

    if (memberRes?.success && memberRes.data) member = memberRes.data;

    if (membersRes?.success && Array.isArray(membersRes.data)) {
      otherMembers = membersRes.data.filter((m) => m.slug !== slug).slice(0, 4);
    }
  } catch (error) {
    console.error("Error loading team member detail:", error);
  }

  if (!member) notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[color:var(--primary)] transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="aspect-square w-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300 mb-6">
                <User className="h-20 w-20" strokeWidth={1.25} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h1>
              <p className="text-[color:var(--primary)] font-medium mb-4">{member.role}</p>

              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="flex items-center gap-3">
                  {member.socialLinks.map((link, i) => {
                    const Icon = iconForPlatform[link.platform.toLowerCase()] || Globe;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.platform}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              {member.bio && member.bio.length > 0 ? (
                <div className="prose prose-slate max-w-none">
                  <PortableText value={member.bio} components={portableTextComponents} />
                </div>
              ) : (
                <p className="text-slate-500 italic">No bio available yet.</p>
              )}
            </div>
          </div>

          {otherMembers.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-8">More From the Team</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {otherMembers.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/team/${m.slug}`}
                    className="flex flex-col items-center text-center rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <User className="h-6 w-6" strokeWidth={1.25} />
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{m.name}</span>
                    <span className="text-xs text-slate-500 mt-0.5">{m.role}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
