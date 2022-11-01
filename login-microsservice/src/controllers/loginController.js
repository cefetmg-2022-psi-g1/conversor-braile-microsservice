module.exports.index = function(application, req, res) {
    res.render('login')
}

module.exports.registrar = function(nome, senha, email, app, req, res) {
    console.log('chegou aqui')
    app.src.models.dao.cadastroDAO.registrar(nome, senha, email, req, res, (err, result) => {
        console.log('chegou aqui')
        console.log(result)
    })
}