const Task = require('../models/tasks'); 

module.exports.func = async function (req, res) {
    try {
        await Task.deleteMany({}); // Delete all documents in the task collection
        console.log('Deleted all tasks');
        return res.redirect('/'); // Redirect to homepage
    } catch (err) {
        console.log('Error in deleting tasks: ', err);
        return res.status(500).send('Internal Server Error');
    }
};
