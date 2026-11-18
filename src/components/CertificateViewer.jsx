"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { Award, X } from "lucide-react";

/**
 * View-only certificate preview. The image is a compressed, watermarked copy with no metadata
 * (public/certificates/). There is no download button or link to an original file, and right-click,
 * drag and long-press saving are blocked. (No website can stop screenshots; the watermark covers that.)
 * Uses the native <dialog>: Esc closes it and focus returns to the button.
 */
export function CertificateViewer({ certificate, label = "View certificate" }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  // The image is created only after the first open, then loads straight away (no lazy loading inside the
  // dialog), so visitors never download certificates they do not open.
  const [opened, setOpened] = useState(false);
  const block = (event) => event.preventDefault();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpened(true);
          dialogRef.current?.showModal();
        }}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
      >
        <Award className="h-4 w-4" aria-hidden="true" /> {label}
        <span className="sr-only">: {certificate.name}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="w-[calc(100%-2rem)] max-w-4xl rounded-2xl border border-line bg-surface p-0 text-body shadow-card backdrop:bg-ink/70"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
          <div>
            <h2 id={titleId} className="font-display text-base font-semibold text-ink">
              {certificate.name}
            </h2>
            <p className="mt-0.5 text-sm text-muted">
              {certificate.issuer} · {certificate.date}
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-ink hover:bg-paper"
            aria-label="Close certificate preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div
          className="relative select-none bg-paper p-3 sm:p-5"
          onContextMenu={block}
          onDragStart={block}
        >
          {opened && (
            <Image
              src={certificate.image.src}
              alt={certificate.image.alt}
              width={certificate.image.width}
              height={certificate.image.height}
              sizes="(max-width: 896px) 100vw, 896px"
              loading="eager"
              draggable={false}
              className="pointer-events-none mx-auto h-auto max-h-[72vh] w-auto max-w-full rounded-lg"
            />
          )}
          {/* Transparent cover so the image itself cannot be long-pressed or right-clicked to save. */}
          <div className="absolute inset-0" aria-hidden="true" />
        </div>

        <p className="px-5 py-3 text-xs text-muted">
          {certificate.note ? `${certificate.note} ` : ""}Preview only; the original is available on request.
        </p>
      </dialog>
    </>
  );
}
