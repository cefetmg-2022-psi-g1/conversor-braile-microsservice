const { Console } = require("console")

module.exports.index = function(app, req, res) {
    const token = req.cookies.access_token
    if(!token)
        res.render('autenticacao')
    else {
        app.src.models.dao.autenticacaoDAO.autorizar(token, req, res, (err, result) => {
            var mensagem
            if(err) {
                mensagem = err
                res.render('autenticacao', mensagem)
            }
            else {
                mensagem = result
                console.log(JSON.stringify(result))
                res.render('pgUsuario', mensagem)
            }
        })
    }
}

module.exports.registrar = async function(nome, senha, email, app, req, res) {
    var mensagem

    await app.src.models.dao.autenticacaoDAO.validarEntrada(nome, senha, email, req, res, (err, nomeValido, senhaValida, emailValido) => {
        if(!err) {
            console.log(err)
            mensagem = err
        }

        nome = nomeValido
        senha = senhaValida
        email = emailValido
    })

    await app.src.models.dao.autenticacaoDAO.registrar(nome, senha, email, req, res, (err, result) => {
        if(err) {
            console.log("erro: " + err)
            mensagem = err
        } else {
            console.log("resultado :" + result)
            mensagem = result
        }
    })

    res.render('autenticacao', mensagem)
}

module.exports.logar = function(senhaLogin, emailLogin, app, req, res)  {
    app.src.models.dao.autenticacaoDAO.logar(senhaLogin, emailLogin, req, res, (err, result) => {
        var mensagem
        if(err) {
            console.log(err)
            mensagem = err
            res.render('autenticacao', mensagem)
        } else {
            console.log(JSON.stringify(result))
            mensagem = result
            res.render('pgUsuario', mensagem)
        }
    })
}

module.exports.logout = function(app, req, res) {
    app.src.models.dao.autenticacaoDAO.logout(res)
    res.render('autenticacao')
}