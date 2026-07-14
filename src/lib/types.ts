// TypeScript types that mirror Sanity document schemas for Aerievo.
// Distinct from the ambient REST-shaped types in types.d.ts, which the
// components/pages actually consume (mapped from these Sanity shapes in api.ts).

// ── Shared ────────────────────────────────────────────────────────────────────

export interface SanityImageRef {
  id: string;
  fileUrl: string;
  altText?: string;
  caption?: string;
}

export interface SanityCTA {
  label: string;
  href: string;
  link?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export interface SanitySEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageRef;
  targetKeywords?: string;
}

// ── Site Settings ─────────────────────────────────────────────────────────────

export interface SanitySocialLink {
  platform: string;
  url: string;
  status: number;
}

export interface SanitySiteSettings {
  contactPhone?: string;
  contactEmail?: string;
  address?: string;
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  googleAnalyticsId?: string;
  logo?: SanityImageRef;
  favicon?: SanityImageRef;
  socialLinks?: SanitySocialLink[];
}

// ── Page ──────────────────────────────────────────────────────────────────────

export interface SanityPageSection {
  id: string;
  sectionType: string;
  sortOrder: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sectionData: Record<string, any>;
}

export interface SanityPage {
  slug: string;
  title: string;
  pageType?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageRef;
  isIndex?: boolean;
  publishedAt?: string;
  sections: SanityPageSection[];
}

// ── Team Member ───────────────────────────────────────────────────────────────

export interface SanityTeamMember {
  _id: string;
  name: string;
  slug: string;
  role: string;
  isLeadership?: boolean;
  photo?: SanityImageRef;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio?: any[];
  socialLinks?: Array<{ platform: string; url: string }>;
  sortOrder?: number;
  status: number;
  metaTitle?: string;
  metaDescription?: string;
}

// ── Success Story / Case Study ────────────────────────────────────────────────

export interface SanitySuccessStory {
  _id: string;
  name: string;
  slug: string;
  sortDescription?: string;
  client?: string;
  industry?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[] | string;
  status: number;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  isIndex?: boolean;
  media?: SanityImageRef;
  createdAt: string;
  updatedAt: string;
}

// ── Testimonial ───────────────────────────────────────────────────────────────

export interface SanityTestimonial {
  _id: string;
  title: string;
  companyName?: string;
  designation?: string;
  description?: string;
  videoUrl?: string;
  type?: string;
  status: number;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  isIndex?: boolean;
  createdAt: string;
  updatedAt: string;
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface SanityBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
  publishedAt?: string;
  authorName?: string;
  authorLink?: string;
  status: string;
  featuredImage?: SanityImageRef;
  categories?: Array<{ _id: string; name: string; slug: string }>;
  tags?: Array<{ _id: string; name: string; slug: string }>;
  seo?: SanitySEO;
}

// ── Navigation ────────────────────────────────────────────────────────────────

export interface SanityMenuItem {
  menuName?: string;
  title?: string;
  isClickable: boolean;
  linkType?: "page" | "blog" | "external";
  pageSlug?: string;
  blogSlug?: string;
  externalLink?: string;
  sortOrder?: number;
  status?: number;
  children?: SanityMenuItem[];
}

export interface SanityNavigationMenu {
  _id: string;
  menuType: { name: string };
  items?: SanityMenuItem[];
}

// ── Form ──────────────────────────────────────────────────────────────────────

export interface SanityFormField {
  name: string;
  label: string;
  fieldType:
    | "TEXT"
    | "EMAIL"
    | "NUMBER"
    | "TEXTAREA"
    | "SELECT"
    | "FILE"
    | "DATE";
  isRequired?: boolean;
  placeholder?: string;
  options?: string;
}

export interface SanityForm {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  notificationEmail: string;
  isActive: boolean;
  fields?: SanityFormField[];
}
