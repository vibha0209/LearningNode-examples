"use strict";

var express = require('express');

var app = express();

var path = require('path');

var Product = require('./models/product');

var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var mongoose = require('mongoose');

var _require = require('dns'),
    ALL = _require.ALL;

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
var categories = ['fruit', 'vegetable', 'dairy'];
app.get('/products', function _callee(req, res) {
  var category, products, _products;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          category = req.query.category;

          if (!category) {
            _context.next = 8;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(Product.find({
            category: category
          }));

        case 4:
          products = _context.sent;
          res.render('products/index', {
            products: products,
            category: category
          });
          _context.next = 12;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(Product.find({}));

        case 10:
          _products = _context.sent;
          res.render('products/index', {
            products: _products,
            category: 'ALL'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get('/products/new', function (req, res) {
  res.render('products/new', {
    categories: categories
  });
});
app.post('/products', function _callee2(req, res) {
  var newProduct;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          newProduct = new Product(req.body);
          _context2.next = 3;
          return regeneratorRuntime.awrap(newProduct.save());

        case 3:
          res.redirect("/products/".concat(newProduct._id));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/products/:id', function _callee3(req, res) {
  var id, product;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Product.findById(id));

        case 3:
          product = _context3.sent;
          res.render('products/show', {
            product: product
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get('/products/:id/edit', function _callee4(req, res) {
  var id, product;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Product.findById(id));

        case 3:
          product = _context4.sent;
          res.render('products/edit', {
            product: product,
            categories: categories
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.put('/products/:id', function _callee5(req, res) {
  var id, product;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            "new": true
          }));

        case 3:
          product = _context5.sent;
          res.redirect("/products/".concat(product._id));

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app["delete"]('/products/:id', function _callee6(req, res) {
  var id, deleteProduct;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Product.findByIdAndDelete(id));

        case 3:
          deleteProduct = _context6.sent;
          res.redirect("/products");

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log("App listening on port : 3000");
});