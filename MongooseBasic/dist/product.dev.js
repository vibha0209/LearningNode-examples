"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("CONNECTION OPEN!!!");
})["catch"](function (err) {
  console.log("OH NO ERROR!!!!");
  console.log(err);
});
var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive ya dodo!']
  },
  onSale: {
    type: Boolean,
    "default": false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      "default": 0
    },
    inStore: {
      type: Number,
      "default": 0
    }
  },
  size: {
    type: String,
    "enum": ['S', 'M', 'L']
  }
}); // productSchema.methods.greet = function () {
//     console.log("HELLLO!!! HI!! HOWDY!!! ")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, {
    onSale: true,
    price: 0
  });
};

var Product = mongoose.model('Product', productSchema);

var findProduct = function findProduct() {
  var foundProduct;
  return regeneratorRuntime.async(function findProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.findOne({
            name: 'Mountain Bike'
          }));

        case 2:
          foundProduct = _context.sent;
          console.log(foundProduct);
          _context.next = 6;
          return regeneratorRuntime.awrap(foundProduct.toggleOnSale());

        case 6:
          console.log(foundProduct);
          _context.next = 9;
          return regeneratorRuntime.awrap(foundProduct.addCategory('Outdoors'));

        case 9:
          console.log(foundProduct);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Product.fireSale().then(res => console.log(res))
// findProduct();
// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })