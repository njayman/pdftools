"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface FileDropzoneContextType {
  openDropzone: boolean;
  files: File[];
  toggleDropzone: () => void;
  addFiles: (newFiles: File[]) => void;
  removeFile: (index: number) => void;
}

const FileDropzoneContext = createContext<FileDropzoneContextType | undefined>(
  undefined,
);

export const FileDropzoneProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [openDropzone, setOpenDropzone] = useState<boolean>(false);

  const addFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const toggleDropzone = () => {
    setOpenDropzone((isOpenDropzone) => !isOpenDropzone);
  };

  return (
    <FileDropzoneContext.Provider
      value={{ files, addFiles, removeFile, openDropzone, toggleDropzone }}
    >
      {children}
    </FileDropzoneContext.Provider>
  );
};

export const useFileDropzone = (): FileDropzoneContextType => {
  const context = useContext(FileDropzoneContext);
  if (!context) {
    throw new Error("useFiles must be used within a FileProvider");
  }
  return context;
};
