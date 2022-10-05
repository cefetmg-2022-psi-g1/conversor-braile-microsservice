module.exports = (app) => {
    app.post('/', function(req, res) {
        var entradaTraducao = req.body.entradaTraducao
        app.src.controllers.traducaoController.traducao(app, entradaTraducao, req, res)
    })
}