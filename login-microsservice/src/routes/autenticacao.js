module.exports = function(application) {
    application.get('/', function(req, res) {
        application.src.controllers.autenticacaoController.index(application, req, res)
    })
}