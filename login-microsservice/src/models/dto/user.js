const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true}
    }, 
    { collection: 'users' }
)

module.exports = UserSchema