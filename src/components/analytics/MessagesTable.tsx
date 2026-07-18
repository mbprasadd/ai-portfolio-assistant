"use client";

import { useState } from "react";

export type ContactMessage = {
  id: string;
  name: string | null;
  email: string | null;
  subject: string;
  message: string;
  created_at: string;
};

type Props = {
  messages: ContactMessage[];
};

export default function MessagesTable({ messages }: Props) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "q1q1q123") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-neutral-900 p-6">
        <h2 className="text-xl font-semibold text-[#E4232F]">
          Recruiter Messages
        </h2>

        <p className="mt-1 text-sm text-white/60">
          Enter the password to view contact messages.
        </p>

        <form onSubmit={handleUnlock} className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-md border border-white/10 bg-black px-3 text-white outline-none focus:border-[#E4232F]"
          />

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="h-11 w-full rounded-md bg-[#E4232F] font-medium text-white transition hover:bg-red-700"
          >
            Unlock Messages
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-white/10 bg-black">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#E4232F]">
                Name
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#E4232F]">
                Email
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#E4232F]">
                Subject
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#E4232F]">
                Message
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#E4232F]">
                Received
              </th>
            </tr>
          </thead>

          <tbody>
            {messages?.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-white/50"
                >
                  No messages found.
                </td>
              </tr>
            ) : (
              messages?.map((message) => (
                <tr
                  key={message.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  <td className="px-5 py-4 text-sm text-white">
                    {message.name || "-"}
                  </td>

                  <td className="px-5 py-4 text-sm text-white/80">
                    {message.email || "-"}
                  </td>

                  <td className="px-5 py-4 font-medium text-white">
                    {message.subject}
                  </td>

                  <td className="px-5 py-4">
                    <p className="line-clamp-2 text-sm text-white/70">
                      {message.message}
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm text-white/50">
                    {new Date(message.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}