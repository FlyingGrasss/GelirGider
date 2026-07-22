-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "iban" TEXT,
ADD COLUMN     "ibanEnabled" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "title" DROP NOT NULL;
