// All GROQ queries for Aerievo's Sanity CMS.
// Field names here MUST match aerievo-backend/schemaTypes exactly.

const imageProjection = `{
  "id": asset->_id,
  "fileUrl": asset->url,
  "altText": coalesce(altText, alt),
  "caption": caption
}`;

const ctaProjection = `{
  label,
  href,
  link
}`;

// Projects a page.sections[] entry (any of the 14 section object types) into a
// flat shape compatible with our PageSection["content"] ambient type.
const sectionDataProjection = `{
  hideSection,
  title,
  subtitle,
  description,
  "image": image ${imageProjection},
  imagePosition,
  variant,
  "primaryCta": primaryCta ${ctaProjection},
  "secondaryCta": secondaryCta ${ctaProjection},
  columns[] {
    title,
    content
  },
  "columnsCount": columns,
  cards[] {
    icon,
    title,
    description,
    link
  },
  items[] {
    icon,
    title,
    description,
    link,
    linkLabel,
    "pageSlug": page->slug.current,
    question,
    answer
  },
  points,
  categories[] {
    title,
    items
  },
  sectionTitle,
  lists[] {
    title,
    items[] {
      icon,
      title,
      description
    }
  },
  members[] -> {
    "name": name,
    "slug": slug.current,
    role,
    isLeadership,
    "photo": photo ${imageProjection}
  },
  testimonials[] -> {
    "id": _id,
    title,
    companyName,
    designation,
    description,
    videoUrl,
    type,
    status
  },
  logos[] {
    "logo": logo ${imageProjection},
    name
  },
  videoUrl,
  benefits[] {
    icon,
    title,
    description,
    link
  },
  form-> {
    "_id": _id,
    name,
    "slug": slug.current,
    description,
    notificationEmail,
    isActive,
    fields[] {
      "id": _key,
      name,
      label,
      fieldType,
      isRequired,
      placeholder,
      options
    }
  },
  locations[] {
    label,
    address,
    phone,
    directionsUrl
  }
}`;

// ── Site Settings ─────────────────────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = `
*[_type == "siteSettings"][0] {
  contactPhone,
  contactEmail,
  address,
  defaultMetaTitle,
  defaultMetaDescription,
  googleAnalyticsId,
  "logo": logo { "id": asset->_id, "fileUrl": asset->url },
  "favicon": favicon { "id": asset->_id, "fileUrl": asset->url },
  socialLinks[] {
    platform,
    url,
    status
  }
}
`;

// ── Navigation Menu ───────────────────────────────────────────────────────────
export const NAVIGATION_MENU_QUERY = `
*[_type == "navigationMenu" && menuType->name == $menuTypeName][0] {
  _id,
  menuType -> { name },
  items[] {
    menuName,
    title,
    isClickable,
    linkType,
    sortOrder,
    status,
    "pageSlug": page->slug.current,
    "blogSlug": blog->slug.current,
    externalLink,
    children[] {
      menuName,
      title,
      isClickable,
      linkType,
      sortOrder,
      status,
      "pageSlug": page->slug.current,
      "blogSlug": blog->slug.current,
      externalLink
    }
  }
}
`;

// ── Pages ─────────────────────────────────────────────────────────────────────
export const PAGE_BY_SLUG_QUERY = `
*[_type == "page" && slug.current == $slug && status == "published"][0] {
  "slug": slug.current,
  title,
  "pageType": pageType->name,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage ${imageProjection},
  "schemaMarkup": seo.schemaMarkup,
  isIndex,
  publishedAt,
  sections[hideSection != true] {
    "id": _key,
    "sectionType": _type,
    "sectionData": @ ${sectionDataProjection}
  }
}
`;

export const PAGE_BY_TYPE_QUERY = `
*[_type == "page" && pageType->name == $pageTypeName && status == "published"][0] {
  "slug": slug.current,
  title,
  "pageType": pageType->name,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage ${imageProjection},
  "schemaMarkup": seo.schemaMarkup,
  isIndex,
  publishedAt,
  sections[hideSection != true] {
    "id": _key,
    "sectionType": _type,
    "sectionData": @ ${sectionDataProjection}
  }
}
`;

export const ALL_PAGE_SLUGS_QUERY = `
*[_type == "page" && status == "published"] { "slug": slug.current }
`;

export const PAGES_SITEMAP_QUERY = `
*[_type == "page" && status == "published" && isIndex != false] | order(_updatedAt desc) {
  "slug": slug.current,
  "updatedAt": _updatedAt
}
`;

// ── Team Members ──────────────────────────────────────────────────────────────
export const ALL_TEAM_MEMBERS_QUERY = `
*[_type == "teamMember" && status == 1] | order(sortOrder asc, name asc) {
  "id": _id,
  name,
  "slug": slug.current,
  role,
  isLeadership,
  "photo": photo ${imageProjection},
  sortOrder,
  status
}
`;

export const TEAM_MEMBER_BY_SLUG_QUERY = `
*[_type == "teamMember" && slug.current == $slug && status == 1][0] {
  "id": _id,
  name,
  "slug": slug.current,
  role,
  isLeadership,
  "photo": photo ${imageProjection},
  bio,
  socialLinks[] { platform, url },
  sortOrder,
  status,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription
}
`;

export const ALL_TEAM_MEMBER_SLUGS_QUERY = `
*[_type == "teamMember" && status == 1] { "slug": slug.current }
`;

// ── Testimonials ──────────────────────────────────────────────────────────────
export const ALL_TESTIMONIALS_QUERY = `
*[_type == "testimonial" && status == 1] | order(_createdAt desc) {
  "id": _id,
  title,
  companyName,
  designation,
  description,
  videoUrl,
  type,
  status,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage.asset->url,
  isIndex,
  "createdAt": _createdAt,
  "updatedAt": _updatedAt
}
`;

// ── Blog ──────────────────────────────────────────────────────────────────────
export const ALL_PUBLISHED_BLOGS_QUERY = `
*[_type == "blog" && status == "published"] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  authorName,
  status,
  "featuredImage": featuredImage ${imageProjection},
  categories[] -> { "id": _id, name, "slug": slug.current },
  tags[] -> { "id": _id, name, "slug": slug.current }
}
`;

export const BLOG_BY_SLUG_QUERY = `
*[_type == "blog" && slug.current == $slug && status == "published"][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  publishedAt,
  authorName,
  authorLink,
  "featuredImage": featuredImage ${imageProjection},
  categories[] -> { "id": _id, name, "slug": slug.current },
  tags[] -> { "id": _id, name, "slug": slug.current },
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage.asset->url
}
`;

export const ALL_BLOG_SLUGS_QUERY = `
*[_type == "blog" && status == "published"] { "slug": slug.current }
`;

// ── Success Stories / Case Studies ────────────────────────────────────────────
export const ALL_SUCCESS_STORIES_QUERY = `
*[_type == "successStory" && status == 1] | order(_createdAt desc) {
  "id": _id,
  name,
  "slug": slug.current,
  "sortDescription": shortDescription,
  client,
  industry,
  status,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage.asset->url,
  isIndex,
  "media": featuredImage ${imageProjection},
  "createdAt": _createdAt,
  "updatedAt": _updatedAt
}
`;

export const SUCCESS_STORY_BY_SLUG_QUERY = `
*[_type == "successStory" && slug.current == $slug && status == 1][0] {
  "id": _id,
  name,
  "slug": slug.current,
  "sortDescription": shortDescription,
  client,
  industry,
  content,
  status,
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "ogImage": seo.ogImage.asset->url,
  isIndex,
  "media": featuredImage ${imageProjection},
  "createdAt": _createdAt,
  "updatedAt": _updatedAt
}
`;

export const ALL_SUCCESS_STORY_SLUGS_QUERY = `
*[_type == "successStory" && status == 1] { "slug": slug.current }
`;

// ── Social ─────────────────────────────────────────────────────────────────────
export const ALL_SOCIALS_QUERY = `
*[_type == "social" && status == true] {
  "id": _id,
  socialKey,
  socialValue,
  status
}
`;
