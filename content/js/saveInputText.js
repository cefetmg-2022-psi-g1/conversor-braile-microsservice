
let buttonTranslate = document.querySelector('#arrow-button button')

if(window.localStorage.getItem('traducao') === '') window.localStorage.setItem('traducao', '');

buttonTranslate.addEventListener('click', function() {
    window.localStorage.setItem('traducao', textIn.value);
});

textIn.value = window.localStorage.getItem('traducao');
