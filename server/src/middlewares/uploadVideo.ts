import multer, { StorageEngine } from "multer";
import { Request } from "express";
import path from "path";
import fs from "fs";

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

// Define the upload middleware to handle two files: demoVideo and courseVideo
export const upload = multer({ storage }).fields([
  { name: "demoVideo", maxCount: 1 },
  { name: "courseVideo", maxCount: 1 },
]);
