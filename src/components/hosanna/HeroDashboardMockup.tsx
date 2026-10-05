import dashboardImg from "@/assets/main_mockup.png";

export default function HeroDashboardMockup({ alt }: { alt: string }) {
  return (
    <img
      src={dashboardImg}
      alt={alt}
      width={1600}
      height={1104}
      decoding="async"
      className="w-full rounded-2xl"
    />
  );
}
