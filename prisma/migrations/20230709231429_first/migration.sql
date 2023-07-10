/*
  Warnings:

  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizAttempt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPhoto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `QuizAttempt` DROP FOREIGN KEY `QuizAttempt_quiz_id_fkey`;

-- DropForeignKey
ALTER TABLE `QuizAttempt` DROP FOREIGN KEY `QuizAttempt_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserPhoto` DROP FOREIGN KEY `UserPhoto_user_id_fkey`;

-- DropTable
DROP TABLE `Quiz`;

-- DropTable
DROP TABLE `QuizAttempt`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `UserPhoto`;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `typeUser` ENUM('User', 'ADMIN') NOT NULL DEFAULT 'User',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_user_name_key`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attempt` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `quiz_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `quiz_category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `quiz_name_key`(`name`),
    UNIQUE INDEX `quiz_quiz_category_key`(`quiz_category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_photo` (
    `id` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_question` (
    `id` VARCHAR(191) NOT NULL,
    `question_text` VARCHAR(191) NOT NULL,
    `quiz_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_option` (
    `id` VARCHAR(191) NOT NULL,
    `option_text` VARCHAR(191) NOT NULL,
    `is_correct` BOOLEAN NOT NULL,
    `quiz_question_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_attempt` ADD CONSTRAINT `quiz_attempt_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attempt` ADD CONSTRAINT `quiz_attempt_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `quiz`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_photo` ADD CONSTRAINT `user_photo_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_question` ADD CONSTRAINT `quiz_question_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `quiz`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_option` ADD CONSTRAINT `quiz_option_quiz_question_id_fkey` FOREIGN KEY (`quiz_question_id`) REFERENCES `quiz_question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
