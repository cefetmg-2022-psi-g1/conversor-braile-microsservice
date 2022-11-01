const bcrypt = require('bcryptjs')
const User = require('../dto/user')

module.exports.registrar = async function(nome, senha, email, req, res, callback) {
    bcrypt.hash(senha, 10)

    try {
        const reponse = await User.create({
            nome,
            senha,
            email
        })
        console.log('Usuário criado com sucesso: ', response)
        callback(null, response)
    } catch(error) {
        console.log(error)
        callback(error)
        return res.json({ status: 'error' })
    }
}