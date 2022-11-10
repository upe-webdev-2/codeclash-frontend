-- AlterTable
ALTER TABLE "User" ADD COLUMN     "problemsHistory" TEXT[];

-- CreateTable
CREATE TABLE "Problems" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "objectives" TEXT[],
    "examples" TEXT[],
    "starterCode" TEXT NOT NULL,
    "testCases" TEXT[],
    "functionName" TEXT NOT NULL,

    CONSTRAINT "Problems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_problemsHistory_fkey" FOREIGN KEY ("problemsHistory") REFERENCES "Problems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
