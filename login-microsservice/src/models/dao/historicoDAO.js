const Historico = require('../dto/historico')
const axios = require("axios")

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

module.exports.exibirHistorico = function(userId, callback) {
    try {
        Historico.find({ user_id: userId }, 'input traducao nome', (err, results) => {
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
        callback(error)
    }
}

module.exports.editarHistorico = function(input, callback) {
    axios.post( 'http://localhost:3000/editarHistorico', {
        input: input
    })
    .then((res) => {
        console.log(res)
        callback(null, res)
    }), (err) => {
        console.log(err)
        callback(err)
    }
}