"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: Props) {
  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-3">
      <div className="flex items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
          placeholder="Ask me about Bhanu..."
          disabled={disabled}
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-red-500"
        />

        <button
          onClick={send}
          disabled={disabled}
          className="rounded-xl bg-red-600 p-3 text-white transition hover:bg-red-700 disabled:opacity-50 cursor-pointer"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}