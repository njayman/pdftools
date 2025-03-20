"use client";
import FileList from "./fileList";

const LayoutContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <FileList />
      {children}
    </>
  );
};

export default LayoutContainer;
