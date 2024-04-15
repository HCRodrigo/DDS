/*let status = ""
    if(site){
        status = 200
    }else{
        status = 404
    }*/

const express = require("express")
const server = express()

server.use(express.json())

let sites = [
    {id:1, name:"YOUTUBE", site:"https://www.youtube.com/"},
    {id:2, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:3, name:"TINKERCAD", site:"https://www.tinkercad.com/"}
]

server.get("/sites", (req,res)=>{
    return res.json(sites)
})

server.get("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(sites){
        return sites.id === id
    })

    const status = site ? 200:404 //Operador 

    console.log(site)
    return res.status(status).json(site)
})

server.post("/sites",(req,res)=>{
    const {name,site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id,name:name,site:site}

    sites.push(newSite)

    return res.status(201).json(newSite)
})

server.put("/sites/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    const{name, site} = req.body
    const index = sites.findIndex(function(sites){
        return sites.id === id
    })

    const status = index >= 0 ? 200:400

    if(index >= 0){
        sites[index] = {id, name, site}
    }

    return res.status(status).json(sites[index])
})

server.delete("/sites/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(sites){
        return sites.id === id
    })
    const status = index >= 0 ? 200:404
    if(index >= 0){
        sites.splice(index, 1);
    }
    return res.status(status).json()
})

server.listen(3000)