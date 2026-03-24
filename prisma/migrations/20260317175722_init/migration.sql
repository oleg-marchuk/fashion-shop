-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_text_key" ON "Category"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Category_value_key" ON "Category"("value");
