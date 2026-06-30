/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link2 } from "lucide-react";

interface ImageOverlayProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  imgClassName?: string;
  onViewImageDetail: (url: string, title: string) => void;
}

export default function ImageOverlay({
  src,
  alt,
  title,
  className = "",
  imgClassName = "w-full h-full object-cover",
  onViewImageDetail,
}: ImageOverlayProps) {
  return (
    <div
      id={`image-overlay-container-${title.replace(/\s+/g, "-").toLowerCase()}`}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* Real HTML Image */}
      <img
        src={src}
        alt={alt}
        className={`${imgClassName} transition-transform duration-500 group-hover:scale-105`}
        referrerPolicy="no-referrer"
        loading="lazy"
      />

      {/* Elegant Hover Overlay */}
      <div
        id="image-hover-overlay"
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="flex items-center justify-between">
          <p className="font-sans text-xs font-semibold text-white drop-shadow-md truncate max-w-[70%]">
            {title}
          </p>
          <button
            id="view-direct-link-button"
            onClick={(e) => {
              e.stopPropagation();
              onViewImageDetail(src, title);
            }}
            className="flex items-center space-x-1.5 rounded-full bg-white/90 px-3 py-1.5 font-sans text-2xs font-medium text-stone-900 shadow-md backdrop-blur-xs hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            <Link2 className="h-3.5 w-3.5 text-emerald-800" />
            <span>Link Direto</span>
          </button>
        </div>
      </div>
    </div>
  );
}
