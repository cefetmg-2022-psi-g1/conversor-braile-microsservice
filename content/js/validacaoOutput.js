export function validarSaida(saidaTraducao) {
    var textoTraducao = saidaTraducao
    if(textoTraducao==undefined)textoTraducao=""
    textoTraducao = textoTraducao.replaceAll(",", "")
    return textoTraducao
}