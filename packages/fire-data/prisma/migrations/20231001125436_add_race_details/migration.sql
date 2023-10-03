/*
  Warnings:

  - You are about to drop the column `type` on the `Race` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Distance" AS ENUM ('FIVE_K', 'TEN_K', 'FIFTEEN_K', 'HALF', 'MARATHON', 'SPRINT');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RaceType" ADD VALUE 'TRI';
ALTER TYPE "RaceType" ADD VALUE 'DU';
ALTER TYPE "RaceType" ADD VALUE 'OBSTACLE';

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "type" "RaceType" NOT NULL DEFAULT 'RUN';

-- AlterTable
ALTER TABLE "Race" DROP COLUMN "type",
ADD COLUMN     "capacity" INTEGER NOT NULL DEFAULT 2000,
ADD COLUMN     "distance" "Distance" NOT NULL DEFAULT 'FIVE_K';
