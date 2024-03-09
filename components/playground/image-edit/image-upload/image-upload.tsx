"use client";
import {
  Images,
  ImageSelect,
  DragAndDrop,
  useImageUpload,
} from "react-uploadify";

import DeleteIcon from "./delete";

function ImageUpload() {
  const { error, isDraggedOver } = useImageUpload();

  return (
    <>
      {error.message && <h1 className="text-red-500">{error.message}</h1>}

      <DragAndDrop
        limit={2}
        quality={10}
        fileSizeLimit="3mb"
        content={
          <div
            className={`p-4 w-full  rounded-lg border-2 border-dashed dark:border-slate-800 h-56 flex justify-center items-center ${
              isDraggedOver ? "border-rose-500 dark:border-rose-500" : ""
            }`}
          >
            <ImageSelect
              limit={1}
              quality={10}
              fileSizeLimit="3mb"
              content={
                <div className="w-fit text-blue-500 transition pr-1 cursor-pointer text-sm">
                  Upload
                </div>
              }
            />
            <p className="text-sm text-gray-700">Drag and Drop image here.</p>
          </div>
        }
      />

      <Images
        imageClassName="w-32 border rounded-lg"
        className=""
        deleteIcon={<DeleteIcon />}
        deleteButtonClassName="p-1 rounded-full bg-slate-200"
      />
    </>
  );
}

export default ImageUpload;
