import dashboardImg from "@/assets/main_mockup.webp";
import dashboardImgSm from "@/assets/main_mockup-960.webp";

/** Hero LCP image — keep eager, high fetch priority, modern formats. */
export default function HeroDashboardMockup({ alt }: { alt: string }) {
  return (
    <img
      src={dashboardImg}
      srcSet={`${dashboardImgSm} 960w, ${dashboardImg} 1400w`}
      sizes="(max-width: 1024px) 100vw, 1152px"
      alt={alt}
      width={1400}
      height={972}
      decoding="async"
      fetchPriority="high"
      className="w-full rounded-2xl"
    />
  );
}
