const express=require('express');
const app = express();
const path=require('path');
const Product=require('./models/product')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Mongo Connection Open!!!")
})
.catch(err =>{
    console.log("oh no Mongo erorr")
    console.log(err)
})


app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');

app.get('/dog',(req,res)=>{
    res.send('woof')
})
app.listen(3000, ()=>{
    console.log("App listening on port : 3000")
})