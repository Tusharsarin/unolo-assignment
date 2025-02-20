import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

interface CardHeaderWithTooltipProps {
  title: string;
  tooltip: string;
}

export function CardHeaderWithTooltip({ title, tooltip }: CardHeaderWithTooltipProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <h2 className="text-sm font-semibold flex items-center gap-2">
        {title}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CircleHelp className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h2>
    </div>
  );
} 