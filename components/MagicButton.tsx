"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg focus:outline-none`}
    >
      {/* Glowing rotating border — ORIGINAL UI */}
      <span
        className="absolute inset-[-150%] animate-spin
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      ></span>

      {/* Inner Button */}
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg
        bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2
        relative ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
