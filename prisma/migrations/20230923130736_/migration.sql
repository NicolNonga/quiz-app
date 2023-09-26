/*
  Warnings:

  - You are about to drop the column `quiz_section_id` on the `quiz_question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `quiz_question` DROP FOREIGN KEY `quiz_question_quiz_section_id_fkey`;

-- AlterTable
ALTER TABLE `quiz` ADD COLUMN `topic` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- AlterTable
ALTER TABLE `quiz_question` DROP COLUMN `quiz_section_id`;

-- CreateTable
CREATE TABLE `section_question` (
    `id` VARCHAR(191) NOT NULL,
    `quiz_section_id` VARCHAR(191) NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `section_question` ADD CONSTRAINT `section_question_quiz_section_id_fkey` FOREIGN KEY (`quiz_section_id`) REFERENCES `quiz_section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `section_question` ADD CONSTRAINT `section_question_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `quiz_question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
