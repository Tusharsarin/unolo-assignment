interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  subtext: string;
  positive?: boolean;
}

export default function StatsCard({ title, value, change, subtext, positive }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        <span className={`text-sm ${positive ? 'text-green-500' : 'text-gray-500'}`}>
          {change}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{subtext}</p>
    </div>
  );
} 