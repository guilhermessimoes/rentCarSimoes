/*
  Warnings:

  - You are about to drop the column `categoryId` on the `specifications_car` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "specifications_car" DROP CONSTRAINT "specifications_car_categoryId_fkey";

-- AlterTable
ALTER TABLE "specifications_car" DROP COLUMN "categoryId";
