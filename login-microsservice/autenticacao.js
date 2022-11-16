module.exports = (app) => {
    app.post('/registro', async(req, res) => {
        var email = req.body.emailCadastro
        var nome = req.body.nomeCadastro
        var senha = req.body.senhaCadastro

        app.src.controllers.autenticacaoController.registrar(nome, senha, email, app, req, res)
    })

    app.post('/login', async(req, res) => {
        var emailLogin = req.body.emailLogin
        var senhaLogin = req.body.senhaLogin

        app.src.controllers.autenticacaoController.logar(senhaLogin, emailLogin, app, req, res)
    })

    app.post('/logout', (req, res) => {
        app.src.controllers.autenticacaoController.logout(app, req, res)
    })

    app.post('/salvarHistorico', (req, res) => {
        app.src.controllers.historicoController.salvar(app, req, res)
    })

    app.post('/editar', (req, res) => {
        var input = "req.body.inputHistorico"

        app.src.controllers.historicoController.editarHistorico(input, app, req, res)
    })
}