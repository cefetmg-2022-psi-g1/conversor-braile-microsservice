const bcrypt = require('bcryptjs')
const User = require('../dto/user.js')

module.exports.registrar = async function(nome, senha, email, callback) {
    bcrypt.hash(senha, 10)

    try {
        const reponse = await User.create({
            nome,
            senha,
            email
        })
        console.log('Usuário criado com sucesso: ', response)
    } catch(error) {
        console.log(error.message)
        return res.json({ status: 'error' })
    }
}