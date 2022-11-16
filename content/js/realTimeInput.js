import {validarEntrada} from "./validacaoInput.js";
import {validarSaida} from "./validacaoOutput.js";
import {gerarTraducao} from "./dict.js";
let campoInput = document.getElementById("area-in")
let campoOutput = document.getElementById("area-out")

export function traduz(){
    var texto = campoInput.value
    texto = validarEntrada(texto)
    texto = gerarTraducao(texto)
    texto = validarSaida(texto)
    if(texto==undefined) campoOutput.value=""
    else campoOutput.value=texto
}

campoInput.addEventListener("input", traduz)

