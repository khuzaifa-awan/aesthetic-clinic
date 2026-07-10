// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }


import type { ClassValue } from "clsx";

/**
 * Lightweight className merger. Returns space-joined truthy class values.
 * No external dependency required for the simple cases used in this project.
 */
export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}

/**
 * Builds a WhatsApp deep-link URL with an optional pre-filled message.
 */
export function buildWhatsAppUrl(phoneNumber: string, message?: string): string {
  const base = `https://wa.me/${phoneNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats an Unsplash photo URL with width, height, and crop parameters.
 */
export function unsplashUrl(
  photoId: string,
  width: number,
  height: number,
  fit: "crop" | "fill" = "crop"
): string {
  return `${photoId}?w=${width}&h=${height}&fit=${fit}&auto=format&q=80`;
}
