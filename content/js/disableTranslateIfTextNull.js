let buttonTranslate = document.querySelector('#arrow-button button')

btnTranslate.addEventListener('click', function() {
    if(textIn.innerHTML === "" || textIn.innerHTML === "Digite o texto a ser traduzido...") buttonTranslate.setAttribute('disabled', 'true')
    else buttonTranslate.removeAttribute('disabled')
});