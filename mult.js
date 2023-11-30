const imc = document.getElementById('calcular');

imc.addEventListener('click', function imc(){
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    const total = document.getElementById('total');

    total.textContent = (peso / (altura * altura)).toFixed(2);
})