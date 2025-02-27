import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateFilename(
  filename: string,
  maxLength: number = 15,
): string {
  const parts = filename.split(".");
  if (parts.length < 2) return filename; // If there's no extension, return as is

  const extension = parts.pop(); // Get the extension
  const name = parts.join("."); // Join remaining parts in case of multiple dots

  if (name.length <= maxLength) {
    return `${name}.${extension}`; // No truncation needed
  }

  const truncatedName = name.slice(0, maxLength) + "..."; // Truncate and add "..."
  return `${truncatedName}.${extension}`;
}
