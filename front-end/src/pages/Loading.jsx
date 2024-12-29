import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/80 to-black/90 bg-opacity-70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-6">
        {/* Main spinning circles with gradient borders */}
        <div className="relative">
          {/* Outer circle */}
          <div
            className="w-24 h-24 rounded-full animate-spin"
            style={{
              background:
                "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #60A5FA, #EC4899)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              border: "8px solid transparent",
            }}
          />

          {/* Middle circle */}
          <div
            className="absolute top-2 left-2 w-20 h-20 rounded-full animate-spin"
            style={{
              background:
                "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #8B5CF6, #60A5FA)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              border: "6px solid transparent",
              animationDirection: "reverse",
              animationDuration: "1s",
            }}
          />

          {/* Inner circle */}
          <div
            className="absolute top-4 left-4 w-16 h-16 rounded-full animate-spin"
            style={{
              background:
                "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #EC4899, #8B5CF6)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              border: "4px solid transparent",
              animationDuration: "0.5s",
            }}
          />
        </div>

        {/* Loading text with gradient */}
        <div className="text-xl font-medium animate-pulse bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Loading...
        </div>

        {/* Decorative dots with gradient */}
        <div className="flex gap-2">
          <div
            className="w-2 h-2 rounded-full animate-bounce bg-gradient-to-r from-blue-400 to-blue-600"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce bg-gradient-to-r from-purple-400 to-purple-600"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full animate-bounce bg-gradient-to-r from-pink-400 to-pink-600"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
