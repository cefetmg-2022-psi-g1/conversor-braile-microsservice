const Historico = require('../dto/historico')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports.salvar = async function(user, req, callback) {
    try {
        var arquivo = await Historico.findOne({ nome: req.body.nome, user_id: user.id })
        
        console.log("nome:" + req.body.nome +
            "    user_id: " + user.id +
            "    input: " + req.body.input +
            "    traducao: " + req.body.traducao)

        if(!arquivo) {
            arquivo = await Historico.create({
                nome: req.body.nome,
                user_id: user.id,
                input: req.body.input,
                traducao: req.body.traducao
            })
        } else {
            Historico.updateOne({ _id: arquivo._id }, { input: req.body.input, traducao: req.body.traducao })
        }

        callback(null, { status: 'success', mensagem: 'Tradução salva com sucesso!' })
    } catch(error) {
        console.log(error)
        callback({ status: 'error', mensagem: 'Não foi possível salvar a tradução!' })
    }
}

module.exports.exibirHistorico = async function(token, callback) {
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const userId = user.id

        await Historico.find({ user_id: userId }, 'input traducao', (err, results) => {
            if(err)
                callback(err)
            
            var traducoes = []
            var i = results.length - 1

            results.forEach(function(result) {
                if(i >= 0) {
                    traducoes[i] = result
                    i--
                }
            })
            
            callback(null, traducoes)
        })

    } catch(error) {
        console.log(error)
        callback(error)
    }
}