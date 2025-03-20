import React from "react";
import { useFileDropzone } from "@app/lib/contexts/fileDropzoneContext";
import FileCard from "./fileCard";

const FileList = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const { files, removeFile } = useFileDropzone();

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    event.stopPropagation();
    event.dataTransfer.setData("text/plain", index.toString());
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
    <section className="w-full max-w-7xl mx-auto px-4">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide"
      >
        {files.map((file, index) => (
          <FileCard
            key={index}
            file={file}
            onDragStart={(event) => handleDragStart(event, index)}
            onRemoveFile={() => removeFile(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FileList;
