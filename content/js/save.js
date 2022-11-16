let tutorialEl = document.getElementById("tutorial")
let buttonCloseEL = document.getElementById("close-tutorial")

buttonCloseEL.addEventListener('click', function() {
    tutorialEl.style.display = 'none';
});

let openSaveEl = document.getElementById("open-save")

openSaveEl.addEventListener('click', function() {
    tutorialEl.style.display = 'block';
});
