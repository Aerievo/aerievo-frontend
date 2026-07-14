import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export function isSanityConfigured(): boolean {
  return !!(projectId && dataset);
}

// The clients are constructed lazily (only once actually used) so that this
// module can be imported freely without a configured Sanity project — the
// app runs entirely on mock data (see mockData.ts / api.ts) until real env
// vars are set.
let _sanityClient: SanityClient | null = null;
let _sanityPreviewClient: SanityClient | null = null;

export const sanityClient: SanityClient = new Proxy({} as SanityClient, {
  get(_target, prop) {
    if (!_sanityClient) {
      _sanityClient = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        perspective: "published",
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (_sanityClient as any)[prop];
  },
});

// Draft-preview client — server-side only, never ship token to browser
export const sanityPreviewClient: SanityClient = new Proxy({} as SanityClient, {
  get(_target, prop) {
    if (!_sanityPreviewClient) {
      _sanityPreviewClient = createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        token: process.env.SANITY_API_READ_TOKEN,
        perspective: "previewDrafts",
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (_sanityPreviewClient as any)[prop];
  },
});

// Build a Sanity CDN image URL from an asset reference or plain URL string.
// Returns the URL as-is if it already starts with http.
export function resolveSanityImageUrl(
  asset: { _ref?: string; url?: string } | string | null | undefined,
): string {
  if (!asset) return "";
  if (typeof asset === "string") {
    if (asset.startsWith("http")) return asset;
    return "";
  }
  if (asset.url) return asset.url;
  return "";
}
