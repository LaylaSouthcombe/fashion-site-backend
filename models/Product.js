const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema({
    Id: ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    salesPrice: {
        price: {
            type: Number
        },
        reduction: {
            type: Number
        },
        percentage:  {
            type: Number
        }
    },
    images: {
        type: Array
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    brand: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    sizesAndStock: {
        type: Array,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    productSummary: {
        type: String,
        required: true
    },
    sizeAndFit: {
        type: String,
        required: true
    }
  })

const Product = mongoose.model('Product', productSchema)

module.exports = Product