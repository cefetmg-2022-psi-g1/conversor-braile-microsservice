const bcrypt = require('bcryptjs')
const { model } = require('mongoose')
const User = require('../dto/user')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports.validarEntrada = function(nomeRegistro, senhaRegistro, emailRegistro, req, res, callback) {
    if(!emailRegistro || typeof emailRegistro !== 'string' /*|| regex para validação de email*/) {
        callback(res.json({ status: 'error', error: 'Email inválido'}))
    }

    if(!senhaRegistro /*|| condições para senha válida*/) {
        callback(res.json({ status: 'error', error: 'Senha inválida'}))
    } else {
        //criptografa a senha
        bcrypt.hash(senhaRegistro, 10)
    }

    //if(condições para o nome do usuário?)

    callback(null, res.json({ nomeValido: nomeRegistro, senhaValida: senhaRegistro, emailValido: emailRegistro }))
}

module.exports.registrar = async function(nomeRegistro, senhaRegistro, emailRegistro, req, res, callback) {
    try {
        const response = await User.create({
            nome: nomeRegistro,
            password: senhaRegistro,
            email: emailRegistro
        })
        console.log('Usuário criado com sucesso: ', response)
        callback(null, response)
    } catch(error) {
        if(error.code === 11000) {
            return res.json({ status: 'error', error: 'Esse email já está em uso' })
        }
        throw error
    }
}

module.exports.logar = async function(senhaLogin, emailLogin, req, res, callback) {
    try {
        const user = User.findOne({ email: emailLogin }).lean()

        if(!user) {
            callback(res.json({ status: 'error', error: 'Usuário ou senha inválidos' }))
        }

        if(bcrypt.compare(senhaLogin, user.password)) {
            const token = jwt.sign({ 
                id: user._id, 
                email: user.email 
            }, JWT_SECRET)

            callback(null, res.json({ status: 'ok', data: token }))
        }

        callback(res.json({ status: 'error', error: 'Usuário ou senha inválidos' }))
    } catch(error) {

    }
}