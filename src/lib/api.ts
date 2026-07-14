/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Content API layer for Aerievo.
 *
 * Every exported function checks isSanityConfigured() first. When false (no
 * real Sanity project configured yet), it returns the matching static mock
 * from src/lib/mockData.ts. When true, it queries Sanity via GROQ exactly
 * like a normal next-sanity powered app. This dual-mode design means
 * `npm run dev` works today with zero Sanity project configured, and will
 * work against a real project once env vars are set — no code changes
 * needed here.
 */

import { sanityClient, isSanityConfigured } from "@/lib/sanity";
import {
  SITE_SETTINGS_QUERY,
  NAVIGATION_MENU_QUERY,
  PAGE_BY_SLUG_QUERY,
  PAGE_BY_TYPE_QUERY,
  ALL_TEAM_MEMBERS_QUERY,
  TEAM_MEMBER_BY_SLUG_QUERY,
  ALL_TESTIMONIALS_QUERY,
  ALL_PUBLISHED_BLOGS_QUERY,
  BLOG_BY_SLUG_QUERY,
  ALL_SUCCESS_STORIES_QUERY,
  SUCCESS_STORY_BY_SLUG_QUERY,
  ALL_SOCIALS_QUERY,
  PAGES_SITEMAP_QUERY,
} from "@/lib/queries";
import {
  mockSettings,
  mockSocials,
  mockHeaderMenu,
  mockFooterMenu,
  mockTestimonials,
  mockHomePage,
  mockServiceDetailPages,
  mockIndustryDetailPages,
  mockLegalAndSimplePages,
  mockTeamMembers,
  mockTeamHubPage,
  mockBlogPosts,
  mockSuccessStories,
} from "@/lib/mockData";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const REVALIDATE_SECONDS = process.env.NODE_ENV === "development" ? 0 : 300;

function sanityFetch<T = any>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
}

// Map a raw Sanity siteSettings document → Setting[] (key/value pairs).
function mapSiteSettingsToSettings(raw: any): Setting[] {
  if (!raw) return [];

  const settings: Setting[] = [
    { id: "contact_phone", key: "contact_phone", value: raw.contactPhone || "" },
    { id: "contact_email", key: "contact_email", value: raw.contactEmail || "" },
    { id: "address", key: "address", value: raw.address || "" },
    { id: "default_meta_title", key: "default_meta_title", value: raw.defaultMetaTitle || "" },
    { id: "default_page_description", key: "default_page_description", value: raw.defaultMetaDescription || "" },
    { id: "ga_id", key: "ga_id", value: raw.googleAnalyticsId || "" },
  ];

  if (Array.isArray(raw.socialLinks)) {
    raw.socialLinks.forEach((link: { platform: string; url: string; status: number }) => {
      if (link.platform && link.url) {
        settings.push({ id: `social_${link.platform}`, key: `social_${link.platform}`, value: link.url });
      }
    });
  }

  return settings.filter((s) => s.value !== "");
}

function mapPageData(raw: any): PageResponse | null {
  if (!raw) return null;

  return {
    slug: raw.slug || "",
    title: raw.title || "",
    metaTitle: raw.metaTitle,
    metaDescription: raw.metaDescription,
    pageType: raw.pageType || "",
    schemaMarkup: raw.schemaMarkup,
    sections: Array.isArray(raw.sections)
      ? raw.sections
          .filter((section: any) => section && section.sectionData?.hideSection !== true)
          .map((section: any, index: number) => {
            const sectionData = section.sectionData || {};
            const cleanContent = Object.fromEntries(
              Object.entries(sectionData).filter(([k, v]) => v !== null && v !== undefined && k !== "hideSection"),
            );
            return {
              id: section.id || `section-${index}`,
              sectionType: section.sectionType || "",
              sortOrder: index + 1,
              content: cleanContent,
            };
          })
      : [],
  };
}

function mapTeamMember(raw: any): TeamMember {
  return {
    id: raw.id || raw._id || "",
    name: raw.name || "",
    slug: raw.slug || "",
    role: raw.role || "",
    isLeadership: raw.isLeadership ?? false,
    photo: raw.photo || null,
    bio: raw.bio || [],
    socialLinks: raw.socialLinks || [],
    sortOrder: raw.sortOrder,
    status: raw.status ?? 1,
    metaTitle: raw.metaTitle,
    metaDescription: raw.metaDescription,
  };
}

function mapTestimonial(raw: any): Testimonial {
  return {
    id: raw.id || raw._id || "",
    title: raw.title || "",
    companyName: raw.companyName || null,
    designation: raw.designation || null,
    description: raw.description || null,
    videoUrl: raw.videoUrl || null,
    type: raw.type || null,
    status: raw.status ?? 1,
    metaTitle: raw.metaTitle || null,
    metaDescription: raw.metaDescription || null,
    ogImage: raw.ogImage || null,
    isIndex: raw.isIndex ?? true,
    createdAt: raw.createdAt || new Date().toISOString(),
    updatedAt: raw.updatedAt || new Date().toISOString(),
  };
}

function mapBlogPost(raw: any): BlogPost {
  return {
    id: raw.id || raw._id || "",
    title: raw.title || "",
    slug: raw.slug || "",
    excerpt: raw.excerpt,
    content: raw.content,
    publishedAt: raw.publishedAt,
    authorName: raw.authorName,
    authorLink: raw.authorLink,
    status: raw.status || "draft",
    featuredImage: raw.featuredImage || null,
    categories: raw.categories || [],
    tags: raw.tags || [],
    metaTitle: raw.metaTitle || null,
    metaDescription: raw.metaDescription || null,
    ogImage: raw.ogImage || null,
  };
}

function mapSuccessStory(raw: any): SuccessStory {
  return {
    id: raw.id || raw._id || "",
    name: raw.name || "",
    slug: raw.slug || "",
    content: raw.content,
    sortDescription: raw.sortDescription || null,
    client: raw.client || null,
    industry: raw.industry || null,
    status: raw.status ?? 1,
    metaTitle: raw.metaTitle || null,
    metaDescription: raw.metaDescription || null,
    ogImage: raw.ogImage || null,
    isIndex: raw.isIndex ?? true,
    featuredImage: raw.media?.fileUrl || null,
    media: raw.media || null,
    createdAt: raw.createdAt || new Date().toISOString(),
    updatedAt: raw.updatedAt || new Date().toISOString(),
  };
}

function mapSocial(raw: any): Social {
  return {
    id: raw.id || raw._id || "",
    socialKey: raw.socialKey || "",
    socialValue: raw.socialValue || "",
    status: raw.status ? "active" : "inactive",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function mapMenuItems(items: any[]): Menu[] {
  return items
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
    .map((item, idx) => {
      let link = "#";
      if (item.linkType === "page") {
        const slug = item.pageSlug || "";
        link = slug === "/" || slug === "" ? "/" : `/${slug}`;
      } else if (item.linkType === "blog") {
        link = `/blog/${item.blogSlug || ""}`;
      } else {
        link = item.externalLink || "#";
      }
      return {
        id: `menu-${idx}`,
        menuName: item.menuName || "",
        link,
        parentPageId: null,
        sortOrder: item.sortOrder ?? idx,
        status: item.status === 1 ? "active" : "inactive",
        isClickable: item.isClickable !== false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        parentPage: null,
        segment: null,
        children: Array.isArray(item.children) ? mapMenuItems(item.children) : [],
      };
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// Settings & Social
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchSettings(): Promise<Setting[]> {
  if (!isSanityConfigured()) return mockSettings;
  try {
    const raw = await sanityFetch(SITE_SETTINGS_QUERY);
    return mapSiteSettingsToSettings(raw);
  } catch (err) {
    console.error("fetchSettings failed, falling back to mock:", err);
    return mockSettings;
  }
}

export async function fetchSocial(): Promise<Social[]> {
  if (!isSanityConfigured()) return mockSocials;
  try {
    const raw = await sanityFetch(ALL_SOCIALS_QUERY);
    return Array.isArray(raw) ? raw.map(mapSocial) : [];
  } catch (err) {
    console.error("fetchSocial failed, falling back to mock:", err);
    return mockSocials;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchMenuFront(): Promise<MenusResponse> {
  if (!isSanityConfigured()) return mockHeaderMenu;
  try {
    const raw = await sanityFetch(NAVIGATION_MENU_QUERY, { menuTypeName: "Header" });
    if (!raw || !Array.isArray(raw.items)) return mockHeaderMenu;
    return { success: true, status: 200, message: "Menu fetched", data: mapMenuItems(raw.items) };
  } catch (err) {
    console.error("fetchMenuFront failed, falling back to mock:", err);
    return mockHeaderMenu;
  }
}

export async function fetchMenuByName(menuTypeName: string): Promise<MenusResponse> {
  if (!isSanityConfigured()) {
    return menuTypeName.toLowerCase().includes("footer") ? mockFooterMenu : mockHeaderMenu;
  }
  try {
    const raw = await sanityFetch(NAVIGATION_MENU_QUERY, { menuTypeName });
    if (!raw || !Array.isArray(raw.items)) return { success: true, status: 200, message: "No menu", data: [] };
    return { success: true, status: 200, message: "Menu fetched", data: mapMenuItems(raw.items) };
  } catch (err) {
    console.error("fetchMenuByName failed, falling back to mock:", err);
    return menuTypeName.toLowerCase().includes("footer") ? mockFooterMenu : mockHeaderMenu;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Pages
// ─────────────────────────────────────────────────────────────────────────────

// All non-home "page" documents, keyed by slug — used as the mock fallback
// for both fetchPageBySlug() and fetchPageSections() (non-home page types).
const mockPagesBySlug: Record<string, PageResponse> = {
  ...mockServiceDetailPages,
  ...mockIndustryDetailPages,
  ...mockLegalAndSimplePages,
};

export async function fetchPageSections(pageType: string): Promise<PageResponse> {
  if (!isSanityConfigured()) {
    if (pageType.toLowerCase() === "home") return mockHomePage;
    const match = Object.values(mockPagesBySlug).find(
      (p) => p.pageType.toLowerCase() === pageType.toLowerCase(),
    );
    if (match) return match;
    throw new Error(`No mock page found for type "${pageType}"`);
  }
  try {
    const raw = await sanityFetch(PAGE_BY_TYPE_QUERY, { pageTypeName: pageType });
    const page = mapPageData(raw);
    if (!page) throw new Error(`No published page found for type "${pageType}"`);
    return page;
  } catch (err) {
    console.error(`fetchPageSections("${pageType}") failed, falling back to mock:`, err);
    if (pageType.toLowerCase() === "home") return mockHomePage;
    throw err;
  }
}

export async function fetchPageBySlug(slug: string): Promise<PageBySlugResponse> {
  const normalizedSlug = slug.replace(/^\/+/, "");

  if (!isSanityConfigured()) {
    const page =
      mockPagesBySlug[normalizedSlug] ||
      (normalizedSlug === "" || normalizedSlug === "/" ? mockHomePage : undefined);
    if (!page) {
      return { success: false, status: 404, message: "Page not found", data: null };
    }
    return { success: true, status: 200, message: "Page fetched", data: page };
  }

  try {
    const raw = await sanityFetch(PAGE_BY_SLUG_QUERY, { slug: normalizedSlug });
    const data = mapPageData(raw);
    if (!data) return { success: false, status: 404, message: "Page not found", data: null };
    return { success: true, status: 200, message: "Page fetched", data };
  } catch (err) {
    console.error(`fetchPageBySlug("${slug}") failed:`, err);
    return { success: false, status: 404, message: "Page not found", data: null };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchTeamMembers(): Promise<TeamMembersResponse> {
  if (!isSanityConfigured()) {
    return { success: true, status: 200, message: "Team members fetched", data: mockTeamMembers };
  }
  try {
    const raw: any[] = await sanityFetch(ALL_TEAM_MEMBERS_QUERY);
    return {
      success: true,
      status: 200,
      message: "Team members fetched",
      data: Array.isArray(raw) ? raw.map(mapTeamMember) : [],
    };
  } catch (err) {
    console.error("fetchTeamMembers failed, falling back to mock:", err);
    return { success: true, status: 200, message: "Team members fetched", data: mockTeamMembers };
  }
}

export async function fetchTeamMember(slug: string): Promise<TeamMemberResponse> {
  if (!isSanityConfigured()) {
    const member = mockTeamMembers.find((m) => m.slug === slug) || null;
    return member
      ? { success: true, status: 200, message: "Team member fetched", data: member }
      : { success: false, status: 404, message: "Team member not found", data: null };
  }
  try {
    const raw = await sanityFetch(TEAM_MEMBER_BY_SLUG_QUERY, { slug });
    if (!raw) return { success: false, status: 404, message: "Team member not found", data: null };
    return { success: true, status: 200, message: "Team member fetched", data: mapTeamMember(raw) };
  } catch (err) {
    console.error(`fetchTeamMember("${slug}") failed:`, err);
    return { success: false, status: 404, message: "Team member not found", data: null };
  }
}

// Convenience: the Team hub page ("team" slug) is itself a `page` document,
// but its teamGrid sections reference live members. In mock mode we already
// baked resolved members into mockTeamHubPage's sections (see mockData.ts).
export async function fetchTeamHubPage(): Promise<PageResponse> {
  if (!isSanityConfigured()) return mockTeamHubPage;
  const res = await fetchPageBySlug("team");
  return res.data || mockTeamHubPage;
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchTestimonials(): Promise<TestimonialsResponse> {
  if (!isSanityConfigured()) {
    return { success: true, status: 200, message: "Testimonials fetched", data: mockTestimonials };
  }
  try {
    const raw: any[] = await sanityFetch(ALL_TESTIMONIALS_QUERY);
    return {
      success: true,
      status: 200,
      message: "Testimonials fetched",
      data: Array.isArray(raw) ? raw.map(mapTestimonial) : [],
    };
  } catch (err) {
    console.error("fetchTestimonials failed, falling back to mock:", err);
    return { success: true, status: 200, message: "Testimonials fetched", data: mockTestimonials };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Blog
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchBlogPosts(): Promise<BlogListResponse> {
  if (!isSanityConfigured()) {
    return { success: true, status: 200, message: "Blog posts fetched", data: mockBlogPosts };
  }
  try {
    const raw: any[] = await sanityFetch(ALL_PUBLISHED_BLOGS_QUERY);
    return {
      success: true,
      status: 200,
      message: "Blog posts fetched",
      data: Array.isArray(raw) ? raw.map(mapBlogPost) : [],
    };
  } catch (err) {
    console.error("fetchBlogPosts failed, falling back to mock:", err);
    return { success: true, status: 200, message: "Blog posts fetched", data: mockBlogPosts };
  }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogResponse> {
  if (!isSanityConfigured()) {
    const post = mockBlogPosts.find((p) => p.slug === slug) || null;
    return post
      ? { success: true, status: 200, message: "Blog post fetched", data: post }
      : { success: false, status: 404, message: "Blog post not found", data: null };
  }
  try {
    const raw = await sanityFetch(BLOG_BY_SLUG_QUERY, { slug });
    if (!raw) return { success: false, status: 404, message: "Blog post not found", data: null };
    return { success: true, status: 200, message: "Blog post fetched", data: mapBlogPost(raw) };
  } catch (err) {
    console.error(`fetchBlogBySlug("${slug}") failed:`, err);
    return { success: false, status: 404, message: "Blog post not found", data: null };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Case Studies (successStory documents)
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchCaseStudies(): Promise<SuccessStoriesResponse> {
  if (!isSanityConfigured()) {
    return { success: true, status: 200, message: "Case studies fetched", data: mockSuccessStories };
  }
  try {
    const raw: any[] = await sanityFetch(ALL_SUCCESS_STORIES_QUERY);
    return {
      success: true,
      status: 200,
      message: "Case studies fetched",
      data: Array.isArray(raw) ? raw.map(mapSuccessStory) : [],
    };
  } catch (err) {
    console.error("fetchCaseStudies failed, falling back to mock:", err);
    return { success: true, status: 200, message: "Case studies fetched", data: mockSuccessStories };
  }
}

export async function fetchCaseStudyBySlug(slug: string): Promise<SuccessStoryResponse | null> {
  if (!isSanityConfigured()) {
    const story = mockSuccessStories.find((s) => s.slug === slug);
    return story ? { success: true, status: 200, message: "Case study fetched", data: story } : null;
  }
  try {
    const raw = await sanityFetch(SUCCESS_STORY_BY_SLUG_QUERY, { slug });
    if (!raw) return null;
    return { success: true, status: 200, message: "Case study fetched", data: mapSuccessStory(raw) };
  } catch (err) {
    console.error(`fetchCaseStudyBySlug("${slug}") failed:`, err);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Sitemap
// ─────────────────────────────────────────────────────────────────────────────

export async function fetchPagesSitemap(): Promise<{
  pages: Array<{ slug: string; updatedAt: string; changefreq?: string; priority?: string }>;
}> {
  if (!isSanityConfigured()) {
    const slugs = [
      "",
      "services",
      ...Object.keys(mockServiceDetailPages),
      "industries",
      ...Object.keys(mockIndustryDetailPages),
      "team",
      "about",
      "why-us",
      "client-support",
      "faq",
      "careers",
      "privacy-policy",
      "terms-conditions",
      "blog",
      "case-studies",
    ];
    return {
      pages: slugs.map((slug) => ({
        slug,
        updatedAt: new Date().toISOString(),
        changefreq: "weekly",
        priority: slug === "" ? "1.0" : "0.7",
      })),
    };
  }
  try {
    const raw: any[] = await sanityFetch(PAGES_SITEMAP_QUERY);
    const pages = Array.isArray(raw)
      ? raw
          .filter((p) => p.slug)
          .map((p) => ({ slug: p.slug as string, updatedAt: p.updatedAt as string, changefreq: "weekly", priority: "0.7" }))
      : [];
    return { pages };
  } catch (err) {
    console.error("fetchPagesSitemap failed:", err);
    return { pages: [] };
  }
}
