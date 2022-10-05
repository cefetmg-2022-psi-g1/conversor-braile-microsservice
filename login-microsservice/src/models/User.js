const mongoose = require('mongoose-morgan');

const User = mongoose.model('User', {
    nome: String,
    email: String,
    senha: String,
})

module.exports = User