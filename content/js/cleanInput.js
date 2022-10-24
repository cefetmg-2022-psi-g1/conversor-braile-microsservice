let buttonClear = document.getElementById("clear");

buttonClear.addEventListener('click', function() {
    textIn.value = '';
    textIn.focus();
});