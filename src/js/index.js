const botoesCarrosel = document.querySelectorAll('.botao');
const imagensCarrosel = document.querySelectorAll('.image');

botoesCarrosel.forEach( (botao, indice) => {

    botao.addEventListener('click', () => {
        console.log(indice);

        desmarcarBotao();

        botao.classList.add('selecionado');

        ativarBotaoSelecionado();

        mostrarImagemFundo(indice);
       
       
    });
   
});

function mostrarImagemFundo(indice) {
    imagensCarrosel[indice].classList.add('ativa');
}

function ativarBotaoSelecionado() {
    const imagemCarosselAtiva = document.querySelector('.ativa');
    imagemCarosselAtiva.classList.remove('ativa');
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
