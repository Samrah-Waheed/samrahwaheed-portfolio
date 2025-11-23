"use client";
import React from "react";
import Lottie from "lottie-react"; // installed package
import animationData from "@/public/your-animation.json";

export default function LottiePlayer(props: any) {
  return (
    <div {...props}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}