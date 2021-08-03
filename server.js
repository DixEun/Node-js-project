require('./models/db');
const express = require('express');
const cors = require('cors');
var router = express.Router();

const employeeController = require('./controllers/employeeController');
//var app= express();
//employeeController.use(cors());

employeeController.listen(8081,() => {
    console.log('server strated at :8081');
});
