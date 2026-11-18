// Firebase sign-in may use an iframe on the project's auth domain (admin area only).
const firebaseAuthDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  ? `https://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`
  : "";

/**
 * Content-Security-Policy. Visitors' pages only ever talk to this site. The Google endpoints in
 * connect-src are used by the private admin area (Firebase sign-in and Firestore writes).
 * 'unsafe-inline' for scripts is required by Next.js's inline hydration scripts without per-request
 * nonces; external scripts are still blocked, and the app never renders raw HTML (see Markdown.jsx).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com",
  `frame-src https://www.youtube-nocookie.com ${firebaseAuthDomain}`.trim(),
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Never publish browser source maps (this is the default; kept explicit on purpose).
  productionBrowserSourceMaps: false,
  images: {
    // Blog photos are fetched by this site's server and served from our own domain, so visitors'
    // browsers never contact these hosts. Only these hosts are allowed, so the image service cannot be
    // used to proxy arbitrary URLs. Keep in sync with IMAGE_HOSTS in src/components/blog/BlogImage.jsx.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com", pathname: "/**" },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
