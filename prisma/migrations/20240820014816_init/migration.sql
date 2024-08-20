-- CreateTable
CREATE TABLE `Films` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NULL,
    `episode_id` INTEGER NULL,
    `opening_crawl` TEXT NULL,
    `director` VARCHAR(100) NULL,
    `producer` VARCHAR(100) NULL,
    `release_date` DATE NULL,
    `created` DATETIME(0) NULL,
    `edited` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `People` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `height` VARCHAR(10) NULL,
    `mass` VARCHAR(10) NULL,
    `hair_color` VARCHAR(50) NULL,
    `skin_color` VARCHAR(50) NULL,
    `eye_color` VARCHAR(50) NULL,
    `birth_year` VARCHAR(10) NULL,
    `gender` VARCHAR(10) NULL,
    `homeworld_name` VARCHAR(100) NULL,
    `created` DATETIME(0) NULL,
    `edited` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Planets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `rotation_period` INTEGER NULL,
    `orbital_period` INTEGER NULL,
    `diameter` INTEGER NULL,
    `climate` VARCHAR(100) NULL,
    `gravity` VARCHAR(100) NULL,
    `terrain` VARCHAR(100) NULL,
    `surface_water` INTEGER NULL,
    `population` BIGINT NULL,
    `created` DATETIME(0) NULL,
    `edited` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
