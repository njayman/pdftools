"use client";
import React, { PropsWithChildren } from "react";
import { FileDropzoneProvider } from "@app/lib/contexts/fileDropzoneContext";
import Dropzone from "@app/lib/components/dropzone";
import Link from "next/link";
import FileList from "./fileList";

const Homelayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <FileDropzoneProvider>
      <header className="mx-auto container">
        <h1 className="text-center">Pdftools</h1>
      </header>
      <main className="h-auto mx-auto container">
        <Dropzone />
        <FileList />
        {children}
      </main>
      <footer className="w-full bg-background mx-auto">
        <div className="mx-auto max-w-container">
          <h1 className="text-center">
            This webapp was designed by{" "}
            <Link href="https://njayman.com" target="_blank">
              njayman
            </Link>
          </h1>
          <p className="text-center">
            Find njayman on{" "}
            <Link href="https://github.com/njayman" target="_blank">
              Github
            </Link>
            .
          </p>
        </div>
      </footer>
    </FileDropzoneProvider>
  );
};

export default Homelayout;
