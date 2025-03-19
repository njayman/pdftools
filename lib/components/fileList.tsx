import React from "react";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import FileCard from "./fileCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@app/components/ui/carousel";

const FileList = () => {
  const { files, removeFile } = useFileDropzone();

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    event.stopPropagation();
    event.dataTransfer.setData("text/plain", index.toString());
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {files.map((file, index) => (
            <CarouselItem
              className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              key={index}
            >
              <div className="p-1">
                <FileCard
                  file={file}
                  onDragStart={(event) => handleDragStart(event, index)}
                  onRemoveFile={() => removeFile(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {files.length !== 0 && (
          <div className="flex items-center justify-center mt-2 gap-2">
            <CarouselPrevious className="static transform-none h-7 w-7" />
            {/*<span className="text-xs text-muted-foreground">
            {currentIndex + 1} / {files.length}
          </span>*/}
            <CarouselNext className="static transform-none h-7 w-7" />
          </div>
        )}
      </Carousel>
    </section>
  );
};

export default FileList;
