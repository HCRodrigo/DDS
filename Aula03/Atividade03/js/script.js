var valor = 1
var valoratual = valor
var valoranterior = valor - 1
var resultado

console.log(resultado)

for(var i = 0; i < 50; i++){
    
    resultado = valoratual + valoranterior
    valoranterior = valoratual
    valoratual = resultado

    console.log(resultado)

}   
