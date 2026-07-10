"use client";

import { Bot, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
          <Bot size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-white">Bhanu AI</h2>
          <p className="text-xs text-green-400">● Online</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="rounded-lg p-2 text-gray-400 transition hover:bg-zinc-800 hover:text-white cursor-pointer"
      >
        <X size={20} />
      </button>
    </div>
  );
}