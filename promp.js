const botao = document.getElementById('clicar');

botao.addEventListener('click',function mudarBotao(){
    botao.innerHTML = 'clicou';
    let saudacao = document.getElementById('paragrafo');
    saudacao.innerHTML = 'Boa noite e Obrigado por clicar';
} 

)
