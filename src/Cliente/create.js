const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.create({
    data: {
      name: "Alec",
      fullname: 'Cesar',
      cpf: "999-888-777-77",
      adress: "Rua do Nada"
    },
  });


  console.log(result);
}


main();
