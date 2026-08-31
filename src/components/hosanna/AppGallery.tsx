import {
  InteractiveFolderGallery,
  MobileFolderGallery,
  type GalleryPhoto,
} from "@/components/ui/interactive-folder-gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

function placeholderShot(label: string) {
  const safeLabel = label.replace(/&/g, "&amp;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800">
    <rect width="100%" height="100%" fill="#1e293b"/>
    <text x="50%" y="50%" fill="#94a3b8" font-family="sans-serif" font-size="28"
      text-anchor="middle" dominant-baseline="middle">${safeLabel}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const galleryPhotos: GalleryPhoto[] = [
  { id: 1, image: placeholderShot("Song Library"), caption: "Song Library" },
  { id: 2, image: placeholderShot("Service Planner"), caption: "Service Planner" },
  { id: 3, image: placeholderShot("Live Chord View"), caption: "Live Chord View" },
  { id: 4, image: placeholderShot("Transpose & Chords"), caption: "Transpose & Chord Toggle" },
];

/**
 * App gallery section. Kept in its own module (and loaded lazily from the
 * landing page) because it pulls in framer-motion.
 */
export default function AppGallery() {
  useReveal();
  const { t } = useI18n();

  return (
    <section className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.gallery.eyebrow")} title={t("landing.gallery.title")}>
          {t("landing.gallery.description")}
        </SectionHeader>

        {/* Desktop: interactive folder */}
        <div className="reveal mt-4 hidden overflow-hidden rounded-3xl border border-border bg-card md:block">
          <InteractiveFolderGallery
            photos={galleryPhotos}
            openHintText={t("landing.gallery.openHint")}
            dragHintText={t("landing.gallery.dragHint")}
          />
        </div>

        {/* Mobile: one-at-a-time carousel */}
        <div className="reveal mt-8 max-w-sm mx-auto md:hidden">
          <MobileFolderGallery photos={galleryPhotos} />
        </div>
      </div>
    </section>
  );
}
