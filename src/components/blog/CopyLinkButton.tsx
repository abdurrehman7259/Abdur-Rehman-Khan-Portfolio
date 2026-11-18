"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="inline-flex items-center gap-1 hover:text-accent"
    >
      <Link2 className="h-3 w-3" aria-hidden="true" /> <span aria-live="polite">{copied ? "Link copied" : "Copy link to this post"}</span>
    </button>
  );
}
