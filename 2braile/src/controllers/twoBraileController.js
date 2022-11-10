module.exports.index = function(application, req, res) {
    res.render('index')
}

module.exports.enviarEmail = function (yourname, youremail, yoursubject, yourmessage, application, req, res) {
    application.src.models.enviarEmail.mainMail(yourname, youremail, yoursubject, yourmessage);
    res.render('sobre-nos')
}