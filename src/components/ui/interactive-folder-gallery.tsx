import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  caption?: string;
}

export interface InteractiveFolderGalleryProps {
  photos: GalleryPhoto[];
  openHintText?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos,
  openHintText = "Double click to open",
  dragHintText = "Drag any screenshot down to close",
  className,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-32 relative ${className || ""}`}>
      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[1050px] h-[500px] flex justify-center items-center pointer-events-none z-0 scale-75 sm:scale-90 md:scale-100">
          {/* Folder back (tab + body) */}
          <motion.div
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-primary-dark rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-primary-dark rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
          </motion.div>

          {/* Photos */}
          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - (photos.length - 1) / 2;

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -130;
              const openX = offset * 260;
              const openRotate = 0;
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-56 h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 origin-bottom ${
                    isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"
                  }`}
                  animate={
                    !isFolderOpen
                      ? { y: stackY, x: stackX, rotate: stackRotate, scale: stackScale, zIndex: i + 10 }
                      : { y: openY, x: openX, rotate: openRotate, scale: openScale, zIndex: 50 }
                  }
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img
                    src={photo.image}
                    alt={photo.caption || "Hosanna screenshot"}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-3 pb-2.5 pt-6 pointer-events-none">
                      <span className="text-[11px] font-medium uppercase tracking-widest text-white/90">
                        {photo.caption}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Folder front (clickable flap, no label) */}
          <motion.div
            className="absolute bottom-0 w-[340px] h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.4)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onDoubleClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-primary rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </motion.div>
        </div>




        {/* Open hint — visible only while the folder is closed */}
{!isFolderOpen && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute bottom-10 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-widest pointer-events-none shadow-lg"
  >
    {openHintText}
  </motion.div>
)}

{/* Drag hint — visible only once the folder is open */}
{isFolderOpen && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute bottom-10 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-widest pointer-events-none shadow-lg"
  >
    {dragHintText}
  </motion.div>
)}
        {/* Drag hint — visible only once the folder is open */}
        {isFolderOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-10 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-widest pointer-events-none shadow-lg"
          >
            {dragHintText}
          </motion.div>
        )}
      </div>
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
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}