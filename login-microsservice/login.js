
const User = require('./src/models/User')

module.exports = (app) => {

    // register user
    app.post('/auth/registro', async(req, res) => {
        const nome = req.body.nomeCadastro
        const email = req.body.emailCadastro
        const senha = req.body.senhaCadastro
        //colocar verificações dps e hash de senha

        //criando usuario real
        const user = new User({
            nome,
            email,
            senha,
        })
/*
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);
 */       

        //conseguiu logar

        try {
            await user.save()

            res.status(201).app.src.controllers.loginController.paginaUsuario(app, req, res)

        } catch(err){
            res.status(500).console.log('erro aconteceu')
        }
    })

    //login
    app.post('/auth/logado', async(req, res) => {
        const email = req.body.emailLogin
        const senha = req.body.senhaLogin
        //dps valida email e senha vazio

        //tenta logar
        const user = await User.findOne( {email: email})
        if (!user){
            return res.status(404).console.log('tente denovo')
        }

        const testaSenha = await bcrypt.compare(senha, user.senha)

        if(!testaSenha){
            return res.status(404).console.log('tente denovo')
        }

        try{
            //dps atualizar token 
            const secret = process.env.SECRET

            const token =jwt.sign(
                {
                    if: user._id,
                },
                secret,
            )
        
            res.status(200).app.src.controllers.loginController.paginaUsuario(app, req, res)

        }catch (err) {
            res.status(500).console.log('erro aconteceu')
        }
    })
    
}