function caucularImposto(salario) {
    let aliquota;
    if (salario <= 1100.00) {
        return aliquota  = 0.05;

    } else if (salario >= 1100.01 && salario <= 2500.00) {
        return aliquota = 0.1;

    } else{
        return aliquota = 0.15
}
}
const salarioBruto = 2000;
const beneficio = 250;

const imposto = caucularImposto(salarioBruto) * salarioBruto;
const salarioFinal = salarioBruto - imposto + beneficio;
console.log(salarioFinal)
