import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, CourseInputs } from "../types";
import { prisma } from "../utils";
import fs from "fs";
import path from "path";

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

export const fetchCourse = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const id = parseInt(request.params.id);
    const course = await prisma.course.findUnique({ where: { id } });

    if (!course) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Course not found",
      };

      return next(error);
    }

    return response
      .status(200)
      .json({ success: true, message: "Course fetched", data: course });
  }
);

export const updateCourse = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
    const { id } = request.params;
    const { title, description, price, offPrice } =
      request.body as CourseInputs;
    const files = request.files as {
      demoVideo?: Express.Multer.File[];
      courseVideo?: Express.Multer.File[];
      thumbnail?: Express.Multer.File[];
    };

    // Fetch the existing course to update
    const existingCourse = await prisma.course.findUnique({
      where: { id: Number(id) },
    });

    if (!existingCourse) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Course not found",
      };
      return next(error);
    }

    // File deletion utility function
    const deleteOldFile = (fileUrl: string) => {
      const fileName = path.basename(fileUrl);
      const filePath = path.resolve(__dirname, "..", `uploads/${fileName}`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    };

    let demoVideoUrl = existingCourse.demoVideoUrl;
    if (files.demoVideo) {
      deleteOldFile(demoVideoUrl);
      demoVideoUrl = `${SERVER_URL}/${files.demoVideo[0].filename}`;
    }

    let courseVideoUrl = existingCourse.courseVideoUrl;
    if (files.courseVideo) {
      deleteOldFile(courseVideoUrl);
      courseVideoUrl = `${SERVER_URL}/${files.courseVideo[0].filename}`;
    }

    let thumbnailUrl = existingCourse.thumbnailUrl;
    if (files.thumbnail) {
      deleteOldFile(thumbnailUrl);
      thumbnailUrl = `${SERVER_URL}/${files.thumbnail[0].filename}`;
    }

    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: {
        title: title || existingCourse.title,
        description: description || existingCourse.description,
        price: price ? Number(price) : existingCourse.price,
        offPrice: offPrice ? Number(offPrice) : existingCourse.offPrice,
        demoVideoUrl,
        courseVideoUrl,
        thumbnailUrl,
        isPublished: true,
      },
    });

    return response.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  }
);

export const deleteCourse = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params;

    // Find the course by ID
    const course = await prisma.course.findUnique({
      where: { id: Number(id) },
    });

    if (!course) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Course not found",
      };
      return next(error);
    }

    // Delete associated video and thumbnail files
    const filesToDelete = [
      course.demoVideoUrl,
      course.courseVideoUrl,
      course.thumbnailUrl,
    ];

    filesToDelete.forEach((fileUrl) => {
      const filePath = path.resolve(
        __dirname,
        "..",
        `uploads/${path.basename(fileUrl)}`
      );
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${filePath}`, err);
        }
      });
    });

    // Delete the course from the database
    await prisma.course.delete({
      where: { id: Number(id) },
    });

    return response.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  }
);
