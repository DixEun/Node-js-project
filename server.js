require('./models/db');
const express = require('express');
const cors = require('cors');
var router = express.Router();
var taskController=require('./controllers/taskController');
var employeeController= require('./controllers/employeeController');
var app= express();
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

app.use(express.json({
    type: "*/*"
})) 

app.use(cors());

//EmployeeController

app.post('/login',employeeController.login);
app.post('/submit',employeeController.submit);
app.post('/changepassword',employeeController.chagepassword);

//TaskController

app.post('/addtask',taskController.addtask);
app.delete('/deletetask/:id',taskController.deleteTask);
app.get('/tasks/:userId',taskController.list);
app.put('/changetask/:id',taskController.changeTask);
app.listen(8081,() => {
    console.log('server strated at :8081');
});