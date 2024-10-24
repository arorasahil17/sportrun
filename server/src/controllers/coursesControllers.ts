import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, CourseInputs } from "../types";
import { prisma } from "../utils";

export const addCourse = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";

    const { title, description, price, offPrice } =
      request.body as CourseInputs;
    const files = request.files as {
      demoVideo?: Express.Multer.File[];
      courseVideo?: Express.Multer.File[];
      thumbnail?: Express.Multer.File[];
    };

    // Ensure both files are uploaded
    if (!files.demoVideo || !files.courseVideo || !files.thumbnail) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Please upload both demo and course videos.",
      };
      return next(error);
    }

    // Construct video URLs from the saved filenames
    const demoVideoUrl = `${SERVER_URL}/${files.demoVideo[0].filename}`;
    const courseVideoUrl = `${SERVER_URL}/${files.courseVideo[0].filename}`;
    const thumbnailUrl = `${SERVER_URL}/${files.thumbnail[0].filename}`;

    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        price: Number(price),
        offPrice: Number(offPrice),
        demoVideoUrl,
        courseVideoUrl,
        thumbnailUrl,
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

export const fetchAllCourses = asyncHandler(
  async (_request: Request, response: Response, next: NextFunction) => {
    const courses = await prisma.course.findMany({});

    if (!courses) {
      const error: AsyncError = {
        statusCode: 404,
        message: "No courses found",
      };

      return next(error);
    }

    return response.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      data: courses,
    });
  }
);
