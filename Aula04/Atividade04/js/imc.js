var inputAltura = document.getElementById("altura")
var inputPeso = document.getElementById("peso")

var labelResultado = document.getElementById("resultado")
var labelDescricao = document.getElementById("descricao")

function imc()
{
    altura = parseFloat(inputAltura.value)
    peso = parseFloat(inputPeso.value)

    var resultado = peso / (altura * altura)

    if(resultado < 18.5)
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Abaixo do peso"
    }
    else if(resultado < 24.9)
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Peso ideal"
    }
    else if(resultado <= 29.9)
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Levemente acima do peso"
    }
    else if(resultado <= 34.9)
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Obesidade I"
    }
    else if(resultado <= 39.9)
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Obesidade II severa"
    }
    else
    {
        labelResultado.innerHTML = resultado
        labelDescricao.innerHTML = "Obesidade III morbida"
    }
}