// Global ambient types for Aerievo page sections.
// Mirrors the 14 section object types defined in aerievo-backend/schemaTypes/sections.ts

interface MediaAsset {
  id: string;
  fileUrl: string;
  altText?: string;
  title?: string;
  caption?: string;
}

interface CTA {
  label: string;
  href: string;
  link?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface IconTextItem {
  icon?: string;
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface SolutionItem {
  icon?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
  link?: string;
  pageSlug?: string;
}

interface CategoryGroup {
  title?: string;
  items?: string[];
}

interface NarrativeColumn {
  title?: string;
  // Portable Text blocks
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
}

interface FAQItem {
  question?: string;
  answer?: string;
}

interface ContactLocation {
  label?: string;
  address?: string;
  phone?: string;
  directionsUrl?: string;
}

interface IconListGroup {
  title?: string;
  items?: IconTextItem[];
}

interface TeamGridMember {
  name: string;
  slug?: string;
  role?: string;
  photo?: MediaAsset;
  isLeadership?: boolean;
}

interface PageSection {
  id: string;
  sectionType: string;
  sortOrder: number;
  content: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: MediaAsset;
    imagePosition?: "left" | "right";
    columns?: number | NarrativeColumn[];
    primaryCta?: CTA;
    secondaryCta?: CTA;
    cards?: IconTextItem[];
    items?: SolutionItem[] | FAQItem[];
    points?: string[];
    categories?: CategoryGroup[];
    sectionTitle?: string;
    lists?: IconListGroup[];
    variant?: string;
    members?: TeamGridMember[];
    testimonials?: Testimonial[];
    logos?: Array<{ logo?: MediaAsset; image?: string; name?: string }>;
    stories?: Array<{
      title: string;
      slug: string;
      image?: string;
      description?: string;
      stats?: string[];
    }>;
    videoUrl?: string;
    benefits?: IconTextItem[];
    form?: FormData_;
    locations?: ContactLocation[];
    // Portable Text blocks for paragraphEditor sections (matches schema's `content` field)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

interface FormFieldData {
  id: string;
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
  isRequired: boolean;
  placeholder?: string | null;
  options?: string | null;
}

interface FormData_ {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  notificationEmail: string;
  isActive: boolean;
  fields: FormFieldData[];
}

interface PageResponse {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  pageType: string;
  schemaMarkup?: string;
  sections: PageSection[];
}

interface Setting {
  id: string;
  key: string;
  value: string;
}

interface MenusResponse {
  success: boolean;
  status: number;
  message: string;
  data: Menu[];
}

interface Menu {
  id: string;
  menuName: string;
  link: string;
  parentPageId: string | null;
  sortOrder: number;
  status: string;
  isClickable: boolean;
  createdAt: string;
  updatedAt: string;
  parentPage: null;
  segment: null;
  children: Menu[];
}

interface PageBySlugResponse {
  success: boolean;
  status: number;
  message: string;
  data: PageResponse | null;
}

interface Testimonial {
  id: string;
  title: string;
  companyName?: string | null;
  designation?: string | null;
  description: string | null;
  videoUrl: string | null;
  type: string | null;
  status: number;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  isIndex: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TestimonialsResponse {
  success: boolean;
  status: number;
  message: string;
  data: Testimonial[];
}

interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  isLeadership: boolean;
  photo: MediaAsset | null;
  // Portable Text blocks
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio?: any[];
  socialLinks?: Array<{ platform: string; url: string }>;
  sortOrder?: number;
  status: number;
  metaTitle?: string | null;
  metaDescription?: string | null;
}

interface TeamMembersResponse {
  success: boolean;
  status: number;
  message: string;
  data: TeamMember[];
}

interface TeamMemberResponse {
  success: boolean;
  status: number;
  message: string;
  data: TeamMember | null;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[];
  publishedAt?: string;
  authorName?: string;
  authorLink?: string;
  status: string;
  featuredImage?: MediaAsset | null;
  categories?: Array<{ id: string; name: string; slug: string }>;
  tags?: Array<{ id: string; name: string; slug: string }>;
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: string | null;
}

interface BlogListResponse {
  success: boolean;
  status: number;
  message: string;
  data: BlogPost[];
}

interface BlogResponse {
  success: boolean;
  status: number;
  message: string;
  data: BlogPost | null;
}

interface SuccessStory {
  id: string;
  name: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: string | any[];
  sortDescription: string | null;
  client?: string | null;
  industry?: string | null;
  status: number;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  isIndex: boolean;
  featuredImage: string | null;
  media?: {
    id: string;
    altText?: string;
    fileUrl: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

interface SuccessStoriesResponse {
  success: boolean;
  status: number;
  message: string;
  data: SuccessStory[];
}

interface SuccessStoryResponse {
  success: boolean;
  status: number;
  message: string;
  data: SuccessStory;
}

interface Social {
  id: string;
  socialKey: string;
  socialValue: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
