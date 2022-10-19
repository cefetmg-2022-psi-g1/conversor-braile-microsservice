let buttonClear = document.getElementById("clear");

buttonClear.addEventListener('click', function() {
    textIn.innerHTML = '';
    textIn.focus();
});