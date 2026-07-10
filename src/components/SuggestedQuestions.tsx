"use client";

import { suggestedQuestions } from "@/data/suggestions";

interface Props {
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 p-3">
      {suggestedQuestions.map((question) => (
        <button
          key={question.id}
          onClick={() => onSelect(question.text)}
          className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-white cursor-pointer"
        >
          {question.text}
        </button>
      ))}
    </div>
  );
}