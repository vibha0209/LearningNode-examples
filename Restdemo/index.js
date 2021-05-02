const express=require('express');
const app=express();
const methodOverride = require('method-override')
const path=require('path');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname,'view'))
app.set('view engine', 'ejs')

let comments=[
   {
       id: uuid(),
       username: 'vib',
       comment:  'GJGJGJKH jhjh jh jhjh jkhlh'

   },
   {
    id: uuid(),
    username: 'din',
    comment:  'GJGJGJKH jhjh jh jhjh jkhlh'

},{
    id: uuid(),
    username: 'man',
    comment:  'GJGJGJKH jhjh jh jhjh jkhlh'

},
{
    id: uuid(),
    username: 'sun',
    comment:  'GJGJGJKH jhjh jh jhjh jkhlh'

},
{
    id: uuid(),
    username: 'jun',
    comment :  'GJGJGJKH jhjh jh jhjh jkhlh'

}
]

app.get('/comments', (req,res) => {
    res.render('comments/index', { comments})
})

app.get('/comments/new', (req,res )=>{
    res.render('comments/new')
})

app.post('/comments', (req,res) =>{
    console.log(req.body)
    const {username , comment} = req.body;
    comments.push({username , comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})



app.patch('/comments/:id', (req,res) =>{
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
   
})
                                                                                          
app.delete('/comments/:id', (req,res)=>{
    const { id } =req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})




app.get('/tacos', (req,res)=>{
      res.send("Get /tacos response")
})

app.post('/tacos',(req,res) =>{
    const {meat, qty}=req.body; 
    res.send(`ok here is your ${qty} for you ${meat} tacos`)
})
app.listen(3000, () => {
    console.log("On port 3000");
} )