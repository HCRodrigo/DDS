//Objeto math
var resultado

resultado = Math.pow(2,53)          // 2 elevado a 53
resultado = Math.round(0.5)         // Arredonda para o inteiro mais próximo
resultado = Math.floor(0.5)         // Arredonda pra o inteiro mais baixo
resultado = Math.ceil(0.6)          // Arredonda para um inteiro cima
resultado = Math.abs(-5)            // Retorna o valor sempre positivo o absoluto
resultado = Math.max(99,88,8,54)    // Retorna o maior valor
resultado = Math.min(99,88,8,54)    // Retorna o menor valor
resultado = Math.PI                 // Numero PI
resultado = Math.sqrt(3)            // Raiz quadrada
//console.log(resultado)

// Data e hora
var antes = new Date(2020, 0, 1)    // O 1º dia do 1º mês d3 2020
var depois = new Date(2020, 0, 1,   // Mesmo dia, às 17:10:30 da tarde
                      17, 10, 30)
var agora = new Date()              // Pega a data e hora da hora
var duracao = depois - antes        // Pega a duração em milisegundos
duracao = duracao/1000/60/60        // Convertendo duração em horas

var elemento
elemento = depois.getFullYear()        // Pegando o ano
elemento = depois.getMonth()           // Pegando o mes
elemento = depois.getDay()             // Pegando o dia
elemento = depois.getDate()            // Pegando o dia do mês
elemento = depois.getHours()           // Pegando a hora
elemento = depois.getUTCHours()        // Pegando a hora no formato UTC (+3 usado o de Brasilia)
elemento = depois.toString()           // Exibindo como string
elemento = depois.toLocaleDateString() // Data padrão
console.log(elemento)       