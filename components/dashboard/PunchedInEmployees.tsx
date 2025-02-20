import { CardHeaderWithTooltip } from "@/components/ui/card-header-with-tooltip";

export default function PunchedInEmployees() {
  return (
    <div className="h-full flex flex-col">
      <CardHeaderWithTooltip 
        title="Punched In Employees"
        tooltip="Shows the number of employees currently punched in at work"
      />
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="flex justify-center items-center h-24">
          <span className="text-4xl font-semibold">3</span>
        </div>
      </div>
    </div>
  );
} 