let botaoVermelho = document.getElementById("vermelho");
let botaoVerde = document.getElementById("verde");
function mudarCorFundo(cor){
    document.body.style.backgroundColor = cor;
}

botaoVermelho.addEventListener("click", function(){
    mudarCorFundo("crimson");
})
botaoVerde.addEventListener("click", function(){
    mudarCorFundo("chartreuse");
})

