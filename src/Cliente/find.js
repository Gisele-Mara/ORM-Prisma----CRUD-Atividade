const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient();


async function main() {
     const result = await prisma.cliente.findMany(
    // {
    //   where: {
    //     cpf: {
    //       equals: '666-222-333-99',
    //     }
    //   }
    // }
    );
    console.log(result);
  
  
  }
  
  main();


  const Lista = main()

  module.exports = Lista