"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@app/components/ui/carousel";
import MergeFileCard from "@app/lib/components/mergeFileCard";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import React, { useState } from "react";

const MergePage = () => {
  const [filesForMerge, setFilesForMerge] = useState<File[]>([]);
  const { files } = useFileDropzone();

  const addFilesForMerge = (file: File) => {
    setFilesForMerge((previousFilesForMerge) => [
      ...previousFilesForMerge,
      file,
    ]);
  };

  const removeFromFilesForMerge = (index: number) => {
    if (filesForMerge[index]) {
      const newFilesForMerge = [...filesForMerge];
      newFilesForMerge.splice(index, 1);
      setFilesForMerge(newFilesForMerge);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const fileIndex = event.dataTransfer.getData("text/plain");

    if (!fileIndex) {
      return;
    }

    const dropedFiles = files[parseInt(fileIndex, 10)];

    if (dropedFiles) {
      addFilesForMerge(dropedFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="min-h-[40vh] border border-2 flex"
    >
      {filesForMerge.length !== 0 && (
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {filesForMerge.map((fileForMerge, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <MergeFileCard
                    file={fileForMerge}
                    removeFile={() => {
                      removeFromFilesForMerge(index);
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4 gap-2">
            <CarouselPrevious className="static transform-none" />
            {/*<span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {files.length}
          </span>*/}
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default MergePage;
