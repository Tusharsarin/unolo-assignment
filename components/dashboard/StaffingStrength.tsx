import { CardHeaderWithTooltip } from "@/components/ui/card-header-with-tooltip";

export default function StaffingStrength() {
  return (
    <div className="h-full flex flex-col">
      <CardHeaderWithTooltip 
        title="Staffing Strength"
        tooltip="Displays the current staffing levels and requirements"
      />
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="flex justify-center items-center h-24">
          <span className="text-4xl font-semibold">0 / 0</span>
        </div>
      </div>
    </div>
  );
} 