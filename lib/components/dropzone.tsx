"use client";
import React from "react";
import { useFileDropzone } from "../contexts/fileDropzoneContext";
import { Button } from "@app/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@app/components/ui/collapsible";
import { Upload, X } from "lucide-react";

const Dropzone = () => {
  const { openDropzone, addFiles, toggleDropzone } = useFileDropzone();

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer.files) {
      const pdfFiles = [...event.dataTransfer.files].filter(
        (file) => file.type === "application/pdf",
      );

      addFiles(pdfFiles);
      toggleDropzone();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <Collapsible open={openDropzone} onOpenChange={toggleDropzone}>
      <CollapsibleTrigger asChild>
        <Button>
          {openDropzone ? <X /> : <Upload />}{" "}
          {openDropzone ? "Close" : "Upload files"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <section
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="h-[40vh] border border-2 flex"
        >
          <p className="m-auto">Drop pdf files here.</p>
        </section>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Dropzone;
