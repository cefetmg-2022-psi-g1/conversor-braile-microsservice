const mongoose = require('mongoose')

console.log("CHEGOU AQUI USER.JS")

const UserSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true}
    }
)

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model
