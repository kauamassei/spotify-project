import express from "express"
import { db } from "./connect.js";
import cors from "cors";

const app = express(); // chamando a função express pra variavel app
const PORT = 3001 // declarando a porta

app.use(cors())

app.get("/", (request, response) => { // endpoint = rota
    response.send("Olá, Mundo!") //response.send envia a mensagem 
});

app.get("/artists", async(request, response) => { // endpoint = rota
    response.send(await db.collection("artists").find({}).toArray())
});

app.get("/songs", async(request, response) => { // endpoint = rota
    response.send(await db.collection("songs").find({}).toArray())
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})