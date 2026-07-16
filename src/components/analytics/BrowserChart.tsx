"use client";

type Browser = {
  browser: string;
  visitors: number;
};

export default function BrowserChart({
  data,
}: {
  data: Browser[];
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-8">
      <h2 className="text-xl text-white font-bold mb-5">
        🌐 Browser Usage
      </h2>

      <div className="space-y-4">
        {data?.map((item) => (
          <div
            key={item.browser}
            className="flex justify-between border-b border-slate-700 pb-2"
          >
            <span className="text-white">
              {item.browser}
            </span>

            <span className="text-cyan-400 font-bold">
              {item.visitors}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}