const { botoesCarrossel, imgCarrossel } = selecionarHTMLdosBotoes();


botoesCarrossel.forEach((botao, indece) => {
    botao.addEventListener('click', () => {

        console.log(indece)

        desmarcarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImgAtiva();

        exibirImgSelecionada(indece);
    })
})

function exibirImgSelecionada(indece) {
    imgCarrossel[indece].classList.add('ativa');
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImgAtiva() {
    const imgAtiva = document.querySelector('.ativa');
    imgAtiva.classList.remove('ativa');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarHTMLdosBotoes() {
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imgCarrossel = document.querySelectorAll('.img');
    return { botoesCarrossel, imgCarrossel };
}
