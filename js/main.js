const braco = document.querySelector('#braco');
const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
        console.log(evento.target.parentNode)
    })
})

function manipulaDados(operacao){
    if(operacao === '-'){
        braco.value = Number(braco.value) - 1;
    } else {
        braco.value = Number(braco.value) + 1;
    }
}