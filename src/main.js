document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-faq-question');

    for(let i = 0; i <questions.length;i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}