/*
  Warnings:

  - You are about to drop the `_Friendship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Friendship" DROP CONSTRAINT "_Friendship_A_fkey";

-- DropForeignKey
ALTER TABLE "_Friendship" DROP CONSTRAINT "_Friendship_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "friends" INTEGER[];

-- DropTable
DROP TABLE "_Friendship";
