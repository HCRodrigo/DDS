const Imagem = require("../models/imagem")

class ImagemController{
    index(req,res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }

    //Inserindo uma imagem
    create(req, res){
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name
        nomeImagem = nomeImagem.split('.')
        let extensao = nomeImagem(nomeImagem.length-1)
        
        if(extensao === "jpg" || extensao === "png"){
        nomeImagem = new Date().getTime() + "." + extensao
        let arquivo = req.files.imagem
        Imagem.inserir(arquivo, alternativo, nomeImagem)
        res.json()
        }   
        else{
            res.status(415).json({message:"Arquivo não suportado"})
        }
    }
}

module.exports = new ImagemController()