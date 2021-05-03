"use strict";

var express = require('express');

var app = express();

var path = require('path');

var Product = require('./models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Mongo Connection Open!!!");
})["catch"](function (err) {
  console.log("oh no Mongo erorr");
  console.log(err);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/dog', function (req, res) {
  res.send('woof');
});
app.listen(3000, function () {
  console.log("App listening on port : 3000");
});