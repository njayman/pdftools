"use client";
import React from "react";
import { FileDropzoneProvider } from "@app/lib/contexts/fileDropzoneContext";
import Link from "next/link";
import FileList from "./fileList";
import Navbar from "./navbar";

const Homelayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <FileDropzoneProvider>
      <Navbar />
      <main className="h-auto mx-auto container grid grid-cols-1 gap-4">
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
