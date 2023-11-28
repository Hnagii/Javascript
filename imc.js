
/*let peso = 56
 let altura = 1.46
 
 let imc = (peso / (altura * altura))
console.log(imc)

if(imc<18.5){
    console.log("Abaixo do peso")
}else if(imc>=18.5 && imc<25){
    console.log("Peso normal")
}else if(imc>=25 && imc<30){
    console.log("Acima do peso")
}else if(imc>=30 && imc<40){
    console.log("Obeso")
}else{
    console.log("Obesidade grave")
}
*/

function imc(peso, altura){
    let valorimc = (peso / (altura * altura))

if( valorimc <18.5){
    console.log("Abaixo do peso")
}else if( valorimc >=18.5 && valorimc <25){
    console.log("Peso normal")
}else if( valorimc >=25 && valorimc<30){
    console.log("Acima do peso")
}else if( valorimc >=30 && valorimc <40){
    console.log("Obeso")
}else{
    console.log("Obesidade grave")
}
}
console.log(imc('70', '1.75'))
console.log(imc('56', '1.46'))