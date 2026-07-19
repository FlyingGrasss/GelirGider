-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('MESSAGE', 'CALL', 'MAIL', 'ORDER');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "imageUrl" TEXT,
    "showImage" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "title2" TEXT,
    "callNumber" TEXT,
    "callEnabled" BOOLEAN NOT NULL DEFAULT true,
    "callFullWidth" BOOLEAN NOT NULL DEFAULT false,
    "whatsappNumber" TEXT,
    "whatsappEnabled" BOOLEAN NOT NULL DEFAULT true,
    "whatsappFullWidth" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "emailEnabled" BOOLEAN NOT NULL DEFAULT true,
    "emailFullWidth" BOOLEAN NOT NULL DEFAULT false,
    "linkedinUrl" TEXT,
    "linkedinEnabled" BOOLEAN NOT NULL DEFAULT true,
    "linkedinFullWidth" BOOLEAN NOT NULL DEFAULT false,
    "instagramUrl" TEXT,
    "instagramEnabled" BOOLEAN NOT NULL DEFAULT true,
    "instagramFullWidth" BOOLEAN NOT NULL DEFAULT false,
    "locationUrl" TEXT,
    "locationEnabled" BOOLEAN NOT NULL DEFAULT true,
    "locationFullWidth" BOOLEAN NOT NULL DEFAULT true,
    "contactEnabled" BOOLEAN NOT NULL DEFAULT true,
    "contactFullWidth" BOOLEAN NOT NULL DEFAULT true,
    "facilitiesHeading" TEXT NOT NULL DEFAULT 'Yönetilen Tesisler',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileFacility" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "ProfileFacility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileSession" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "ProfileSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "type" "LeadType" NOT NULL,
    "personName" TEXT NOT NULL,
    "contactInfo" TEXT,
    "followUpAt" TIMESTAMP(3),
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_slug_key" ON "Profile"("slug");

-- CreateIndex
CREATE INDEX "ProfileFacility_profileId_sortOrder_idx" ON "ProfileFacility"("profileId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileSession_tokenHash_key" ON "ProfileSession"("tokenHash");

-- CreateIndex
CREATE INDEX "ProfileSession_profileId_expiresAt_idx" ON "ProfileSession"("profileId", "expiresAt");

-- CreateIndex
CREATE INDEX "Lead_userId_followUpAt_idx" ON "Lead"("userId", "followUpAt");

-- AddForeignKey
ALTER TABLE "ProfileFacility" ADD CONSTRAINT "ProfileFacility_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileSession" ADD CONSTRAINT "ProfileSession_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
