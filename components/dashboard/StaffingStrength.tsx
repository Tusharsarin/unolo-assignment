import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleHelp } from "lucide-react";
export default function StaffingStrength() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-sm font-semibold flex items-center gap-2">Staffing Strength <CircleHelp className="w-4 h-4" /> </h2>
      </div>
      <div className="flex-1 p-4 flex items-center justify-center">
            <div className="flex justify-center items-center h-24">
              <span className="text-4xl font-semibold">0 / 0</span>
            </div>
      </div>
    </div>
  );
} 