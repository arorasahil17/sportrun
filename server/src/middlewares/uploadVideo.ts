import multer, { StorageEngine, FileFilterCallback } from "multer";
import { Request } from "express";
import path from "path";
import fs from "fs";

// Allowed file extensions for videos and images
const allowedVideoExtensions = [".mp4", ".avi", ".mov"];
const allowedImageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

// Define storage configuration with typing for `Request` and `File`
const storage: StorageEngine = multer.diskStorage({
  destination: async (
    _request: Request,
    _file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    const uploadsDir = path.resolve(__dirname, "..", "uploads");

    // Create the uploads directory if it doesn't exist
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }

    cb(null, uploadsDir); // Callback to set the destination
  },
  filename: (
    _request: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname); // Get the file extension from original filename
    const newFilename = `${file.fieldname}-${uniqueSuffix}${fileExtension}`; // Ensure the extension is preserved

    cb(null, newFilename); // Return the new filename
  },
});

// File filter function to check the file type
const fileFilter = (
  _request: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback // Use correct typing for the callback
) => {
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (file.fieldname === "demoVideo" || file.fieldname === "courseVideo") {
    // Check for video extensions
    if (allowedVideoExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else if (file.fieldname === "thumbnail") {
    // Check for image extensions
    if (allowedImageExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  } else {
    cb(null, false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
}).fields([
  { name: "demoVideo", maxCount: 1 },
  { name: "courseVideo", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);
