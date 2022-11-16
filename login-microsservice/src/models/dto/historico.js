const mongoose = require('mongoose')

const HistoricoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true, unique: true },
        user_id: { type: String, required: true },
        input: { type: String, required: true },
        traducao: { type: String, required: true }
    }
)

const model = mongoose.model('HistoricoSchema', HistoricoSchema);

module.exports = model