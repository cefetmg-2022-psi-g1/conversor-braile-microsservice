require('dotenv').config();
const bcrypt = require('bcryptjs')
const { model } = require('mongoose')
const User = require('../dto/user')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports.validarEntrada = async function(nomeRegistro, senhaRegistro, emailRegistro, req, res, callback) {
    if(!emailRegistro || typeof emailRegistro !== 'string' /*|| regex para validação de email*/) {
        callback({ status: 'error', mensagem: 'Email inválido'})
    }

    if(!senhaRegistro /*|| condições para senha válida*/) {
        callback({ status: 'error', mensagem: 'Senha inválida'})
    } else {
        //criptografa a senha
        senhaRegistro = await bcrypt.hash(senhaRegistro, 10)
    }

    //if(condições para o nome do usuário?)

    callback(null, nomeRegistro, senhaRegistro, emailRegistro)
}

module.exports.registrar = async function(nomeRegistro, senhaRegistro, emailRegistro, req, res, callback) {
    try {
        const response = await User.create({
            nome: nomeRegistro,
            password: senhaRegistro,
            email: emailRegistro
        })
        console.log('Usuário criado com sucesso: ', response)
        callback(null, { status: 'success', mensagem: 'Usuário criado com sucesso.'})
    } catch(error) {
        if(error.code === 11000) {
            console.log("Esse email já está em uso. " + error)
            callback({ status: 'error', mensagem: 'Esse email já está em uso.'})
        }
        else {
            callback({ status: 'error', mensagem: 'Erro inesperado!' })
        }
    }
}

module.exports.logar = async function(senhaLogin, emailLogin, req, res, callback) {
    try {
        const user = await User.findOne({ email: emailLogin }).lean()
        if(!user) {
            callback({ status: 'error', error: 'Usuário ou senha inválidos' })
            return
        }

        if(await bcrypt.compare(senhaLogin, user.password)) {
            const token = jwt.sign({ 
                id: user._id, 
                email: user.email,
                nome: user.nome 
            }, JWT_SECRET)

            res.cookie('access_token', token, {
               httpOnly: true,
            })
            
            const _id = user._id
            const userNome = user.nome
            const userEmail = user.email
            callback(null, { status: 'ok', id: _id, nome: userNome, email: userEmail })

            return
        }

        callback({ status: 'error', error: 'Usuário ou senha inválidos' })
    } catch(error) {
        callback({ status: 'error', error: error })
    }
}

module.exports.autorizar = function(token, req, res, callback) {
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const _id = user.id
        const userNome = user.nome
        const userEmail = user.email

        callback(null, { status: 'ok', id: _id, nome: userNome, email: userEmail })
    }
    catch(error) {
        console.log(error)
        callback({ status: 'error', error: 'Erro de autenticação' })
    }
}

module.exports.logout = function(res) {
    res.clearCookie('access_token')
}