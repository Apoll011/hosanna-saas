import {
  InteractiveFolderGallery,
  MobileFolderGallery,
  type GalleryPhoto,
} from "@/components/ui/interactive-folder-gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import songLibraryImg from "@/assets/song_library.jpeg";
import serviceImg from "@/assets/service.jpeg";
import chordsImg from "@/assets/chords.jpeg";
import transposeImg from "@/assets/transpose.jpeg";

/**
 * App gallery section. Kept in its own module (and loaded lazily from the
 * landing page) because it pulls in framer-motion.
 */
export default function AppGallery() {
  useReveal();
  const { t } = useI18n();

  const galleryPhotos: GalleryPhoto[] = [
    { id: 1, image: songLibraryImg, caption: t("landing.gallery.captions.songLibrary") },
    { id: 2, image: serviceImg, caption: t("landing.gallery.captions.servicePlanner") },
    { id: 3, image: chordsImg, caption: t("landing.gallery.captions.liveChordView") },
    { id: 4, image: transposeImg, caption: t("landing.gallery.captions.transpose") },
  ];

  return (
    <section className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        
        {/* Desktop: Minimal editorial showcase */}
        <div className="reveal mt-4 hidden md:block w-full">
          <InteractiveFolderGallery
            photos={galleryPhotos}
            title={t("landing.gallery.title")}
            description={t("landing.gallery.description")}
          />
        </div>

        {/* Mobile: one-at-a-time carousel */}
        <div className="reveal mt-8 max-w-sm mx-auto md:hidden">
          <SectionHeader eyebrow={t("landing.gallery.eyebrow")} title={t("landing.gallery.title")}>
            {t("landing.gallery.description")}
          </SectionHeader>
          <div className="mt-8">
            <MobileFolderGallery photos={galleryPhotos} />
          </div>
        </div>
      </div>
    </section>
  );
}
