const express=require('express');
const app= express();
const path=require('path');
const redittData=require('./data.json');
console.log(redittData);

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/rand', (req,res) => {
    const num= Math.floor(Math.random()*10)+1
    res.render('random', {rand:num})
})

app.get('/cats', (req,res) => {
    const cats=['maonty','pussy', 'sandy', 'lindy'] 
        res.render('cats', {cats})
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit}= req.params;
    const data=redittData[subreddit];
    console.log(data);
    //res.render('subreddit', {subreddit});
    if(data){
        res.render('subreddit', {...data});
    }else{
        res.render('notfound', { subreddit});
    }
   
})

app.listen(3000, () => {
    console.log("Listening port 3000")
});

