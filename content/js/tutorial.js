let tutorialEl = document.getElementById("tutorial")
let buttonCloseEL = document.getElementById("close-tutorial")

buttonCloseEL.addEventListener('click', function() {
    tutorialEl.style.display = 'none';
});

let tutorialButtonEl = document.querySelectorAll("#tutorial-btn img")

tutorialButtonEl[1].addEventListener('click', function() {
    tutorialEl.style.display = 'block';
});

tutorialButtonEl[0].addEventListener('click', function() {
    tutorialEl.style.display = 'block';
});