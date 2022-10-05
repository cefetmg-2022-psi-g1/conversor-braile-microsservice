module.exports = function(application) {
    application.get('/', function(req, res) {
        application.src.controllers.twoBraileController.index(application, req, res)
    })
}