module.exports.index = function(application, req, res) {
    res.render('autenticacao')
}

module.exports.registrar = function(nome, senha, email, app, req, res) {
    console.log('registro')
    
    app.src.models.dao.autenticacaoDAO.registrar(nome, senha, email, req, res, (err, result) => {
        if(!err)
            console.log(err)

        nome = result.nomeValido
        senha = result.senhaValida
        email = result.emailValido
    })

    app.src.models.dao.autenticacaoDAO.registrar(nome, senha, email, req, res, (err, result) => {
        console.log(result)
    })
}

module.exports.logar = function(senhaLogin, emailLogin, app, req, res)  {
    console.log('login')

    app.src.models.dao.autenticacaoDAO.logar(senhaLogin, emailLogin, req, res, (err, result) => {
        console.log(result)
    })
}