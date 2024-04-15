var diaData1 = document.getElementById("diaData1")
var mesData1 = document.getElementById("mesData1")
var anoData1 = document.getElementById("anoData1")
var diaData2 = document.getElementById("diaData2")
var mesData2 = document.getElementById("mesData2")
var anoData2 = document.getElementById("anoData2")
var labelDia = document.getElementById("dia")
var labelMes = document.getElementById("mes")
var labelAno = document.getElementById("ano")

function calcDiferenca(){
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value
    var d1Ano = anoData1.value
    var d2Dia = diaData2.value
    var d2Mes = mesData2.value
    var d2Ano = anoData2.value

    var data1 = new Date(d1Ano, d1Mes-1, d1Dia)
    var data2 = new Date(d2Ano, d2Mes-1, d2Dia)    

    var data = Math.abs((data1 - data2)/1000/60/60/24)
    var meses = Math.abs(Math.round((data1 - data2)/1000/60/60/24/30))
    var ano = Math.abs(Math.round((data1 - data2)/1000/60/60/24/365))

    labelDia.innerHTML = data 

    if(data > 30){
        data = 0;
    }

    if(ano >= 1){
        labelAno.innerHTML = ano
        if(meses >= 1){
            data = 
            labelMes.innerHTML = Math.round(meses - 12*ano)
        }
    }

    
    labelMes.innerHTML = meses
    
}