function imc (peso, altura){
    peso = 70
    altura = 1.75
    return (peso / (altura * altura)).toFixed(2)

}
console.log(imc('70', '1.75'))