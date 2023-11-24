const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    des: {
        type: String,
        required: true       
    },
    Category: {
        type: String
    },
    date: {
        type: String
    },
    Id: {
        type:Number
    }
});
const task = mongoose.model('task',taskSchema);
module.exports = task;