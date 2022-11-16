export function validarEntrada(entradaTraducao) {
    var textoTraducao = entradaTraducao
    textoTraducao = textoTraducao.replaceAll("<sub>", "♂")
    textoTraducao = textoTraducao.replaceAll("</sub>", "")
    textoTraducao = textoTraducao.replaceAll("</sup>", "")
    textoTraducao = textoTraducao.replaceAll("<sup>", "♀")
    return textoTraducao
}

export function validarSaida(saidaTraducao) {
    var textoTraducao = saidaTraducao
    if(textoTraducao==undefined)textoTraducao=""
    textoTraducao = textoTraducao.replaceAll(",", "")
    return textoTraducao
}