/*
  Warnings:

  - Added the required column `thumbnail_url` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `thumbnail_url` VARCHAR(191) NOT NULL;
