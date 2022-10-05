module.exports.index = function(application, req, res) {
    //checar token para ver se o usuário está logado
    //caso não esteja, exibe página de login
    res.render('login')

    //caso esteja, exibe página de usuário
}

module.exports.paginaUsuario = function(application, req, res) {
    //checar token para ver se o usuário está logado
    //caso não esteja, exibe página de login
    //caso esteja, exibe página de usuário
    res.render('pgUsuario')
}