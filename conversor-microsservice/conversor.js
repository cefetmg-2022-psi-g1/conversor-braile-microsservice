module.exports = (app) => {
    app.post('/', function(req, res) {
        var entradaTraducao = req.body.entradaTraducao
        app.src.controllers.traducaoController.traducao(app, entradaTraducao, req, res)
    })

    app.post('/salvar', function(req, res) {
        var entradaTraducao = req.body.inputForm
        var traducao = req.body.outputForm
        var nomeTraducao = req.body.nomeTraducao

        const token = req.cookies.access_token

        app.src.controllers.traducaoController.salvar(token, entradaTraducao, traducao, nomeTraducao, app, req, res)
    })
}