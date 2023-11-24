const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main_controller');
const add_task_controller = require('../controllers/add_task_controller');
const del_task_controller = require('../controllers/del_task_controller');

console.log("Router loaded");

router.get('/',mainController.main);

router.post('/add-task',add_task_controller.func);

router.get('/del-task',del_task_controller.func);


module.exports = router;