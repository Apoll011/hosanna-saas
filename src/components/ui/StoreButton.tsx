import logo from "@/assets/playstore.svg";
import React from "react";

interface PlayStoreButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({
  href = "#",
  onClick,
  className = "",
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3.5 rounded-2xl bg-white px-5 py-3 text-slate-900 
        shadow-lg shadow-slate-200/50 ring-1 ring-slate-200 transition-all duration-300 ease-out 
        hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/60 hover:ring-slate-300/80 
        active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      {/* Soft Glow effect on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-r from-emerald-500/10 via-sky-500/10 to-amber-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Logo Container */}
      <div className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img src={logo} alt="Google Play Store Logo" width="32" height="auto" />
      </div>

      {/* Label Text */}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 transition-colors group-hover:text-slate-400">
          Get it on
        </span>
        <span className="-mt-0.5 text-base font-bold leading-tight tracking-tight text-black">
          Google Play
        </span>
      </div>
    </a>
  );
};

export default PlayStoreButton;
