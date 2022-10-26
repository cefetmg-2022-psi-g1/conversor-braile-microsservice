module.exports.index = function(application, req, res) {
    console.log('chegou aqui')
    res.render('teste')
    console.log('passou daqui')
}

module.exports.registrar = function(nome, senha, email, application, req, res) {

}