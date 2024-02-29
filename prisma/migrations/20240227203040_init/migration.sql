-- AlterTable
ALTER TABLE `quiz` MODIFY `topic` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- CreateTable
CREATE TABLE `quiz_section_users` (
    `id` VARCHAR(191) NOT NULL,
    `quiz_section_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_section_users` ADD CONSTRAINT `quiz_section_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_section_users` ADD CONSTRAINT `quiz_section_users_quiz_section_id_fkey` FOREIGN KEY (`quiz_section_id`) REFERENCES `quiz_section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
