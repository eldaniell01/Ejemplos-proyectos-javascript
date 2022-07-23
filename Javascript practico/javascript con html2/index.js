const num11 = document.querySelector('num1')
const num21 = document.querySelector('num2')
const btn = document.querySelector('btncalcular')
const resultado2 = document.querySelector('resultado')

function btnOnclick(){
    const resul = parseInt(num1.value)+parseInt(num2.value)
    console.log(resul)
    console.log(resultado.innerHTML = "resultado: " +resul)
    resultado.innerHTML = "resultado: " +resul
    
}