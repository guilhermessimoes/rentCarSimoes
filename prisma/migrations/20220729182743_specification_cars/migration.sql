-- CreateTable
CREATE TABLE "specifications_car" (
    "id" TEXT NOT NULL,
    "car_id" TEXT,
    "specification_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT,

    CONSTRAINT "specifications_car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "specifications_car" ADD CONSTRAINT "specifications_car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specifications_car" ADD CONSTRAINT "specifications_car_specification_id_fkey" FOREIGN KEY ("specification_id") REFERENCES "specifications"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "specifications_car" ADD CONSTRAINT "specifications_car_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE SET NULL;
