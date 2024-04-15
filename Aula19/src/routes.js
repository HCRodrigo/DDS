const express = require("express")
const router = express.Router
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/sitesController")
const imagens = require("./app/controllers/imagemController")

routes.get("/", (req,res)=>{
    //res.json({teste:"teste"})
    //res.sendFile(__dirname + "/../public/desafio.html")
    res.sendFile("desafio.html",{root:'./public'})
    
    //Comando que permite acessar o diretório com arquivos staticos

})

routes.get("/lateral", (req,res)=>{
    //res.json({teste:"teste"})
    //res.sendFile(__dirname + "/../public/desafio.html")
    res.sendFile("lateral.html",{root:'./public'})
    
    //Comando que permite acessar o diretório com arquivos staticos

})

routes.post("/imagens", imagens.create)
routes.get("/imagens", imagens.index)
routes.put("/imagens/:id", imagens.updatesImg)
routes.delete("/imagens/:id", imagens.deleteImg)



routes.get("/sites", sites.index)
routes.get("/sites/:id", sites.show)
routes.post("/sites", sites.create)
routes.put("/sites/:id", sites.update)
routes.delete("/sites/:id", sites.destroy)

module.exports = routes