const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productDescription:{
        type:String
    },
    productQty:{
        type:String
    },
    productImage:{
        type:String
    }

});

module.exports = mongoose.model('product' , ProductSchema);