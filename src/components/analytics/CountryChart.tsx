"use client";

type Country = {
  country: string;
  visitors: number;
};

export default function CountryChart({
  data,
}: {
  data: Country[];
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mt-8">
      <h2 className="text-white text-xl font-bold mb-5">
        🌍 Visitors by Country
      </h2>

      <div className="space-y-4">
        {data?.map((item) => (
          <div
            key={item.country}
            className="flex justify-between border-b border-slate-700 pb-2"
          >
            <span className="text-white">
              {item.country}
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