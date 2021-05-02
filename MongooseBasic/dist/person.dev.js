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
var personSchema = new mongoose.Schema({
  first: String,
  last: String
});
personSchema.virtual('fullName').get(function () {
  return "".concat(this.first, " ").concat(this.last);
});
personSchema.pre('save', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.first = 'YO';
          this.last = 'MAMA';
          console.log("ABOUT TO SAVE!!!!");

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});
personSchema.post('save', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("JUST SAVED!!!!");

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
var Person = mongoose.model('Person', personSchema);