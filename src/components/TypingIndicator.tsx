"use client";

import LoadingDots from "./LoadingDots";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl bg-zinc-900 px-4 py-3 text-white shadow-lg">
        <LoadingDots />
      </div>
    </div>
  );
}