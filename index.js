const express = require('express');
const app = express();
const port = 8000;

const Task = require('./models/tasks'); 

app.use(express.static('assets'));
app.use(express.urlencoded({ extended: false }));
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.get('/api',async (req,res)=>{
    const tasks = await Task.find({});
    res.send(tasks[0].des);

});

app.get('/apiJson',async (req,res)=>{
    const tasks = await Task.find({});
    res.send(tasks);

});

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
});