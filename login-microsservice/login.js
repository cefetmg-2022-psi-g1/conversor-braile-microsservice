module.exports = (app) => {
    app.post('/auth/registro', function(req, res) {
        var email = req.body.emailCadastro
        var nome = req.body.nomeCadastro
        var senha = req.body.senhaCadastro

        app.src.controllers.loginController.registrar(nome, senha, email, app, req, res)
    })
}