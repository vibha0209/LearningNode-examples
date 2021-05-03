"use strict";

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    lowercase: true,
    "enum": ['fruit', 'vegetable', 'dairy']
  }
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;