const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const defaultSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})

let saveItemData = mongoose.model('shopItem', defaultSchema)

module.exports = saveItemData;