-- AlterTable
ALTER TABLE `quiz` MODIFY `topic` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- AlterTable
ALTER TABLE `quiz_section_users` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `is_completed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `quiz_section_user_avalition` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `quiz_section_id` VARCHAR(191) NOT NULL,
    `punctuation` DOUBLE NOT NULL,
    `total_pergunta_acertas` INTEGER NOT NULL DEFAULT 0,
    `total_perguntas_erradas` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_quiz_sectionToquiz_section_user_avalition` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_quiz_sectionToquiz_section_user_avalition_AB_unique`(`A`, `B`),
    INDEX `_quiz_sectionToquiz_section_user_avalition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_section_user_avalition` ADD CONSTRAINT `quiz_section_user_avalition_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_quiz_sectionToquiz_section_user_avalition` ADD CONSTRAINT `_quiz_sectionToquiz_section_user_avalition_A_fkey` FOREIGN KEY (`A`) REFERENCES `quiz_section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_quiz_sectionToquiz_section_user_avalition` ADD CONSTRAINT `_quiz_sectionToquiz_section_user_avalition_B_fkey` FOREIGN KEY (`B`) REFERENCES `quiz_section_user_avalition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
