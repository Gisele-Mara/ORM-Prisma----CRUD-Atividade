-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "adress" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");
