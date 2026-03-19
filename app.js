import express from "express";

const app = express();

let entregas = [];
let id = 1;

app.post("/api/entregas", (req,res) => {
    const {descricao, origem, destino}  = req.body;

if (origem === destino){
    return res.status(400).json("Erro: Origem e destino");
}

res.status(201).json(novaEntrega);
})


app.listen(3000);
