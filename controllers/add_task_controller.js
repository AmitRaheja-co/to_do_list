const Task = require('../models/tasks'); 

module.exports.func = async function (req, res) {
    if (!req.body.des) {
        try {
            const tasks = await Task.find({}); // Fetch all tasks from the database
            return res.render('main', {
                tasks: tasks
            });
        } catch (err) {
            console.log('Error in fetching tasks: ', err);
            return res.status(500).send('Internal Server Error');
        }
    }
    try {
        const createdTask = await Task.create({
            des: req.body.des,
            Category: req.body.Category,
            date: req.body.date
        });
        console.log('Created new task: ', createdTask);
        return res.redirect('/'); // Redirect to homepage
    } catch (err) {
        console.log('Error in adding a task: ', err);
        return;
    }
};
