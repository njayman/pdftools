import { Button } from "@app/components/ui/button";
import { Card, CardContent, CardFooter } from "@app/components/ui/card";
import { FileText, X } from "lucide-react";
import { getPdfThumbnail, truncateFilename } from "../utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MergeFileCard: React.FC<{
  file: File;
  removeFile: () => void;
}> = ({ file, removeFile }) => {
  const [fileThumbnail, setFileThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const getThumbnail = async () => {
      const pdfThumbnail = await getPdfThumbnail(file);

      setFileThumbnail(pdfThumbnail);
    };

    getThumbnail();
  }, [file]);
  return (
    <Card
      className="w-[280px] h-[360px] relative group flex-shrink-0 p-0"
      draggable
      onDragStart={() => {
        console.log("dragging");
      }}
    >
      <div className="relative">
        <button
          className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-gray-700 shadow-sm hover:bg-white hover:text-gray-900 transition-colors"
          onClick={removeFile}
        >
          <X className="h-4 w-4" />
        </button>
        <CardContent className="p-0">
          {fileThumbnail ? (
            <div className="w-full h-48 overflow-hidden">
              <img
                src={fileThumbnail}
                alt={file.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            ""
          )}
        </CardContent>
      </div>
      <CardFooter className="flex items-center gap-2 p-3 bg-gray-50">
        <FileText className="text-red-500 h-4 w-4" />
        <span className="break-words col-span-5">
          {truncateFilename(file.name, 35)}
        </span>
      </CardFooter>
    </Card>
  );
};

export default MergeFileCard;
