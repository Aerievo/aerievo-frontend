import { NextResponse } from "next/server";
import { fetchPagesSitemap } from "@/lib/api";

const BASE_DOMAIN = process.env.BASE_DOMAIN || "http://localhost:3000";

export async function GET() {
  const { pages } = await fetchPagesSitemap().catch(() => ({ pages: [] }));

  const urls = [
    { loc: `${BASE_DOMAIN}/`, priority: "1.0" },
    ...pages
      .filter((p) => p.slug)
      .map((p) => ({
        loc: `${BASE_DOMAIN}/${p.slug}`,
        priority: p.priority || "0.7",
        lastmod: p.updatedAt,
      })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `
  <url>
    <loc>${u.loc}</loc>
    ${"lastmod" in u && u.lastmod ? `<lastmod>${new Date(u.lastmod as string).toISOString().split("T")[0]}</lastmod>` : ""}
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>
`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
