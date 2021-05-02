"use strict";

var express = require("express");

var app = express();
var router = express.Router(); //console.dir(app)

app.listen(3000, function () {
  console.log("listing on port 3000");
});
/*app.use((req, res) => {
    console.log("we recive request")
res.send("<h1>hello how r u</h1>")

})*/

app.post("/cats", function (req, res) {
  res.send("POST request to the homepage!");
});
app.get("/cat", function (req, res) {
  console.log("cat request");
  res.send("meowwwwww");
}); //app.get("/*", (req, res) => {
//console.log("I dont know the path");
// res.send("I dont know the path");
//});

/*
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`this is ${subreddit} ofr.`);
});*/

app.get("/r/:subreddit/:postId", function (req, res) {
  var _req$params = req.params,
      subreddit = _req$params.subreddit,
      postId = _req$params.postId;
  res.send("this is ".concat(subreddit, " of r POSTID ").concat(postId, "."));
});
app.get("/search", function (req, res) {
  // console.log(req.query);
  //res.send("Hi");
  var q = req.query.q;
  res.send("this is  of result. ".concat(q));
});