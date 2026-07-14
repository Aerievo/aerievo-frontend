import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SettingItem = { key: string; value: string };

export function getSettingValue(
  settings: SettingItem[] | undefined,
  key: string,
  fallback = "",
) {
  return settings?.find((s) => s.key === key)?.value || fallback;
}

export function isValidImageUrl(url?: string) {
  if (!url) return false;
  return (
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    !url.includes(":")
  );
}
