const db = require("../config/mongoose");
const task = require('../models/tasks')


module.exports.main = function(req,res){
    task.find({})
    .then(task => {
        res.render('main', {
            tasks: task
        });
    })
    .catch(err => {
        console.log("Error in fetching the data: ", err);
        return;
    });
};