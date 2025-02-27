import React from "react";
import { Card, CardContent } from "@app/components/ui/card";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import { truncateFilename } from "@app/lib/utils";
import { FileText } from "lucide-react";

const FileList = () => {
  const { files } = useFileDropzone();
  return (
    <section>
      {files.map((file, index) => (
        <Card key={index} draggable>
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
