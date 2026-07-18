"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const LeaveAMessage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      alert(result.message);


      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
      <div className="border-b border-white/10 px-5 py-3">
        <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#E4232F]">
          Leave a Message
        </h2>

        <div className="mb-4 h-px w-38 bg-gradient-to-r from-[#E4232F] to-transparent" />

        <p className="text-xs text-white/80">
          I'd love to hear about your project or opportunity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 p-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-white/70">
              Name
            </label>

            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="h-10 w-full rounded-md border border-white/10 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#E4232F]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-white/70">
              Email <span className="text-white/40">(Optional)</span>
            </label>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="h-10 w-full rounded-md border border-white/10 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#E4232F]"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-white">
            Subject <span className="text-[#E4232F]">*</span>
          </label>

          <input
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Frontend Developer Opportunity"
            className="h-10 w-full rounded-md border border-white/10 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#E4232F]"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-white">
            Message <span className="text-[#E4232F]">*</span>
          </label>

          <textarea
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi Bhanu, I came across your portfolio..."
            className="w-full resize-none rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#E4232F]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 w-full rounded-md bg-[#E4232F] text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default LeaveAMessage;