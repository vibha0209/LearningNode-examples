"use strict";

var mongoose = require('mongoose');

var Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Mongo Connection Open!!!");
})["catch"](function (err) {
  console.log("oh no Mongo erorr");
  console.log(err);
});
var seedProducts = [{
  name: 'Fairy Eggplant',
  price: 1.00,
  category: 'vegetable'
}, {
  name: 'Organic Goddess Melon',
  price: 4.99,
  category: 'fruit'
}, {
  name: 'Organic Mini Seedless Watermelon',
  price: 3.99,
  category: 'fruit'
}, {
  name: 'Organic Celery',
  price: 1.50,
  category: 'vegetable'
}, {
  name: 'Chocolate Whole Milk',
  price: 2.69,
  category: 'dairy'
}];
Product.insertMany(seedProducts).then(function (res) {
  console.log(res);
})["catch"](function (e) {
  console.log(e);
}); // const p= Product({
//     name:'ruby grpaefruit',
//     price:46,
//     category:'fruit'
// })
// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e)
// })