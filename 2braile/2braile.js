module.exports = (app) => {
    app.get("/contact", (req, res) => {
        res.render(contact.html);
    });
    
    app.post("/contact", async (req, res, next) => {
        const { yourname, youremail, yoursubject, yourmessage } = req.body;
        try {
            await app.src.controllers.twoBraileController.enviarEmail(yourname, youremail, yoursubject, yourmessage);
        
            res.send("Message Successfully Sent!");
        } catch (error) {
            res.send("Message Could not be Sent");
        }
    });
}