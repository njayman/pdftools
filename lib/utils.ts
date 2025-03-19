import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getDocument, PDFDocumentProxy, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const truncateFilename = (
  filename: string,
  maxLength: number = 15,
): string => {
  const parts = filename.split(".");
  if (parts.length < 2) return filename; // If there's no extension, return as is

  const extension = parts.pop(); // Get the extension
  const name = parts.join("."); // Join remaining parts in case of multiple dots

  if (name.length <= maxLength) {
    return `${name}.${extension}`; // No truncation needed
  }

  const truncatedName = name.slice(0, maxLength) + "(...)"; // Truncate and add "..."
  return `${truncatedName}.${extension}`;
};

export const getPdfThumbnail = async (file: File): Promise<string | null> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf: PDFDocumentProxy = await getDocument({
      data: arrayBuffer,
    }).promise;
    const page = await pdf.getPage(1);

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return null;
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = { canvasContext: context, viewport };
    await page.render(renderContext).promise;

    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error generating PDF Thunmnail:", error);
    return null;
  }
};
