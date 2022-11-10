module.exports = (app) => {
    app.get("/contact", (req, res) => {
        res.render('sobre-nos');
    });
    
    app.post("/contact", async (req, res) => {
        const yourname = req.body.yourname;
        const youremail = req.body.youremail;
        const yoursubject = req.body.yoursubject;
        const yourmessage = req.body.yourmessage;
        console.log(yourname);
        console.log(youremail);
        console.log(yoursubject);
        console.log(yourmessage);
        try {
            await app.src.controllers.twoBraileController.enviarEmail(yourname, youremail, yoursubject, yourmessage, app, req, res);
        } catch (error) {
            console.log(error)
            res.send("Message Could not be Sent");
        }
    });
}