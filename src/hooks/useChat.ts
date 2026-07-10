"use client";

import { useState } from "react";
import { ChatMessage } from "@/lib/types";

export default function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "👋 Hi! I'm Bhanu AI. Ask me anything about Bhanu's experience, projects, or skills.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await res.json();

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          data.reply ??
          "Sorry, I couldn't generate a response right now.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "⚠️ Something went wrong while contacting the AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}