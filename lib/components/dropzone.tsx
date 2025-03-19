"use client";
import React from "react";
import { useFileDropzone } from "../contexts/fileDropzoneContext";
import { Button } from "@app/components/ui/button";
import { Upload, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@app/components/ui/drawer";

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

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const pdfFiles = [...event.target.files].filter(
        (file) => file.type === "application/pdf",
      );

      addFiles(pdfFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          {openDropzone ? <X /> : <Upload />}{" "}
          {openDropzone ? "Close" : "Upload files"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Upload PDF files</DrawerTitle>
        </DrawerHeader>
        <section
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="h-[40vh] border border-2 flex"
        >
          <label htmlFor="file" className="w-full h-full flex justify-center">
            <span className="m-auto">Drop pdf files here.</span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleFiles}
            accept="application/pdf"
            multiple
          />
        </section>
      </DrawerContent>
    </Drawer>
  );
};

export default Dropzone;
