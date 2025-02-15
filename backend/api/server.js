import express from "express"
import { db } from "./connect.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express(); // chamando a função express pra variavel app
const PORT = 3001 // declarando a porta

app.use(cors())

app.get("/api/", (request, response) => { // endpoint = rota
    response.send("Olá, Mundo!") //response.send envia a mensagem 
});

app.get("/api/artists", async(request, response) => { // endpoint = rota
    response.send(await db.collection("artists").find({}).toArray())
});

app.get("/api/songs", async(request, response) => { // endpoint = rota
    response.send(await db.collection("songs").find({}).toArray())
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async(request, response) => {
    response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})