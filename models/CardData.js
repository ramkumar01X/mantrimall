const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: String,
    mobile: Number,

    messages: [String]
}, { timestamps: true })

const CardModal = mongoose.model('CardModel', CardSchema);

module.exports = CardModal;
