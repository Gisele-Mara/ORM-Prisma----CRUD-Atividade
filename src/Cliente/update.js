import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.update({
    where: {
        cpf: '888-111-222-78',
        },
    data: {

      fullname: "Oliveira",

    },
  });


  console.log(result);
}

main()