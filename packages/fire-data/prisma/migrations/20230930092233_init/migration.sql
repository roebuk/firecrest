/*
  Warnings:

  - You are about to drop the column `published` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Race` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Race` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RaceType" AS ENUM ('RUN', 'BIKE', 'SWIM');

-- DropIndex
DROP INDEX "Race_slug_key";

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "published",
DROP COLUMN "slug",
DROP COLUMN "title",
ADD COLUMN     "eventId" UUID NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "type" "RaceType" NOT NULL;

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_slug_idx" ON "Event" USING HASH ("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Race_id_key" ON "Race"("id");

-- CreateIndex
CREATE INDEX "Race_id_idx" ON "Race" USING HASH ("id");

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
