module.exports.index = function(application, req, res) {
    res.render('autenticacao')
}

module.exports.registrar = async function(nome, senha, email, app, req, res) {
    var resposta

    await app.src.models.dao.autenticacaoDAO.validarEntrada(nome, senha, email, req, res, (err, nomeValido, senhaValida, emailValido) => {
        if(!err) {
            console.log(err)
            resposta = err
        }

        nome = nomeValido
        senha = senhaValida
        email = emailValido
    })

    await app.src.models.dao.autenticacaoDAO.registrar(nome, senha, email, req, res, (err, result) => {
        if(!err) {
            console.log(err)
            resposta = err
        } else {
            console.log(result)
            resposta = result
        }
    })

    res.render('autenticacao', resposta)
}

module.exports.logar = function(senhaLogin, emailLogin, app, req, res)  {
    app.src.models.dao.autenticacaoDAO.logar(senhaLogin, emailLogin, req, res, (err, result) => {
        if(!err) {
            console.log(err)
            res.render('autenticacao', err)
        } else {
            console.log(err)
            console.log(result)
            res.render('pgUsuario', result)
        }
    })
}