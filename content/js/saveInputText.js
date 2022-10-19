
if(window.localStorage.getItem('traducao') === '') window.localStorage.setItem('traducao', 'Digite o texto a ser traduzido...');

btnTranslate.addEventListener('click', function() {
    window.localStorage.setItem('traducao', textIn.innerHTML);
});

textIn.innerHTML = window.localStorage.getItem('traducao');

if(textIn.innerHTML !== "Digite o texto a ser traduzido...") textIn.style.color = "black"

