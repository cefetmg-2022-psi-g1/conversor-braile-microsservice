module.exports.validarEntrada = function(entradaTraducao, callback) {
    var textoTraducao = entradaTraducao
    textoTraducao = textoTraducao.replaceAll("<sub>", "♂")
    textoTraducao = textoTraducao.replaceAll("</sub>", "")
    textoTraducao = textoTraducao.replaceAll("</sup>", "")
    textoTraducao = textoTraducao.replaceAll("<sup>", "♀")
    textoTraducao = textoTraducao.replaceAll("\r", "")
    callback(null, textoTraducao)
}