/*
  Warnings:

  - Added the required column `off_price` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `off_price` DOUBLE NOT NULL;
