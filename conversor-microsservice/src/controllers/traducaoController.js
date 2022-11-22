module.exports.index = function(application, req, res) {
    let resultado = []
    res.render('index', {textoTraduzido: resultado, resultado: null})
}

module.exports.traducao = function(application, entradaTraducao, req, res) {
    let textoTraducao = ''

    application.src.models.dao.validacaoDAO.validarEntrada(entradaTraducao, function(err, result) {
        if(err)
            console.log(err)

        textoTraducao = result
    })

    application.src.models.dao.dictDAO.gerarTraducao(textoTraducao, function(err, result) {
        console.log(result)
        if(err)
           console.log(err)
        
        res.render('index', { textoTraduzido: result, resultado: null })
    })
}

module.exports.salvar = function(token, input, traducao, nome, app, req, res) {
    app.src.models.dao.salvarHistoricoDAO.salvar(token, input, traducao, nome, (err, result) => {
        if(err)
            res.render('index', { textoTraduzido: input, resultado: err } )
        else
            res.render('index', { textoTraduzido: input, resultado: result } )
    }) 
}
