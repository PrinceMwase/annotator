-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('STEMMER', 'VERIFIER', 'ANNOTATOR', 'INACTIVE', 'SUPER') NOT NULL DEFAULT 'INACTIVE';
