const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        index: {
            unique: true,
            dropDups: true
        },
    },
    imageURL: String,
    name: String,
    measurement: { 
        type: {type: String}, 
        value: String, 
    },
    barcode: String,
    manufacturer: String,
    brand: String, 
    description: String,
    price: Number,
    category: [String],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
