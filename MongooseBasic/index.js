const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connection Open!!!")
})
.catch(err =>{
    console.log("oh no erorr")
    console.log(err)
})



const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

const Movie=mongoose.model('Movie', movieSchema);
//const amdeus=new Movie({title:'Amadeus', year:1986, score:9.2, rating:'R'})

Movie.insertMany([
    {title:'Amadeus', year:1986, score:9.2, rating:'R'},
    {title:'Rhtdm', year:1994, score:8.6, rating:'R'},
    {title:'Ddlj', year:1999, score:8.5, rating:'PG'},
    {title:'Kkhh', year:2000, score:7.2, rating:'R'},
    {title:'Kkkg', year:2005, score:8.1, rating:'PG-13'}
])
.then(data=> {
    console.log("It worked")
    console.log(data)
})