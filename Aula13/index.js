const express = require("express");
const server = express();

//localhost:3000/home?nome=Ramon&idade=18
//Parametros da Query = ?nome=Ramon&idade=18

server.get("/home",(req, res) =>{
    //const nome = req.query.nome
    //const idade = req.query.idade

    const {nome, idade} = req.query
    return res.json({
        título:"Página Inicial",
        message:`Bem vindo ao ${nome}`,
        idade: idade
    })
})
//localhost:3000/home/Ramon/18
//Parametros da Rota = /home/Ramon/18

server.get("/home/:nome", (req, res) =>{
    const {nome} = req.params
    return res.json({
        título:"Página Inicial",
        message:"Bem vindo ao" + nome
    })
})

server.listen(3000);