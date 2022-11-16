module.exports.salvar = function(app, req, res) {
    const token = req.body.token

    if(!token)
        res.send({ status: 'error', mensagem: 'Usuário não logado!' })
    else {
        app.src.models.dao.autenticacaoDAO.autorizar(token, req, res, (err, user) => {
            if(err)
                res.send({ status: 'error', mensagem: 'Usuário não logado!' })
            else {
                app.src.models.dao.historicoDAO.salvar(user, req, (err, result) => {
                    if(err)
                        res.send(err)
                    else
                        res.send(result)
                })
            }
        })
    }
}
