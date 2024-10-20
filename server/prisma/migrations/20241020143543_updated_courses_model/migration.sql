/*
  Warnings:

  - Added the required column `fileName` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `fileName` VARCHAR(191) NOT NULL;
