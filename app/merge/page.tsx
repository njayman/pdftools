"use client";
import { Button } from "@app/components/ui/button";
import MergeFileCard from "@app/lib/components/mergeFileCard";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import { Plus } from "lucide-react";
import React from "react";

const MergePage = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [filesForMerge, setFilesForMerge] = React.useState<File[]>([]);
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

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="grid gap-12">
      <div className="flex flex-col gap-2">
        <section
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="min-h-[40vh] border border-2 flex"
        >
          <div
            className="w-full flex flex-nowrap overflow-x-scroll p-6 scrollbar-hide scroll-smooth"
            ref={scrollContainerRef}
          >
            {filesForMerge.map((fileForMerge, index) => (
              <div key={index} className="flex items-center">
                <MergeFileCard
                  file={fileForMerge}
                  removeFile={() => {
                    removeFromFilesForMerge(index);
                  }}
                />
                {index < filesForMerge.length - 1 && (
                  <div className="flex-shrink-0 mx-4">
                    <Button
                      size="icon"
                      variant="outline"
                      disabled
                      aria-hidden="true"
                      className="h-10 w-10 rounded-full"
                    >
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <div>
          <Button className="ms-auto">Merge</Button>
        </div>
      </div>
    </div>
  );
};

export default MergePage;
