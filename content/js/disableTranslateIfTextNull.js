buttonTranslate.addEventListener('click', function() {
    if(textIn.value === "") buttonTranslate.setAttribute('disabled', 'true')
    else buttonTranslate.removeAttribute('disabled')
});