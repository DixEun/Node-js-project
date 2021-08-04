require('./models/db');
const express = require('express');
const cors = require('cors');
var router = express.Router();
var taskContoller=require('./controllers/taskController');
var employeeController= require('./controllers/employeeController');
var app= express();


employeeController.listen(8081,() => {
    console.log('server strated at :8081');
});
