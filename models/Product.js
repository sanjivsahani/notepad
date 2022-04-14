const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    modelno:{
        type: String,
        required: true
    },
    qwt:{
        type: Number,
        required: true, 
    },
    price:{
        type: Number,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Product', ProductSchema);