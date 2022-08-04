/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `role`,
    ADD COLUMN `roles` ENUM('STEMMER', 'VERIFIER', 'ANNOTATOR', 'INACTIVE', 'SUPER') NOT NULL DEFAULT 'INACTIVE';
