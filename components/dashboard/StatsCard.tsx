import { ArrowDown, ArrowUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  subtext: string;
  positive?: boolean;
}

export default function StatsCard({ title, value, change, subtext, positive }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={`text-sm flex items-center gap-1 ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {positive ? <ArrowUp className="w-4 h-4"/> : <ArrowDown className="w-4 h-4"/>}{change}
        </span>
      </div>
      <p className="py-0.5 px-3 text-sm text-black font-medium border w-fit rounded-full">{subtext}</p>
    </div>
  );
} 