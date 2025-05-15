const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    variants: [{
        ram: {
            type: String,
            required: true
        },
        subcategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subcategory",
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        }
    }],
    description: {
        type: String,
        required: true
    },
    image: [{
        url: String,
        altText: String
    }],
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Products', productSchema);