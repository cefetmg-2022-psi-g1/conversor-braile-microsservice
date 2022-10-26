module.exports = function(application) {
    application.get('/', function(req, res) {
        application.src.controllers.loginController.index(application, req, res)
    })
}