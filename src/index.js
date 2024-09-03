const express = require("express")
const livro_router = require("./router/livro_router.js")
const app = express()

const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/livros", livro_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})