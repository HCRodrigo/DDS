var frases = "Olá Julio o programador \"Front End\" da \nDDS 3-16" // o contrabarra \ é usado para escapar caracteres

var uc = "PROJETO INTEGRADOR III: GRAND PRIX"

//var abreviado = uc.charAt(0)                  // O primeiro caractere
var abreviado = uc.charAt(uc.length-1)          // Pegando o ultimo caractere
var abreviado = uc.charAt(0) + uc.charAt(uc.length-2) + uc.charAt(uc.length-1)  // Junto caracteres
var abreviado = uc.substring(3,28)              // Pegando intervalos
var abreviado = uc.substring(18)                // pegando a partir de determinado ponto
var abreviado = uc.slice(0, 10)                 // Funciona semelhante ao substring
var abreviado = uc.slice(-10)                   // Pegando os ultimos 10 caracteres
var abreviado = uc.indexOf(" ")               // Buscando Termos
var abreviado = abreviado[0].substring(0,4)+". "+abreviado[abreviado.length-1]
abreviado = uc.replace("PROJETO", "Trabalho") 
abreviado = abreviado.toLocaleUpperCase()     // Transformando tudo em maiusculo
abreviado = abreviado.toLocaleLowerCase()     // Transformando tudo em minusculo
console.log(abreviado)

/* --< Outras Formas de fazer >--
var abreviacaoProj = uc.slice(0, 4)
var abreviacaoPrix = uc.slice(-4)

console.log(abreviacaoProj + ". " + abreviacaoPrix)

var abreviacaoProj = uc.split("ETO")
var abreviacaoPrix = uc.split("ND ")

console.log(abreviacaoProj[0] + ". " + abreviacaoPrix[1])

var abreviadoo = uc.indexOf("E")               // Buscando Termos
var abreviado2 = uc.indexOf("PRI")               // Buscando Termos
var abreviacao = uc.substring(0, abreviadoo)
var abreviacao2 = uc.slice(abreviado2)

console.log(abreviacao + ". " + abreviacao2)
*/

function abreviacao(arrayAula){
    arrayAula = arrayAula.split(" ")
    arrayAula = arrayAula[0].substring(0,4) + ". " + arrayAula[arrayAula.length-1]
    return arrayAula
}

console.log(abreviacao("INTRODUÇÃO A INDÚSTRIA 4.0"))