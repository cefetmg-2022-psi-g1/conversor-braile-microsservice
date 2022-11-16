const axios = require("axios")

module.exports.salvar = function(token, input, traducao, nome, callback) {
    axios.post( 'http://localhost:3001/salvarHistorico', {
        token: token,
        input: input,
        traducao: traducao,
        nome: nome
    })
    .then((res) => {
        console.log(res)
        callback(null, res)
    }), (err) => {
        console.log(err)
        callback(err)
    }
}