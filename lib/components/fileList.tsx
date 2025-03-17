import React from "react";
import { Card, CardContent } from "@app/components/ui/card";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import { truncateFilename } from "@app/lib/utils";
import { FileText } from "lucide-react";

const FileList = () => {
  const { files } = useFileDropzone();

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  return (
    <section className="grid grid-cols-4 gap-4">
      {files.map((file, index) => (
        <Card
          className="cursor-grab"
          key={index}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
        >
          <CardContent className="grid grid-cols-6">
            <span className="text-red-600 col-span-1">
              <FileText />
            </span>
            <span className="break-words col-span-5">
              {truncateFilename(file.name, 23)}
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default FileList;
