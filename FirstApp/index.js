const express = require("express");
const app = express();
const router = express.Router();

//console.dir(app)
app.listen(3000, () => {
  console.log("listing on port 3000");
});

/*app.use((req, res) => {
    console.log("we recive request")
res.send("<h1>hello how r u</h1>")

})*/
app.post("/cats", (req, res) => {
  res.send("POST request to the homepage!");
});

app.get("/cat", (req, res) => {
  console.log("cat request");
  res.send("meowwwwww");
});

//app.get("/*", (req, res) => {
  //console.log("I dont know the path");
 // res.send("I dont know the path");
//});
/*
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`this is ${subreddit} ofr.`);
});*/
 

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit , postId} = req.params;
  res.send(`this is ${subreddit} of r POSTID ${postId}.`);
});
 
app.get("/search", (req, res) => {
  // console.log(req.query);
   //res.send("Hi");
   const {q }= req.query;
   res.send(`this is  of result. ${q}`);
});
 
