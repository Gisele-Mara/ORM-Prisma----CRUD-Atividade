import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.create({
    data: {
      name: "Cristin",
      fullname: 'Cesar',
      cpf: "888-144-222-78",
      adress: "Rua dos Marinheiros"
    },
  });


  console.log(result);
}


main();
