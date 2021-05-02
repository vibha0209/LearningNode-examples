"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();

var path = require('path');

var redittData = require('./data.json');

console.log(redittData);
app.use(express["static"](path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', function (req, res) {
  res.render('home.ejs');
});
app.get('/rand', function (req, res) {
  var num = Math.floor(Math.random() * 10) + 1;
  res.render('random', {
    rand: num
  });
});
app.get('/cats', function (req, res) {
  var cats = ['maonty', 'pussy', 'sandy', 'lindy'];
  res.render('cats', {
    cats: cats
  });
});
app.get('/r/:subreddit', function (req, res) {
  var subreddit = req.params.subreddit;
  var data = redittData[subreddit];
  console.log(data); //res.render('subreddit', {subreddit});

  if (data) {
    res.render('subreddit', _objectSpread({}, data));
  } else {
    res.render('notfound', {
      subreddit: subreddit
    });
  }
});
app.listen(3000, function () {
  console.log("Listening port 3000");
});