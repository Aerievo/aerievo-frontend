const BASE_DOMAIN = process.env.BASE_DOMAIN || "https://aerievo.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BASE_DOMAIN}/sitemap.xml`,
  };
}
