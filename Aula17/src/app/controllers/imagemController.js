class Imagem{
    index(req,res){
        console.debug("GET :: /sites")
        return res.json(sites)
    }
}

module.exports = new Imagem()