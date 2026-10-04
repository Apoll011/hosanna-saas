import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown, X } from "lucide-react";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  caption?: string;
}

export interface InteractiveFolderGalleryProps {
  photos: GalleryPhoto[];
  title?: string;
  description?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Shared lightbox                                                   */
/* ------------------------------------------------------------------ */
function PhotoLightbox({
  photo,
  onClose,
}: {
  photo: GalleryPhoto | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-primary/90 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.div
            key="lightbox-image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative max-h-[85vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photo.image}
              alt={photo.caption || "Hosanna screenshot"}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
            {photo.caption && (
              <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-linear-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
                <span className="text-[11px] font-medium uppercase tracking-widest text-white/90">
                  {photo.caption}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function InteractiveFolderGallery({
  photos,
  title,
  description,
  className,
}: InteractiveFolderGalleryProps) {
  const [index, setIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const activePhoto = photos[index];

  return (
    <div className={`w-full py-8 md:py-16 flex flex-col items-center justify-center bg-transparent ${className || ""}`}>
      {/* Heading & Description */}
      <div className="text-center mb-10 max-w-lg mx-auto px-4">
        {title && (
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3 font-medium tracking-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Main product screenshot */}
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-[800px] max-w-full aspect-[320/510] relative rounded-2xl overflow-hidden bg-muted/20 border border-border/50"
          >
            <img
              src={activePhoto.image}
              alt={activePhoto.caption || "Hosanna Screenshot"}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`caption-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-[11px] font-medium uppercase tracking-widest text-muted-foreground text-center h-4"
          >
            {activePhoto.caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Thumbnail Filmstrip */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setIndex(i)}
            className={`relative w-[100px] h-[58px] rounded-lg overflow-hidden transition-all duration-300 ${index === i
              ? "border-2 border-primary shadow-sm ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
              : "border border-border/40 opacity-60 hover:opacity-100 hover:border-border"
              }`}
          >
            <img
              src={photo.image}
              alt={photo.caption || `Thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-black/5 transition-opacity ${index === i ? "opacity-0" : "opacity-100"}`} />
          </button>
        ))}
      </div>

      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}

export function MobileFolderGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((current) => (current - 1 + photos.length) % photos.length);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % photos.length);
  };

  const photo = photos[index];

  return (
    <div className="relative w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border">
        <img
          key={photo.id}
          src={photo.image}
          alt={photo.caption || "Hosanna screenshot"}
          className="h-full w-full object-cover"
        />
        {photo.caption && (
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/90">
            {photo.caption}
          </span>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-3 left-3 flex flex-col gap-2">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous screenshot"
          className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg active:scale-95 transition-transform"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next screenshot"
          className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg active:scale-95 transition-transform"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Dot sidebar */}
      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2.5">
        {photos.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
