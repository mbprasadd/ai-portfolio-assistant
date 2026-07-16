"use client";

type Visitor = {
  visitor_id: string;
  country: string;
  city: string;
  browser: string;
  os: string;
  device: string;
  current_page: string;
  total_visits: number;
  last_visit: string;
};

export default function RecentVisitors({
  data,
}: {
  data: Visitor[];
}) {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl sm:p-6">
      <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
        Recent Visitors
      </h2>

      {/* ================= MOBILE ================= */}
      <div className="space-y-4 lg:hidden">
        {data?.map((visitor) => (
          <div
            key={visitor.visitor_id}
            className="rounded-xl border border-white/10 bg-slate-800/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-semibold text-white">
                {visitor.country || "-"}
              </span>

              <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-400">
                {visitor.total_visits} Visits
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-400">City</p>
                <p className="text-white">{visitor.city || "-"}</p>
              </div>

              <div>
                <p className="text-slate-400">Device</p>
                <p className="text-white">{visitor.device}</p>
              </div>

              <div>
                <p className="text-slate-400">Browser</p>
                <p className="text-white">{visitor.browser}</p>
              </div>

              <div>
                <p className="text-slate-400">OS</p>
                <p className="text-white">{visitor.os}</p>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Page</p>
              <p className="truncate text-white">
                {visitor.current_page}
              </p>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              {new Date(visitor.last_visit).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full text-left text-sm text-white">
          <thead className="border-b border-slate-700 text-slate-300">
            <tr>
              <th className="pb-4">Time</th>
              <th className="pb-4">Country</th>
              <th className="pb-4">City</th>
              <th className="pb-4">Device</th>
              <th className="pb-4">Browser</th>
              <th className="pb-4">OS</th>
              <th className="pb-4">Page</th>
              <th className="pb-4 text-center">Visits</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((visitor) => (
              <tr
                key={visitor.visitor_id}
                className="border-b border-slate-800 transition hover:bg-slate-800/60"
              >
                <td className="py-4">
                  {new Date(visitor.last_visit).toLocaleString()}
                </td>

                <td>{visitor.country || "-"}</td>

                <td>{visitor.city || "-"}</td>

                <td>{visitor.device}</td>

                <td>{visitor.browser}</td>

                <td>{visitor.os}</td>

                <td className="max-w-[220px] truncate">
                  {visitor.current_page}
                </td>

                <td className="text-center font-semibold text-red-400">
                  {visitor.total_visits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}