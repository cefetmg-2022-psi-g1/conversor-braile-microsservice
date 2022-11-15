let msgEL = document.getElementById("mensagem-texto")

if(msgEL.innerHTML.indexOf('error') == -1) {
    msgEL.style.backgroundColor = "green";
} else {
    msgEL.style.backgroundColor = "#EF3B3A";
}
console.log('12345678')