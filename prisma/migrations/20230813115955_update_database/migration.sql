/*
  Warnings:

  - You are about to drop the column `quiz_category` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_id` on the `quiz_attempt` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_id` on the `quiz_question` table. All the data in the column will be lost.
  - You are about to drop the column `file_path` on the `user_photo` table. All the data in the column will be lost.
  - Added the required column `quez_option_id` to the `quiz_attempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_img` to the `quiz_option` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiz_section_id` to the `quiz_question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiz_attachment_id` to the `user_photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `quiz_attempt` DROP FOREIGN KEY `quiz_attempt_quiz_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_question` DROP FOREIGN KEY `quiz_question_quiz_id_fkey`;

-- DropIndex
DROP INDEX `quiz_quiz_category_key` ON `quiz`;

-- AlterTable
ALTER TABLE `quiz` DROP COLUMN `quiz_category`;

-- AlterTable
ALTER TABLE `quiz_attempt` DROP COLUMN `quiz_id`,
    ADD COLUMN `quez_option_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `quiz_option` ADD COLUMN `is_img` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `quiz_question` DROP COLUMN `quiz_id`,
    ADD COLUMN `quiz_section_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_photo` DROP COLUMN `file_path`,
    ADD COLUMN `quiz_attachment_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `quiz_section` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `quiz_id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `quiz_section_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attachment_option` (
    `id` VARCHAR(191) NOT NULL,
    `quiz_option_id` VARCHAR(191) NOT NULL,
    `quiz_attachment_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_attachment` (
    `id` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_attempt` ADD CONSTRAINT `quiz_attempt_quez_option_id_fkey` FOREIGN KEY (`quez_option_id`) REFERENCES `quiz_option`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_section` ADD CONSTRAINT `quiz_section_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_section` ADD CONSTRAINT `quiz_section_quiz_id_fkey` FOREIGN KEY (`quiz_id`) REFERENCES `quiz`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_photo` ADD CONSTRAINT `user_photo_quiz_attachment_id_fkey` FOREIGN KEY (`quiz_attachment_id`) REFERENCES `quiz_attachment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_question` ADD CONSTRAINT `quiz_question_quiz_section_id_fkey` FOREIGN KEY (`quiz_section_id`) REFERENCES `quiz_section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attachment_option` ADD CONSTRAINT `quiz_attachment_option_quiz_option_id_fkey` FOREIGN KEY (`quiz_option_id`) REFERENCES `quiz_option`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_attachment_option` ADD CONSTRAINT `quiz_attachment_option_quiz_attachment_id_fkey` FOREIGN KEY (`quiz_attachment_id`) REFERENCES `quiz_attachment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
