
import { LucideIcon } from "lucide-react";


type StatCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-400">{title}</h2>

        <Icon className="w-6 h-6 text-cyan-400" />
      </div>

      <h1 className="text-4xl font-bold mt-5 text-white">
        {value}
      </h1>
    </div>
  );
}