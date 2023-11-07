const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.delete({
    where: {
      id: "3fe234bd-644e-465e-99e4-2b8079f79b11",
    },
  });


  console.log(result);
}


main();
