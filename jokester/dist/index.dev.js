"use strict";

var jokes = require("give-me-a-joke");

var colors = require("colors");

var cowsay = require("cowsay");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
cowsay.say("What you want to say");