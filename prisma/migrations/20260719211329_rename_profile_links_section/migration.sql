-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "facilitiesHeading" SET DEFAULT 'Bağlantılar';

-- Rename the previous default for profiles that already used it.
UPDATE "Profile"
SET "facilitiesHeading" = 'Bağlantılar'
WHERE "facilitiesHeading" = 'Yönetilen Tesisler';
