"use client";
import React from "react";

const MergePage = () => {
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    console.log(event.dataTransfer);

    if (event.dataTransfer.files) {
      const pdfFiles = [...event.dataTransfer.items];

      console.log(pdfFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };
  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="h-[40vh] border border-2 flex"
    ></section>
  );
};

export default MergePage;
