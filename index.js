const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('assets'));
app.use(express.urlencoded({ extended: false }));
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
});