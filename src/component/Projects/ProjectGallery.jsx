import { useState } from "react";
import { ChevronLeft, ChevronRight, FolderGit2 } from "lucide-react";

export default function ProjectGallery({ images = [], title }) {
  const [current, setCurrent] = useState(0);

  const hasImages = images.length > 0;
  const multiple = images.length > 1;

  const prev = () =>
    setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="mb-5">
      <div className=" relative aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
        {hasImages ? (
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <FolderGit2 size={48} className="text-cyan-400/40" />
        )}

        {multiple && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/70 text-white border border-white/10 hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <ChevronLeft size={23} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-900/70 text-white border border-white/10 hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <ChevronRight size={23} />
            </button>
           
          </>
        )}
      </div>

      {multiple && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-20 aspect-video rounded-md overflow-hidden border transition-all cursor-pointer ${
                i === current
                  ? "border-cyan-400/60 ring-1 ring-cyan-400/40"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
