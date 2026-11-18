import Image from "next/image";
import { ExternalLink } from "lucide-react";

/**
 * Hosts whose images are served through this site's own image service (/_next/image). The server fetches
 * the photo, so the visitor's browser never contacts the photo host and their IP address is not shared.
 * Keep this list in sync with images.remotePatterns in next.config.mjs.
 */
export const IMAGE_HOSTS = ["images.unsplash.com", "firebasestorage.googleapis.com"];

export function isServableImage(src) {
  if (src.startsWith("/") && !src.startsWith("//")) return true;
  try {
    const url = new URL(src);
    return url.protocol === "https:" && IMAGE_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}

function hostOf(src) {
  try {
    return new URL(src).hostname;
  } catch {
    return "another website";
  }
}

/**
 * An image from an allowed host, or, for any other host, a link instead of the image, so nothing loads
 * from a third party without the visitor choosing to open it.
 */
export function BlogImage({ src, alt, fill, sizes = "(max-width: 768px) 100vw, 768px", className, priority }) {
  if (!isServableImage(src)) {
    // Only ever link to plain web addresses: never javascript:, data: or other schemes.
    if (!/^https?:\/\//i.test(src)) return null;
    return (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="not-prose my-4 flex items-center justify-center gap-2 rounded-lg border border-line bg-paper p-6 text-sm text-muted hover:text-accent"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        {alt ? `Image: ${alt}` : "Image"} (opens {hostOf(src)})
      </a>
    );
  }
  if (fill) return <Image src={src} alt={alt} fill sizes={sizes} className={className} priority={priority} />;
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={900}
      sizes={sizes}
      className={className}
      priority={priority}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
