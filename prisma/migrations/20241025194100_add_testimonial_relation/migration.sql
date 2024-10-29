/*
  Warnings:

  - You are about to drop the column `content` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Testimonial` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_userId_fkey";

-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "content",
DROP COLUMN "name",
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "review" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_TestimonialToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TestimonialToUser_AB_unique" ON "_TestimonialToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TestimonialToUser_B_index" ON "_TestimonialToUser"("B");

-- AddForeignKey
ALTER TABLE "_TestimonialToUser" ADD CONSTRAINT "_TestimonialToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Testimonial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TestimonialToUser" ADD CONSTRAINT "_TestimonialToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
