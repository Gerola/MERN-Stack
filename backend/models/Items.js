const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItemsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Items',ItemsSchema)