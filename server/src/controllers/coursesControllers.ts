import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, CourseInputs } from "../types";
import { prisma } from "../utils";

export const addCourse = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

    const { title, description, price } = request.body as CourseInputs;
    const files = request.files as {
      demoVideo?: Express.Multer.File[];
      courseVideo?: Express.Multer.File[];
    };

    // Ensure both files are uploaded
    if (!files.demoVideo || !files.courseVideo) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Please upload both demo and course videos.",
      };
      return next(error);
    }

    // Construct video URLs from the saved filenames
    const demoVideoUrl = `${SERVER_URL}/uploads/${files.demoVideo[0].filename}`;
    const courseVideoUrl = `${SERVER_URL}/uploads/${files.courseVideo[0].filename}`;

    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        price,
        demoVideoUrl,
        courseVideoUrl,
        fileName: `${files.demoVideo[0].filename}, ${files.courseVideo[0].filename}`,
        isPublished: true,
      },
    });

    return response.status(201).json({
      success: true,
      message: "Course added successfully",
      data: newCourse,
    });
  }
);
