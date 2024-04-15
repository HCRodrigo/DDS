/*function fatorial(n1){
var resultado = 1  
for(var i = n1; i > 1; i--){
    resultado = resultado * i
}
return resultado
}

console.log(fatorial(5))*/

var x   //declarando variavel
x = 0   //atributo da variavel
x       // >= 0

//Javascript aceita varios tipos de valores
x = 1               // Numero
x = 1.01            // Apenas um tipo de numer para inteiros e reais
x = "hello world"   // String de texto entre aspas
x = 'javascript'    // Apostrofos tambem delimitam strings
x = true            // Valor booleano
x = false           // Outro valor booleano
x = null            // Null e um valor especial que significa "nenhum valor"
x = undefined       // Undefined e como null

var y

console.log(y)

var livro = {               // Objetos sao colocados entre chaves
    topico: "Javascript",   // A propriedade "topico" tem valor "Javascript"
    avaliativo: true        // A propriedade "avaliativo" tem o valor "true"
}                           // A chave marca o fim do objeto

// A propriedade pode ser acessada com . ou []
console.log(livro.topico)           // Acessando propriedade via .
console.log(livro["avaliativo"])    // Acessando propriedade via []
livro.autor = "julio"               // Acrescentando autor
console.log(livro.autor)            
livro.assunstos = {}                // {} e um objeto vazio sem qualquer propriedade

//JavaScript tambem aceita arrays (listas indexadas numericamente)
var primos = [2, 3, 5, 7]           // Um array de 4 valores

console.log(primos)
console.log(primos[0])              // Chamando a posicao inicial
console.log(primos.length)          // Chamando o tamanho do array
console.log(primos[primos.length - 1])       // Chamando a ultima posicao

primos[4] = 9                       // Adicionando um novo elemento
primos[4] = 11                      // Alterando um elemento
console.log(primos)

var empty = []                      // Criando um array vazio
console.log(empty.length)
console.log(empty[0])

// Os arrays e objetos podem conter outros arrays e objetos
var coordenadas = [     // Um array com 2 elementos
    {x:0, y:8},         // Cada elemento e um objeto
    {x:1, y:1}
]

var data = {                // Objeto com 2 propriedades
    trial1:[[1,2],[3,4]],   // O valor de cada propriedade e um array   
    trial2:[[2,3],[4,5]],   // Os elementos dos array sao arrays
}