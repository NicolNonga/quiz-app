/*
  Warnings:

  - Added the required column `time_take_to_complete` to the `quiz_attempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quiz` MODIFY `topic` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- AlterTable
ALTER TABLE `quiz_attempt` ADD COLUMN `time_take_to_complete` VARCHAR(191) NOT NULL;
