"use client";

import ReactMarkdown from "react-markdown";
import { ChatMessage as Message } from "@/lib/types";
import { Bot, User } from "lucide-react";

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md whitespace-pre-wrap ${
          isUser
            ? "rounded-br-sm bg-red-600 text-white"
            : "rounded-bl-sm border border-zinc-800 bg-zinc-900 text-gray-100"
        }`}
      >
        <ReactMarkdown>
        {message.content}
        </ReactMarkdown>
      </div>

      {isUser && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white">
          <User size={18} />
        </div>
      )}
    </div>
  );
}