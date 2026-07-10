"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

import useChat from "@/hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hideTeaser, setHideTeaser] = useState(false);
  const [showText, setShowText] = useState(true);
  const [dismissAnimation, setDismissAnimation] = useState(false);

  const { messages, loading, sendMessage } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dismissAnimation) return;
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [dismissAnimation]); 

  useEffect(() => {
  if (!open) {
    setDismissAnimation(false);
    setShowText(true);
  }
}, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center cursor-pointer"
          onClick={() => {
            setOpen(true);
            setDismissAnimation(true);
          }}
        >
          <div
            className={`fixed bottom-1 right-17 overflow-hidden transition-all duration-500 ${
              showText ? "w-[230] opacity-100 mr-2" : "w-0 opacity-0 mr-0"
            }`}
          >
            <div className="rounded-2xl rounded-tr-none border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-xl whitespace-nowrap">
              <p className="font-semibold text-white text-sm">
                👋 Chat with 
                <span className="text-xs px-2 rounded-full text-[#E4232F] border border-[#E4232F]/30 ml-3">
                    Bhanu AI
                </span>
              </p>
              <p className="text-xs text-gray-400"> Ask about my skills & experience </p>
            </div>
          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition hover:scale-105 cursor-pointer">
            <MessageCircle size={24} />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500] w-[400] flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-black shadow-2xl max-md:bottom-0 max-md:right-0 max-md:h-screen max-md:w-screen max-md:rounded-none" >
          <ChatHeader
            onClose={() => {
              setOpen(false);
              setDismissAnimation(false);
              setShowText(true);
            }}
          />

          {messages.length === 1 && (
            <SuggestedQuestions onSelect={sendMessage} />
          )}

          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
          </div>

          <ChatInput
            onSend={sendMessage}
            disabled={loading}
          />
        </div>
      )}
    </>
  );
}