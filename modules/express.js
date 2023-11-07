const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
app.use(express.json())


//Todos os users
app.get('/users/', async (req,res) =>{
    try {
              // const user = await prisma.cliente.findUnique({where: { id: (id)}})
        const users = await prisma.cliente.findMany()
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
})
// Users por id
app.get('/users/:id', async (req,res) =>{
    try {
        // const id = req.params.id;
        const { id } = req.params

        const user = await prisma.cliente.findUnique({where: { id: (id)}})
        // const user = await prisma.cliente.findMany()
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
})
const port = 19006;

app.listen(port, ()=> console.log(`Rodando o servidor na porta ${port}`))


//Criando registro (novo cliente)
app.post('/users/sign', async (req,res) =>{
    try{
        // const { user } = await prisma.cliente.create(req.body)
        // res.status(201).json(user);
    const { name, fullname, cpf,adress } = req.body

      const result = await prisma.cliente.create({
      data: {
        name,
        fullname,
        cpf,
        adress
      },
    })
    // res.json(result)
    res.status(201).json(result);

    } catch (error){
        res.status(500).send(error.message)
    }

})

//Atualização parcial, ainda não consegui
app.put('users/cpf/:id', async (req,res) =>{
 try {
    const {id} = req.params
    const { cpf } = req.body

    const user = await prisma.cliente.update({
        where: {id : (id)},
        data: {
      
            cpf
        }
    })

    res.status(200).json(user);
 } catch (error) {
    res.status(500).send(error.message)
 }

})
// Deletar usuario
app.delete(`/users/:id`, async (req, res) => {
    const { id } = req.params
    const result = await prisma.cliente.delete({
      where: {
        id: (id),
      },
    })
    res.json(result)
  })