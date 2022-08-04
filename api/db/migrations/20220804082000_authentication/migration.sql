/*
  Warnings:

  - You are about to alter the column `pos` on the `Token` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Token_pos")`.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Token` MODIFY `pos` ENUM('ADJ', 'ADP', 'ADV', 'AUX', 'CCONJ', 'DET', 'INTJ', 'NOUN', 'NUM', 'PART', 'PRON', 'PROPN', 'PUNCT', 'SCONJ', 'SYM', 'VERB', 'X') NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `password`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `resetToken` VARCHAR(191) NULL,
    ADD COLUMN `resetTokenExpiresAt` DATETIME(3) NULL,
    ADD COLUMN `salt` VARCHAR(191) NOT NULL DEFAULT '';
