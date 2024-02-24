/*
  Warnings:

  - Added the required column `quiz_section_id` to the `quiz_attempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quiz` MODIFY `topic` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- AlterTable
ALTER TABLE `quiz_attempt` ADD COLUMN `quiz_section_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `quiz_attempt` ADD CONSTRAINT `quiz_attempt_quiz_section_id_fkey` FOREIGN KEY (`quiz_section_id`) REFERENCES `quiz_section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
