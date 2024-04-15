var inputN1 = document.getElementById("n1")
    var inputN2 = document.getElementById("n2")

var labelResultado = document.getElementById("resultado")

function somar()
{
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    var resultado = n1 + n2
    labelResultado.innerHTML = resultado
    console.log(resultado)    
}
function subtrair()
{
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    var resultado = n1 - n2
    labelResultado.innerHTML = resultado
    console.log(resultado)    
}
function multiplicacao()
{
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    var resultado = n1 * n2
    labelResultado.innerHTML = resultado
    console.log(resultado)    
}
function divicao()
{
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    var resultado = n1 / n2
    labelResultado.innerHTML = resultado
    console.log(resultado)    
}