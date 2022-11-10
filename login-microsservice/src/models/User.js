const mongoose = require('mongoose-morgan');

const User = {
    nome: String,
    email: String,
    senha: String
}

module.exports = User