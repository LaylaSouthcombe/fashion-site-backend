const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema({
    Id: ObjectId,
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String
    }
  })

const Product = mongoose.model('Product', productSchema)

module.exports = Product