import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { createTransport } from "nodemailer";
import crypto from "crypto";

export const prisma = new PrismaClient();

export const router = Router();

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const generateResetToken = (): string =>
  crypto.randomBytes(32).toString("hex");
