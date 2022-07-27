-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `role` ENUM('STEMMER', 'VERIFIER', 'ANNOTATOR', 'INACTIVE', 'SUPER') NOT NULL DEFAULT 'INACTIVE',
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_phone_number_key`(`phone_number`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sentence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sentence` VARCHAR(191) NOT NULL,
    `source` VARCHAR(191) NULL,
    `progress` ENUM('VERIFIED', 'PENDING_VERIFICATION', 'ANNOTATED', 'STEMMING', 'STEMMED', 'RAW') NOT NULL DEFAULT 'RAW',
    `uploaderID` INTEGER NULL,
    `modifierId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `index` INTEGER NOT NULL,
    `pos` VARCHAR(191) NULL,
    `head` INTEGER NULL,
    `deprel` VARCHAR(191) NULL,
    `sentenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sentence` ADD CONSTRAINT `Sentence_uploaderID_fkey` FOREIGN KEY (`uploaderID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sentence` ADD CONSTRAINT `Sentence_modifierId_fkey` FOREIGN KEY (`modifierId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_sentenceId_fkey` FOREIGN KEY (`sentenceId`) REFERENCES `Sentence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
