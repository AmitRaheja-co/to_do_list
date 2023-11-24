const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amit:amit@cluster0.web5rez.mongodb.net/to_do_list_db");

const db = mongoose.connection;

db.on('error', function(err) { console.log(err.message); });

db.once('open',function(){
    console.log('successfully connected to the database');
});