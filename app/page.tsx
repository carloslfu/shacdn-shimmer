"use client";

import { Shimmer } from "@/registry/shimmer";
import "@/registry/shimmer.css";

export default function ShimmerPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-xl flex items-center gap-2">
        <Shimmer
          asChild
          shimmerDuration={2}
          className="[--shimmer-base:theme(colors.gray.700)] [--shimmer-highlight:theme(colors.gray.300)]"
        >
          <span>Shimmer Effect! LFG!!</span>
        </Shimmer>
        🚀
      </div>

      {/* faster shimmer */}
      <div className="text-lg flex items-center gap-2">
        <Shimmer
          asChild
          shimmerDuration={0.65}
          className="[--shimmer-base:theme(colors.gray.700)] [--shimmer-highlight:theme(colors.gray.300)]"
        >
          <span>Faster Shimmer Effect!</span>
        </Shimmer>
        ⚡️
      </div>

      {/* spacer */}
      <div className="h-1" />

      <Shimmer
        asChild
        shimmerDuration={0.8}
        className="text-xl [--shimmer-base:theme(colors.teal.800)] [--shimmer-highlight:theme(colors.teal.300)]"
      >
        <span>Thinking deeply...</span>
      </Shimmer>
    </div>
  );
}
