import express from "express"
import cors from "cors"
import { people } from "./people.js"

const app = express()
const port = 3333

app.use(cors())

app.use(express.json())

app.get("/", (request, response) => {
    response.json(people)
})

app.post("/cadastrar", (request, response) => {
    const { name, email, age, password } = request.body.user

    console.log(`
        Nome: ${name},
        Senha: ${password},
        E-mail: ${email},
        Idade: ${age}
    `)

    response.status(201).json({ message: "Usuário Cadastrado com Sucesso!"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})
