"use strict";

var express = require('express');

var app = express();

var methodOverride = require('method-override');

var path = require('path');

var _require = require('uuid'),
    uuid = _require.v4;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
var comments = [{
  id: uuid(),
  username: 'vib',
  comment: 'GJGJGJKH jhjh jh jhjh jkhlh'
}, {
  id: uuid(),
  username: 'din',
  comment: 'GJGJGJKH jhjh jh jhjh jkhlh'
}, {
  id: uuid(),
  username: 'man',
  comment: 'GJGJGJKH jhjh jh jhjh jkhlh'
}, {
  id: uuid(),
  username: 'sun',
  comment: 'GJGJGJKH jhjh jh jhjh jkhlh'
}, {
  id: uuid(),
  username: 'jun',
  comment: 'GJGJGJKH jhjh jh jhjh jkhlh'
}];
app.get('/comments', function (req, res) {
  res.render('comments/index', {
    comments: comments
  });
});
app.get('/comments/new', function (req, res) {
  res.render('comments/new');
});
app.post('/comments', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      username = _req$body.username,
      comment = _req$body.comment;
  comments.push({
    username: username,
    comment: comment,
    id: uuid()
  });
  res.redirect('/comments');
});
app.get('/comments/:id', function (req, res) {
  var id = req.params.id;
  var comment = comments.find(function (c) {
    return c.id === id;
  });
  res.render('comments/show', {
    comment: comment
  });
});
app.get('/comments/:id/edit', function (req, res) {
  var id = req.params.id;
  var comment = comments.find(function (c) {
    return c.id === id;
  });
  res.render('comments/edit', {
    comment: comment
  });
});
app.patch('/comments/:id', function (req, res) {
  var id = req.params.id;
  var foundComment = comments.find(function (c) {
    return c.id === id;
  }); //get new text from req.body

  var newCommentText = req.body.comment; //update the comment with the data from req.body:

  foundComment.comment = newCommentText; //redirect back to index (or wherever you want)

  res.redirect('/comments');
});
app["delete"]('/comments/:id', function (req, res) {
  var id = req.params.id;
  comments = comments.filter(function (c) {
    return c.id !== id;
  });
  res.redirect('/comments');
});
app.get('/tacos', function (req, res) {
  res.send("Get /tacos response");
});
app.post('/tacos', function (req, res) {
  var _req$body2 = req.body,
      meat = _req$body2.meat,
      qty = _req$body2.qty;
  res.send("ok here is your ".concat(qty, " for you ").concat(meat, " tacos"));
});
app.listen(3000, function () {
  console.log("On port 3000");
});