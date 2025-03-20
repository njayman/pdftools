import React from "react";
import { Card, CardContent, CardFooter } from "@app/components/ui/card";
import { truncateFilename } from "@app/lib/utils";
import { FileText, X } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@app/components/ui/tooltip";

const FileCard: React.FC<{
  file: File;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onRemoveFile: () => void;
}> = ({ file, onDragStart, onRemoveFile }) => {
  return (
    <TooltipProvider>
      <Card
        className="cursor-grab w-[160px] relative group p-0"
        draggable
        onDragStart={onDragStart}
      >
        <button
          onClick={onRemoveFile}
          className="cursor-pointer absolute right-1 top-1 rounded-full bg-white/90 p-1 text-gray-700 shadow-sm hover:bg-white hover:text-gray-900 transition-colors z-10"
          aria-label="Remove file"
        >
          <X className="h-3 w-3" />
        </button>
        <CardContent className="flex items-center justify-center p-4 h-24 bg-gray-50">
          <FileText className="h-12 w-12 text-red-500" />
        </CardContent>
        <Tooltip>
          <TooltipTrigger asChild>
            <CardFooter className="flex items-center justify-center p-2 bg-white">
              <span className="text-xs font-medium truncate max-w-full">
                {truncateFilename(file.name, 15)}
              </span>
            </CardFooter>
          </TooltipTrigger>
          <TooltipContent>
            <p>{file.name}</p>
          </TooltipContent>
        </Tooltip>
      </Card>
    </TooltipProvider>
  );
};

export default FileCard;
